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
          How We Do{" "}
          <motion.span
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
          >
            {isCreation ? "NFT Creations" : "Rentals"}
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
                  "Tailor the creation duration of your NFT to meet your preferences as an NFT creator. Set the timeframe that suits you best and start the creative journey.",
                  " With streamlined processes, collectors can swiftly mint your unique digital assets and you receive secure payments, allowing you to focus on what matters most – unleashing your creativity and connecting with collectors.",
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
          title={"Automatically get a hold of your rights."}
          content={
            isCreation
              ? [
                  "Claim ownership effortlessly with NFT creation. By minting your art as an NFT, your rights are automatically established, simplifying the process and giving you peace of mind.",
                  "When your NFT is purchased, the blockchain smart contract handles the payment process, ensuring a secure and direct transfer of funds to you. Focus on your creativity while Kingdomly takes care of your rights and financial rewards.",
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
              ? "Smart-regulation of arts and assets."
              : "Smart-regulation of rental assets."
          }
          content={
            isCreation
              ? [
                  "Experience the streamlined management of your digital assets, ensuring fair compensation, and adherence to predefined rules. Enjoy the benefits of smart asset regulation, empowering you to maximize the value of your creations in the digital landscape.",
                  "Embrace the power of smart regulation in NFT creation. Through Kingdomly, you can ensure transparent and verifiable ownership of your digital assets. ",
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
