
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Upload, FileText, Send, Trash2, BookOpen, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import * as pdfjs from 'pdfjs-dist';
import { pipeline } from "@xenova/transformers";
import localforage from "localforage";

// Initialize PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// Initialize localforage instance for vector storage
const vectorStore = localforage.createInstance({
  name: "ragVectorStore"
});

const RagApplication = () => {
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([]);
  const [input, setInput] = useState<string>("");
  const [isSending, setIsSending] = useState<boolean>(false);
  const [documentContent, setDocumentContent] = useState<string>("");
  const [embeddings, setEmbeddings] = useState<number[][]>([]);
  const [chunks, setChunks] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [extractor, setExtractor] = useState<any>(null);

  // Initialize the embedding model
  useEffect(() => {
    const loadModel = async () => {
      try {
        const embeddingExtractor = await pipeline(
          "feature-extraction",
          "Xenova/all-MiniLM-L6-v2"
        );
        setExtractor(embeddingExtractor);
      } catch (error) {
        console.error("Error loading embedding model:", error);
        toast({
          title: "Error loading embedding model",
          description: "Failed to initialize the text embedding model.",
          variant: "destructive",
        });
      }
    };

    loadModel();
  }, []);

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.type !== "application/pdf") {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF file.",
          variant: "destructive",
        });
        return;
      }
      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };

  // Process PDF file
  const processPdf = async () => {
    if (!file || !extractor) return;

    setIsProcessing(true);
    try {
      // Read the PDF file
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
      
      let fullText = "";
      
      // Extract text from each page
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items
          .map((item: any) => item.str)
          .join(" ");
        fullText += pageText + " ";
      }

      setDocumentContent(fullText);
      toast({
        title: "PDF processed successfully",
        description: `Extracted ${fullText.length} characters from ${pdf.numPages} pages.`,
      });

      // Chunk the document
      const textChunks = chunkText(fullText, 512);
      setChunks(textChunks);

      // Create embeddings for each chunk
      const chunkEmbeddings = await Promise.all(
        textChunks.map(async (chunk) => {
          const output = await extractor(chunk, { pooling: "mean", normalize: true });
          return output.data;
        })
      );

      setEmbeddings(chunkEmbeddings);

      // Store embeddings and chunks
      await vectorStore.setItem("documentChunks", textChunks);
      await vectorStore.setItem("documentEmbeddings", chunkEmbeddings);

      toast({
        title: "Embeddings created",
        description: `Created ${chunkEmbeddings.length} embeddings from the document.`,
      });
    } catch (error) {
      console.error("Error processing PDF:", error);
      toast({
        title: "Error processing PDF",
        description: "Failed to extract text from the PDF file.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  // Chunk text into smaller segments
  const chunkText = (text: string, chunkSize: number): string[] => {
    const chunks = [];
    const sentences = text.split(/[.!?]+/).filter(Boolean);
    
    let currentChunk = "";
    
    for (const sentence of sentences) {
      const trimmedSentence = sentence.trim() + ".";
      
      if (currentChunk.length + trimmedSentence.length <= chunkSize) {
        currentChunk += " " + trimmedSentence;
      } else {
        if (currentChunk) {
          chunks.push(currentChunk.trim());
        }
        currentChunk = trimmedSentence;
      }
    }
    
    if (currentChunk) {
      chunks.push(currentChunk.trim());
    }
    
    return chunks;
  };

  // Calculate cosine similarity between vectors
  const cosineSimilarity = (vecA: number[], vecB: number[]): number => {
    let dotProduct = 0;
    let normA = 0;
    let normB = 0;
    
    for (let i = 0; i < vecA.length; i++) {
      dotProduct += vecA[i] * vecB[i];
      normA += vecA[i] * vecA[i];
      normB += vecB[i] * vecB[i];
    }
    
    normA = Math.sqrt(normA);
    normB = Math.sqrt(normB);
    
    return dotProduct / (normA * normB);
  };

  // Find most relevant chunks for a query
  const findRelevantChunks = async (query: string, topK: number = 3): Promise<string[]> => {
    if (!extractor || embeddings.length === 0 || chunks.length === 0) {
      return [];
    }

    try {
      // Create query embedding
      const queryEmbedding = await extractor(query, { pooling: "mean", normalize: true });
      
      // Calculate similarities
      const similarities = embeddings.map((embedding) => 
        cosineSimilarity(queryEmbedding.data, embedding)
      );
      
      // Get indices of top K similar chunks
      const topIndices = similarities
        .map((score, index) => ({ score, index }))
        .sort((a, b) => b.score - a.score)
        .slice(0, topK)
        .map(item => item.index);
      
      // Return the top K chunks
      return topIndices.map(index => chunks[index]);
    } catch (error) {
      console.error("Error finding relevant chunks:", error);
      return [];
    }
  };

  // Send message to Groq API
  const sendToGroq = async (userMessage: string, context: string) => {
    try {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer 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`
        },
        body: JSON.stringify({
          model: "llama3-8b-8192",
          messages: [
            {
              role: "system",
              content: `You are a helpful assistant that answers questions based on the provided document context. 
              Only use the information from the context to answer the question. If the answer is not in the context, 
              say that you don't have enough information. Be concise and accurate.
              
              Context: ${context}`
            },
            ...messages,
            { role: "user", content: userMessage }
          ],
          temperature: 0.3,
          max_tokens: 1024
        })
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error("Error calling Groq API:", error);
      throw error;
    }
  };

  // Handle send message
  const handleSendMessage = async () => {
    if (!input.trim() || isSending || chunks.length === 0) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsSending(true);

    try {
      // Find relevant document chunks
      const relevantChunks = await findRelevantChunks(userMessage);
      const context = relevantChunks.join("\n\n");

      // Get response from Groq
      const assistantResponse = await sendToGroq(userMessage, context);
      
      setMessages(prev => [...prev, { role: "assistant", content: assistantResponse }]);
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to get a response. Please try again.",
        variant: "destructive",
      });
      // Add error message to the chat
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: "Sorry, I encountered an error while processing your request. Please try again."
      }]);
    } finally {
      setIsSending(false);
    }
  };

  // Reset the application
  const handleReset = () => {
    setFile(null);
    setFileName("");
    setDocumentContent("");
    setEmbeddings([]);
    setChunks([]);
    setMessages([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Handle upload and process
  const handleUploadAndProcess = async () => {
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please select a PDF file to upload.",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);
    try {
      await processPdf();
      // Add welcome message
      setMessages([{
        role: "assistant",
        content: "I've processed your document. You can now ask me questions about its content!"
      }]);
    } catch (error) {
      console.error("Error uploading and processing:", error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Chat with Your PDF</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left sidebar - Document info */}
          <div className="md:col-span-3">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">Document</CardTitle>
              </CardHeader>
              <CardContent>
                {!file ? (
                  <div className="flex flex-col items-center justify-center py-8">
                    <BookOpen className="h-12 w-12 text-muted-foreground mb-4" />
                    <p className="text-center text-muted-foreground">
                      Upload a PDF to get started
                    </p>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2 mb-4">
                    <FileText className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
                    <span className="text-sm font-medium truncate flex-1">
                      {fileName}
                    </span>
                  </div>
                )}

                <div className="space-y-2 mt-4">
                  <Input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="hidden"
                    id="pdf-upload"
                  />
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Upload className="mr-2 h-4 w-4" />
                    Select PDF
                  </Button>
                  <Button
                    className="w-full"
                    onClick={handleUploadAndProcess}
                    disabled={!file || isUploading || isProcessing}
                  >
                    {(isUploading || isProcessing) ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {isUploading ? "Uploading..." : "Processing..."}
                      </>
                    ) : (
                      <>
                        Process PDF
                      </>
                    )}
                  </Button>
                  {(chunks.length > 0) && (
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={handleReset}
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Reset
                    </Button>
                  )}
                </div>

                {chunks.length > 0 && (
                  <div className="mt-6">
                    <p className="text-sm text-muted-foreground mb-2">
                      Document Stats:
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>Pages: {Math.ceil(documentContent.length / 3000)}</li>
                      <li>Characters: {documentContent.length}</li>
                      <li>Chunks: {chunks.length}</li>
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Main content - Chat */}
          <div className="md:col-span-9">
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl">Chat</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow overflow-y-auto max-h-[60vh] min-h-[400px]">
                {messages.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-8">
                    <BookOpen className="h-16 w-16 text-muted-foreground mb-4" />
                    <h3 className="text-xl font-medium mb-2">Upload and process a PDF</h3>
                    <p className="text-muted-foreground max-w-md">
                      Upload a PDF document and process it to start asking questions about its content.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {messages.map((message, index) => (
                      <div
                        key={index}
                        className={`flex ${
                          message.role === "assistant" ? "justify-start" : "justify-end"
                        }`}
                      >
                        <div
                          className={`rounded-lg px-4 py-2 max-w-[80%] ${
                            message.role === "assistant"
                              ? "bg-secondary text-secondary-foreground"
                              : "bg-primary text-primary-foreground"
                          }`}
                        >
                          <p className="whitespace-pre-wrap">{message.content}</p>
                        </div>
                      </div>
                    ))}
                    <div ref={messagesEndRef} />
                  </div>
                )}
              </CardContent>
              <CardFooter className="border-t pt-4">
                <div className="flex w-full space-x-2">
                  <Textarea
                    placeholder={
                      chunks.length === 0
                        ? "Process a PDF document first..."
                        : "Ask a question about your document..."
                    }
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                    disabled={chunks.length === 0 || isSending}
                    className="flex-grow"
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={chunks.length === 0 || !input.trim() || isSending}
                  >
                    {isSending ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RagApplication;
