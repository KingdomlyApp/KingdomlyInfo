import RentalItem from "./Rentals/RentalItem";
export default function Renters() {
  return (
    <div
      className="vertical p-10 md:p-20"
      style={{ backgroundColor: "#0B1814" }}
    >
      <div className="flex justify-center">
        <strong className="text-white text-3xl sm:text-5xl text-center">
          RENTALS
        </strong>
      </div>
      <div className="flex flex-wrap justify-center py-10">
        <RentalItem
          title={"Your all in one rental feature. But in the other way around."}
          content={[
            "The “Borrower” must specify the duration (in days) that they would like to borrow the NFT for",
            "This duration then gets multiplied by the lender's set rental price to arrive at the total rent price",
          ]}
        />
        <RentalItem
          reverse={true}
          title={"Your all in one rental feature. But in the other way around."}
          content={[
            "The “Borrower” must specify the duration (in days) that they would like to borrow the NFT for",
            "This duration then gets multiplied by the lender's set rental price to arrive at the total rent price",
          ]}
        />
        <RentalItem
          title={"Your all in one rental feature. But in the other way around."}
          content={[
            "The “Borrower” must specify the duration (in days) that they would like to borrow the NFT for",
            "This duration then gets multiplied by the lender's set rental price to arrive at the total rent price",
          ]}
        />
      </div>
    </div>
  );
}
