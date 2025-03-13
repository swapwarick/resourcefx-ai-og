
import { RefObject } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { BookOpen, Send, Loader2 } from "lucide-react";
import { Message } from "../types";

interface ChatPanelProps {
  messages: Message[];
  input: string;
  isSending: boolean;
  chunks: string[];
  messagesEndRef: RefObject<HTMLDivElement>;
  setInput: (input: string) => void;
  handleSendMessage: () => Promise<void>;
}

const ChatPanel = ({
  messages,
  input,
  isSending,
  chunks,
  messagesEndRef,
  setInput,
  handleSendMessage
}: ChatPanelProps) => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-xl">Chat</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow overflow-y-auto max-h-[60vh] min-h-[400px]">
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center p-8">
            <BookOpen className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-xl font-medium mb-2">Upload and process a PDF</h3>
            <p className="text-muted-foreground max-w-md">
              Upload a PDF document and process it to start asking questions about its content.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "assistant" ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`rounded-lg px-4 py-2 max-w-[80%] ${
                    message.role === "assistant"
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  <p className="whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        )}
      </CardContent>
      <CardFooter className="border-t pt-4">
        <div className="flex w-full space-x-2">
          <Textarea
            placeholder={
              chunks.length === 0
                ? "Process a PDF document first..."
                : "Ask a question about your document..."
            }
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
            disabled={chunks.length === 0 || isSending}
            className="flex-grow"
          />
          <Button
            onClick={handleSendMessage}
            disabled={chunks.length === 0 || !input.trim() || isSending}
          >
            {isSending ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ChatPanel;
