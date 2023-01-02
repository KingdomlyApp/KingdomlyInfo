import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";

export function ParallaxContainer({ children, scrollAxis, className, style }) {
  return (
    <ParallaxProvider scrollAxis={scrollAxis}>
      <div className={`${scrollAxis} bg-[#121B1C]`} style={style}>
        <div className={className}>{children}</div>
      </div>
    </ParallaxProvider>
  );
}
