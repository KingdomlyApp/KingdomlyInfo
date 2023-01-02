import { ParallaxContainer } from "./Parallax/Container";
import { Parallax } from "react-scroll-parallax";
import Sparkles from "../../public/assets/sparkles.png";
import NavbarLandingPage from "./Navbar/Navbar";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

export default function ParallaxHero() {
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
          <ParallaxBanner className="aspect-[2/1]">
             {/* <img src="/assets/castle.svg" alt="" className="absolute z-50" /> */}
               <ParallaxBannerLayer image="/assets/accent3v2.png"   speed={-18} />
             <ParallaxBannerLayer image="/assets/accent2v2.png"   speed={-18} />
            <ParallaxBannerLayer image="/assets/accent1v2.png"   speed={-22} />
            <ParallaxBannerLayer image="/assets/grass2v2.png"  speed={-12} />
                   <img src="/assets/castle.svg" className="absolute h-[90%] xs:right-[5%] xs:bottom-[5%] md:right-[8%]  md:bottom-[7%] lg:right-[8%] lg:bottom-[7%]"  alt="" />
            <ParallaxBannerLayer image="/assets/grass1v2.png"  speed={-6} /> 
   
        
  
            <div className="flex flex-row flex-wrap translate-y-10 xs:pl-8 md:pl-40 md:pt-20 z-50">
              <h1 className="text-xl xs:text-3xl md:text-4xl lg:text-8xl text-white font-bold drop-shadow-lg">
                Dare to join <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F0DC22] to-[#CE8E15]">Metaverse <br /> Royalty?</span>
              </h1>
         
              <div className="xs:mt-8 md:mt-16 flex-col basis-full ">
                <a
                  href="https://www.kingdomly.app/"
                  class="basis-2/6 text-[#A68A27] border border-[#A68A27] border-2 hover:bg-[#A68A27] hover:text-white xs:text-md md:text-xl font-medium rounded-lg shadow-lg 
                    xs:p-1   md:px-5 md:py-2.5"
                >
                  Into the Fray
                </a>
          
              </div>
            </div>
          </ParallaxBanner>
        </ParallaxContainer>
      <div className="mb-[-16vh] flex  w-full justify-center xs:pb-4 md:pb-0">
        <div className="flex flex-wrap bg-[#293132] rounded-3xl basis-[80%] ">
         
         <div className="basis-full lg:basis-1/2  xs:p-8 xl:p-20"> <h1 className="block text-white text-xs xl:text-xl">Seamlessly lend NFTs and earn interest while holding! In Kingdomly, we allow crypto enthusiasts the opportunity to access new experiences without making the commitment to a full price purchase!</h1>
          </div>
          <div className="flex basis-full lg:basis-1/2 xs:justify-center xl:justify-end xl:pr-8 items-center"><img src="/assets/sparkles.png" className="hidden md:block sm:h-[80%] lg:h-[70%] xl:h-[90%]" alt="sd" /></div>
          </div>
      </div>
      </div>

  

      {/* <div
        className="landscape:hidden sm:hidden h-[595px] xs:h-[700px] xsm:h-[920px] sm:h-[765px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("/assets/md-hero.png")',
          backgroundColor: "#122620",
        }}
      >
        <NavbarLandingPage />
        <div className="flex flex-row flex-wrap translate-y-10 items-center justify-center mx-10 md:mx-20 md:w-1/2 lg:w-1/2  ">
          <h1 className="text-3xl md:text-5xl lg:text-7xl text-color-secondary font-bold drop-shadow-lg">
            Adventure into metaverse reality.
          </h1>
          <p className="text-white text-medium md:text-lg pt-5">
            An exchange that allows the lenders to post and farm yield on their
            available gaming NFT’s in one location, with specific expectations
            set.
          </p>
          <div className="flex-col basis-full pt-5">
            <button
              type="button"
              class="text-white bg-amber-600 hover:bg-amber-300 font-medium rounded-lg shadow-lg text-sm md:text-lg  px-5 py-2.5 mr-2 mb-2  "
            >
              Launch App
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
}
