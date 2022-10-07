import { SiAbstract } from "react-icons/si";

export default function RentalItem({ reverse, content, title, image, icons }) {
  var classOrder = "flex justify-center";
  if (reverse) {
    classOrder = "flex justify-center order-first";
  }
  return (
    <div
      className="grid grid-cols-2 vertical "
      style={{ backgroundColor: "#0B1814" }}
    >
      <div className="grid grid-cols-2 grid-flow-row place-content-center">
        <div className="col-span-2 mb-3">
          <strong className="text-white text-3xl text-center">{title}</strong>
        </div>
        <div className="col-span-1 block mr-1">
          <SiAbstract size={25} className="mb-2" color="white" />
          <p className="text-white text-md font-normal">{content[0]}</p>
        </div>
        <div className="col-span-1 block mr-1">
          <SiAbstract size={25} className="mb-2" color="white" />
          <p className="text-white text-md font-normal">{content[1]}</p>
        </div>
      </div>
      <div className={classOrder}>
        <img
          src="/assets/cards.png"
          className="object-contain img-float"
          alt="Card"
        />
      </div>
    </div>
  );
}
