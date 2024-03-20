// api/metaTags.js

export default async function handler(req: Request, res) {
  const pathname = req.url;
  const metaTags = `
    <meta name="description" content="${pathname}">
    <meta property="og:title" content="${pathname}">
  `;

  const htmlResponse = await fetch("https://serverless.markodrakulic.dev");
  const htmlBody = await htmlResponse.text();

  const modifiedHtmlBody = htmlBody.replace("</head>", `${metaTags}</head>`);

  res.setHeader("Content-Type", "text/html");
  res.send(modifiedHtmlBody);
}
