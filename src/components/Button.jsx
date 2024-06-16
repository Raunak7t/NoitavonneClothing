import React from "react";
import { RiLoader4Fill } from "react-icons/ri";

function Button({ children, type = "button", className, isLoading, ...props }) {
  return (
    <button
      type={type}
      className={`flex justify-center items-center h-10 rounded-lg text-white text-xl font-medium border border-current outline-none bg-gradient-to-tr hover:bg-gradient-to-tl from-purple-800 to-purple-400 ${className}`}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <RiLoader4Fill className="animate-spin text-2xl" />
      ) : (
        children
      )}
    </button>
  );
}

export default Button;
