import Cors from "cors";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  await new Promise((resolve, reject) => {
    // Initializing the cors middleware
    // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
    const cors = Cors({
      methods: ["POST", "GET", "HEAD", "OPTIONS"],
    });

    const setHeader = () => {};
    const end = () => {};
    cors(
      { headers: { ...request.headers.entries } },
      { setHeader, end },
      (result: any) => {
        if (result instanceof Error) {
          return reject(result);
        }

        return resolve(result);
      }
    );
  });

  return response;
}
