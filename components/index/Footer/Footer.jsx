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
        backgroundColor:"#101819",

      }}
    >
      {/* FILLER DIV */}
      <div className=" py-20"    style={{
        backgroundColor:"#101819",
         backgroundImage: 'url("/assets/stars.png")',
      }}><div
        className="flex flex-row items-center justify-center mx-10 md:mx-20 flex-wrap"
        id="contactus"
      >
        <h1 className="basis-full text-center text-3xl md:text-4xl lg:text-5xl text-white font-extrabold drop-shadow-lg">
          CONNECT WITH US
        </h1>
        <p className=" text-white text-sm sm:text-base lg:text-xl text-center font-light pt-12 lg:w-1/2 mb-12">
          Join the revolution to make the gaming NFT lending and borrowing
          markets open for all. Subscribe to our waitlist to have early access
          to our cross chain borrowing and lending protocol.
        </p>
    
        <form
          onSubmit={handleSubmit}
          className="basis-full flex flex-wrap justify-center"
        >
          <input
            type="text"
            autoComplete="email"
            id="email"
            name="email"
            className="bg-[#272F30] placeholder:text-[#969696] font-normal text-white text-xs md:text-sm rounded-lg w-full basis-9/12 sm:basis-1/3 sm:w-1/3 p-2.5 mx-2 shadow-md"
            placeholder="Enter your e-mail"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          {submitted == false ? (
            <>
              <button
                type="submit"
                class="hidden md:block text-[#A68A27] font-semibold border border-[#A68A27] hover:bg-[#A68A27] hover:text-white rounded-lg shadow-lg text-sm px-3 py-2.5 mt-2 sm:mt-0"
              >
                Subscribe
              </button>
              <button type="submit" class="md:hidden px-1.5 sm:mt-0">
                <BsFillArrowRightCircleFill size={25} color={"#A68A27"} />
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                class="hidden md:block text-white font-semibold bg-[#A68A27] hover:bg-amber-200 rounded-lg shadow-lg text-sm px-3 py-2.5 mt-2 sm:mt-0"
              >
                Thank you!
              </button>
              <button type="button" class="md:hidden px-1.5 sm:mt-0">
                <BsFillArrowRightCircleFill size={25} color={"#A68A27"} />
              </button>
            </>
          )}
        </form>
           
      </div>
   <div className="mt-8 basis-full flex justify-center">
      <img src="/assets/feather.png" alt="" />
      </div>
      </div>
      
      <footer className="bg-transparent pt-20 lg:pt-16 px-0 sm:px-20">
        <div className="flex flex-wrap">
         <div className="basis-full lg:basis-[20%] flex mb-2">
          <a
            href="#"
            className="flex justify-start basis-full pb-3 sm:pb-0 md:basis-0"
          >
            <img
              src="/assets/logo.png"
              className="self-center mr-3 h-9"
              alt="Kingdomly Logo"
            />
            <span className="self-center text-2xl text-white font-bold whitespace-nowrap ">
              Kingdomly
            </span>
          </a>
          </div>
           <div className="basis-full lg:basis-[25%] flex flex-wrap mb-4">
   
            <h3 className="basis-full  text-xl text-white font-semibold ">
              Company
            </h3>
            
                  <a
                href="#about"
                className="text-white mr-3 text-xs sm:text-base lg:text-lg hover:underline md:mr-6"
              >
                About
              </a>
                <a
                href="#rentals"
                className="text-white mr-3 text-xs sm:text-base lg:text-lg hover:underline md:mr-6 "
              >
                Rentals
              </a>

                <a
                href="#roadmap"
                className="text-white text-xs sm:text-base lg:text-lg hover:underline mr-3 md:mr-6"
              >
                Roadmap
              </a>

                 <a
                href="#/"
                className="text-white md:mt-0 flex items-center text-xs sm:text-base lg:text-lg hover:underline"
              >
                Docs
                <BsBoxArrowUpRight size={12} className="ml-1" />
              </a>
          </div>
           <div className="basis-full lg:basis-[25%] flex flex-wrap mb-4">
   
            <h3 className="basis-full text-xl text-white font-semibold ">
              Social Media
            </h3>
           <div className="basis-full flex ">
          <a
            href="https://twitter.com/KingdomlyApp"
            title="Twitter"
            target="_href"
            className="self-center pr-3"
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
          </div>

          <div className="basis-full lg:basis-[25%] flex flex-wrap mb-4">
   
            <h3 className="basis-full text-xl text-white font-semibold ">
              Contact Us
            </h3>
            <p className="text-white">kingdomlyemail@gmail.com</p>
       
          </div>
       
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
