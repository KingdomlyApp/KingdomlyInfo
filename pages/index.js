import { useRef, useState } from "react";
import Image from "next/image";
import LenderGridItems from "../components/index/LenderGridItems";
import ParallaxHero from "../components/index/ParallaxHero";
import FooterLandingPage from "../components/index/Footer/Footer";
import NavbarLandingPage from "../components/index/Navbar/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <style jsx>{`
          body {
            fontfamily: "Poppins", serif;
            fontsize: 48px;
          }
        `}</style>
      </Head>
      <div
        style={{
          backgroundImage: 'url("/assets/kf-2.png")',
          backgroundSize: "cover",
        }}
      >
        <NavbarLandingPage />
        <ParallaxHero />
      </div> 
      <div
        className="vertical pt-20 m-0"
        style={{ backgroundColor: "#122620" }}
      >
        <div className="flex justify-center">
          <strong className="text-white text-4xl">WHAT WE OFFER</strong>
        </div>
        <div className="grid lg:grid-cols-5 sm:grid-cols-3 grid-flow-col lg:grid-rows-1 sm:grid-rows-2 gap-3 py-10 px-20 content-center"></div>
      </div>
      <FooterLandingPage />
    </>
  );
}
