import ParallaxHero from "../components/index/ParallaxHero";
import Lenders from "../components/index/Lenders";
import Renters from "../components/index/Renters";
import Roadmap from "../components/index/Roadmap";
import FooterLandingPage from "../components/index/Footer/Footer";

export default function Home() {
  return (
    <>
      {/* <--NAV & HERO--> */}
      <ParallaxHero />

      {/* <--LENDERS--> */}
      <Lenders />

      {/* <--RENTALS--> */}
      <Renters />

      {/* <--Milestones--> */}
      <Roadmap />

      {/* <--FOOTER--> */}
      <FooterLandingPage />
    </>
  );
}
