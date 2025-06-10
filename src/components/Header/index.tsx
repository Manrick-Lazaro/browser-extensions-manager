import { JSX } from "react";

import Logo from "../../assets/images/logo.svg?react";
import { ThemeToggleButton } from "../ThemeToggleButton";

export default function Header(): JSX.Element {
  return (
    <div className="bg-neutral-0 dark:bg-neutral-800 rounded-xl px-3 py-2 shadow-md flex flex-row justify-between max-h-20">
      <div className="flex justify-center items-center">
        <Logo className="fill-current text-neutral-900 dark:text-neutral-0" />
      </div>

      <ThemeToggleButton />
    </div>
  );
}
