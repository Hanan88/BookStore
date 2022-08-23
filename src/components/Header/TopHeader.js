import React from "react";

const TopHeader = () => {
  return (
    <div className="flex flex-row bg-transparent container mx-auto px-4">
      <div className="logo basis-1/4">
        <h2>Booky</h2>
      </div>
      <div className="search-field basis-1/2">
        <input type="text" placeholder="Search by author, title, name" className="p-1 w-4/5 bg-gray-200	rounded" />
      </div>
      <div className="feats basis-1/4">003</div>
    </div>
  );
};

export default TopHeader;
