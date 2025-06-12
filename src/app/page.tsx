"use client";

import { JSX, useEffect, useState } from "react";

import Header from "@/components/Header";
import Card from "@/components/Card";
import Filter from "@/components/Filter";
import { ExtensionType } from "../types/extension";
import Loading from "@/components/Loading";

export default function Home(): JSX.Element {
  const [data, setData] = useState<ExtensionType[]>([]);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(false);

  async function getItems() {
    let apiPath = "/api/json-handler";

    if (filter !== "All") {
      apiPath = `${apiPath}?filter=${filter}`;
    }

    const res = await fetch(apiPath);
    const data = await res.json();

    setData(data);
  }

  useEffect(() => {
    setLoading(true);

    getItems().finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return (
    <div className="bg-linear-to-b from-light-gradient-from to-light-gradient-to dark:from-dark-gradient-from dark:to-dark-gradient-to min-h-lvh w-full">
      <div className="px-5 pt-4">
        <Header />

        <div className="mt-9 mb-8">
          <Filter activatedFilter={filter} onChangeFilter={setFilter} />
        </div>

        {loading ? (
          <div className="mt-6">
            <Loading />
          </div>
        ) : (
          <div className="mt-6 gap-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {data.map((item: ExtensionType) => (
              <Card
                id={item.id}
                key={item.id}
                name={item.name}
                logo={item.logo}
                description={item.description}
                isActive={item.isActive}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
