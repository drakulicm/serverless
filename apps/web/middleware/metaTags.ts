// middleware/metaTags.js

module.exports = (req, res) => {
  // Define your meta tags here
  const metaTags = `
      <meta name="description" content="Your description goes here">
      <meta property="og:title" content="Your app title">
      <!-- Add more meta tags as needed -->
    `;

  // Append meta tags to the HTML response
  res.setHeader("Content-Type", "text/html");
  res.send(res.body.replace("</head>", `${metaTags}</head>`));
};
