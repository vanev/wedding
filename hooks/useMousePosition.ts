import { useEffect, useState } from "react";
import Position, { empty } from "../lib/Position";

const useMousePosition = (): Position => {
  const [position, setPosition] = useState<Position>(empty);

  useEffect(() => {
    let requestId: number | null = null;

    const handleMouseMove = (event: MouseEvent) => {
      requestId = window.requestAnimationFrame(() => {
        setPosition([event.x, event.y]);
        requestId = null;
      });
    };

    window.addEventListener("mousemove", handleMouseMove, true);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove, true);
      if (requestId) window.cancelAnimationFrame(requestId);
    };
  }, []);

  return position;
};

export default useMousePosition;
