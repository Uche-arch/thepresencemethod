"use client";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // 1. Track mouse movement
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // 2. Track if hovering over buttons or links to grow the dot
    const mouseOver = (e) => {
      if (e.target.tagName === "BUTTON" || e.target.tagName === "A") {
        setIsHovered(true);
      }
    };

    const mouseOut = () => setIsHovered(false);

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", mouseOver);
    window.addEventListener("mouseout", mouseOut);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", mouseOver);
      window.removeEventListener("mouseout", mouseOut);
    };
  }, []);

  return (
    <>
      {/* The Dot */}
      <div
        className="fixed top-0 left-0 w-4 h-4 bg-blue-600 rounded-full pointer-events-none z-[9999] transition-transform duration-150 ease-out"
        style={{
          transform: `translate3d(${position.x - 8}px, ${position.y - 8}px, 0) scale(${isHovered ? 2.5 : 1})`,
          opacity: position.x === 0 ? 0 : 1, // Hide until mouse moves
        }}
      />
      {/* CSS to hide the actual default cursor */}
      <style jsx global>{`
        body {
          cursor: none;
        }
        a, button {
          cursor: none;
        }
      `}</style>
    </>
  );
}