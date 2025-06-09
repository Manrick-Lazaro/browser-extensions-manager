import { JSX } from "react";

import Header from "../../components/Header";

export default function Home(): JSX.Element {
  return (
    <div className="bg-linear-to-b from-light-gradient-from to-light-gradient-to min-h-lvh w-full">
      <div className="px-5 pt-4">
        <Header />
      </div>
    </div>
  );
}
