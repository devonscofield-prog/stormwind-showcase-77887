import { Link } from "react-router-dom";

interface MessageContentProps {
  content: string;
}

const MessageContent = ({ content }: MessageContentProps) => {
  // Match paths like /microsoft, /courses, /ai-pro, etc.
  const pathRegex = /(\/[a-z0-9-]+)/gi;
  
  const parts = content.split(pathRegex);
  
  return (
    <p className="text-sm whitespace-pre-wrap">
      {parts.map((part, index) => {
        // Check if this part is a valid route path
        if (part.match(/^\/[a-z0-9-]+$/i)) {
          return (
            <Link
              key={index}
              to={part}
              className="text-primary underline hover:text-primary/80 font-medium"
              onClick={(e) => e.stopPropagation()}
            >
              {part}
            </Link>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </p>
  );
};

export default MessageContent;
