import { SiFacebook, SiDiscord, SiNotion, SiTwitter } from "react-icons/si";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export function FooterLandingPage() {
  return (
    <div className="pb-16" style={{ backgroundColor: "#E5B052" }}>
      <div
        className="w-full min-h-[25vh] md:min-h-[50vh] lg:min-h-[70vh]"
        style={{
          backgroundImage: `url('/assets/bottom bg.png')`,
          backgroundSize: "cover",
        }}
      />
      <div className="flex flex-row items-center justify-center mx-10 md:mx-20 flex-wrap">
        <h1 className="basis-full text-center text-2xl sm:text-3xl md:text-5xl text-color-secondary font-extrabold drop-shadow-lg">
          CONNECT WITH US
        </h1>
        <p className=" text-white text-sm sm:text-md md:text-xl text-center pt-5 lg:w-1/2">
          Join the revolution to make the gaming NFT lending and borrowing
          markets open for all. Subscribe to our waitlist to have early access
          to our cross chain borrowing and lending protocol.
        </p>
        <div className="basis-full flex items-center justify-center py-10">
          <SiFacebook
            className="drop-shadow-md icon-hover"
            style={{ marginRight: 30 }}
            color="white"
            size={25}
          />
          <SiTwitter
            className="drop-shadow-md"
            style={{ marginRight: 30 }}
            color="white"
            size={25}
          />
          <SiDiscord
            className="drop-shadow-md"
            style={{ marginRight: 30 }}
            color="white"
            size={25}
          />
          <SiNotion
            className="drop-shadow-md"
            style={{ marginRight: 30 }}
            color="white"
            size={25}
          />
        </div>
        <div className="basis-full flex flex-wrap justify-center">
          <input
            type="text"
            autocomplete="email"
            className="bg-white border font-semibold text-black text-xs md:text-sm rounded-lg w-full basis-9/12 sm:basis-1/3 sm:w-1/3 p-2.5 mx-2 shadow-md"
            placeholder="Email Address"
            required
          />
          <button
            type="button"
            class="hidden md:block text-white font-semibold bg-amber-300 hover:bg-emerald-900 rounded-lg shadow-lg text-sm px-3 py-2.5 mt-2 sm:mt-0"
          >
            Subscribe
          </button>
          <button type="button" class="md:hidden px-1.5 sm:mt-0">
            <BsFillArrowRightCircleFill size={25} color={"white"} />
          </button>
        </div>
      </div>
      <footer className="bg-transparent pt-16 px-0 sm:px-20">
        <div className="flex flex-wrap justify-center md:justify-between px-5">
          <a
            href="#/"
            className="flex justify-center basis-full pb-3 sm:pb-0 md:basis-0"
          >
            <img
              src="/assets/logo.png"
              className="mr-3 h-9"
              alt="Kingdomly Logo"
            />
            <span className="self-center text-2xl text-white font-bold whitespace-nowrap ">
              Kingdomly
            </span>
          </a>
          <ul className="flex flex-wrap items-center text-lg text-white">
            <li>
              <a
                href="#"
                className="mr-3 text-sm md:text-lg hover:underline md:mr-6"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="mr-3 text-sm md:text-lg hover:underline md:mr-6 "
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="text-sm md:text-lg hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <hr className=" border-white my-4 md:my-8 mx-4 sm:mx-0" />
        <span className="block  text-white  text-center text-sm md:text-lg ">
          © 2022{" "}
          <a href="#/" className="hover:underline ">
            Kingdomly
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </div>
  );
}

export function FooterMain() {
  return <></>;
}

export default FooterLandingPage;
