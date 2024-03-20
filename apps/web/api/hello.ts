import fs from "fs";
import path from "path";

export function GET(request: Request) {
  const indexHTML = getIndexHtml();
  return new Response(indexHTML, {
    headers: {
      "content-type": "text/html",
    },
  });
  const mockJson = {
    pathname: new URL(request.url).pathname,
  };
  return new Response(JSON.stringify(mockJson));
}

const getMetadata = (pathname: string) => {};

const getIndexHtml = () => {
  const filePath = path.join(process.cwd(), "apps/web/.vercel/output");
  // list all files in the directory, even the hidden ones
  const files = fs.readdirSync(filePath);
  console.log("🚀 ~ getIndexHtml ~ files:", files);
  const file = fs.readFileSync(filePath);
  return file;
};
