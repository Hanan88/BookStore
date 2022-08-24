import React from "react";
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="container overflow-hidden banner rounded-lg">
      <div className="w-64 m-9">
        <h2 className="text-sky-900	font-semibold text-3xl">
          Build your library
        </h2>
        <p className="my-3">Buy two selected books and get one for free</p>
        <Link to="/all-books" className="bg-amber-500 p-1 rounded px-4">view all</Link>
      </div>
    </div>
  );
};

export default Banner;
