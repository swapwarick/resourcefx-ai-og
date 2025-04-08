
import { useState } from "react";
import DocumentSidebar from "./components/DocumentSidebar";
import ChatPanel from "./components/ChatPanel";
import ApiKeySettings from "./components/ApiKeySettings";
import { useRagProcessor } from "./hooks/useRagProcessor";
import { useRagChat } from "./hooks/useRagChat";
import { Message } from "./types";
import { Toaster } from "@/components/ui/toaster";

const RagApplication = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [documentContent, setDocumentContent] = useState<string>("");
  
  const {
    file,
    fileName,
    isUploading,
    isProcessing,
    chunks,
    embeddings,
    fileInputRef,
    extractor,
    handleFileChange,
    handleUploadAndProcess,
    handleReset,
  } = useRagProcessor({ setDocumentContent, setMessages });

  const {
    input,
    isSending,
    messagesEndRef,
    handleSendMessage,
    setInput
  } = useRagChat({
    messages,
    setMessages,
    chunks,
    embeddings,
    extractor
  });

  return (
    <div className="min-h-screen bg-background py-12">
      <Toaster />
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Chat with Your PDF</h1>
          <ApiKeySettings />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left sidebar - Document info */}
          <div className="md:col-span-3">
            <DocumentSidebar 
              file={file}
              fileName={fileName}
              chunks={chunks}
              documentContent={documentContent}
              isUploading={isUploading}
              isProcessing={isProcessing}
              fileInputRef={fileInputRef}
              handleFileChange={handleFileChange}
              handleUploadAndProcess={handleUploadAndProcess}
              handleReset={handleReset}
            />
          </div>

          {/* Main content - Chat */}
          <div className="md:col-span-9">
            <ChatPanel
              messages={messages}
              input={input}
              isSending={isSending}
              chunks={chunks}
              messagesEndRef={messagesEndRef}
              setInput={setInput}
              handleSendMessage={handleSendMessage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RagApplication;
