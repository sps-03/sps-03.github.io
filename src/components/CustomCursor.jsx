import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [innerPosition, setinnerPosition] = useState({ x: -20, y: -20 });
  const [outerPosition, setOuterPosition] = useState({ x: -20, y: -20 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const moveCursor = (e) => {
      setinnerPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const followOuterCursor = () => {
      const xDiff = innerPosition.x - outerPosition.x;
      const yDiff = innerPosition.y - outerPosition.y;

      setOuterPosition((prev) => ({
        x: prev.x + xDiff * 0.1,
        y: prev.y + yDiff * 0.1,
      }));
    };

    const animationFrameId = requestAnimationFrame(followOuterCursor);
    return () => cancelAnimationFrame(animationFrameId);
  }, [innerPosition, outerPosition]);

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: `${outerPosition.y}px`,
          left: `${outerPosition.x}px`,
          pointerEvents: "none",
          zIndex: 9998,
          transform: "translate(-50%, -50%)",
          transition: "opacity 0.3s ease",
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div
          className="border-2 border-secondary-light dark:border-secondary-dark"
          style={{
            width: "15px",
            height: "15px",
            borderRadius: "50%",
          }}
        />
      </div>

      <div
        style={{
          position: "fixed",
          top: `${innerPosition.y}px`,
          left: `${innerPosition.x}px`,
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
          transition: "opacity 0.3s ease",
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div
          className="bg-accent-light dark:bg-accent-dark"
          style={{
            width: "9px",
            height: "9px",
            borderRadius: "50%",
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor;
