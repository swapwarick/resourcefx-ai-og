
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { chunkText } from "../utils/textProcessing";
import { Message } from "../types";
import { useFileHandler } from "./useFileHandler";
import { useEmbeddings, vectorStore } from "./useEmbeddings";
import { usePdfProcessor } from "./usePdfProcessor";

interface UseRagProcessorProps {
  setDocumentContent: (content: string) => void;
  setMessages: (messages: Message[]) => void;
}

export const useRagProcessor = ({ setDocumentContent, setMessages }: UseRagProcessorProps) => {
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [embeddings, setEmbeddings] = useState<number[][]>([]);
  const [chunks, setChunks] = useState<string[]>([]);
  
  const { file, fileName, fileInputRef, handleFileChange, handleReset: resetFile } = useFileHandler();
  const { extractor } = useEmbeddings();
  const { extractTextFromPdf } = usePdfProcessor();

  // Process PDF file
  const processPdf = async () => {
    if (!file || !extractor) return;

    setIsProcessing(true);
    try {
      const fullText = await extractTextFromPdf(file);
      
      console.log("Total text extracted:", fullText.length, "characters");
      setDocumentContent(fullText);
      toast({
        title: "PDF processed successfully",
        description: `Extracted ${fullText.length} characters.`,
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
    resetFile();
    setDocumentContent("");
    setEmbeddings([]);
    setChunks([]);
    setMessages([]);
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
