
import { useState, useRef, useEffect } from "react";
import { toast } from "@/hooks/use-toast";
import * as pdfjs from 'pdfjs-dist';
import { pipeline } from "@xenova/transformers";
import localforage from "localforage";
import { chunkText } from "../utils/textProcessing";
import { Message } from "../types";

// Initialize PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

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
    processPdf
  };
};
