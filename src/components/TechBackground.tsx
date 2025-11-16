import { useEffect, useRef } from "react";

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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Terminal commands
    const commands = [
      "$ ping 192.168.1.1",
      "$ netstat -an",
      "$ traceroute target.com",
      "$ nmap -sV 10.0.0.0/24",
      "$ ssh admin@server",
      "$ docker ps -a",
      "$ kubectl get pods",
      "$ systemctl status nginx",
      "$ tail -f /var/log/syslog",
      "$ ifconfig eth0",
      "$ iptables -L",
      "$ tcpdump -i eth0",
      "$ wireshark -i wlan0",
      "$ dig example.com",
      "$ nslookup dns.google",
      "$ route -n",
      "$ arp -a",
      "$ ps aux | grep python",
      "$ top -b -n 1",
      "$ df -h",
    ];

    // Initialize terminal lines
    const terminals: Terminal[] = [];
    for (let i = 0; i < 15; i++) {
      terminals.push({
        text: commands[Math.floor(Math.random() * commands.length)],
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 0.2 + Math.random() * 0.5,
        opacity: 0.5 + Math.random() * 0.4,
      });
    }

    // Initialize neural network nodes
    const nodes: Node[] = [];
    const nodeCount = 30;
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: 2 + Math.random() * 3,
      });
    }

    const animate = () => {
      // Clear canvas completely
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw terminal text
      ctx.font = "14px 'Courier New', monospace";
      terminals.forEach((terminal) => {
        ctx.fillStyle = `rgba(79, 209, 197, ${terminal.opacity})`;
        ctx.fillText(terminal.text, terminal.x, terminal.y);

        terminal.y += terminal.speed;

        // Reset when off screen
        if (terminal.y > canvas.height + 20) {
          terminal.y = -20;
          terminal.x = Math.random() * canvas.width;
          terminal.text = commands[Math.floor(Math.random() * commands.length)];
        }
      });

      // Update and draw nodes
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Draw node with glow
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.size * 3);
        gradient.addColorStop(0, "rgba(79, 209, 197, 1)");
        gradient.addColorStop(0.5, "rgba(79, 209, 197, 0.6)");
        gradient.addColorStop(1, "rgba(79, 209, 197, 0)");
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Draw core
        ctx.fillStyle = "rgba(79, 209, 197, 1)";
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connections between nearby nodes
      ctx.strokeStyle = "rgba(79, 209, 197, 0.15)";
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = 1 - distance / 150;
            ctx.strokeStyle = `rgba(79, 209, 197, ${opacity * 0.6})`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();

            // Animated data pulse on connection
            if (Math.random() > 0.98) {
              const midX = (nodes[i].x + nodes[j].x) / 2;
              const midY = (nodes[i].y + nodes[j].y) / 2;
              ctx.fillStyle = "rgba(79, 209, 197, 1)";
              ctx.beginPath();
              ctx.arc(midX, midY, 2, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};
