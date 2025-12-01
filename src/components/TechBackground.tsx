import { useEffect, useRef, useState } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

interface Terminal {
  text: string;
  x: number;
  y: number;
  speed: number;
  opacity: number;
}

export const TechBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Set canvas size with devicePixelRatio for crisp rendering
    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2); // Cap at 2x for performance
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };
    resizeCanvas();
    
    // Throttled resize handler
    let resizeTimeout: number | null = null;
    const handleResize = () => {
      if (resizeTimeout) return;
      resizeTimeout = window.setTimeout(() => {
        resizeCanvas();
        resizeTimeout = null;
      }, 100);
    };
    window.addEventListener("resize", handleResize);

    // If user prefers reduced motion, just show static background
    if (prefersReducedMotion) {
      ctx.fillStyle = "rgba(79, 209, 197, 0.02)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      return () => window.removeEventListener("resize", handleResize);
    }

    // Terminal commands - optimized set
    const commands = [
      "$ ping 192.168.1.1",
      "$ netstat -an",
      "$ ssh admin@server",
      "$ docker ps -a",
    ];

    const rect = canvas.getBoundingClientRect();
    
    // Initialize terminal lines - heavily reduced for performance
    const terminals: Terminal[] = [];
    for (let i = 0; i < 4; i++) {
      terminals.push({
        text: commands[Math.floor(Math.random() * commands.length)],
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        speed: 0.2 + Math.random() * 0.25,
        opacity: 0.3 + Math.random() * 0.2,
      });
    }

    // Initialize neural network nodes - optimized count
    const nodes: Node[] = [];
    const nodeCount = 10; // Further reduced for better performance
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        size: 2 + Math.random() * 1.5,
      });
    }

    let lastTime = 0;
    const targetFPS = 24; // Reduced to 24fps for smoother performance
    const frameInterval = 1000 / targetFPS;

    const animate = (timestamp: number) => {
      const deltaTime = timestamp - lastTime;
      
      if (deltaTime < frameInterval) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      
      lastTime = timestamp - (deltaTime % frameInterval);

      const currentRect = canvas.getBoundingClientRect();
      
      // Clear canvas
      ctx.clearRect(0, 0, currentRect.width, currentRect.height);

      // Draw terminal text
      ctx.font = "12px monospace";
      terminals.forEach((terminal) => {
        ctx.fillStyle = `rgba(79, 209, 197, ${terminal.opacity})`;
        ctx.fillText(terminal.text, terminal.x, terminal.y);

        terminal.y += terminal.speed;

        if (terminal.y > currentRect.height + 20) {
          terminal.y = -20;
          terminal.x = Math.random() * currentRect.width;
          terminal.text = commands[Math.floor(Math.random() * commands.length)];
        }
      });

      // Update and draw nodes
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > currentRect.width) node.vx *= -1;
        if (node.y < 0 || node.y > currentRect.height) node.vy *= -1;

        // Simplified node drawing - no gradient for performance
        ctx.fillStyle = "rgba(79, 209, 197, 0.8)";
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connections - optimized with distance culling
      ctx.strokeStyle = "rgba(79, 209, 197, 0.08)";
      ctx.lineWidth = 0.8;
      const maxConnections = 3; // Limit connections per node
      for (let i = 0; i < nodes.length; i++) {
        let connectionCount = 0;
        for (let j = i + 1; j < nodes.length && connectionCount < maxConnections; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distSq = dx * dx + dy * dy;

          // Reduced connection distance and use squared distance
          if (distSq < 16900) { // 130^2 - shorter distance
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
            connectionCount++;
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }
    };
  }, [prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
};
