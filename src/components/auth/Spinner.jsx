import React from "react";

export default function Spinner() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 h-3 w-3 bg-gray-500 animate-spin origin-bottom-right"></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 50 50"
        stroke="currentColor"
      >
        <circle cx="25" cy="25" r="20" fill="none" strokeWidth="5" />
      </svg>
    </div>
  );
}
