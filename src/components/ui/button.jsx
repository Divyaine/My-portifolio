import React from "react";

export function Button({ className = "", children, ...props }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200";
  return (
    <button className={`${base} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default Button;


