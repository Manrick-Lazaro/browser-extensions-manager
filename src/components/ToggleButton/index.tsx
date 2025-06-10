import { useState } from "react";

export default function ToggleButton() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex items-center justify-center h-full">
      <button
        className={`w-14 h-7 rounded-full cursor-pointer shadow-lg transition-colors duration-200 relative flex items-center ${
          toggle
            ? "bg-neutral-300 dark:bg-neutral-600"
            : "bg-red-700 dark:bg-red-400"
        }`}
        onClick={() => setToggle(!toggle)}
      >
        <div
          className={`h-5 w-5 bg-neutral-0 absolute rounded-full transform transition-transform duration-300 ${
            toggle ? "translate-x-1" : "translate-x-7.5"
          }`}
        ></div>
      </button>
    </div>
  );
}
