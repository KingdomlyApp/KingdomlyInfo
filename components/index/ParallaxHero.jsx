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
          <div className="flex flex-row flex-wrap translate-y-24 items-center justify-center mx-20 md:w-1/2 lg:w-1/2  ">
            <h1 className="text-5xl md:text-7xl lg:text-7xl text-color-secondary font-bold drop-shadow-lg">
              Adventure into metaverse reality
            </h1>
            <p className="text-white text-medium pt-5">
              A decentralized exchange that allows the lenders to post and farm
              yield on their available gaming NFT’s in one location, with
              specific expectations set.
            </p>
          </div>
          <div className="flex flex-row translate-y-24 items-center justify-center mx-20 pt-5 w-1/2  ">
            <div className="flex-col basis-full">
              <button
                type="button"
                class="text-black bg-amber-300 hover:bg-amber-500 font-medium rounded-lg shadow-lg text-sm px-5 py-2.5 mr-2 mb-2  "
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
