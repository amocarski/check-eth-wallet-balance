import React from "react";

const Input = ({
  value,
  onChange,
  className = "",
  ...props
}: React.ComponentPropsWithoutRef<"input">) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={`placeholder:text-orange-900 disabled:bg-orange-600/20 disabled:text-orange-700 rounded-md border border-b-[6px] border-orange-600 px-6 text-lg p-2 focus:outline-none focus-visible:shadow-outline-white focus-visible:outline-none disabled:hover:cursor-not-allowed focus:ring-2 focus:ring-orange-700 ${className}`}
      {...props}
    />
  );
};

export default Input;
