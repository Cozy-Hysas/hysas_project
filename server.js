const bodyParser = require("body-parser");
const express = require("express");


const mongoose = require("mongoose");



const db = require("./database/index.js");

const app = express();

const port = 3000;
app.use(bodyParser.urlencoded({extends:true}))
app.use(express.json());

app.use(express.static("client/dist"));
const houseRouter = require("./routes/houseRouter")


app.use("/House", houseRouter);


app.listen(port, () => {
  console.log(`server listening on port http://localhost:${port}`);
});