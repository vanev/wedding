import { useEffect, useState } from "react";

type Size = [number, number];

const empty: Size = [0, 0];

const useWindowSize = () => {
  const [size, setSize] = useState<Size>(empty);

  useEffect(() => {
    setSize([window.innerWidth, window.innerHeight]);

    const handleResize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
};

export default useWindowSize;
