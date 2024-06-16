import React, { useState } from "react";
import { AllProducts, Filters, Select, StyledText, Title } from "../components";

function Home() {
  const [filterBox, setFilterBox] = useState(false);

  return (
    <div className="relative">
      {filterBox && <Filters />}
      <div className="top-bar flex justify-between items-center gap-4 flex-wrap-reverse pt-2">
        <button
          className="bg-slate-800 py-1 px-4 rounded-md text-lg"
          onClick={() => {
            setFilterBox((prev) => !prev);
          }}
        >
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
      <AllProducts />
    </div>
  );
}

export default Home;
