
import { RefObject } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, FileText, Upload, Trash2, Loader2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface DocumentSidebarProps {
  file: File | null;
  fileName: string;
  chunks: string[];
  documentContent: string;
  isUploading: boolean;
  isProcessing: boolean;
  fileInputRef: RefObject<HTMLInputElement>;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleUploadAndProcess: () => Promise<void>;
  handleReset: () => void;
}

const DocumentSidebar = ({
  file,
  fileName,
  chunks,
  documentContent,
  isUploading,
  isProcessing,
  fileInputRef,
  handleFileChange,
  handleUploadAndProcess,
  handleReset
}: DocumentSidebarProps) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-xl">Document</CardTitle>
      </CardHeader>
      <CardContent>
        {!file ? (
          <div className="flex flex-col items-center justify-center py-8">
            <BookOpen className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-center text-muted-foreground">
              Upload a PDF to get started
            </p>
          </div>
        ) : (
          <div className="flex items-center space-x-2 mb-4">
            <FileText className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
            <span className="text-sm font-medium truncate flex-1">
              {fileName}
            </span>
          </div>
        )}

        <div className="space-y-2 mt-4">
          <Input
            ref={fileInputRef}
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="hidden"
            id="pdf-upload"
          />
          <Button
            variant="outline"
            className="w-full"
            onClick={() => fileInputRef.current?.click()}
          >
            <Upload className="mr-2 h-4 w-4" />
            Select PDF
          </Button>
          <Button
            className="w-full"
            onClick={handleUploadAndProcess}
            disabled={!file || isUploading || isProcessing}
          >
            {(isUploading || isProcessing) ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {isUploading ? "Uploading..." : "Processing..."}
              </>
            ) : (
              <>
                Process PDF
              </>
            )}
          </Button>
          {file && chunks.length === 0 && !isProcessing && (
            <Alert variant="destructive" className="mt-2">
              <AlertDescription>
                Some PDF files may be protected, scanned as images, or have other features that prevent text extraction. 
                Try a different PDF that contains selectable text.
              </AlertDescription>
            </Alert>
          )}
          {(chunks.length > 0) && (
            <Button
              variant="outline"
              className="w-full"
              onClick={handleReset}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Reset
            </Button>
          )}
        </div>

        {chunks.length > 0 && (
          <div className="mt-6">
            <p className="text-sm text-muted-foreground mb-2">
              Document Stats:
            </p>
            <ul className="text-sm space-y-1">
              <li>Pages: {Math.ceil(documentContent.length / 3000)}</li>
              <li>Characters: {documentContent.length}</li>
              <li>Chunks: {chunks.length}</li>
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DocumentSidebar;
