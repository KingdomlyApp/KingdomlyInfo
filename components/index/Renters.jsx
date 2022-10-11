import RentalItem from "./Rentals/RentalItem";
export default function Renters() {
  return (
    <div
      className="vertical py-[10vh] lg:pb-[20vh] px-10 md:px-15 lg:px-20"
      style={{ backgroundColor: "#0B1814" }}
      id="rentals"
    >
      <div className="flex justify-center">
        <strong className="text-white text-3xl sm:text-5xl text-center">
          RENTALS
        </strong>
      </div>
      <div className="flex flex-wrap justify-center">
        <RentalItem
          title={"Your all in one rental feature. But in the other way around."}
          content={[
            "The “Borrower” must specify the duration (in days) that they would like to borrow the NFT for",
            "This duration then gets multiplied by the lender's set rental price to arrive at the total rent price",
          ]}
          image={"/assets/card-1.png"}
          icons={1}
        />
        <RentalItem
          reverse={true}
          title={"Automatically get a hold of your rights."}
          content={[
            "This total rent price gets deducted from the borrower’s balance and sent to the Kingdomly contract which then transfers “usership” rights linked to the rented NFT from  “Lender” to “Borrower”",
            "At the end of the borrowing period the the “usership” status is transferred from the “Borrower” wallet back to the “Lender” wallet",
          ]}
          image={"/assets/card-2.png"}
          icons={2}
        />
        <RentalItem
          title={"Smart-regulation of rental assets."}
          content={[
            "Once this is confirmed, the rent price is transferred from Kingdomly to the “Lender”",
            "In the case that the NFT is transferred out of the “Lender” wallet, “usership” status is immediately revoked from “Borrower” wallet and transferred to the new owner wallet address",
          ]}
          image={"/assets/card-3.png"}
          icons={3}
        />
      </div>
    </div>
  );
}
