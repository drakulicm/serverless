// api/metaTags.js

export default async function handler(req: Request, res) {
  const pathname = new URL(req.url).pathname;

  const metaTags = `
    <meta name="description" content="${pathname}">
    <meta property="og:title" content="${pathname}">
  `;

  const htmlBody = await getHtmlFileContent(
    "https://serverless.markodrakulic.dev"
  );

  const modifiedHtmlBody = htmlBody.replace("</head>", `${metaTags}</head>`);

  res.setHeader("Content-Type", "text/html");
  res.send(modifiedHtmlBody);
}

const getHtmlFileContent = async (
  indexHtmlFileUrl: string
): Promise<string> => {
  try {
    const htmlResponse = await fetch(indexHtmlFileUrl);
    const htmlBody = await htmlResponse.text();

    return htmlBody;
  } catch (error) {
    throw new Error("Firebase error: Can't read index.html");
  }
};
