import { useState, useMemo } from "react";
import { usePageView } from "@/hooks/usePageView";
import { Navigation } from "@/components/Navigation";
import { TechBackground } from "@/components/TechBackground";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Link2,
  Copy,
  Check,
  Trash2,
  Eye,
  Clock,
  User,
  Building2,
  Search,
  ExternalLink,
  Share2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  getAllSharedLinks,
  deleteSharedLink,
  buildShareUrl,
  isLinkExpired,
  type SharedLink,
} from "@/lib/sharedLinks";
import { useToast } from "@/hooks/use-toast";

const MySharedLinks = () => {
  usePageView("My Shared Links");
  const { toast } = useToast();

  // Force re-render when links change
  const [revision, setRevision] = useState(0);
  const links = useMemo(() => getAllSharedLinks(), [revision]);

  const [search, setSearch] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredLinks = useMemo(() => {
    const q = search.toLowerCase();
    if (!q) return [...links].reverse(); // newest first
    return [...links]
      .reverse()
      .filter(
        (l) =>
          l.courseTitle.toLowerCase().includes(q) ||
          l.clientName?.toLowerCase().includes(q) ||
          l.clientCompany?.toLowerCase().includes(q) ||
          l.shortCode.toLowerCase().includes(q)
      );
  }, [links, search]);

  const totalViews = useMemo(
    () => links.reduce((sum, l) => sum + l.viewCount, 0),
    [links]
  );

  const handleCopy = async (link: SharedLink) => {
    const url = buildShareUrl(link.shortCode);
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      const input = document.createElement("input");
      input.value = url;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
    }
    setCopiedId(link.id);
    toast({ title: "Link copied to clipboard" });
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDelete = (link: SharedLink) => {
    deleteSharedLink(link.id);
    setRevision((r) => r + 1);
    toast({ title: "Shared link deleted" });
  };

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatRelative = (iso: string) => {
    const diff = Date.now() - new Date(iso).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return "just now";
    if (mins < 60) return `${mins}m ago`;
    const hours = Math.floor(mins / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    if (days < 30) return `${days}d ago`;
    return formatDate(iso);
  };

  return (
    <div className="min-h-screen pt-20 pb-16 bg-[#0f1419]">
      <Navigation />
      <TechBackground />
      <div className="container max-w-5xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-2">
            <Share2 className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">
              My Shared Links
            </span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Track all the content links you&apos;ve shared with clients. See who
            opened them and how they engaged.
          </p>
        </div>

        {/* Summary stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: "Total Links", value: links.length, icon: Link2 },
            { label: "Total Views", value: totalViews, icon: Eye },
            {
              label: "Active Links",
              value: links.filter((l) => !isLinkExpired(l)).length,
              icon: Clock,
            },
          ].map(({ label, value, icon: Icon }) => (
            <Card
              key={label}
              className="bg-card/50 backdrop-blur border-border/50"
            >
              <CardContent className="pt-4 pb-4 text-center">
                <Icon className="h-5 w-5 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">
                  {value}
                </div>
                <div className="text-xs text-muted-foreground">{label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by course, client, or company..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 bg-card/50 border-border/50"
          />
        </div>

        {/* Links list */}
        {filteredLinks.length === 0 ? (
          <div className="text-center py-20">
            <Link2 className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {links.length === 0
                ? "No shared links yet"
                : "No links match your search"}
            </h3>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              {links.length === 0
                ? 'Use the "Share" button on any course card or in the course player to generate a trackable link.'
                : "Try adjusting your search terms."}
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredLinks.map((link) => {
              const expired = isLinkExpired(link);
              return (
                <Card
                  key={link.id}
                  className={cn(
                    "bg-card/50 backdrop-blur border-border/50 transition-all hover:border-primary/30",
                    expired && "opacity-60"
                  )}
                >
                  <CardContent className="py-4 px-5">
                    <div className="flex items-start gap-4">
                      {/* Left: info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-foreground truncate">
                            {link.courseTitle}
                          </h3>
                          {link.variantName && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary shrink-0">
                              {link.variantName}
                            </span>
                          )}
                          {expired && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-destructive/10 text-destructive shrink-0">
                              Expired
                            </span>
                          )}
                        </div>

                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground mt-1">
                          {link.clientName && (
                            <span className="flex items-center gap-1">
                              <User className="h-3 w-3" />
                              {link.clientName}
                            </span>
                          )}
                          {link.clientCompany && (
                            <span className="flex items-center gap-1">
                              <Building2 className="h-3 w-3" />
                              {link.clientCompany}
                            </span>
                          )}
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {formatRelative(link.createdAt)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            {link.viewCount}{" "}
                            {link.viewCount === 1 ? "view" : "views"}
                          </span>
                          {link.expiresAt && !expired && (
                            <span className="text-yellow-500">
                              Expires {formatDate(link.expiresAt)}
                            </span>
                          )}
                        </div>

                        {/* Short code display */}
                        <div className="mt-2 text-xs font-mono text-muted-foreground/60">
                          /s/{link.shortCode}
                        </div>
                      </div>

                      {/* Right: actions */}
                      <div className="flex items-center gap-1.5 shrink-0">
                        <Button
                          variant="outline"
                          size="icon"
                          className={cn(
                            "h-8 w-8",
                            copiedId === link.id &&
                              "border-green-500 text-green-500"
                          )}
                          onClick={() => handleCopy(link)}
                          title="Copy link"
                        >
                          {copiedId === link.id ? (
                            <Check className="h-3.5 w-3.5" />
                          ) : (
                            <Copy className="h-3.5 w-3.5" />
                          )}
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() =>
                            window.open(
                              buildShareUrl(link.shortCode),
                              "_blank"
                            )
                          }
                          title="Open link"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 text-destructive hover:bg-destructive/10 hover:border-destructive/50"
                          onClick={() => handleDelete(link)}
                          title="Delete link"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </div>

                    {/* View history (show last 5 views if any) */}
                    {link.views.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-border/30">
                        <p className="text-xs font-medium text-muted-foreground mb-2">
                          Recent views
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {link.views.slice(-5).reverse().map((view, i) => (
                            <span
                              key={i}
                              className="text-[11px] px-2 py-0.5 rounded bg-muted/50 text-muted-foreground"
                            >
                              {formatRelative(view.viewedAt)}
                              {view.referrer && (
                                <span className="ml-1 text-muted-foreground/50">
                                  via {new URL(view.referrer || window.location.href).hostname || "direct"}
                                </span>
                              )}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MySharedLinks;
