import { JSX } from "react";

import jsonData from "../data/data.json";
import Header from "../components/Header";
import Card from "../components/Card";

export default function Home(): JSX.Element {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch("../../data/data.json")
  //     .then((res) => res.json())
  //     .then((json) => setData(json));
  // }, []);

  // function editJsonFile() {
  //   const jsonString = JSON.stringify(data);
  // }

  return (
    <div className="bg-linear-to-b from-light-gradient-from to-light-gradient-to dark:from-dark-gradient-from dark:to-dark-gradient-to min-h-lvh w-full">
      <div className="px-5 pt-4">
        <Header />

        <div className="mt-6">
          <Card
            name={jsonData[0].name}
            logo={jsonData[0].logo}
            description={jsonData[0].description}
            isActive={jsonData[0].isActive}
          />
        </div>
      </div>
    </div>
  );
}
