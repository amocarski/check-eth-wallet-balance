import React from "react";

const Button = ({
  onClick,
  className = "",
  children,
  ...props
}: React.ComponentPropsWithoutRef<"button">) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-orange-500 border-orange-600 text-black font-bold rounded-md border border-b-[6px] hover:bg-orange-600 disabled:bg-orange-600/80 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
