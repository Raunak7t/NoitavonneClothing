import React from "react";
import { Select } from "../components";

function Home() {
  return (
    <div>
      <div className="top-bar flex justify-between items-center gap-4 flex-wrap-reverse">
        <button className="bg-slate-800 py-1 px-4 rounded-md text-lg">
          Filters
        </button>
        <div className="flex gap-3 items-center">
          <p>Sort by:</p>
          <Select options={["Price", "Popularity"]} className="w-32" />
          <Select options={["Ascending", "Descending"]} className="w-32" />
        </div>
        <div className="flex gap-3 items-center">
          <p>Category:</p>
          <Select
            options={["Any", "Mens", "Womens", "Kids"]}
            className="w-32"
          />
        </div>
      </div>
      <div className="products"></div>
    </div>
  );
}

export default Home;
