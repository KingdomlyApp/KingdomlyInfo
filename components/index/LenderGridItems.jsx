import { useState } from "react";

//Grid Items for "WHAT WE OFFER" Part
export default function ({ index, content, extended }) {
  const [isExtended, setExtended] = useState(false);

  return (
    <>
      <div
        onMouseEnter={() => setExtended(true)}
        onMouseLeave={() => setExtended(false)}
        className={
          isExtended
            ? "block text-start m-3 px-6 py-9 w-11/12 h-fit md:w-52 rounded-lg shadow-md"
            : "block text-center m-3 px-6 py-9 w-11/12 h-52 md:w-52 md:h-52 rounded-lg shadow-md"
        }
        style={{ backgroundColor: isExtended ? "white" : "#0B1814" }}
      >
        <h5
          className={
            isExtended
              ? "mb-5 text-5xl font-bold text-color-secondary text-center"
              : "mb-5 text-5xl font-bold text-color-main text-center"
          }
        >
          {index}
        </h5>
        <p
          className={
            isExtended
              ? "text-xl font-semibold tracking-tight text-color-secondary text-center"
              : "text-xl font-semibold tracking-tight text-color-main text-center"
          }
        >
          {content}
        </p>
        <div className={isExtended ? "" : "hidden"}>
          <hr className="my-5 bg-black h-1" />
          <p className="text-sm lg:text-base font-normal text-black ">
            {extended}
          </p>
        </div>
      </div>
    </>
  );
}
