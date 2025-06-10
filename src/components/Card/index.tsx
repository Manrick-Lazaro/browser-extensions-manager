import { JSX } from "react";
import ToggleButton from "../ToggleButton";

export default function Card(): JSX.Element {
  return (
    <div className="bg-neutral-0 dark:bg-neutral-800 border-[0.5px] border-neutral-300 dark:border-neutral-600 rounded-xl shadow-md p-4 flex flex-col gap-y-6">
      <div className="flex flex-row items-start gap-4 h-25 overflow-auto">
        <img src="./assets/images/logo-devlens.svg" alt="logo exetion" />

        <div>
          <h2 className="text-neutral-900 dark:text-neutral-0 font-[500] text-xl">
            DevLens
          </h2>
          <p className="dark:text-neutral-100">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem
            ipsum, dolor sit amet consectetur adipisicing eliLorem ipsum, dolor
            sit amet consectetur adipisicing eliLorem ipsum, dolor sit amet
            consectetur adipisicing eli
          </p>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center">
        <button className="text-neutral-900 dark:text-neutral-0 border-[0.5px] border-neutral-300 px-4 py-1 rounded-full">
          Remove
        </button>

        <ToggleButton />
      </div>
    </div>
  );
}
