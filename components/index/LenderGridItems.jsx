//Grid Items for "WHAT WE OFFER" Part 
export default function ({ index, content }) {
  return (
    <div
      className="block text-center content-center px-6 py-8 justify-center w-48 h-48 max-w-sm rounded-lg shadow-md"
      style={{ backgroundColor: "#0B1814" }}
    >
      <h5 className="mb-5 text-5xl font-extrabold text-color-main">{index}</h5>
      <p className="text-xl font-bold tracking-tight text-color-main">
        {content}
      </p>
    </div>
  );
}
