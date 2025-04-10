
import { useRagApplication } from "./hooks/useRagApplication";
import { DocumentUploader } from "./components/DocumentUploader";
import { ChatInterface } from "./components/ChatInterface";
import { SettingsDialog } from "./components/SettingsDialog";

const RagApplication = () => {
  const {
    fileName,
    isProcessing,
    progress,
    error,
    messages,
    isSending,
    documentChunks,
    handleFileSelect,
    handleSendMessage
  } = useRagApplication();

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">PDF Question Answering</h1>
        <SettingsDialog />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Document Section */}
        <div className="md:col-span-1">
          <DocumentUploader
            isProcessing={isProcessing}
            fileName={fileName}
            progress={progress}
            error={error}
            onFileSelect={handleFileSelect}
          />
          
          {documentChunks.length > 0 && (
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <h3 className="font-medium mb-2">Document Info</h3>
              <p className="text-sm text-muted-foreground">
                Processed {documentChunks.length} sections
              </p>
            </div>
          )}
        </div>
        
        {/* Chat Section */}
        <div className="md:col-span-2">
          <ChatInterface
            messages={messages}
            isLoading={isSending}
            disabled={documentChunks.length === 0}
            onSendMessage={handleSendMessage}
          />
          
          {documentChunks.length === 0 && !isProcessing && (
            <div className="mt-4 p-4 bg-muted/50 rounded-lg text-center">
              <p className="text-muted-foreground">
                Upload and process a PDF document to start asking questions
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RagApplication;
