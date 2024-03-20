// api/metaTags.js

export default async function handler(req: Request, res) {
  const pathname = new URL(req.url).pathname;
  const metaTags = `
    <meta name="description" content="${pathname}">
    <meta property="og:title" content="${pathname}">
  `;

  // Fetch the original HTML content of your app
  const htmlResponse = await fetch("http://serverless.markodrakulic.dev");
  const htmlBody = await htmlResponse.text();

  // Append meta tags to the HTML response
  const modifiedHtmlBody = htmlBody.replace("</head>", `${metaTags}</head>`);

  res.setHeader("Content-Type", "text/html");
  res.send(modifiedHtmlBody);
}
