import React, { forwardRef, useId } from "react";

function Input({ label, type, className, ...props }, ref) {
  const id = useId();
  return (
    <div>
      {label && (
        <div className="py-1">
          <label className="cursor-pointer" htmlFor={id}>
            {label}
          </label>
        </div>
      )}
      <input
        type={type}
        id={id}
        {...props}
        className={` bg-[#222f3e] py-1 px-2 rounded border w-full ${className}`}
        ref={ref}
      />
    </div>
  );
}

export default forwardRef(Input);
