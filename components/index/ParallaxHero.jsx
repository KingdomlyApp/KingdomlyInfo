import { ParallaxContainer } from "./Parallax/Container";
import { BsArrowRight } from "react-icons/bs";
import NavbarLandingPage from "./Navbar/Navbar";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

export default function ParallaxHero() {
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
          <ParallaxBanner className=" mt-20 aspect-[1.5/1]">
            {/* <img src="/assets/castle.svg" alt="" className="absolute z-50" /> */}
            <ParallaxBannerLayer image="/assets/accent3v2.png" speed={-18} />
            <ParallaxBannerLayer image="/assets/accent2v2.png" speed={-18} />
            <ParallaxBannerLayer image="/assets/accent1v2.png" speed={-22} />
            <ParallaxBannerLayer image="/assets/grass2v2.png" speed={-12} />
            <motion.img
              initial={{ opacity: 0, y: -250 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              src="/assets/castle.svg"
              className="absolute h-[90%] right-[5%] bottom-[3%] md:right-[8%]  md:bottom-[7%] lg:right-[8%] lg:bottom-[7%]"
              alt=""
            />
            <ParallaxBannerLayer image="/assets/grass1v2.png" speed={-6} />
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
              className="flex flex-row flex-wrap translate-y-1 pt-6 sm:pt-20 pl-5 lg:pl-20 xl:pl-40 z-50"
            >
              <h1 className="text-2xl xs:text-4xl sm:text-6xl lg:text-8xl text-white font-bold drop-shadow-lg">
                Dare to join <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F0DC22] to-[#CE8E15]">
                  Metaverse <br /> Royalty?
                </span>
              </h1>
              <div className="mt-4 xs:mt-8 sm:mt-12 flex-col basis-full ">
                <a
                  href="https://www.kingdomly.app/"
                  className="flex absolute  items-center justify-center w-fit px-2 py-1 md:px-4 md:py-2 text-xs sm:text-lg md:text-xl text-[#A68A27] border-[#A68A27] border-2 hover:bg-[#A68A27] hover:text-white font-medium rounded-lg "
                >
                  Into the Fray
                  <BsArrowRight size={20} className="ml-2 md:ml-4" />
                </a>
              </div>
            </motion.div>
          </ParallaxBanner>
        </ParallaxContainer>
        <div
          id="about"
          className="flex justify-center mt-[20vh] bg-gradient-to-b px-5 from-[#121B1C] via-[#0c1313] to-[#0c1313]"
        >
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={animationVariants}
            className="flex flex-wrap bg-[#293132] rounded-3xl basis-[100%] md:basis-[80%] "
          >
            <div className="basis-full md:basis-1/2  p-8  xl:p-20">
              <h1 className="block text-white text-sm md:text-base lg:text-lg xl:text-xl">
                Seamlessly lend NFTs and earn interest while holding! In
                Kingdomly, we allow crypto enthusiasts the opportunity to access
                new experiences without making the commitment to a full price
                purchase!
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
