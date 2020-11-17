const cors = require("cors")
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(cors());
app.use(express.json())
app.use(bodyParser.json());
app.use(require("./src/Routes/Routes"))

/* 
// Configurar cabeceras y cors
app.use(cors(), (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
 */

/* app.use(function(request, response, next){

  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  response.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

 //Handle Preflight 
 if (reqest.method === 'GET') {
    response.status(200).send();        
 }
 else {
    next();
 }

}); */

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


app.listen(8080,
console.log(">>Console: server listenning at port 8080"))






