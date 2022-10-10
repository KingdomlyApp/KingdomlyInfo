import { SiAbstract } from "react-icons/si";

export default function RentalItem({ reverse, content, title, image, icons }) {
  var classOrder = "flex justify-center order-first md:order-none h-fit";
  if (reverse) {
    classOrder = "flex justify-center order-first h-fit";
  }
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 place-content-center gap-5 my-10 lg:my-[5.5rem]"
      style={{ backgroundColor: "#0B1814" }}
    >
      <div className="grid grid-cols-2 grid-flow-row place-content-center">
        <div className="col-span-2 text-center md:text-start mb-5 md:mb-10">
          <strong className="text-white text-sm md:text-xl lg:text-3xl text-color-main ">
            {title}
          </strong>
        </div>
        <div className="col-span-2 md:col-span-1 block mx-1 mb-5 md:mb-0">
          <SiAbstract size={25} className="mb-5" color="white" />
          <p className="text-white text-xs md:text-sm lg:text-lg font-normal">
            {content[0]}
          </p>
        </div>
        <div className="col-span-2 md:col-span-1 block mx-1 mb-5 md:mb-0">
          <SiAbstract size={25} className="mb-5" color="white" />
          <p className="text-white text-xs md:text-sm lg:text-lg font-normal">
            {content[1]}
          </p>
        </div>
      </div>
      <div className={classOrder}>
        <img
          src="/assets/cards.png"
          className="object-contain img-float aspect-[17/12] self-center"
          alt="Card"
        />
      </div>
    </div>
  );
}
