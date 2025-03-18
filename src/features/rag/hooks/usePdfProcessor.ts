
import { toast } from "@/hooks/use-toast";
import * as pdfjsLib from "pdfjs-dist";

// Initialize PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

export const usePdfProcessor = () => {
  const extractTextFromPdf = async (file: File): Promise<string> => {
    console.log("Starting PDF processing...");
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

    if (fullText.trim().length === 0) {
      throw new Error("No text content could be extracted from this PDF. The file may be scanned images or protected.");
    }

    return fullText;
  };

  return {
    extractTextFromPdf
  };
};
