
import { useState, useEffect } from "react";
import { toast } from "@/hooks/use-toast";
import { pipeline } from "@huggingface/transformers";
import localforage from "localforage";

// Initialize localforage instance for vector storage
export const vectorStore = localforage.createInstance({
  name: "ragVectorStore"
});

export const useEmbeddings = () => {
  const [extractor, setExtractor] = useState<any>(null);

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

  return {
    extractor
  };
};
