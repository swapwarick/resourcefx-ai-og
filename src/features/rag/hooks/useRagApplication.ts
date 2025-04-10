
import { useState, useCallback } from "react";
import { Message, DocumentChunk } from "../types";
import { extractTextFromPdf, chunkText } from "../utils/pdfUtils";
import { processChunks, findRelevantChunks } from "../utils/embeddingUtils";
import { toast } from "@/hooks/use-toast";

export const useRagApplication = () => {
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [documentChunks, setDocumentChunks] = useState<DocumentChunk[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isSending, setIsSending] = useState(false);

  // Handle file selection
  const handleFileSelect = useCallback((selectedFile: File) => {
    if (selectedFile.type !== "application/pdf") {
      setError("Please select a PDF file");
      return;
    }
    
    setFile(selectedFile);
    setFileName(selectedFile.name);
    setError(null);
    setProgress(0);
    
    // Automatically process the file after selection
    processPdfFile(selectedFile);
  }, []);

  // Process the PDF file
  const processPdfFile = async (pdfFile: File) => {
    setIsProcessing(true);
    setProgress(10);
    setError(null);
    
    try {
      // Extract text from PDF
      const extractedText = await extractTextFromPdf(pdfFile);
      setProgress(50);
      
      // Split text into chunks
      const chunks = chunkText(extractedText);
      setProgress(70);
      
      // Process chunks to create embeddings
      const processedChunks = processChunks(chunks);
      setProgress(90);
      
      // Save processed chunks
      setDocumentChunks(processedChunks);
      setProgress(100);
      
      // Add initial assistant message
      setMessages([{
        role: "assistant",
        content: "Document processed! You can now ask questions about it."
      }]);
      
      toast({
        title: "Document Processed",
        description: `Successfully processed ${chunks.length} sections from your PDF.`,
      });
    } catch (err) {
      console.error("Error processing PDF:", err);
      setError((err as Error).message || "Failed to process the PDF file");
      toast({
        title: "Processing Failed",
        description: "Could not process the document. Please try another PDF file.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  // Reset the application state
  const resetApplication = useCallback(() => {
    setFile(null);
    setFileName("");
    setIsProcessing(false);
    setProgress(0);
    setError(null);
    setDocumentChunks([]);
    setMessages([]);
  }, []);

  // Send message to OpenAI API
  const sendMessageToOpenAI = async (userMessage: string, context: string) => {
    const apiKey = localStorage.getItem("openai_api_key");
    
    if (!apiKey) {
      toast({
        title: "API Key Missing",
        description: "Please add your OpenAI API key in the settings.",
        variant: "destructive",
      });
      return "Please add your OpenAI API key in the settings to use this feature.";
    }
    
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: `You are a helpful assistant that answers questions based on the document context provided. 
              Only use information from the given context. If the answer is not in the context, say that you 
              don't know based on the provided content. Be concise and accurate.
              
              Context: ${context}`
            },
            ...messages.slice(-4), // Include the last 4 messages for continuity
            { role: "user", content: userMessage }
          ],
          temperature: 0.3,
          max_tokens: 500
        })
      });
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      
      const result = await response.json();
      return result.choices[0].message.content;
    } catch (error) {
      console.error("Error calling OpenAI API:", error);
      throw error;
    }
  };

  // Handle sending a message
  const handleSendMessage = async (message: string) => {
    if (!documentChunks.length || isSending) return;
    
    // Add user message to chat
    setMessages(prev => [...prev, { role: "user", content: message }]);
    setIsSending(true);
    
    try {
      // Find relevant chunks for the query
      const relevantChunks = findRelevantChunks(message, documentChunks);
      
      if (relevantChunks.length === 0) {
        setMessages(prev => [...prev, { 
          role: "assistant", 
          content: "I couldn't find relevant information in the document to answer your question." 
        }]);
        return;
      }
      
      // Combine relevant chunks into context
      const context = relevantChunks.map(chunk => chunk.text).join("\n\n");
      
      // Get response from OpenAI
      const response = await sendMessageToOpenAI(message, context);
      
      // Add assistant response to chat
      setMessages(prev => [...prev, { role: "assistant", content: response }]);
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to get a response. Please check your API key and try again.",
        variant: "destructive",
      });
      
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: "Sorry, I encountered an error while processing your request." 
      }]);
    } finally {
      setIsSending(false);
    }
  };

  return {
    file,
    fileName,
    isProcessing,
    progress,
    error,
    documentChunks,
    messages,
    isSending,
    handleFileSelect,
    resetApplication,
    handleSendMessage
  };
};
