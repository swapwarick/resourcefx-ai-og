
import { useState, useRef } from "react";
import { Upload, FileText, Loader2, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface DocumentUploaderProps {
  isProcessing: boolean;
  fileName: string;
  progress: number;
  error: string | null;
  onFileSelect: (file: File) => void;
}

export const DocumentUploader = ({
  isProcessing,
  fileName,
  progress,
  error,
  onFileSelect
}: DocumentUploaderProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onFileSelect(e.target.files[0]);
    }
  };
  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg">Document Upload</CardTitle>
      </CardHeader>
      <CardContent>
        <div 
          className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-muted/50 transition-colors"
          onClick={() => fileInputRef.current?.click()}
        >
          {fileName ? (
            <div className="flex items-center space-x-2">
              <FileText className="h-8 w-8 text-muted-foreground" />
              <span className="font-medium">{fileName}</span>
            </div>
          ) : (
            <>
              <Upload className="h-10 w-10 text-muted-foreground mb-2" />
              <p className="text-muted-foreground">Click to upload a PDF file</p>
            </>
          )}
          
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept=".pdf"
            onChange={handleFileChange}
            disabled={isProcessing}
          />
        </div>
        
        {isProcessing && (
          <div className="mt-4 space-y-2">
            <div className="flex items-center space-x-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span className="text-sm">Processing document...</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}
        
        {error && (
          <Alert variant="destructive" className="mt-4">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full" 
          onClick={() => fileInputRef.current?.click()}
          disabled={isProcessing}
        >
          Select PDF
        </Button>
      </CardFooter>
    </Card>
  );
};
