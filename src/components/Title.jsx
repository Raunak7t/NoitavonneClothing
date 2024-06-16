import React from "react";

function Title({ children }) {
  return (
    <div className=" text-center text-4xl sm:text-2xl pb-5 sm:pb-1 pt-3 font-semibold sm:rounded-2xl sm:border-b-4 sm:border-b-purple-400">
      <h1 className="border-b-4 border-b-purple-400 sm:border-none inline py-2 px-3 rounded-xl">
        {children}
      </h1>
    </div>
  );
}

export default Title;
