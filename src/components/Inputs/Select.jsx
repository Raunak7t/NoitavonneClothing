import React, { forwardRef, useId } from "react";

function Select({ options, label, className, ...props }, ref) {
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
      <select
        id={id}
        {...props}
        className={` bg-[#222f3e] py-1 px-2 rounded border w-full ${className}`}
        ref={ref}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

export default forwardRef(Select);
