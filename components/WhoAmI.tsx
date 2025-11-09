"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Introduction from "@/components/Introduction";

export default function WhoAmI() {
  const [binaryMatrix, setBinaryMatrix] = useState<string[][]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    // Initialize binary matrix
    const rows = 20;
    const cols = 15;
    const initialMatrix: string[][] = Array(rows)
      .fill(null)
      .map(() =>
        Array(cols)
          .fill(null)
          .map(() => (Math.random() > 0.5 ? "1" : "0"))
      );
    setBinaryMatrix(initialMatrix);

    // Animate binary matrix
    const animate = () => {
      setBinaryMatrix((prev) =>
        prev.map((row) =>
          row.map(() => (Math.random() > 0.5 ? "1" : "0"))
        )
      );
      animationRef.current = requestAnimationFrame(animate);
    };

    const interval = setInterval(() => {
      animate();
    }, 100);

    return () => {
      clearInterval(interval);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 15;
      const rotateY = (centerX - x) / 15;

      container.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleMouseLeave = () => {
      container.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section id="intro" className="px-4 py-8 lg:max-w-6xl lg:mx-auto">
      <div className="flex flex-col items-center md:flex-row gap-8">
        <div className="flex-1 flex justify-center md:justify-start">
          <div className="w-full max-w-sm relative">
            {/* Binary code background animation */}
            <div className="absolute -inset-4 overflow-hidden rounded-3xl opacity-10">
              <div className="absolute inset-0 binary-rain">
                {binaryMatrix.map((row, rowIndex) => (
                  <div key={rowIndex} className="flex gap-1 mb-1">
                    {row.map((bit, colIndex) => (
                      <span
                        key={colIndex}
                        className="text-white font-mono text-xs opacity-20 binary-char"
                        style={{
                          animationDelay: `${(rowIndex + colIndex) * 0.1}s`,
                          animation: `binaryFade 2s ease-in-out infinite`,
                          color: bit === "1" ? "rgba(32, 191, 85, 0.4)" : "rgba(255, 255, 255, 0.2)",
                        }}
                      >
                        {bit}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div
              ref={containerRef}
              className="relative border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.05)] rounded-3xl backdrop-blur shadow-[0_4px_30px_rgba(0,0,0,0.1)] overflow-hidden transition-transform duration-300"
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-3xl">
                <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-[#20bf55] via-[#20bf55] to-[#20bf55] animate-gradient-rotate opacity-20 blur-sm"></div>
              </div>

              {/* Binary overlay on sides */}
              <div className="absolute left-2 top-0 bottom-0 flex flex-col justify-center gap-1 opacity-40 z-10">
                {Array(8)
                  .fill(null)
                  .map((_, i) => (
                    <span
                      key={i}
                      className="font-mono text-xs binary-fall text-white"
                      style={{
                        animationDelay: `${i * 0.2}s`,
                        color: i % 2 === 0 ? "rgba(32, 191, 85, 0.6)" : "rgba(255, 255, 255, 0.4)",
                      }}
                    >
                      {Math.random() > 0.5 ? "1" : "0"}
                    </span>
                  ))}
              </div>

              <div className="absolute right-2 top-0 bottom-0 flex flex-col justify-center gap-1 opacity-40 z-10">
                {Array(8)
                  .fill(null)
                  .map((_, i) => (
                    <span
                      key={i}
                      className="font-mono text-xs binary-fall text-white"
                      style={{
                        animationDelay: `${i * 0.3}s`,
                        color: i % 2 === 0 ? "rgba(32, 191, 85, 0.6)" : "rgba(255, 255, 255, 0.4)",
                      }}
                    >
                      {Math.random() > 0.5 ? "1" : "0"}
                    </span>
                  ))}
              </div>

              {/* Person Image Container */}
              <div className="relative z-20 p-8 flex items-center justify-center">
                <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 group/image-container">
                  {/* Outer glow ring */}
                  <div className="absolute -inset-8 rounded-full bg-linear-to-r from-[#20bf55] via-[#5ED2F3] to-[#20bf55] opacity-20 blur-2xl animate-pulse-glow"></div>
                  
                  {/* Animated border rings */}
                  <div className="absolute -inset-6 rounded-full border-2 border-[rgba(32,191,85,0.3)] animate-rotate-slow"></div>
                  <div className="absolute -inset-3 rounded-full border border-[rgba(32,191,85,0.2)] animate-rotate-reverse"></div>
                  
                  {/* Image with binary overlay effect */}
                  <div className="absolute inset-0 rounded-full border-4 border-[rgba(32,191,85,0.8)] shadow-[0_0_50px_rgba(32,191,85,0.6)] overflow-hidden image-wrapper group-hover/image-container:border-[rgba(32,191,85,1)] group-hover/image-container:shadow-[0_0_70px_rgba(32,191,85,0.8)] transition-all duration-500">
                    <Image
                      src="/images/profile.png"
                      alt="Polash Ahmad"
                      fill
                      className="object-cover rounded-full group-hover/image-container:scale-110 transition-transform duration-700 ease-out"
                      priority
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-linear-to-br from-[rgba(32,191,85,0.1)] via-transparent to-[rgba(32,191,85,0.15)] opacity-60 group-hover/image-container:opacity-80 transition-opacity duration-500"></div>
                    
                    {/* Binary overlay mask */}
                    <div className="absolute inset-0 bg-black opacity-20 binary-overlay group-hover/image-container:opacity-10 transition-opacity duration-500"></div>
                    
                    {/* Scan line effect */}
                    <div className="absolute inset-0 scanline-overlay opacity-0 group-hover/image-container:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 shimmer-effect opacity-0 group-hover/image-container:opacity-100"></div>
                  </div>
                  
                  {/* Corner accents */}
                  <div className="absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4 border-[#20bf55] rounded-tl-lg opacity-60 animate-corner-glow"></div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 border-t-4 border-r-4 border-[#20bf55] rounded-tr-lg opacity-60 animate-corner-glow"></div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-4 border-l-4 border-[#20bf55] rounded-bl-lg opacity-60 animate-corner-glow"></div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4 border-[#20bf55] rounded-br-lg opacity-60 animate-corner-glow"></div>

                  {/* Rotating binary ring */}
                  <div className="absolute -inset-4 rounded-full border-2 border-[rgba(32,191,85,0.4)] opacity-40 animate-rotate-slow">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 font-mono text-sm" style={{ color: "rgba(32, 191, 85, 0.7)" }}>
                      01001000
                    </div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 font-mono text-sm" style={{ color: "rgba(32, 191, 85, 0.7)" }}>
                      01101001
                    </div>
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 font-mono text-sm" style={{ color: "rgba(32, 191, 85, 0.7)" }}>
                      01001000
                    </div>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 font-mono text-sm" style={{ color: "rgba(32, 191, 85, 0.7)" }}>
                      01101001
                    </div>
                  </div>

                  {/* Floating binary particles */}
                  {Array(12)
                    .fill(null)
                    .map((_, i) => (
                      <div
                        key={i}
                        className="absolute binary-particle"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${i * 0.3}s`,
                        }}
                      >
                        <span 
                          className="font-mono text-xs"
                          style={{
                            color: i % 3 === 0 ? "rgba(32, 191, 85, 0.8)" : "rgba(255, 255, 255, 0.5)",
                          }}
                        >
                          {Math.random() > 0.5 ? "1" : "0"}
                        </span>
                      </div>
                    ))}
                </div>
              </div>

              {/* Binary code footer */}
              <div className="absolute bottom-4 left-0 right-0 px-4 z-10">
                <div className="flex justify-center gap-2 overflow-hidden">
                  {Array(20)
                    .fill(null)
                    .map((_, i) => (
                      <span
                        key={i}
                        className="font-mono text-xs binary-scroll"
                        style={{
                          animationDelay: `${i * 0.1}s`,
                          color: i % 4 === 0 ? "rgba(32, 191, 85, 0.7)" : "rgba(255, 255, 255, 0.4)",
                        }}
                      >
                        {Math.random() > 0.5 ? "1" : "0"}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Introduction />
      </div>
    </section>
  );
}
