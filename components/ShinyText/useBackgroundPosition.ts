import { useEffect, useState, RefObject } from "react";
import Position from "../../lib/Position";
import useMousePosition from "../../hooks/useMousePosition";
import useElementRect from "../../hooks/useElementRect";
import useWindowSize from "../../hooks/useWindowSize";

const useBackgroundPosition = (ref: RefObject<HTMLElement>): Position => {
  const [mouseX, mouseY] = useMousePosition();
  const elRect = useElementRect(ref);
  const [windowWidth, windowHeight] = useWindowSize();

  const x = mouseX - elRect.x - windowWidth;
  const y = mouseY - elRect.y - windowHeight;

  return [x, y];
};

export default useBackgroundPosition;
