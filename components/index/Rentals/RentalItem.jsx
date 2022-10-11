import { BiTransferAlt } from "react-icons/bi";
import { MdPriceCheck } from "react-icons/md";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { FaUserClock, FaFileSignature, FaBalanceScale } from "react-icons/fa";

export default function RentalItem({ reverse, content, title, image, icons }) {
  var classOrder =
    "flex justify-end order-first md:order-none h-fit pl-0 md:ml-0";
  if (reverse) {
    classOrder = "flex justify-start order-first h-fit";
  }
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 place-content-center gap-5 my-10 lg:my-[5.5rem]"
      style={{ backgroundColor: "#0B1814" }}
    >
      <div className="grid grid-cols-2 gap-5 grid-flow-row place-content-center px-4">
        <div className="col-span-2 text-center md:text-start mb-5 md:mb-10">
          <strong className="text-white text-base md:text-xl lg:text-3xl text-color-main ">
            {title}
          </strong>
        </div>
        <div className="col-span-2 md:col-span-1 block mb-5 md:mb-0">
          {icons === 1 ? (
            //FIRST ICONS
            //First section
            <FaUserClock size={25} className="mb-5" color="white" />
          ) : icons === 2 ? (
            //Second section
            <FaFileSignature size={25} className="mb-5" color="white" />
          ) : (
            //Third section

            <BiTransferAlt size={25} className="mb-5" color="white" />
          )}
          <p className="text-white text-xs lg:text-base xl:text-lg font-normal">
            {content[0]}
          </p>
        </div>
        <div className="col-span-2 md:col-span-1 block mb-5 md:mb-0">
          {icons === 1 ? (
            //SECOND ICONS
            //First section
            <MdPriceCheck size={25} className="mb-5" color="white" />
          ) : icons === 2 ? (
            //Second section
            <BsFillCalendarCheckFill size={25} className="mb-5" color="white" />
          ) : (
            //Third section
            <FaBalanceScale size={25} className="mb-5" color="white" />
          )}
          <p className="text-white text-xs lg:text-base xl:text-lg font-normal">
            {content[1]}
          </p>
        </div>
      </div>
      <div className={classOrder}>
        <img
          src={image}
          className="object-contain img-float aspect-[1.618] sm:aspect-[1.52] md:aspect-[1.25]"
          alt="Card"
        />
      </div>
    </div>
  );
}
