import LenderItem from "./LenderGridItems";
export default function Lenders() {
  return (
    <>
      <div
        className="vertical pt-[10vh] md:pt-[10vh] px-10 md:px-20 "
        style={{
          backgroundColor: "#0c1313",
          backgroundImage: 'url("/assets/stars.png")',
        }}
      >
        <div className="flex justify-center mt-[20vh] mb-[10vh]">
          <strong className="text-white text-3xl sm:text-5xl text-center">
            What We Offer
          </strong>
        </div>
        <div className="flex flex-wrap justify-center items-start pt-10 pb-20">
          <LenderItem content={"/assets/offer1.png"} />
          <LenderItem content={"/assets/offer2.png"} />
          <LenderItem content={"/assets/offer3.png"} />
          <LenderItem content={"/assets/offer4.png"} />
          <LenderItem content={"/assets/offer5.png"} />
        </div>
      </div>
    </>
  );
}
