import React from "react";
import StyledText from "./StyledText";

function Logo() {
  return (
    <div className="flex flex-col">
      <StyledText className=" text-2xl inline">Noitavonne</StyledText>
      <p className="text-sm ml-auto tracking-widest -mt-2">Clothing</p>
    </div>
  );
}

export default Logo;
