const express = require("express");
const bodyParser = require("body-parser");
const db = require("./database/index.js");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("client/dist"));

const houseRouter = require("./routes/houseRouter")
const users = require("./routes/user");
const tenants = require("./routes/tenant");

app.use("/House", houseRouter);
app.use("/users",users);
app.use("/tenant",tenants);

const port = 3000;

app.listen(port, () => {
  console.log(`server listening on port http://localhost:${port}`);
});