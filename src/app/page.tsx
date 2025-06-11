"use client";

import { JSX, useEffect, useState } from "react";

import Header from "../components/Header";
import Card from "../components/Card";
import { ExtensionType } from "../types/extension";

export default function Home(): JSX.Element {
  const [data, setData] = useState<ExtensionType[]>([]);

  async function getItems() {
    const res = await fetch("/api/json-handler");
    const data = await res.json();
    setData(data);
  }

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="bg-linear-to-b from-light-gradient-from to-light-gradient-to dark:from-dark-gradient-from dark:to-dark-gradient-to min-h-lvh w-full">
      <div className="px-5 pt-4">
        <Header />

        <div className="mt-6 gap-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {data.map((item: ExtensionType) => (
            <Card
              id={item.id}
              key={item.name}
              name={item.name}
              logo={item.logo}
              description={item.description}
              isActive={item.isActive}
              syncData={() => getItems()}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
