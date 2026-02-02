import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Share2, Copy, Check, Link2 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import {
  createSharedLink,
  buildShareUrl,
  type CreateSharedLinkInput,
} from "@/lib/sharedLinks";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface ShareDialogProps {
  courseId: string;
  courseTitle: string;
  variantId?: string;
  variantName?: string;
  /** Render prop – if omitted a default share button is rendered */
  trigger?: React.ReactNode;
}

export const ShareDialog = ({
  courseId,
  courseTitle,
  variantId,
  variantName,
  trigger,
}: ShareDialogProps) => {
  const { user } = useAuth();
  const { toast } = useToast();

  const [open, setOpen] = useState(false);
  const [clientName, setClientName] = useState("");
  const [clientCompany, setClientCompany] = useState("");
  const [expiresInDays, setExpiresInDays] = useState("0");
  const [generatedUrl, setGeneratedUrl] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const reset = () => {
    setClientName("");
    setClientCompany("");
    setExpiresInDays("0");
    setGeneratedUrl(null);
    setCopied(false);
  };

  const handleGenerate = () => {
    const input: CreateSharedLinkInput = {
      courseId,
      courseTitle,
      variantId,
      variantName,
      createdByEmail: user?.email || "anonymous",
      createdByName:
        (user?.user_metadata as Record<string, string>)?.full_name ||
        user?.email ||
        "Sales Rep",
      clientName: clientName.trim() || undefined,
      clientCompany: clientCompany.trim() || undefined,
      expiresInDays: Number(expiresInDays),
    };

    const link = createSharedLink(input);
    setGeneratedUrl(buildShareUrl(link.shortCode));
  };

  const handleCopy = async () => {
    if (!generatedUrl) return;
    try {
      await navigator.clipboard.writeText(generatedUrl);
      setCopied(true);
      toast({ title: "Link copied to clipboard" });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const input = document.createElement("input");
      input.value = generatedUrl;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      toast({ title: "Link copied to clipboard" });
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) reset();
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {trigger ?? (
          <Button
            variant="outline"
            size="sm"
            className="gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            <Share2 className="h-4 w-4" />
            Share
          </Button>
        )}
      </DialogTrigger>

      <DialogContent
        className="sm:max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Link2 className="h-5 w-5 text-primary" />
            Share Course
          </DialogTitle>
          <DialogDescription>
            Generate a trackable link to send to a client. You can optionally
            tag it with the client&apos;s name for engagement tracking.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 pt-2">
          {/* Course info */}
          <div className="rounded-lg border border-border/50 bg-muted/30 p-3">
            <p className="text-sm font-medium text-foreground">{courseTitle}</p>
            {variantName && (
              <p className="text-xs text-muted-foreground mt-1">
                Variant: {variantName}
              </p>
            )}
          </div>

          {!generatedUrl ? (
            <>
              {/* Client name */}
              <div className="space-y-2">
                <Label htmlFor="client-name">Client Name (optional)</Label>
                <Input
                  id="client-name"
                  placeholder="e.g. John Smith"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                />
              </div>

              {/* Client company */}
              <div className="space-y-2">
                <Label htmlFor="client-company">Company (optional)</Label>
                <Input
                  id="client-company"
                  placeholder="e.g. Acme Corp"
                  value={clientCompany}
                  onChange={(e) => setClientCompany(e.target.value)}
                />
              </div>

              {/* Expiration */}
              <div className="space-y-2">
                <Label htmlFor="expires">Link Expiration</Label>
                <Select
                  value={expiresInDays}
                  onValueChange={setExpiresInDays}
                >
                  <SelectTrigger id="expires">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">Never expires</SelectItem>
                    <SelectItem value="7">7 days</SelectItem>
                    <SelectItem value="14">14 days</SelectItem>
                    <SelectItem value="30">30 days</SelectItem>
                    <SelectItem value="90">90 days</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={handleGenerate} className="w-full gap-2">
                <Link2 className="h-4 w-4" />
                Generate Share Link
              </Button>
            </>
          ) : (
            <>
              {/* Generated link display */}
              <div className="space-y-2">
                <Label>Your share link</Label>
                <div className="flex items-center gap-2">
                  <Input
                    readOnly
                    value={generatedUrl}
                    className="font-mono text-sm"
                  />
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={handleCopy}
                    className={cn(
                      "shrink-0 transition-colors",
                      copied && "border-green-500 text-green-500"
                    )}
                  >
                    {copied ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              {clientName && (
                <p className="text-xs text-muted-foreground">
                  Tagged for: {clientName}
                  {clientCompany ? ` at ${clientCompany}` : ""}
                </p>
              )}

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={reset}
                >
                  Create Another
                </Button>
                <Button
                  className="flex-1"
                  onClick={handleCopy}
                >
                  {copied ? "Copied!" : "Copy Link"}
                </Button>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
