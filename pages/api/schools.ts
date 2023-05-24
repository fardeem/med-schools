import { NextApiRequest, NextApiResponse } from "next";
import { jsonToMarkdownTable } from "../../lib/jsonToMarkdownTable";
import { medSchoolList } from "../../lib/med-schools";

type Data = string;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  return res.status(200).send(jsonToMarkdownTable(medSchoolList));
}
