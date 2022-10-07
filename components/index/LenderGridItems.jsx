//Grid Items for "WHAT WE OFFER" Part 
export default function ({ index, content }) {
  return (
    <div
      className="block text-center m-3 px-6 py-9 w-11/12 h-48 md:w-48 md:h-48 rounded-lg shadow-md"
      style={{ backgroundColor: "#0B1814" }}
    >
      <h5 className="mb-5 text-5xl font-bold text-color-main">{index}</h5>
      <p className="text-xl font-semibold tracking-tight text-color-main">
        {content}
      </p>
    </div>
  );
}
