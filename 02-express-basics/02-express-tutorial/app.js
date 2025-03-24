const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");

app.use("/api", [logger, authorize]);

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>about</h1>");
});

app.get("/api/products", (req, res) => {
  res.send("<h1>products</h1>");
});

app.get("/api/items", (req, res) => {
  res.send("<h1>items</h1>");
});

app.listen(3000, () => {
  console.log("server is listening on port 3000...");
});
