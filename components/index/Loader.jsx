const Loader = ({ loader }) => {
  return (
    <div
      className={`${
        loader ? "block" : "hidden"
      } bg-white bg-opacity-50 fixed top-0 w-full z-[10000000] h-screen `}
    >
      <div className="grid place-items-center h-full">
        <span className="loader"></span>
      </div>
    </div>
  );
};

export default Loader;
