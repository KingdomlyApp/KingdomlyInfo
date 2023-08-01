import RentalItem from "./Rentals/RentalItem";
import { AnimatePresence, motion } from "framer-motion";

export default function Renters({ isCreation }) {
  return (
    <div
      className="bg-[#121B1C] vertical py-[12vh] lg:pb-[20vh] px-10"
      id="rentals"
    >
      <div className="flex justify-center">
        <strong className="text-white text-3xl xs:text-4xl md:text-5xl text-center ">
          <motion.span
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
          >
            {isCreation ? "How We Help You Create NFTs" : "How we do Rentals"}
          </motion.span>
        </strong>
      </div>
      <div className="flex flex-wrap justify-center">
        <RentalItem
          title={
            isCreation
              ? "Your one stop platform for NFT Creation."
              : "Your one stop shop for NFT renting."
          }
          content={
            isCreation
              ? [
                  "Choose between launching a generative collection or one of ones. With generative collections you can create thousands of unique NFTs from a set of layers that we help you configure.",
                  "No need to look anywhere else, we handle the entire collection generation process. Unleash your creativity without needing to know a single thing about smart contracts or how to structure metadata.",
                ]
              : [
                  "As a Renter, simply specify the amount of days you’d like to borrow an NFT for and you’re good to go.",
                  "The “Lender’s” set rental price is multiplied by the amount of days that the “Borrower” sets and is sent to the “Lender”.",
                ]
          }
          image={isCreation ? "/assets/creator-1.png" : "/assets/card-1.png"}
          icons={1}
        />
        <RentalItem
          reverse={true}
          title={
            isCreation
              ? "Disrupt the NFT status quo."
              : "Automatically get a hold of your rights"
          }
          content={
            isCreation
              ? [
                  "Worry less about the tech. Spend your time focusing on the artwork and providing utility to your holders. Save time and change the game at the same time.",
                  "Get utility out the gate by providing token gated applications and a token gated community for your collection with Kingdomly. API’s available for web2 developers if you are tech friendly.",
                ]
              : [
                  "This total rent price gets deducted from the borrower’s balance and sent to Kingdomly contract which then transfers “usership” rights linked to the rented NFT from  “Lender” to “Borrower”",
                  "At the end of the borrowing period the “usership” status is transferred from the “Borrower” wallet back to the “Lender” wallet",
                ]
          }
          image={isCreation ? "/assets/creator-2.png" : "/assets/card-2.png"}
          icons={2}
        />
        <RentalItem
          title={
            isCreation
              ? "Control your collection."
              : "Smart-regulation of rental assets."
          }
          content={
            isCreation
              ? [
                  "Ensure transparent and verifiable ownership of your collection. Add private sales and whitelist who you see fit. Pause the mint whenever you need.",
                  "Customize the way your collection is presented in the custom mint page. Make it easy for people to learn about who you are and the project roadmap!",
                ]
              : [
                  "Once this is confirmed, the rent price is transferred from Kingdomly to the “Lender”",
                  "In the case that the NFT is transferred out of the “Lender” wallet, “usership” status is immediately revoked from “Borrower” wallet and transferred to the new owner wallet address",
                ]
          }
          image={isCreation ? "/assets/creator-3.png" : "/assets/card-3.png"}
          icons={3}
        />
      </div>
    </div>
  );
}
