"use client";

import { useState, useEffect } from "react";

const getHex = () => Math.floor(Math.random() * 0xffffffff).toString(16).padStart(8, '0').toUpperCase();

const bootLinesBase = [
  "BIOS Date 03/23/26 14:12:00 Ver 08.00.15",
  "CPU : Arch(TM) Quantum Processor @ 7.80GHz",
  "Memory: 131072MB OK",
  "Loading Kernel...",
  ...Array(5).fill(0).map(() => `[ OK ] Initializing module 0x${getHex()}...`),
  ...Array(3).fill(0).map(() => `[WARN] Unexpected entropy at addr 0x${getHex()}`),
  "Mounting Root Filesystem...",
  "[ OK ] Reached target Local File Systems.",
  "[ OK ] Started D-Bus System Message Bus.",
  "[ OK ] Started Network Manager.",
  "Injecting payload via vulnerability bypass...",
  "Bypassing firewall................[SUCCESS]",
  "Decrypting mainframe...",
  "Executing side-channel routines...",
  "ACCESS GRANTED.",
  "Welcome back, operator."
];

export default function BootScreen() {
  const [lines, setLines] = useState<string[]>([]);
  const [isBooting, setIsBooting] = useState(true);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    let currentLine = 0;
    let timeout: NodeJS.Timeout;

    const tick = () => {
      setLines((prev) => {
        const nextLine = bootLinesBase[currentLine];
        if (!nextLine) return prev;
        
        const nextLines = [...prev, nextLine];
        if (nextLines.length > 25) nextLines.shift();
        return nextLines;
      });
      currentLine++;
      
      if (currentLine >= bootLinesBase.length) {
        setTimeout(() => {
          setOpacity(0);
          setTimeout(() => setIsBooting(false), 1000);
        }, 1200);
      } else {
        const delay = Math.random() > 0.8 ? 300 : 50;
        timeout = setTimeout(tick, delay);
      }
    };

    timeout = setTimeout(tick, 100);

    return () => clearTimeout(timeout);
  }, []);

  if (!isBooting) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] bg-black text-[#0f0] font-mono p-6 sm:p-10 text-sm sm:text-base overflow-hidden transition-opacity duration-1000 flex flex-col justify-end"
      style={{ opacity, textShadow: "0 0 5px #0f0" }}
    >
      <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-20"
        style={{
          background: "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)",
          backgroundSize: "100% 4px"
        }}
      />
      <div className="mb-4 relative z-10">
        {lines.filter(Boolean).map((line, i) => (
          <div key={i} className={`mb-1 ${line.includes('[WARN]') ? 'text-red-500' : ''}`}>{line}</div>
        ))}
        <div className="mt-2 animate-[pulse_1s_steps(2,start)_infinite] w-3 h-5 bg-[#0f0] inline-block"></div>
      </div>
    </div>
  );
}
