import { promises as fs } from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

import { ExtensionType } from "@/types/extension";

const filePath = path.join(process.cwd(), "src", "data", "data.json");

async function readData(): Promise<ExtensionType[]> {
  const jsonData = await fs.readFile(filePath, "utf8");
  return JSON.parse(jsonData);
}

function writeData(data: ExtensionType[]) {
  fs.writeFile(filePath, JSON.stringify(data, null, 2));
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data: ExtensionType[] = await readData();

  switch (req.method) {
    case "GET": {
      res.status(200).json(data);
      break;
    }

    case "POST": {
      const newID = data[data.length - 1].id + 1;

      const newItem: ExtensionType = { id: newID, ...req.body };

      data.push(newItem);

      res.status(201).json(newItem);

      break;
    }

    case "PUT": {
      const { id, ...updates } = req.body;
      const index = data.findIndex((item) => item.id === id);

      if (index === -1) {
        res.status(404).json({ message: "item not found" });
      }

      data[index] = { id, ...updates };
      writeData(data);
      res.status(200).json(data[index]);
      break;
    }

    case "DELETE": {
      const { id } = req.body;
      const newData = data.filter((item) => item.id !== id);
      writeData(newData);
      res.status(200).json({ message: "item deleted." });
      break;
    }

    default: {
      res.setHeader("allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`metodo ${req.method} não permitido.`);
    }
  }
}
