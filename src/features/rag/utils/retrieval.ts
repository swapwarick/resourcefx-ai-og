
// Calculate cosine similarity between vectors
export const cosineSimilarity = (vecA: number[], vecB: number[]): number => {
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
export const findRelevantChunks = async (
  query: string, 
  extractor: any, 
  chunks: string[], 
  embeddings: number[][], 
  topK: number = 3
): Promise<string[]> => {
  if (!extractor || embeddings.length === 0 || chunks.length === 0) {
    console.log("Missing required components for retrieval", {
      hasExtractor: !!extractor,
      embeddingsLength: embeddings.length,
      chunksLength: chunks.length
    });
    return [];
  }

  try {
    console.log("Creating query embedding...");
    // Create query embedding
    const queryEmbeddingOutput = await extractor(query, { pooling: "mean", normalize: true });
    const queryEmbedding = queryEmbeddingOutput.tolist ? queryEmbeddingOutput.tolist()[0] : queryEmbeddingOutput.data;
    
    console.log("Query embedding created, calculating similarities...");
    
    // Calculate similarities
    const similarities = embeddings.map((embedding) => 
      cosineSimilarity(queryEmbedding, embedding)
    );
    
    // Get indices of top K similar chunks
    const topIndices = similarities
      .map((score, index) => ({ score, index }))
      .sort((a, b) => b.score - a.score)
      .slice(0, topK)
      .map(item => item.index);
    
    console.log("Found top relevant chunks:", topIndices);
    
    // Return the top K chunks
    return topIndices.map(index => chunks[index]);
  } catch (error) {
    console.error("Error finding relevant chunks:", error);
    return [];
  }
};
