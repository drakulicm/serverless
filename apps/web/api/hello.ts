// api/metaTags.js

export default async function handler(req: Request, res) {
  const metaTags = `
    <meta name="description" content="asdasdasd">
    <meta property="og:title" content="asdasdasd">
  `;
  console.log("here we are");
  const htmlResponse = await fetch("https://serverless.markodrakulic.dev");
  const htmlBody = await htmlResponse.text();

  const modifiedHtmlBody = htmlBody.replace("</head>", `${metaTags}</head>`);

  res.setHeader("Content-Type", "text/html");
  res.send(modifiedHtmlBody);
}
