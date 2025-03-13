
import { useState, useRef } from "react";
import { toast } from "@/hooks/use-toast";
import { Message } from "../types";
import { findRelevantChunks } from "../utils/retrieval";

interface UseRagChatProps {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  chunks: string[];
  embeddings: number[][];
  extractor: any;
}

export const useRagChat = ({ messages, setMessages, chunks, embeddings, extractor }: UseRagChatProps) => {
  const [input, setInput] = useState<string>("");
  const [isSending, setIsSending] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Send message to Groq API
  const sendToGroq = async (userMessage: string, context: string) => {
    try {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer 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`
        },
        body: JSON.stringify({
          model: "llama3-8b-8192",
          messages: [
            {
              role: "system",
              content: `You are a helpful assistant that answers questions based on the provided document context. 
              Only use the information from the context to answer the question. If the answer is not in the context, 
              say that you don't have enough information. Be concise and accurate.
              
              Context: ${context}`
            },
            ...messages,
            { role: "user", content: userMessage }
          ],
          temperature: 0.3,
          max_tokens: 1024
        })
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error("Error calling Groq API:", error);
      throw error;
    }
  };

  // Handle send message
  const handleSendMessage = async () => {
    if (!input.trim() || isSending || chunks.length === 0) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsSending(true);

    try {
      // Find relevant document chunks
      const relevantChunks = await findRelevantChunks(userMessage, extractor, chunks, embeddings);
      const context = relevantChunks.join("\n\n");

      // Get response from Groq
      const assistantResponse = await sendToGroq(userMessage, context);
      
      setMessages(prev => [...prev, { role: "assistant", content: assistantResponse }]);
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to get a response. Please try again.",
        variant: "destructive",
      });
      // Add error message to the chat
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: "Sorry, I encountered an error while processing your request. Please try again."
      }]);
    } finally {
      setIsSending(false);
    }
  };

  return {
    input,
    isSending,
    messagesEndRef,
    setInput,
    handleSendMessage
  };
};
