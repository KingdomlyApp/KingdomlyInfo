import ParallaxHero from "../components/index/ParallaxHero";
import Lenders from "../components/index/Lenders";
import Renters from "../components/index/Renters";
import Roadmap from "../components/index/Roadmap";
import FooterLandingPage from "../components/index/Footer/Footer";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import logo from "../public/assets/logo.png";
import { useWindowLayout } from "../components/hooks/Window";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isCreation, setIsCreation] = useState(true);
  const inner = useWindowLayout();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3500);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <LoadingComponent />
      ) : (
        <>
          {/* <--NAV & HERO--> */}
          <ParallaxHero />

          {/* <--LENDERS--> */}
          <Lenders isCreation={isCreation} setIsCreation={setIsCreation} />

          {/* <--RENTALS--> */}
          <Renters isCreation={isCreation} />

          {/* <--Milestones--> */}
          <Roadmap />

          {/* <--FOOTER--> */}
          <FooterLandingPage />
        </>
      )}
    </AnimatePresence>
  );
}

const LoadingComponent = () => {
  const [loader, setLoader] = useState(true);
  const inner = useWindowLayout();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoader(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {loader && (
        <motion.main
          exit={{ x: -inner.width }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-screen grid place-items-center h-screen"
        >
          <section>
            <div className=" -mt-10 flex flex-col items-center gap-3 text-white ">
              <Image src={logo} alt="Kingdomly" width={120} height={120} />
              <h1 className="text-4xl mb-5 font-semibold ">Kingdomly</h1>
            </div>
            <div className="grid place-items-center">
              <span className="landingLoader"></span>
            </div>
          </section>
        </motion.main>
      )}
    </AnimatePresence>
  );
};
