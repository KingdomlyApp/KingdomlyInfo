import { ParallaxContainer } from "./Parallax/Container";
import { Parallax } from "react-scroll-parallax";
import castle from "../../public/assets/kf-10.png";

import NavbarLandingPage from "./Navbar/Navbar";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

export default function ParallaxHero() {
  return (
    <>
      <div
        className="hidden landscape:block sm:block bg-cover bg-center h-fit"
        style={{
          backgroundImage: 'url("/assets/kf-2.png")',
          backgroundSize: "cover",
        }}
      >
        <NavbarLandingPage />
        <ParallaxContainer>
          <ParallaxBanner className="aspect-[2/1]">
            <ParallaxBannerLayer image="/assets/kf-50.png" speed={-22} />
            <ParallaxBannerLayer image="/assets/kf-60.png" speed={-12} />
            <ParallaxBannerLayer image="/assets/kf-80.png" speed={-6} />
            <ParallaxBannerLayer image="/assets/kf-10.png" speed={-2} />
            <ParallaxBannerLayer image="/assets/kf-100.png" speed={5} />
            <div className="flex flex-row flex-wrap translate-y-10 items-center mx-10 md:mx-20 w-1/2">
              <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-6xl text-color-secondary font-bold drop-shadow-lg">
                Adventure into metaverse reality.
              </h1>
              <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg pt-5">
                Kingdomly is a platform for borrowing and lending gaming NFT’s.
                Kingdomly allows anyone to lend any of their gaming NFTs and
                earn royalties and at the same time hones everyone to enjoy having access
                to exclusive games without the need of buying your own NFT.
              </p>
              <div className="flex-col basis-full pt-5">
                <button
                  type="button"
                  class="text-white bg-amber-600 hover:bg-amber-300 font-medium rounded-lg shadow-lg 
                         text-xs lg:text-lg px-5 py-2.5 mr-2 mb-2  "
                >
                  Launch App
                </button>
              </div>
            </div>
          </ParallaxBanner>
        </ParallaxContainer>
      </div>

      <div
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
      </div>
    </>
  );
}
