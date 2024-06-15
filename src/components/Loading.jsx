import React from "react";
import { TbLoader2 } from "react-icons/tb";

function Loading() {
  return (
    <div className="h-96 flex items-center justify-center">
      <TbLoader2 className="animate-spin text-9xl" />
    </div>
  );
}

export default Loading;
