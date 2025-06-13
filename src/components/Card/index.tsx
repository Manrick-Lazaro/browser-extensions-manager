"use client";

import { JSX, useState } from "react";
import Image from "next/image";

import ToggleButton from "../ToggleButton";
import { ExtensionType } from "@/types/extension";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

export default function Card({
  id,
  logo,
  name,
  description,
  isActive,
}: ExtensionType): JSX.Element {
  const [active, setActive] = useState(isActive);

  function onChange() {
    const updatedExtension: ExtensionType = {
      id,
      logo,
      name,
      description,
      isActive: !active,
    };
    updateExtension(updatedExtension).finally(() => setActive(!active));
  }

  async function updateExtension(extension: ExtensionType) {
    await fetch("/api/json-handler", {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(extension),
    });
  }

  return (
    <div className="bg-neutral-0 dark:bg-neutral-800 border-[0.5px] border-neutral-300 dark:border-neutral-600 rounded-2xl shadow-md p-4 flex flex-col gap-y-6">
      <div className="flex flex-row items-start gap-4 h-25 overflow-auto">
        <Image src={logo} alt="logo exetion" width={55} height={0} />

        <div>
          <h2 className="text-neutral-900 dark:text-neutral-0 font-[700] text-xl">
            {name}
          </h2>
          <p className="dark:text-neutral-100">{description}</p>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center">
        <ButtonComponent text="Remove" w={15} h={6} desabledShadow />

        <ToggleButton isActive={isActive} onChange={onChange} />
      </div>
    </div>
  );
}
