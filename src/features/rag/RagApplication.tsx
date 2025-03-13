
import { useState, useRef, useEffect } from "react";
import DocumentSidebar from "./components/DocumentSidebar";
import ChatPanel from "./components/ChatPanel";
import { useRagProcessor } from "./hooks/useRagProcessor";
import { useRagChat } from "./hooks/useRagChat";
import { Message } from "./types";

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
    processPdf
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
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Chat with Your PDF</h1>
        
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
