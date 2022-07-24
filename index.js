import express from "express";

const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.end(`
    <h1>Home page</h1>
    <a href="/about">About</a>
  `);
});

app.get("/about", (req, res) => {
  res.end(`
    <h1>About</h1>
    <a href="/">About</a>
  `);
});

app.listen(PORT, () => {
  console.log("Server has been started...");
});
