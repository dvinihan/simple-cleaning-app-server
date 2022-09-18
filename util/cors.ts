import { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";

export const runCors = async (req: NextApiRequest, res: NextApiResponse) => {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 204,
  });
};
