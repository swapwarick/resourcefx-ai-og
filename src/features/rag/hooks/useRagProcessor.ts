import { useState, useRef, useEffect } from "react";
import { toast } from "@/hooks/use-toast";
import * as pdfjsLib from "pdfjs-dist";
import { GlobalWorkerOptions } from "pdfjs-dist/build/pdf";
import { pipeline } from "@huggingface/transformers";
import localforage from "localforage";
import { chunkText } from "../utils/textProcessing";
import { Message } from "../types";

// Initialize PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url
).toString();

// Initialize localforage instance for vector storage
const vectorStore = localforage.createInstance({
  name: "ragVectorStore"
});

interface UseRagProcessorProps {
  setDocumentContent: (content: string) => void;
  setMessages: (messages: Message[]) => void;
}

export const useRagProcessor = ({ setDocumentContent, setMessages }: UseRagProcessorProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [embeddings, setEmbeddings] = useState<number[][]>([]);
  const [chunks, setChunks] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [extractor, setExtractor] = useState<any>(null);

  // Initialize the embedding model
  useEffect(() => {
    const loadModel = async () => {
      try {
        console.log("Loading embedding model...");
        const embeddingExtractor = await pipeline(
          "feature-extraction",
          "mixedbread-ai/mxbai-embed-xsmall-v1"
        );
        console.log("Embedding model loaded successfully");
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
      console.log("Starting PDF processing...");
      // Read the PDF file
      const arrayBuffer = await file.arrayBuffer();
      console.log("PDF loaded into memory, size:", arrayBuffer.byteLength);
      
      const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
      const pdf = await loadingTask.promise;
      
      console.log("PDF document loaded, pages:", pdf.numPages);
      
      let fullText = "";
      
      // Extract text from each page
      for (let i = 1; i <= pdf.numPages; i++) {
        console.log(`Processing page ${i}/${pdf.numPages}...`);
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items
          .map((item: any) => item.str)
          .join(" ");
        
        console.log(`Page ${i}: extracted ${pageText.length} characters`);
        fullText += pageText + " ";
      }

      // Check if we actually extracted any meaningful text
      if (fullText.trim().length === 0) {
        console.error("No text content could be extracted from the PDF");
        throw new Error("No text content could be extracted from this PDF. The file may be scanned images or protected.");
      }

      console.log("Total text extracted:", fullText.length, "characters");
      setDocumentContent(fullText);
      toast({
        title: "PDF processed successfully",
        description: `Extracted ${fullText.length} characters from ${pdf.numPages} pages.`,
      });

      // Chunk the document
      console.log("Chunking document...");
      const textChunks = chunkText(fullText, 512);
      console.log(`Created ${textChunks.length} chunks`);
      setChunks(textChunks);

      // Create embeddings for each chunk
      console.log("Creating embeddings...");
      const chunkEmbeddings = await Promise.all(
        textChunks.map(async (chunk, index) => {
          console.log(`Processing embedding for chunk ${index + 1}/${textChunks.length}`);
          try {
            const output = await extractor(chunk, { 
              pooling: "mean", 
              normalize: true 
            });
            return output.tolist ? output.tolist()[0] : output.data;
          } catch (err) {
            console.error(`Error creating embedding for chunk ${index}:`, err);
            throw new Error(`Failed to create embedding for chunk ${index}`);
          }
        })
      );

      console.log("Embeddings created successfully");
      setEmbeddings(chunkEmbeddings);

      // Store embeddings and chunks
      console.log("Storing data in localforage...");
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
        description: error instanceof Error ? error.message : "Failed to extract text from the PDF file. The file might be protected or contain only images.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
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

  return {
    file,
    fileName,
    isUploading,
    isProcessing,
    chunks,
    embeddings,
    fileInputRef,
    extractor,
    handleFileChange,
    handleUploadAndProcess,
    handleReset,
  };
};
