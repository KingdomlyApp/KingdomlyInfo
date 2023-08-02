import { AnimatePresence, motion } from "framer-motion";
import LenderItem from "./LenderGridItems";
import { useWindowLayout } from "../hooks/Window";

export default function Lenders({ setIsCreation, isCreation }) {
  const inner = useWindowLayout();

  return (
    <>
      <div
        className="vertical pt-3 sm:pt-[10vh] padding "
        style={{
          backgroundColor: "#0c1313",
          backgroundImage: 'url("/assets/stars.png")',
        }}
      >
        <div className="flex justify-center mt-16 sm:mt-[20vh] mb-5 sm:mb-10">
          <strong className="text-white text-3xl sm:text-5xl text-center">
            What We Offer
          </strong>
        </div>

        {/* <div className="grid px-4 overflow-scroll md:overflow-hidden rounded-xl bg-[#111A19] py-3 place-items-center">
          <div className="flex gap-5">
            <button
              onClick={() => {
                setIsCreation(true);
              }}
              className={`${
                isCreation
                  ? "bg-[#EED821] text-[#111A19]"
                  : "bg-transparent duration-500 animated-button text-white"
              } rounded-xl defaultButton`}
            >
              NFT Creation
            </button>
            <button
              onClick={() => {
                setIsCreation(false);
              }}
              className={`${
                !isCreation
                  ? "bg-[#EED821] text-[#111A19]"
                  : "bg-transparent duration-500 animated-button text-white"
              } rounded-xl defaultButton`}
            >
              Lending and Renting
            </button>
          </div>
        </div> */}
        <AnimatePresence>
          {isCreation && (
            <motion.div
              initial={{ x: -inner.width }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-wrap  justify-center items-start pt-10 pb-20"
            >
              <LenderItem content={"/assets/nft1.png"} />
              <LenderItem content={"/assets/nft2.png"} />
              <LenderItem content={"/assets/nft3.png"} />
              <LenderItem content={"/assets/nft4.png"} />
              <LenderItem content={"/assets/nft5.png"} />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {!isCreation && (
            <motion.div
              initial={{ x: inner.width }}
              animate={{ x: 0 }}
              exit={{ x: inner.width }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-wrap  justify-center items-start pt-10 pb-20"
            >
              <LenderItem content={"/assets/offer1.png"} />
              <LenderItem content={"/assets/offer2.png"} />
              <LenderItem content={"/assets/offer3.png"} />
              <LenderItem content={"/assets/offer4.png"} />
              <LenderItem content={"/assets/offer5.png"} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.div
        initial={{ x: inner.width }}
        animate={{ x: 0 }}
        exit={{ x: inner.width }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-wrap hidden justify-center items-start pt-10 pb-20"
      >
        <LenderItem content={"/assets/offer1.png"} />
        <LenderItem content={"/assets/offer2.png"} />
        <LenderItem content={"/assets/offer3.png"} />
        <LenderItem content={"/assets/offer4.png"} />
        <LenderItem content={"/assets/offer5.png"} />
      </motion.div>
    </>
  );
}
