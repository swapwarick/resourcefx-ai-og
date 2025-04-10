
export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface DocumentChunk {
  text: string;
  embedding?: number[];
}
