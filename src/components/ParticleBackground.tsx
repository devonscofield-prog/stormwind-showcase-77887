import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  isBurst?: boolean;
  life?: number;
  maxLife?: number;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const scrollRef = useRef(0);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };
    resizeCanvas();

    // Initialize particles
    const initParticles = () => {
      const particleCount = Math.floor((window.innerWidth * window.innerHeight) / 15000);
      const particles: Particle[] = [];
      
      const colors = ['#4FD1C5', '#34D399', '#20B2AA'];

      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        
        particles.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }

      particlesRef.current = particles;
    };

    initParticles();

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY + window.scrollY
      };
    };

    // Scroll handler
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };

    // Click burst handler
    const handleClick = (e: MouseEvent) => {
      const clickX = e.clientX;
      const clickY = e.clientY + window.scrollY;
      const colors = ['#4FD1C5', '#34D399', '#20B2AA', '#00FFA3', '#7FFFD4'];
      const burstParticleCount = 30;

      // Create burst particles
      for (let i = 0; i < burstParticleCount; i++) {
        const angle = (Math.PI * 2 * i) / burstParticleCount;
        const speed = Math.random() * 5 + 3;
        
        particlesRef.current.push({
          x: clickX,
          y: clickY,
          baseX: clickX,
          baseY: clickY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * 4 + 2,
          opacity: 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          isBurst: true,
          life: 0,
          maxLife: Math.random() * 30 + 40
        });
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle, index) => {
        // Handle burst particles differently
        if (particle.isBurst && particle.life !== undefined && particle.maxLife !== undefined) {
          particle.life++;
          
          // Apply gravity and friction to burst particles
          particle.vy += 0.1; // gravity
          particle.vx *= 0.98; // friction
          particle.vy *= 0.98;
          
          // Update position
          particle.x += particle.vx;
          particle.y += particle.vy;
          
          // Fade out based on life
          const lifeRatio = particle.life / particle.maxLife;
          particle.opacity = Math.max(0, 1 - lifeRatio);
          
          // Mark for removal
          if (particle.life >= particle.maxLife) {
            particlesRef.current.splice(index, 1);
            return;
          }
        } else {
          // Normal particle behavior
          // Mouse interaction - repel particles
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 150;

          if (distance < maxDistance) {
            const force = (maxDistance - distance) / maxDistance;
            const angle = Math.atan2(dy, dx);
            particle.vx -= Math.cos(angle) * force * 0.5;
            particle.vy -= Math.sin(angle) * force * 0.5;
          }

          // Return to base position (spring effect)
          const returnForce = 0.05;
          particle.vx += (particle.baseX - particle.x) * returnForce;
          particle.vy += (particle.baseY - particle.y) * returnForce;

          // Apply velocity damping
          particle.vx *= 0.95;
          particle.vy *= 0.95;

          // Update position
          particle.x += particle.vx;
          particle.y += particle.vy;
        }

        // Scroll-based opacity (only for non-burst particles)
        let opacityMultiplier = 1;
        if (!particle.isBurst) {
          const distanceFromView = Math.abs((particle.y - scrollRef.current) - window.innerHeight / 2);
          const viewportHeight = window.innerHeight;
          opacityMultiplier = Math.max(0.2, 1 - (distanceFromView / viewportHeight));
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity * opacityMultiplier;
        ctx.fill();

        // Draw glow effect for burst particles
        if (particle.isBurst && particle.opacity > 0.5) {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.globalAlpha = particle.opacity * 0.3;
          ctx.fill();
        }

        // Draw connections to nearby particles (only for non-burst particles)
        if (!particle.isBurst) {
          particlesRef.current.forEach((otherParticle) => {
            if (otherParticle.isBurst) return; // Don't connect to burst particles
            
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = particle.color;
              ctx.globalAlpha = (1 - distance / 100) * 0.15 * opacityMultiplier;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          });
        }
      });

      ctx.globalAlpha = 1;
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('click', handleClick);
    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleClick);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0"
      style={{ opacity: 0.6, pointerEvents: 'auto', cursor: 'crosshair' }}
    />
  );
};

export default ParticleBackground;
