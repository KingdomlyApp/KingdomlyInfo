import { useEffect, useState, useLayoutEffect } from "react";

export const useWindowLayout = () => {
  const [inner, setInner] = useState({
    width: 0,
    height: 0,
  });

  const isDomLoaded = typeof window !== "undefined";
  const useIsomorphicLayoutEffect = isDomLoaded ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    setInner({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  return inner;
};
