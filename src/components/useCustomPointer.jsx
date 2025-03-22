import { useState, useEffect } from "react";

export default function useCustomPointer() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPointer({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: pointer.y,
        left: pointer.x,
        transform: "translate(-50%, -50%)",
        cursor: "none",
      }}
    >
      🚀
    </div>
  );
}
