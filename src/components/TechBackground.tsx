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

interface DataPacket {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  progress: number;
  speed: number;
  color: string;
}

interface PulseCircle {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  opacity: number;
  speed: number;
}

export const TechBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

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

  // Viewport visibility detection
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(canvas);
    return () => observer.disconnect();
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

    // If user prefers reduced motion or not visible, just show static background
    if (prefersReducedMotion || !isVisible) {
      ctx.fillStyle = "rgba(79, 209, 197, 0.02)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      return () => window.removeEventListener("resize", handleResize);
    }

    // Terminal commands - expanded set
    const commands = [
      "$ ping 192.168.1.1",
      "$ netstat -an",
      "$ ssh admin@server",
      "$ docker ps -a",
      "$ kubectl get pods",
      "$ git push origin main",
      "$ npm run build",
      "$ systemctl status",
      "$ nmap -sV target",
      "$ curl -X GET api/",
    ];

    const rect = canvas.getBoundingClientRect();
    
    // Initialize terminal lines - more terminals
    const terminals: Terminal[] = [];
    for (let i = 0; i < 8; i++) {
      terminals.push({
        text: commands[Math.floor(Math.random() * commands.length)],
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        speed: 0.15 + Math.random() * 0.3,
        opacity: 0.2 + Math.random() * 0.25,
      });
    }

    // Initialize neural network nodes - more nodes
    const nodes: Node[] = [];
    const nodeCount = 18;
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: 2 + Math.random() * 2,
      });
    }

    // Initialize data packets
    const dataPackets: DataPacket[] = [];
    const createPacket = () => {
      const startNode = nodes[Math.floor(Math.random() * nodes.length)];
      const endNode = nodes[Math.floor(Math.random() * nodes.length)];
      if (startNode !== endNode) {
        dataPackets.push({
          x: startNode.x,
          y: startNode.y,
          targetX: endNode.x,
          targetY: endNode.y,
          progress: 0,
          speed: 0.008 + Math.random() * 0.012,
          color: Math.random() > 0.5 ? "rgba(79, 209, 197, 0.8)" : "rgba(99, 229, 217, 0.8)",
        });
      }
    };
    
    // Create initial packets
    for (let i = 0; i < 5; i++) {
      createPacket();
    }

    // Initialize pulse circles
    const pulseCircles: PulseCircle[] = [];
    const createPulse = () => {
      pulseCircles.push({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        radius: 0,
        maxRadius: 60 + Math.random() * 40,
        opacity: 0.3,
        speed: 0.5 + Math.random() * 0.5,
      });
    };
    
    // Create initial pulses
    for (let i = 0; i < 3; i++) {
      createPulse();
    }

    let lastTime = 0;
    let packetTimer = 0;
    let pulseTimer = 0;
    const targetFPS = 30;
    const frameInterval = 1000 / targetFPS;

    const animate = (timestamp: number) => {
      const deltaTime = timestamp - lastTime;
      
      if (deltaTime < frameInterval) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      
      lastTime = timestamp - (deltaTime % frameInterval);
      packetTimer += deltaTime;
      pulseTimer += deltaTime;

      // Create new packets periodically
      if (packetTimer > 2000) {
        createPacket();
        packetTimer = 0;
      }

      // Create new pulses periodically
      if (pulseTimer > 3000) {
        createPulse();
        pulseTimer = 0;
      }

      const currentRect = canvas.getBoundingClientRect();
      
      // Clear canvas
      ctx.clearRect(0, 0, currentRect.width, currentRect.height);

      // Draw pulse circles
      for (let i = pulseCircles.length - 1; i >= 0; i--) {
        const pulse = pulseCircles[i];
        pulse.radius += pulse.speed;
        pulse.opacity = 0.3 * (1 - pulse.radius / pulse.maxRadius);
        
        if (pulse.radius >= pulse.maxRadius) {
          pulseCircles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(pulse.x, pulse.y, pulse.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(79, 209, 197, ${pulse.opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw terminal text
      ctx.font = "11px monospace";
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

        // Draw node glow
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.size * 3);
        gradient.addColorStop(0, "rgba(79, 209, 197, 0.6)");
        gradient.addColorStop(1, "rgba(79, 209, 197, 0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Draw node core
        ctx.fillStyle = "rgba(79, 209, 197, 0.9)";
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connections
      ctx.lineWidth = 0.6;
      const maxConnections = 3;
      for (let i = 0; i < nodes.length; i++) {
        let connectionCount = 0;
        for (let j = i + 1; j < nodes.length && connectionCount < maxConnections; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distSq = dx * dx + dy * dy;

          if (distSq < 22500) { // 150^2
            const dist = Math.sqrt(distSq);
            const opacity = 0.15 * (1 - dist / 150);
            ctx.strokeStyle = `rgba(79, 209, 197, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
            connectionCount++;
          }
        }
      }

      // Draw and update data packets
      for (let i = dataPackets.length - 1; i >= 0; i--) {
        const packet = dataPackets[i];
        packet.progress += packet.speed;
        
        if (packet.progress >= 1) {
          dataPackets.splice(i, 1);
          continue;
        }

        // Interpolate position
        const x = packet.x + (packet.targetX - packet.x) * packet.progress;
        const y = packet.y + (packet.targetY - packet.y) * packet.progress;

        // Draw packet trail
        const trailLength = 5;
        for (let t = 0; t < trailLength; t++) {
          const trailProgress = Math.max(0, packet.progress - t * 0.02);
          const tx = packet.x + (packet.targetX - packet.x) * trailProgress;
          const ty = packet.y + (packet.targetY - packet.y) * trailProgress;
          const trailOpacity = 0.6 * (1 - t / trailLength);
          ctx.fillStyle = `rgba(79, 209, 197, ${trailOpacity})`;
          ctx.beginPath();
          ctx.arc(tx, ty, 2 - t * 0.3, 0, Math.PI * 2);
          ctx.fill();
        }

        // Draw packet
        ctx.fillStyle = packet.color;
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw scanning line effect (subtle)
      const scanY = (timestamp * 0.02) % currentRect.height;
      const scanGradient = ctx.createLinearGradient(0, scanY - 30, 0, scanY + 30);
      scanGradient.addColorStop(0, "rgba(79, 209, 197, 0)");
      scanGradient.addColorStop(0.5, "rgba(79, 209, 197, 0.03)");
      scanGradient.addColorStop(1, "rgba(79, 209, 197, 0)");
      ctx.fillStyle = scanGradient;
      ctx.fillRect(0, scanY - 30, currentRect.width, 60);

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
  }, [prefersReducedMotion, isVisible]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
};
