import { useRef, useState } from "react";
import LenderGridItems from "../components/index/LenderGridItems";
import Head from "next/head";

import NavbarLandingPage from "../components/index/Navbar/Navbar";
import ParallaxHero from "../components/index/ParallaxHero";
import Renters from "../components/index/Renters";
import Roadmap from "../components/index/Roadmap";
import FooterLandingPage from "../components/index/Footer/Footer";

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
      </Head>

      {/* <--NAV & HERO--> */}
      <div
        style={{
          backgroundImage: 'url("/assets/kf-2.png")',
          backgroundSize: "cover",
        }}
      >
        <NavbarLandingPage />
        <ParallaxHero />
      </div>

      {/* <--LENDERS--> */}
      <div
        className="vertical p-10 md:p-20"
        style={{ backgroundColor: "#122620" }}
      >
        <div className="flex justify-center">
          <strong className="text-white text-3xl sm:text-5xl text-center">
            WHAT WE OFFER
          </strong>
        </div>
        <div className="flex flex-wrap justify-center py-10">
          <LenderGridItems index={1} content={"NFT Rentals made easy!"} />
          <LenderGridItems index={2} content={"Complete Access"} />
          <LenderGridItems index={3} content={"Enlist any NFT!"} />
          <LenderGridItems index={4} content={"Open for All"} />
          <LenderGridItems index={5} content={"No More Whitegloving!"} />
        </div>
      </div>

      {/* <--RENTERS--> */}
      <Renters />

      {/* <--Milestones--> */}
      <Roadmap />

      {/* <--FOOTER--> */}
      <FooterLandingPage />
    </>
  );
}
