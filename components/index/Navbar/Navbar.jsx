import { useState, useEffect } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import Hamburger from "./Hamburger";
import { motion, AnimatePresence } from "framer-motion";
import { useWindowLayout } from "../../hooks/Window";

export function NavbarLandingPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const inner = useWindowLayout();

  const hiddenVariants = {
    visible: {
      transition: { staggerChildren: 0.1, duration: 0.3 },
      y: 0,
    },
    hidden: window.innerWidth < 1024 && {
      y: -inner.height,
    },
  };

  useEffect(() => {
    let url = window.location.href.split("/");
    let target = url[url.length - 1].toLowerCase();
    let element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  // To toggle bg opacity

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 0 && !scroll) {
        setScroll(true);
      } else if (scrollTop === 0 && scroll) {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  return (
    <>
      <header
        className={`padding ${
          scroll ? "bg-black bg-opacity-20 backdrop-blur-sm " : "bg-transparent"
        }  duration-500 z-[1000] fixed w-full top-0 left-0 text-white shadow items-center flex justify-between py-2 md:py-4 `}
      >
        <a href="#/" className="flex z-10 items-center">
          <img
            src="/assets/logo.png"
            className="mr-3 h-6 sm:h-9"
            alt="Kingdomly Logo"
          />
          <span className="self-center mix-blend-difference text-2xl text-white font-bold whitespace-nowrap ">
            Kingdomly
          </span>
        </a>
        {/* Laptop */}
        <AnimatePresence>
          <motion.ul
            key={isOpen}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={hiddenVariants}
            transition={{ duration: 0.5 }}
            className=" hidden lg:flex gap-8 text-lg font-medium "
          >
            <motion.li
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: -50 },
              }}
              transition={{ duration: 0.5 }}
            >
              <a
                href="https://kingdomly.app/mint"
                rel="noreferrer"
                target="_blank"
                className="block py-2 pr-4 pl-3 text-white hover:text-yellow-400 mdlg:p-0 drop-shadow-lg"
              >
                App
              </a>
            </motion.li>
            <motion.li
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: -60 },
              }}
              transition={{ duration: 0.5 }}
            >
              <a
                className="block py-2 pr-4 pl-3 text-white hover:text-yellow-400 mdlg:hover:bg-transparent mdlg:p-0 drop-shadow-lg cursor-pointer"
                onClick={() => {
                  let rentals = document.getElementById("rentals");
                  setIsOpen(false);
                  rentals &&
                    rentals.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                }}
              >
                Why Us?
              </a>
            </motion.li>
            <motion.li
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: -70 },
              }}
              transition={{ duration: 0.5 }}
            >
              <a
                className="block py-2 pr-4 pl-3 text-white hover:text-yellow-400 mdlg:hover:bg-transparent mdlg:p-0 drop-shadow-lg cursor-pointer"
                onClick={() => {
                  setIsOpen(false);
                  let roadmap = document.getElementById("roadmap");
                  roadmap &&
                    roadmap.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                }}
              >
                Roadmap
              </a>
            </motion.li>
            <motion.li
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: -70 },
              }}
              transition={{ duration: 0.5 }}
            >
              <a
                rel="noreferrer"
                target="_blank"
                href="https://creator.kingdomly.app"
                className="block py-2 pr-4 pl-3 text-white hover:text-yellow-400 mdlg:hover:bg-transparent mdlg:p-0 drop-shadow-lg"
              >
                Create NFT
              </a>
            </motion.li>
            <motion.li
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: -70 },
              }}
              transition={{ duration: 0.5 }}
            >
              <a
                rel="noreferrer"
                target="_blank"
                href="https://docs.kingdomly.app/"
                className="flex items-center py-2 pr-4 pl-3 text-white hover:text-yellow-400 mdlg:p-0 drop-shadow-lg"
              >
                Docs {"\xa0"}
                <BsBoxArrowUpRight size={15} />
              </a>
            </motion.li>
          </motion.ul>
        </AnimatePresence>
        {/* Mobile and Tablet  */}
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              key={isOpen}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={hiddenVariants}
              transition={{ duration: 0.5 }}
              className="flex lg:hidden xs:gap-8 font-semibold lg:h-auto lg:py-0 lg:relative duration-300 h-screen left-0 lg:bg-transparent bg-secondary py-4 pb-6 text-black items-center justify-center lg:text-white absolute top-0 text-center flex-col lg:flex-row text-2xl opacity-1 lg:font-medium w-full gap-3 md:gap-16  lg:gap-16 "
            >
              <motion.li
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: -50 },
                }}
                transition={{ duration: 0.5 }}
              >
                <a
                  href="https://kingdomly.app/mint"
                  rel="noreferrer"
                  target="_blank"
                  className="block py-2 pr-4 pl-3 text-white hover:text-yellow-400 mdlg:p-0 drop-shadow-lg"
                >
                  App
                </a>
              </motion.li>
              <motion.li
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: -60 },
                }}
                transition={{ duration: 0.5 }}
              >
                <a
                  className="block py-2 pr-4 pl-3 text-white hover:text-yellow-400 mdlg:hover:bg-transparent mdlg:p-0 drop-shadow-lg cursor-pointer"
                  onClick={() => {
                    let rentals = document.getElementById("rentals");
                    setIsOpen(false);
                    rentals &&
                      rentals.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                  }}
                >
                  Rentals
                </a>
              </motion.li>
              <motion.li
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: -70 },
                }}
                transition={{ duration: 0.5 }}
              >
                <a
                  className="block py-2 pr-4 pl-3 text-white hover:text-yellow-400 mdlg:hover:bg-transparent mdlg:p-0 drop-shadow-lg cursor-pointer"
                  onClick={() => {
                    setIsOpen(false);
                    let roadmap = document.getElementById("roadmap");
                    roadmap &&
                      roadmap.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                  }}
                >
                  Roadmap
                </a>
              </motion.li>
              <motion.li
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: -70 },
                }}
                transition={{ duration: 0.5 }}
              >
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.kingdomly.app/community/0xfd72c8923ef3236aff248aaaecda956e78824a95"
                  className="block py-2 pr-4 pl-3 text-white hover:text-yellow-400 mdlg:hover:bg-transparent mdlg:p-0 drop-shadow-lg"
                >
                  Community
                </a>
              </motion.li>
              <motion.li
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: -70 },
                }}
                transition={{ duration: 0.5 }}
              >
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://docs.kingdomly.app/"
                  className="flex items-center py-2 pr-4 pl-3 text-white hover:text-yellow-400 mdlg:p-0 drop-shadow-lg"
                >
                  Docs {"\xa0"}
                  <BsBoxArrowUpRight size={15} />
                </a>
              </motion.li>
            </motion.ul>
          )}
        </AnimatePresence>
        <div className="z-10 lg:hidden">
          <Hamburger
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
            isOpen={isOpen}
          />
        </div>
      </header>
    </>
  );
}
export default NavbarLandingPage;
