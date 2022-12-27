import { useState, useEffect } from "react";

/**Mini React hook that returns the height and width of the current window */
export const useWindowResize = () => {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("resize", () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
      });
    return () => {
      window.removeEventListener("resize", () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
      });
    };
  }, []);

  return {
    width,
    height,
    setWidth
  };
};
