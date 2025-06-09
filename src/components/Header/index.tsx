import { JSX } from "react";

import Logo from "../../assets/images/logo.svg";

export default function Header(): JSX.Element {
  return (
    <div className="bg-neutral-0 rounded-xl px-3 py-4 shadow-md flex flex-row justify-between  ">
      <span>
        <img src={Logo} alt="logo" width={190} />
      </span>
      <div className="bg-neutral-400 h-10 w-10">
        <p>ok</p>
      </div>
    </div>
  );
}
