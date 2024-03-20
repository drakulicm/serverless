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
  const filePath = path.join(process.cwd(), "/apps");
  // list all files in the directory
  fs.readdirSync(filePath).forEach((file) => {
    console.log("file", file);
  });
  const file = fs.readFileSync(filePath);
  return file;
};
