
import { toast } from "@/hooks/use-toast";

// PDF.js is loaded from CDN to avoid worker issues
const PDF_JS_CDN = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174";

// Load PDF.js library dynamically
const loadPdfJs = async () => {
  // Only load once
  if (window.pdfjsLib) return window.pdfjsLib;

  try {
    // Load the PDF.js library
    const pdfjsScript = document.createElement('script');
    pdfjsScript.src = `${PDF_JS_CDN}/pdf.min.js`;
    document.head.appendChild(pdfjsScript);
    
    // Wait for the script to load
    await new Promise<void>((resolve, reject) => {
      pdfjsScript.onload = () => resolve();
      pdfjsScript.onerror = () => reject(new Error("Failed to load PDF.js"));
    });

    // Configure worker
    window.pdfjsLib.GlobalWorkerOptions.workerSrc = `${PDF_JS_CDN}/pdf.worker.min.js`;
    
    return window.pdfjsLib;
  } catch (error) {
    console.error("Error loading PDF.js:", error);
    throw new Error("Failed to load PDF.js library");
  }
};

// Extract text from PDF
export const extractTextFromPdf = async (file: File): Promise<string> => {
  try {
    console.log("Loading PDF.js library...");
    const pdfjsLib = await loadPdfJs();
    
    console.log("Reading file...");
    const arrayBuffer = await file.arrayBuffer();
    
    console.log("Loading PDF document...");
    const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
    const pdf = await loadingTask.promise;
    
    console.log(`PDF loaded with ${pdf.numPages} pages`);
    
    let fullText = "";
    
    // Process each page
    for (let i = 1; i <= pdf.numPages; i++) {
      console.log(`Processing page ${i}/${pdf.numPages}`);
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      
      // Extract text from the page
      const pageText = textContent.items
        .map((item: any) => item.str)
        .join(" ");
      
      fullText += pageText + " ";
    }

    if (fullText.trim().length === 0) {
      toast({
        title: "Empty PDF",
        description: "No text could be extracted. The PDF may contain only images or be password protected.",
        variant: "destructive",
      });
      throw new Error("No text content found in PDF");
    }

    console.log(`Extracted ${fullText.length} characters from PDF`);
    return fullText.trim();
  } catch (error) {
    console.error("PDF processing error:", error);
    toast({
      title: "PDF Processing Error",
      description: "Failed to extract text from the PDF. Please try another file.",
      variant: "destructive",
    });
    throw error;
  }
};

// Split text into manageable chunks
export const chunkText = (text: string, maxChunkSize: number = 1000): string[] => {
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [];
  const chunks: string[] = [];
  
  let currentChunk = "";
  
  for (const sentence of sentences) {
    // If adding this sentence would exceed the chunk size
    if (currentChunk.length + sentence.length > maxChunkSize && currentChunk.length > 0) {
      chunks.push(currentChunk.trim());
      currentChunk = "";
    }
    
    currentChunk += sentence + " ";
  }
  
  // Add the last chunk if it contains any text
  if (currentChunk.trim().length > 0) {
    chunks.push(currentChunk.trim());
  }
  
  return chunks;
};
