export default function Roadmap() {
  return (
    <div
      className="vertical p-10 md:p-20"
      style={{ backgroundColor: "#122620" }}
    >
      <div className="flex flex-wrap justify-center">
        <strong className="text-white text-3xl sm:text-5xl text-center basis-full pb-10">
          ROADMAP
        </strong>
        <img
          src="/assets/roadmap.png"
          className="object-contain img-float"
          alt="Card"
        />
      </div>
      <div className="flex flex-wrap justify-center py-10"></div>
    </div>
  );
}
