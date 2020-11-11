/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/NavBar/NavBar";

import axios from "axios";
import Catalogo from "./components/Catalogo/Catalogo";

export default function App() {
  const [products, setProducts] = useState([]);

  const onSearch = (product) => {
    axios.get(`http://localhost:5000/api/search?q=${product}`)

      .then((res) => {
        if (res.data !== undefined) {
          const productos = res.data;
          //console.log(res.data)
          setProducts(productos);
        } else {
          alert("Producto no encontrado");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <NavBar onSearch={onSearch} />
      <Catalogo products={products} />
    </div>
  );
}
