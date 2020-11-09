const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.json())
app.use(bodyParser.json());
app.use(require("./src/Routes/Routes"))

app.listen(8080)
console.log("server listenning at port 8080")




