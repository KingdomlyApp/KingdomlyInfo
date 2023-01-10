import { BiTransferAlt } from "react-icons/bi";
import { MdPriceCheck } from "react-icons/md";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { FaUserClock, FaFileSignature, FaBalanceScale } from "react-icons/fa";

export default function RentalItem({ reverse, content, title, image, icons }) {
  var classOrder =
    "flex justify-center items-center align-center order-first md:order-none h-fit pl-0 md:ml-0";
  if (!reverse) {
    classOrder = "flex justify-center xl:order-last h-fit";
  }
  return (
    <div className="flex flex-col xl:flex-row items-center justify-center gap-8 my-10 lg:my-[5.5rem]">
      <div className={classOrder}>
        <img
          src={image}
          className="object-contain h-60 md:h-80 xl:h-[60vh]"
          alt="Card"
        />
      </div>
      <div className="basis-full xl:basis-1/2  gap-5 grid-flow-row place-content-center">
        <div className="col-span-2 text-center md:text-start mb-5 md:mb-10">
          <strong className="text-white text-base md:text-xl lg:text-3xl ">
            {title}
          </strong>
        </div>
        <div className="col-span-2 grid grid-cols-2 bg-[#0e1616] p-12 gap-5 rounded-lg">
          <div className="col-span-2 md:col-span-1 block mb-5 md:mb-0 border-b md:border-b-0 pb-16 md:pb-0 md:border-r md:pr-4">
            {icons === 1 ? (
              //FIRST ICONS
              //First section
              <img
                src={"/assets/offericons/timer.png"}
                alt=""
                className="block h-10 m-2"
              />
            ) : icons === 2 ? (
              //Second section
              <img
                src={"/assets/offericons/secure.png"}
                alt=""
                className="block h-10 m-2"
              />
            ) : (
              //Third section

              <img
                src={"/assets/offericons/p2p.png"}
                alt=""
                className="block h-10 m-2"
              />
            )}
            <p className="text-white text-xs sm:text-base xl:text-lg font-normal">
              {content[0]}
            </p>
          </div>
          <div className="col-span-2 md:col-span-1 block mb-5 md:mb-0">
            {icons === 1 ? (
              //SECOND ICONS
              //First section
              <img
                src={"/assets/offericons/Bag.png"}
                alt=""
                className="block h-10 m-2"
              />
            ) : icons === 2 ? (
              //Second section
              <img
                src={"/assets/offericons/atomic.png"}
                alt=""
                className="block h-10 m-2"
              />
            ) : (
              //Third section
              <img
                src={"/assets/offericons/libra.png"}
                alt=""
                className="block h-10 m-2"
              />
            )}
             <p className="text-white text-xs sm:text-base xl:text-lg font-normal">
              {content[1]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
