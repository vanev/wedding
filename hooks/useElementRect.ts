import { RefObject } from "react";

const emptyDOMRect: DOMRect = {
  x: 0,
  y: 0,
  height: 0,
  width: 0,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  toJSON: () => "",
};

const useElementRect = (ref: RefObject<HTMLElement>): DOMRect => {
  if (!ref.current) return emptyDOMRect;

  return ref.current.getBoundingClientRect();
};

export default useElementRect;
