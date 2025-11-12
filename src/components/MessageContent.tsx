import { Link } from "react-router-dom";

interface MessageContentProps {
  content: string;
}

const MessageContent = ({ content }: MessageContentProps) => {
  // Match paths like /microsoft, /courses, /ai-pro, etc.
  const pathRegex = /\/[a-z0-9-]+/gi;
  
  const parts: (string | JSX.Element)[] = [];
  let lastIndex = 0;
  let match;

  // Reset regex lastIndex to ensure clean matching
  pathRegex.lastIndex = 0;
  
  while ((match = pathRegex.exec(content)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      parts.push(content.substring(lastIndex, match.index));
    }
    
    // Add the linked path
    const path = match[0];
    parts.push(
      <Link
        key={`link-${match.index}`}
        to={path}
        className="text-primary underline hover:text-primary/80 font-medium"
        onClick={(e) => e.stopPropagation()}
      >
        {path}
      </Link>
    );
    
    lastIndex = pathRegex.lastIndex;
  }
  
  // Add remaining text after last match
  if (lastIndex < content.length) {
    parts.push(content.substring(lastIndex));
  }
  
  return (
    <p className="text-sm whitespace-pre-wrap">
      {parts.map((part, index) => 
        typeof part === "string" ? <span key={`text-${index}`}>{part}</span> : part
      )}
    </p>
  );
};

export default MessageContent;
