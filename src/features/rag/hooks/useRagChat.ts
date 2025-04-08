
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

  // Send message to API
  const sendToLLM = async (userMessage: string, context: string) => {
    try {
      console.log("Sending to AI API with context length:", context.length);
      
      // Using OpenAI API
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('openai_api_key') || ''}`
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: `You are a helpful assistant that answers questions based on the provided document context. 
              Only use the information from the context to answer the question. If the answer is not in the context, 
              say that you don't have enough information. Be concise and accurate.
              
              Context: ${context}`
            },
            ...messages.slice(-5), // Include last 5 messages for continuity
            { role: "user", content: userMessage }
          ],
          temperature: 0.3,
          max_tokens: 500
        })
      });

      if (!response.ok) {
        console.error(`API request failed with status ${response.status}`);
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      console.log("Received response from API");
      return data.choices[0].message.content;
    } catch (error) {
      console.error("Error calling API:", error);
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
      console.log("Finding relevant chunks for query:", userMessage);
      // Find relevant document chunks
      const relevantChunks = await findRelevantChunks(userMessage, extractor, chunks, embeddings);
      console.log(`Found ${relevantChunks.length} relevant chunks`);
      
      if (relevantChunks.length === 0) {
        setMessages(prev => [...prev, { 
          role: "assistant", 
          content: "I couldn't find relevant information in the document to answer your question. Could you rephrase or ask something else about the document?" 
        }]);
        return;
      }
      
      const context = relevantChunks.join("\n\n");

      // Get response from LLM
      const apiKey = localStorage.getItem('openai_api_key');
      if (!apiKey) {
        setMessages(prev => [...prev, { 
          role: "assistant", 
          content: "Please set your OpenAI API key in the settings to enable question answering." 
        }]);
      } else {
        const assistantResponse = await sendToLLM(userMessage, context);
        setMessages(prev => [...prev, { role: "assistant", content: assistantResponse }]);
      }
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
        content: "Sorry, I encountered an error while processing your request. Please try again or check your API key settings."
      }]);
    } finally {
      setIsSending(false);
      // Scroll to bottom
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
      }
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
