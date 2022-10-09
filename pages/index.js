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
        className="vertical pt-[10vh] md:pt-[10vh] px-10 md:px-20"
        style={{ backgroundColor: "#122620" }}
      >
        <div className="flex justify-center">
          <strong className="text-white text-3xl sm:text-5xl text-center">
            WHAT WE OFFER
          </strong>
        </div>
        <div className="flex flex-wrap justify-center items-start pt-10 pb-20">
          <LenderGridItems
            index={1}
            content={"Low risk, high reward"}
            extended={
              "With Kingdomly any player can try any game at a fraction of the cost, learning and growing in their enjoyment of such games before they decide to make a full purchase themselves."
            }
          />
          <LenderGridItems
            index={2}
            content={"No more NFT cold starts!"}
            extended={
              "Most NFT launches encounter cold-starts caused by extremely low or high minting prices. Lending and renting protocols could abolish these factors."
            }
          />
          <LenderGridItems
            index={3}
            content={"Enlist any NFT!"}
            extended={
              "The initial and core Kingdomly product is a protocol layer that enables peer to peer renting of ERC-721 and ERC-1155 non-fungible tokens (NFTs)."
            }
          />
          <LenderGridItems
            index={4}
            content={"Your NFT, your rules."}
            extended={
              'Lending implies transferring true “usership” rights to the borrower, The NFT "Lender" is the one to set the rules on how long can someone have it for rent, and how much will it cost.: '
            }
          />
          <LenderGridItems
            index={5}
            content={"Open for all!"}
            extended={
              "Anyone with NFTs, may it be 721 or 4907s, can hop in and have their assets for lease! On Kingdomly’s platform, any user can lend as many gaming/utility assets as they would like."
            }
          />
        </div>
      </div>

      {/* <--RENTALS--> */}
      <Renters />

      {/* <--Milestones--> */}
      <Roadmap />

      {/* <--FOOTER--> */}
      <FooterLandingPage />
    </>
  );
}
