
import { useState, useEffect } from "react";
import { Settings } from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

export const SettingsDialog = () => {
  const [open, setOpen] = useState(false);
  const [apiKey, setApiKey] = useState("");
  
  useEffect(() => {
    const storedKey = localStorage.getItem("openai_api_key") || "";
    setApiKey(storedKey);
  }, [open]);
  
  const handleSave = () => {
    localStorage.setItem("openai_api_key", apiKey);
    toast({
      title: "Settings saved",
      description: "Your API key has been saved.",
    });
    setOpen(false);
  };
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <Settings className="h-4 w-4" />
          <span className="sr-only">Settings</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>API Settings</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="openai-key" className="col-span-4">
              OpenAI API Key
            </Label>
            <Input
              id="openai-key"
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="sk-..."
              className="col-span-4"
            />
            <p className="text-xs text-muted-foreground col-span-4">
              Your API key is stored locally in your browser and is never sent to our servers.
            </p>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSave}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
