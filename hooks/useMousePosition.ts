import { useEffect, useState } from "react";
import Position, { empty } from "../lib/Position";

const useMousePosition = (): Position => {
  const [position, setPosition] = useState<Position>(empty);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      window.requestAnimationFrame(() => {
        setPosition([event.x, event.y]);
      });
    };

    window.addEventListener("mousemove", handleMouseMove, true);

    return () => window.removeEventListener("mousemove", handleMouseMove, true);
  }, []);

  return position;
};

export default useMousePosition;
