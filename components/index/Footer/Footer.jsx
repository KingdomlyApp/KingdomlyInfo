import { SiFacebook, SiDiscord, SiNotion, SiTwitter } from "react-icons/si";
import { BsFillArrowRightCircleFill, BsBoxArrowUpRight } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import { collection, doc, setDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import Swal from "sweetalert2";
import Loader from "../Loader";

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
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    const documentRef = doc(db, "users", email);

    const data = {
      email: email,
      dateRegistered: new Date(),
    };
    event.preventDefault();
    setLoading(true);
    await setDoc(documentRef, data)
      .then((doc) => {
        Swal.fire({
          title: "Success",
          text: `Thanks for connecting with us`,
          icon: "success",
          confirmButtonText: "Okay",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Ooops...",
          text: `An error occured!`,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
    setLoading(false);
    setEmail("");
  };

  return (
    <>
      <Loader loader={loading} />
      <div
        className="w-full bg-cover h-fit pb-5 "
        style={{
          backgroundColor: "#101819",
        }}
      >
        {/* FILLER DIV */}
        <div className=" pt-[25vh]">
          <div
            className="flex flex-col items-center justify-center mx-10 md:mx-20 flex-wrap"
            id="contactus"
          >
            <h1 className="basis-full text-center text-2xl xs:text-3xl md:text-4xl lg:text-5xl text-white font-extrabold ">
              CONNECT WITH US
            </h1>
            <p className=" text-white text-sm sm:text-base lg:text-xl text-center font-light pt-12 w-full lg:w-2/3 mb-12">
              Join the revolution to make the gaming NFT lending and borrowing
              markets open for all. Subscribe to our waitlist to have early
              access to our cross chain borrowing and lending protocol.
            </p>

            <form
              onSubmit={handleSubmit}
              className="w-full sm:w-1/2 flex flex-wrap justify-center lg:justify-between"
            >
              <p className="flex items-center text-[#969696] bg-[#272F30] rounded-l-lg px-2 font-bold">
                @
              </p>
              <input
                type="text"
                autoComplete="email"
                id="email"
                value={email}
                name="email"
                className="bg-[#272F30] placeholder:text-[#969696] font-normal text-white text-sm rounded-r-lg outline-0 grow pl-0 p-2.5 mr-2 "
                placeholder="Enter your e-mail"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* {submitted == false ? ( */}
              <>
                <button
                  type="submit"
                  className="hidden md:block text-[#A68A27] border border-[#A68A27] hover:bg-[#A68A27] hover:text-white  font-bold rounded-lg shadow-lg text-sm  lg:basis-[10%] px-3 py-2.5 "
                >
                  →
                </button>
                <button type="submit" className="md:hidden px-1.5  mt-0">
                  <BsFillArrowRightCircleFill size={25} color={"#A68A27"} />
                </button>
              </>
              {/* ) : (
              <>
                <button
                  type="button"
                  className="hidden md:block text-white font-semibold bg-[#A68A27] hover:bg-amber-200 rounded-lg shadow-lg text-sm px-3 py-2.5 "
                >
                  Thank you!
                </button>
                <button type="button" className="md:hidden px-1.5 sm:mt-0">
                  <BsFillArrowRightCircleFill size={25} color={"#A68A27"} />
                </button>
              </>
            )} */}
            </form>
          </div>
          <div className="basis-full flex justify-center mt-[10vh]">
            <img src="/assets/feather.png" alt="" />
          </div>
        </div>

        <footer className="bg-transparent pt-20 lg:pt-16 px-0 sm:px-20">
          <div className="flex flex-wrap justify-between">
            <div className="flex basis-full lg:basis-auto lg:justify-between justify-center">
              <div className="flex mb-12">
                <a href="#" className="flex justify-start grow sm:pb-0">
                  <div className="flex h-fit">
                    <img
                      src="/assets/logo.png"
                      className="mr-3 h-9"
                      alt="Kingdomly Logo"
                    />
                    <p className="text-2xl text-white font-bold whitespace-nowrap self-center">
                      Kingdomly
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="basis-full lg:basis-auto  text-center lg:justify-start justify-center flex flex-col flex-wrap gap-2 md:gap-6 mb-8">
              <h3 className="text-xl text-white font-semibold mb-4">Company</h3>
              <a
                href="#about"
                className="text-white text-base  hover:underline"
              >
                About
              </a>
              <a
                href="#rentals"
                className="text-white text-base hover:underline "
              >
                Rentals
              </a>

              <a
                href="#roadmap"
                className="text-white text-base hover:underline"
              >
                Roadmap
              </a>
              <a
                href="https://discord.gg/bqQ2PQA4FM"
                target="_blank"
                rel="noreferrer"
                className="text-white text-base hover:underline"
              >
                Request a feature
              </a>
              <div>
                <a
                  href="https://docs.kingdomly.app"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white md:mt-0 flex items-center justify-center  basis-auto  text-base hover:underline"
                >
                  Docs
                  <BsBoxArrowUpRight size={12} className="ml-1" />
                </a>
              </div>
            </div>

            <div className="basis-full lg:basis-auto text-center justify-center  flex flex-wrap mb-8 lg:mb-4 h-fit">
              <h3 className="lg:basis-full text-xl text-white font-semibold mb-8  ">
                Social Media
              </h3>
              <div className="basis-full  justify-center flex ">
                <a
                  href="https://twitter.com/KingdomlyApp"
                  title="Twitter"
                  target="_href"
                  className="self-center pr-3"
                >
                  <SiTwitter
                    className="drop-shadow-md icon-hover lg:ml-2"
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

            <div className="basis-full lg:basis-auto w-fit  flex flex-col lg:text-start text-center flex-wrap mb-4 h-fit">
              <h3 className="basis-full lg:basis-auto text-xl text-white font-semibold mb-4">
                Contact Us
              </h3>
              <p className="text-white">kingdomlyemail@gmail.com</p>
            </div>
            <div className="basis-full lg:basis-auto w-fit  flex flex-col lg:text-start text-center flex-wrap mb-4 h-fit">
              <h3 className="basis-full lg:basis-auto text-xl text-white font-semibold mb-4">
                Credits
              </h3>
              <p className="text-white">
                Hero image by{" "}
                <a
                  className="hover:underline"
                  href="https://www.freepik.com/free-vector/castle-silhouette-background-with-dragon-flying_2392170.htm"
                  target="_blank"
                  rel="noreferrer"
                >
                  Freepik
                </a>
              </p>
            </div>
          </div>
          <hr className="border-white my-4 md:my-8 mx-4 sm:mx-0" />
          <span className="block text-white text-center text-xs sm:text-base lg:text-md">
            Copyright @ 2022 Kingdomly
          </span>
        </footer>
      </div>
    </>
  );
}
export default FooterLandingPage;
