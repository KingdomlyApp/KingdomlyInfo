import { ParallaxContainer } from "./Parallax/Container";
import { Parallax } from "react-scroll-parallax";
import castle from "../../public/assets/kf-10.png";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

export default function () {
  return (
    <>
      <ParallaxContainer scrollAxis="vertical">
        <ParallaxBanner className="vertical">
          <ParallaxBannerLayer image="/assets/kf-50.png" speed={-22} />
          <ParallaxBannerLayer image="/assets/kf-60.png" speed={-12} />
          <ParallaxBannerLayer image="/assets/kf-80.png" speed={-6} />
          <ParallaxBannerLayer image="/assets/kf-10.png" speed={-2} />
          <ParallaxBannerLayer image="/assets/kf-100.png" speed={5} />
          <div className="flex flex-row flex-wrap translate-y-10 items-center justify-center mx-10 md:mx-20 md:w-1/2 lg:w-1/2  ">
            <h1 className="text-3xl md:text-5xl lg:text-7xl text-color-secondary font-bold drop-shadow-lg">
              Adventure into metaverse reality.
            </h1>
            <p className="text-white text-medium md:text-lg pt-5">
              A decentralized exchange that allows the lenders to post and farm
              yield on their available gaming NFT’s in one location, with
              specific expectations set.
            </p>
            <div className="flex-col basis-full pt-5">
              <button
                type="button"
                class="text-white bg-amber-300 hover:bg-emerald-900 font-medium rounded-lg shadow-lg text-sm md:text-lg  px-5 py-2.5 mr-2 mb-2  "
              >
                Launch App
              </button>
            </div>
          </div> 
        </ParallaxBanner>
      </ParallaxContainer>
    </>
  );
}
