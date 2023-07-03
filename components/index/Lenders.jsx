import { AnimatePresence, motion } from "framer-motion";
import LenderItem from "./LenderGridItems";
import { useWindowLayout } from "../hooks/Window";

export default function Lenders({ setIsCreation, isCreation }) {
  const inner = useWindowLayout();

  return (
    <>
      <div
        className="vertical pt-[10vh] md:pt-[10vh] padding "
        style={{
          backgroundColor: "#0c1313",
          backgroundImage: 'url("/assets/stars.png")',
        }}
      >
        <div className="flex justify-center mt-[20vh] mb-[10vh]">
          <strong className="text-white text-3xl sm:text-5xl text-center">
            What We Offer
          </strong>
        </div>
        <div className="flex flex-wrap justify-center items-start pt-10 pb-20">
          <LenderItem content={"/assets/offer1.png"} />
          <LenderItem content={"/assets/offer2.png"} />
          <LenderItem content={"/assets/offer3.png"} />
          <LenderItem content={"/assets/offer4.png"} />
          <LenderItem content={"/assets/offer5.png"} />
        </div>
      </div>
    </>
  );
}
