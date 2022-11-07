import { SiFacebook, SiDiscord, SiNotion, SiTwitter } from "react-icons/si";
import { BsFillArrowRightCircleFill, BsBoxArrowUpRight } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";

export function FooterLandingPage() {
  const firebaseConfig = {
    apiKey: "AIzaSyCJHLTycu5mf4YFc99bK3UsweTYkhgL19g",
    authDomain: "kingdomly.firebaseapp.com",
    projectId: "kingdomly",
    storageBucket: "kingdomly.appspot.com",
    messagingSenderId: "998091339119",
    appId: "1:998091339119:web:046036a8ed540556a3649a",
  };

  const firebase = initializeApp(firebaseConfig);
  const db = getFirestore(firebase);

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "users"), {
        email: email,
        dateSubmitted: new Date(),
      });
      setSubmitted(true);
    } catch (e) {
      console.error("Error adding user:", e);
    }
  };

  return (
    <div
      className="w-full bg-cover h-fit pb-5 "
      style={{
        backgroundImage: `url('/assets/bottom bg.png')`,
      }}
    >
      {/* FILLER DIV */}
      <div className="h-[50vh] md:h-[75vh]"></div>
      <div
        className="flex flex-row items-center justify-center mx-10 md:mx-20 flex-wrap"
        id="contactus"
      >
        <h1 className="basis-full text-center text-3xl md:text-4xl lg:text-5xl text-color-secondary font-extrabold drop-shadow-lg">
          CONNECT WITH US
        </h1>
        <p className=" text-white text-sm sm:text-base lg:text-xl text-center pt-5 lg:w-1/2">
          Join the revolution to make the gaming NFT lending and borrowing
          markets open for all. Subscribe to our waitlist to have early access
          to our cross chain borrowing and lending protocol.
        </p>
        <div className="basis-full flex items-center justify-center py-10">
          <a
            href="https://twitter.com/KingdomlyApp"
            title="Twitter"
            target="_href"
            className="self-center px-3"
          >
            <SiTwitter
              className="drop-shadow-md icon-hover"
              color="white"
              size={25}
            />
          </a>

          <a
            href="https://discord.gg/DnGENNCMgs"
            title="Discord"
            target="_href"
            className="self-center px-3"
          >
            <SiDiscord
              className="drop-shadow-md icon-hover"
              color="white"
              size={25}
            />
          </a>
          <a
            href="https://kingdomly.notion.site/kingdomly/Kingdomly-474d8b9e948543cc83974c701b50523b"
            title="Notion"
            target="_href"
            className="self-center px-3"
          >
            <SiNotion
              className="drop-shadow-md icon-hover"
              color="white"
              size={25}
            />
          </a>
        </div>
        <form
          onSubmit={handleSubmit}
          className="basis-full flex flex-wrap justify-center"
        >
          <input
            type="text"
            autoComplete="email"
            id="email"
            name="email"
            className="bg-white border font-semibold text-black text-xs md:text-sm rounded-lg w-full basis-9/12 sm:basis-1/3 sm:w-1/3 p-2.5 mx-2 shadow-md"
            placeholder="Email Address"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          {submitted == false ? (
            <>
              <button
                type="submit"
                class="hidden md:block text-white font-semibold bg-amber-600 hover:bg-amber-300 rounded-lg shadow-lg text-sm px-3 py-2.5 mt-2 sm:mt-0"
              >
                Subscribe
              </button>
              <button type="submit" class="md:hidden px-1.5 sm:mt-0">
                <BsFillArrowRightCircleFill size={25} color={"white"} />
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                class="hidden md:block text-white font-semibold bg-amber-300 hover:bg-amber-200 rounded-lg shadow-lg text-sm px-3 py-2.5 mt-2 sm:mt-0"
              >
                Thank you!
              </button>
              <button type="button" class="md:hidden px-1.5 sm:mt-0">
                <BsFillArrowRightCircleFill size={25} color={"white"} />
              </button>
            </>
          )}
        </form>
      </div>
      <footer className="bg-transparent pt-10 lg:pt-16 px-0 sm:px-20">
        <div className="flex flex-wrap justify-center md:justify-between px-5">
          <a
            href="#"
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
          <ul className="flex flex-wrap items-center text-white">
            <li>
              <a
                href="#about"
                className="mr-3 text-xs sm:text-base lg:text-lg hover:underline md:mr-6"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#rentals"
                className="mr-3 text-xs sm:text-base lg:text-lg hover:underline md:mr-6 "
              >
                Rentals
              </a>
            </li>
            <li>
              <a
                href="#roadmap"
                className="text-xs sm:text-base lg:text-lg hover:underline mr-3 md:mr-6"
              >
                Roadmap
              </a>
            </li>
            <li>
              <a
                href="#/"
                className="mt-1 md:mt-0 flex items-center text-xs sm:text-base lg:text-lg hover:underline"
              >
                Docs
                <BsBoxArrowUpRight size={12} className="ml-1" />
              </a>
            </li>
          </ul>
        </div>
        <hr className=" border-white my-4 md:my-8 mx-4 sm:mx-0" />
        <span className="block  text-white  text-center text-xs sm:text-base lg:text-lg ">
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
export default FooterLandingPage;
