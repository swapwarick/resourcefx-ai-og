
// Chunk text into smaller segments
export const chunkText = (text: string, chunkSize: number): string[] => {
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
