import {} from "react";

const Loading = () => {
  return (
    <section className="absolute top-4 right-4 shadow-lg rounded-lg">
      <div className="bg-gray-400 text-gray-100 border-t-2 border-b-2 border-gray-800 px-4 py-2 rounded-lg">
        <span className="animate-pulse">L o a d i n g . . .</span>
      </div>
    </section>
  );
};

export default Loading;
