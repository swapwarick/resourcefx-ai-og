
import { DocumentChunk } from "../types";
import { toast } from "@/hooks/use-toast";

// Create simple embeddings using windowed term frequency
export const createSimpleEmbeddings = (text: string, dimensions: number = 300): number[] => {
  // Normalize text: lowercase and remove punctuation
  const normalizedText = text.toLowerCase().replace(/[^\w\s]/g, "");
  
  // Get all words
  const words = normalizedText.split(/\s+/).filter(word => word.length > 0);
  
  // Create a vocabulary of unique words
  const vocabulary = Array.from(new Set(words));
  
  // Initialize the embedding vector with zeros
  const embedding = new Array(dimensions).fill(0);
  
  // If vocabulary is smaller than dimensions, use actual word frequencies
  if (vocabulary.length <= dimensions) {
    // Count word frequencies
    const wordCounts = new Map<string, number>();
    for (const word of words) {
      wordCounts.set(word, (wordCounts.get(word) || 0) + 1);
    }
    
    // Fill embedding with word frequencies, normalized by document length
    vocabulary.forEach((word, i) => {
      if (i < dimensions) {
        embedding[i] = (wordCounts.get(word) || 0) / words.length;
      }
    });
  } else {
    // For larger vocabularies, use a hashing trick to map words to dimensions
    for (const word of words) {
      // Simple hash function to map words to dimensions
      const hashCode = Array.from(word).reduce(
        (acc, char) => (acc * 31 + char.charCodeAt(0)) % dimensions, 0
      );
      
      // Increment the corresponding dimension
      embedding[hashCode] += 1 / words.length;
    }
  }
  
  // Normalize the embedding vector
  const magnitude = Math.sqrt(embedding.reduce((sum, val) => sum + val * val, 0));
  return magnitude > 0 
    ? embedding.map(val => val / magnitude) 
    : embedding;
};

// Process all document chunks to create embeddings
export const processChunks = (chunks: string[]): DocumentChunk[] => {
  return chunks.map(chunk => ({
    text: chunk,
    embedding: createSimpleEmbeddings(chunk)
  }));
};

// Calculate cosine similarity between two vectors
export const cosineSimilarity = (vecA: number[], vecB: number[]): number => {
  if (vecA.length !== vecB.length) return 0;
  
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;
  
  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i];
    normA += vecA[i] * vecA[i];
    normB += vecB[i] * vecB[i];
  }
  
  if (normA === 0 || normB === 0) return 0;
  
  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
};

// Find most relevant chunks for a query
export const findRelevantChunks = (
  query: string,
  chunks: DocumentChunk[],
  maxResults: number = 3
): DocumentChunk[] => {
  if (!chunks.length) return [];
  
  try {
    // Create query embedding
    const queryEmbedding = createSimpleEmbeddings(query);
    
    // Calculate similarity for each chunk
    const chunksWithScores = chunks.map(chunk => ({
      chunk,
      score: cosineSimilarity(queryEmbedding, chunk.embedding || [])
    }));
    
    // Sort by similarity score
    chunksWithScores.sort((a, b) => b.score - a.score);
    
    // Return top matches
    return chunksWithScores
      .slice(0, maxResults)
      .map(item => item.chunk);
  } catch (error) {
    console.error("Error finding relevant chunks:", error);
    toast({
      title: "Search Error",
      description: "An error occurred while searching the document.",
      variant: "destructive",
    });
    return [];
  }
};
