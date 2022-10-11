import { useRef, useState } from "react";
import LenderGridItems from "../components/index/LenderGridItems";
import Head from "next/head";

import ParallaxHero from "../components/index/ParallaxHero";
import Renters from "../components/index/Renters";
import Roadmap from "../components/index/Roadmap";
import FooterLandingPage from "../components/index/Footer/Footer";

export default function Home() {
  return (
    <> 
      {/* <--NAV & HERO--> */}

      <ParallaxHero />

      {/* <--LENDERS--> */}
      <div
        className="vertical pt-[10vh] md:pt-[10vh] px-10 md:px-20  "
        style={{
          backgroundColor: "#122620",
          backgroundImage: 'url("/assets/bg-wwo.png")',
        }}
        id="about"
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
              "Anyone with NFTs, may it be 721 or 4907, can join and have their assets for lease with no limitations on how many they want to lease! "
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
