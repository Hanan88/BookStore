import React from "react";
import { FiHeart } from "react-icons/fi";
import { Link } from 'react-router-dom';
const TopHeader = () => {
  return (
    <div className="flex flex-row bg-transparent container mx-auto px-4">
      <div className="logo basis-1/4">
        <Link to='/' className="font-medium text-lg">Booky</Link>
      </div>
      <div className="search-field basis-1/2">
        <input
          type="text"
          placeholder="Search by author, title, name"
          className="p-1 pl-3 w-11/12 bg-slate-100 rounded focus:border-blue-500"
        />
      </div>
      <div className="feats flex items-center justify-end basis-1/4">
        <div className="mx-2">
          <FiHeart />
        </div>
        <div className="cart rounded-full bg-slate-600 w-6 h-6 mx-2 text-white text-center">0</div>
        <div className="lang mx-2">En</div>
      </div>
    </div>
  );
};

export default TopHeader;
