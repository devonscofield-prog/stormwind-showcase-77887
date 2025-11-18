import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type TextSize = "normal" | "large";

interface TextSizeContextType {
  textSize: TextSize;
  setTextSize: (size: TextSize) => void;
  toggleTextSize: () => void;
}

const TextSizeContext = createContext<TextSizeContextType | undefined>(undefined);

export function TextSizeProvider({ children }: { children: ReactNode }) {
  const [textSize, setTextSize] = useState<TextSize>(() => {
    const saved = localStorage.getItem("text-size");
    return (saved === "large" ? "large" : "normal") as TextSize;
  });

  useEffect(() => {
    const html = document.documentElement;
    
    if (textSize === "large") {
      html.classList.add("text-size-large");
    } else {
      html.classList.remove("text-size-large");
    }
    
    localStorage.setItem("text-size", textSize);
  }, [textSize]);

  const toggleTextSize = () => {
    setTextSize(prev => prev === "normal" ? "large" : "normal");
  };

  return (
    <TextSizeContext.Provider value={{ textSize, setTextSize, toggleTextSize }}>
      {children}
    </TextSizeContext.Provider>
  );
}

export function useTextSize() {
  const context = useContext(TextSizeContext);
  if (context === undefined) {
    throw new Error("useTextSize must be used within a TextSizeProvider");
  }
  return context;
}
