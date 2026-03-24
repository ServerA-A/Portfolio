"use client";
import { useEffect, useRef } from "react";

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<{ x: number; y: number }>({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeSettings = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeSettings();

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%\"'#&_(),.;:?!\\|{}<>[]^~アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレゲゼデベペオォコソトノホモヨョロゴゾドボポヴッン".split("");
    const fontSize = 16;
    
    // Store drops position and the characters they should hold to create trails
    let columns = Math.floor(canvas.width / fontSize) + 1;
    let drops: number[] = [];
    
    // Initialize drops to random starting positions
    for (let x = 0; x < columns; x++) {
      drops[x] = Math.random() * -100; // Start off-screen
    }

    const draw = () => {
      // Semi-transparent black to create fade effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `bold ${fontSize}px monospace`;
      
      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        
        const xPos = i * fontSize;
        const yPos = drops[i] * fontSize;

        const dx = xPos - mouseRef.current.x;
        const dy = yPos - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Randomly highlight the head of the drop
        const isHead = Math.random() < 0.1;
        
        let color = "#0F0"; // Green tail
        if (isHead) {
          color = "#fff"; // White head
        }
        
        if (distance < 120) {
          // Glow and change color when near mouse
          const intensity = Math.max(0, 1 - distance / 120);
          ctx.fillStyle = `rgb(${Math.floor(intensity * 100)}, ${Math.floor(255 - intensity * 50)}, ${Math.floor(255 * intensity)})`;
          
          // Slight repulsion effect
          drops[i] -= intensity * 0.5;
        } else {
          ctx.fillStyle = color;
        }

        ctx.fillText(text, xPos, yPos);

        // Reset drop to top with some randomness
        if (yPos > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    
    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    const handleResize = () => {
      resizeSettings();
      columns = canvas.width / fontSize;
      drops = [];
      for (let x = 0; x < columns; x++) {
        drops[x] = 1;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-40"
      aria-hidden="true"
    />
  );
}