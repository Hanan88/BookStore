import React from "react";
import { Link } from "react-router-dom";
import CardBook from "./CardBook";

const PopularBook = () => {
  return (
    <div className="container mt-9">
      <div className="flex justify-between">
        <h1 className="text-lg font-bold">Popular Now</h1>
        <Link to="/all-books text-xs">View All</Link>
      </div>
      <CardBook />
    </div>
  );
};

export default PopularBook;
