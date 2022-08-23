import React from "react";

const Banner = () => {
  return (
    <div className="container overflow-hidden	bg-rose-300 rounded-lg">
      <div className="w-64 m-9">
        <h2 className="text-sky-900	font-semibold text-3xl">
          Build your library
        </h2>
        <p className="my-3">Buy two selected books and get one for free</p>
        <button className="bg-amber-500 p-1 rounded px-4">view all</button>
      </div>
    </div>
  );
};

export default Banner;
