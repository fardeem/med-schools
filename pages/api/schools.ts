import Cors from "cors";
import { NextApiRequest, NextApiResponse } from "next";
import { jsonToMarkdownTable } from "../../lib/jsonToMarkdownTable";
import { medSchoolList } from "../../lib/med-schools";

const cors = Cors({
  methods: ["GET", "HEAD", "POST"],
});

function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

type Data = string;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await runMiddleware(req, res, cors);

  return res.status(200).send(jsonToMarkdownTable(medSchoolList));
}
