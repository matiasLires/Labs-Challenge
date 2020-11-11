const express = require("express");
const app = express();
const bodyParser = require("body-parser");
/* const cors = require("cors") */

app.use(express.json())
app.use(bodyParser.json());
app.use(require("./src/Routes/Routes"))
/* app.use(cors({
  origin: "http://localhost:3000",
  credentials:true,
})) */

/* app.use((req, res, next) => {
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
 */


app.listen(5000,
console.log("server listenning at port 5000"))






