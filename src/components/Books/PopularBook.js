import React from "react";
import { Link } from "react-router-dom";
import CardBook from "./CardBook";

const PopularBook = () => {
  return (
    <div className="container mt-9 ml-10">
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-lg font-bold">Popular Now</h1>
        <Link to="/all-books" className="mr-20 text-xs text-blue-600">
          View All
        </Link>
      </div>
      <CardBook />
    </div>
  );
};

export default PopularBook;
