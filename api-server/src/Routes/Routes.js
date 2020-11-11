const server = require("express").Router();
/* const fetch = require("fetch") */
const axios = require("axios");



server.get("/api/search", (req, res) => {
  const element = req.query.q;
  axios
    .get(`https://api.mercadolibre.com/sites/MLA/search?q=${element}`)
    .then((elements) => {
      const resource = elements.data.results ;
      let products = resource.map( product => {return {
          id: product.id,
          title:  product.title,
          price:  product.price,
          currency_id:  product.currency_id,
          available_quantity: product.available_quantity,
          thumbnail:  product.thumbnail,
          condition:  product.condition,
        } }) 
      res.send(products)
    })
    .catch((err) => {
      return res.send(err, console.log("Hay un error")).status(400);
    });
});

module.exports = server;

/* server.get("/api/search", (req, res) => {
    const elemento = req.query.q
fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${elemento}`, {
    method: "GET"})
.then(res => res.json())
})
 */

/* 
      const resource = prod.data.results ;
      let products = []
      for (var i=0; i<resource.length; i++){
        products.push({
          id: resource[i].id,
          title: resource[i].title,
          price: resource[i].price,
          currency_id: resource[i].currency_id,
          available_quantity: resource[i].available_quantity,
          thumbnail:resource[i].thumbnail,
          condition: resource[i].condition,
        })
      }
      
      res.json(products[0])
      console.log(products[0].title)
 */