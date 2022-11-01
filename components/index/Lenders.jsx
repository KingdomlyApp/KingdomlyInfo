import LenderItem from "./LenderGridItems";
export default function Lenders() {
  return (
    <>
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
          <LenderItem
            index={1}
            content={"Low risk, high reward"}
            extended={
              "With Kingdomly any player can try any game at a fraction of the cost, learning and growing in their enjoyment of such games before they decide to make a full purchase themselves."
            }
          />
          <LenderItem
            index={2}
            content={"No more NFT cold starts!"}
            extended={
              "Most NFT launches encounter cold-starts caused by extremely low or high minting prices. Lending and renting protocols help smooth out these factors by giving alternative methods for earning liquidity, this in turn helps floor prices."
            }
          />
          <LenderItem
            index={3}
            content={"Enlist any NFT!"}
            extended={
              "Kingdomly’s Protocol v1 enables decentralized peer to peer renting of ERC-721 and ERC-1155 non-fungible tokens (NFTs), similar to OpenSeas NFT marketplace but for rentals"
            }
          />
          <LenderItem
            index={4}
            content={"Your NFT, your rules."}
            extended={
              ' Lending implies safely transferring true “usership” rights to the borrower, The NFT "Lender" is the one to set the rules on how long someone can have it for rent, and how much it will cost. '
            }
          />
          <LenderItem
            index={5}
            content={"Open for all!"}
            extended={
              "Anyone with NFTs can join and lease their assets with no limitations on how many they want to lease!"
            }
          />
        </div>
      </div>
    </>
  );
}
