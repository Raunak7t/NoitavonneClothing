import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      <input
        type="text"
        className="w-full py-2 pl-10 pr-4 text-black border border-slate-300 rounded-full shadow-sm focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
        placeholder="Search..."
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <FaSearch className="text-gray-400" />
      </div>
    </div>
  );
};

export default SearchInput;
