const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
const port = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  cors({
    origin: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.json({ hello: "world" });
});

app.get("/data", (req, res) => {
  let file = fs.readFileSync("./data/data.json","utf-8");
  let fileObj = JSON.parse(file);

  res.json(fileObj);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
