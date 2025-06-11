import { useState } from "react";

type toggleButtonProps = {
  isActive: boolean;
  onChange: () => void;
};

export default function ToggleButton({
  isActive,
  onChange,
}: toggleButtonProps) {
  const [toggle, setToggle] = useState(isActive);

  function handleToggle() {
    onChange();
    setToggle(!toggle);
  }

  return (
    <div className="flex items-center justify-center h-full">
      <button
        className={`w-14 h-7 rounded-full cursor-pointer shadow-lg transition-colors duration-200 relative flex items-center ${
          toggle
            ? "bg-red-700 dark:bg-red-400"
            : "bg-neutral-300 dark:bg-neutral-600"
        }`}
        onClick={() => handleToggle()}
      >
        <div
          className={`h-5 w-5 bg-neutral-0 absolute rounded-full transform transition-transform duration-300 ${
            toggle ? "translate-x-7.5" : "translate-x-1"
          }`}
        ></div>
      </button>
    </div>
  );
}
