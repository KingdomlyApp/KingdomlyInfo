import { ParallaxContainer } from "./Parallax/Container";
import { BsArrowRight } from "react-icons/bs";
import NavbarLandingPage from "./Navbar/Navbar";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

export default function ParallaxHero({ setLoading }) {
  // Defining animations
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const animationVariants = {
    hidden: {
      opacity: 0,
      y: 250,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <div
        className=" landscape:block sm:block bg-cover bg-center h-fit "
        style={{
          backgroundSize: "cover",
        }}
      >
        <NavbarLandingPage />
        <ParallaxContainer>
          <ParallaxBanner className=" mt-20">
            {/* <img src="/assets/castle.svg" alt="" className="absolute z-50" /> */}
            <ParallaxBannerLayer image="/assets/accent3v2.png" speed={-18} />
            <ParallaxBannerLayer image="/assets/accent2v2.png" speed={-18} />
            <ParallaxBannerLayer image="/assets/accent1v2.png" speed={-22} />
            <ParallaxBannerLayer image="/assets/grass2v2.png" speed={-12} />
            <div className="z-[100] mt-4 padding gap-5 items-center sm:items-start sm:gap-0 flex flex-col-reverse sm:grid grid-cols-2">
              <motion.img
                initial={{ opacity: 0, y: -250 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                src="/assets/castle.svg"
                className="z-10  w-full xs:w-[80%] mt-5  sm:w-full col-start-2 "
                alt=""
                onLoad={() => {
                  setLoading(false);
                }}
              />
              <ParallaxBannerLayer image="/assets/grass1v2.png" speed={-6} />
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
                className="flex flex-col col-start-1 text-center sm:text-start row-start-1 translate-y-1 pt-6 sm:pt-20 pl-5  z-50"
              >
                <h1 className="text-3xl w-full xs:text-5xl sm:text-6xl lg:text-8xl whitespace-nowrap text-white font-bold drop-shadow-lg">
                  NFT Creation <br />
                  <span className="text-transparent bg-clip-text text-2xl xs:text-4xl  sm:mt-0 sm:text-6xl lg:text-7xl bg-gradient-to-r from-[#F0DC22] to-[#CE8E15]">
                    Made Simple <br />
                  </span>
                </h1>
                <p className="mt-4 z-20 text-base xs:text-lg sm:text-xl text-white ">
                  Make your own generative art collection and tokenize it in
                  less than 10 minutes.
                </p>
                <div className="mt-8 xs:mt-8 sm:mt-10 md:mt-12 flex sm:block justify-center w-full items-center basis-full ">
                  <a
                    href="https://www.kingdomly.app/mint"
                    className="flex absolute  items-center justify-center w-fit px-2 py-1 md:px-4 md:py-2 text-xs sm:text-lg md:text-xl text-[#A68A27] border-[#A68A27] border-2 hover:bg-[#A68A27] hover:text-white font-medium rounded-lg "
                  >
                    Begin Now
                    <BsArrowRight size={20} className="ml-2 md:ml-4" />
                  </a>
                </div>
              </motion.div>
            </div>
          </ParallaxBanner>
        </ParallaxContainer>
        <div
          id="about"
          className="flex justify-center mt-20 lg:mt-[20vh] bg-gradient-to-b px-5 from-[#121B1C] via-[#0c1313] to-[#0c1313]"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
            className="flex flex-wrap bg-[#293132] rounded-3xl basis-[100%] sm:basis-[80%] "
          >
            <div className="basis-full md:basis-1/2  p-5 sm:p-8  xl:p-20">
              <h1 className="block text-white text-sm md:text-base lg:text-lg xl:text-xl">
                Easily launch your collection and add all your favorite
                features! In Kingdomly, we empower you to scale your community
                into a Kingdom! Check out some of the features below.
              </h1>
            </div>
            <div className="flex basis-full md:basis-1/2 xs:justify-center xl:justify-end xl:pr-8 items-center">
              <img
                src="/assets/sparkles.png"
                className="hidden md:block sm:h-[80%] lg:h-[70%] xl:h-[90%]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
