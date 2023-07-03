import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function LenderItem({ content }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const animationVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <motion.img
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={animationVariants}
        className="mx-2 mb-4 bg-stone-900 rounded-3xl"
        src={content}
        alt="Offering"
      />
    </>
  );
}
