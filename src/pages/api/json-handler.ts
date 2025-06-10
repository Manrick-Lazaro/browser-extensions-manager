import { promises as fs } from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

const filePath = path.join(process.cwd(), "src", "data", "data.json");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const fileContents = await fs.readFile(filePath, "utf8");
      const jsonData = JSON.parse(fileContents);
      res.status(200).json(jsonData);
    } catch (err) {
      res
        .status(500)
        .json({ error: "error reading json file", description: err });
    }
  } else if (req.method === "POST") {
    try {
      await fs.writeFile(filePath, JSON.stringify(req.body, null, 2));
      res.status(200).json({ message: "file saved successfully" });
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }
}
