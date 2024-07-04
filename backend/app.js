const express = require("express");
var cors = require('cors');
const { readdirSync } = require("fs");
require('dotenv').config()
const app = express();
const PORT = process.env.PORT;
require("./Db/connect");

app.use(express.json());
app.use(cors())

readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r)));
app.listen(PORT, () => {
    console.log("Server Run");
});