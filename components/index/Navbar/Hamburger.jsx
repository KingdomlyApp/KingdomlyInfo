import React from "react";

const Hamburger = ({ onClick, isOpen }) => {
  return (
    <button aria-expanded={isOpen} onClick={onClick}>
      <svg className="hamburger" viewBox="0 0 100 100" width="40">
        <line
          className={`line mix-blend-difference stroke-white top`}
          x1="85"
          x2="15"
          y1="40"
          y2="40"
          strokeWidth={9}
          strokeDasharray={"80"}
          strokeLinecap="round"
        ></line>
        <line
          className={`line mix-blend-difference stroke-white bottom`}
          x1="15"
          x2="85"
          y1="60"
          y2="60"
          strokeWidth={9}
          strokeDasharray={"80"}
          strokeLinecap="round"
        ></line>
      </svg>
    </button>
  );
};

export default Hamburger;
