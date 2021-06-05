import { useEffect, RefObject } from "react";

const useClickOutside = <E extends HTMLElement>(
  ref: RefObject<E | null>,
  onClickOutside: (event: MouseEvent) => unknown,
) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      const { target } = event;
      const clickedOutsideRoot =
        ref.current &&
        target &&
        target instanceof Node &&
        !ref.current.contains(target);

      if (clickedOutsideRoot) {
        onClickOutside(event);
      }
    };

    window.document.addEventListener("mousedown", listener);

    return () => window.document.removeEventListener("mousedown", listener);
  }, [ref.current, onClickOutside]);
};

export default useClickOutside;
