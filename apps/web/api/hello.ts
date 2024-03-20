import fs from "fs";
import path from "path";

export function GET(request: Request) {
  console.log("🚀 ~ GET ~ request:", request);
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
  const filePath = path.join(process.cwd(), "index.html");
  console.log("🚀 ~ getIndexHtml ~ process.cwd():", process.cwd());
  console.log("🚀 ~ getIndexHtml ~ filePath:", filePath);
  const file = fs.readFileSync(filePath);
  console.log("🚀 ~ getIndexHtml ~ file:", file);
  return file;
};
