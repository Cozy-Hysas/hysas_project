const express = require("express");
const db = require("./database/index.js");
const app = express();

const port = 3000;

app.use(express.json());

app.use(express.static("client/dist"));


app.listen(port, () => {
  console.log(`server listening on port http://localhost:${port}`);
});