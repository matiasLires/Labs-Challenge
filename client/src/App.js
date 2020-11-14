/* eslint-disable no-const-assign */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/NavBar/NavBar";
import Pagination from "./components/Pagination/Pagination";
import Catalogo from "./components/Catalogo/Catalogo";
import { Container, Navbar } from "react-bootstrap";
import Filter from "./components/Filter/Filter";

export default function App() {
  const [products, setProducts] = useState({
    productos: [],
    newProductos: [],
    usedProductos: [],
    lowestAll: [],
    lowestNew: [],
    lowestUsed: [],
    highestNew: [],
    highestAll: [],
    highestUsed: [],
  });
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(30);

  const [condition, setCondition] = useState("all");
  const [sort, setSort] = useState("default");

  const sortProducts = (event) => {
    const sort = event.target.value;
    setSort(sort);

    if (sort === "lowest") {
      if (condition === "all") {
        let lowestAndAll = products.productos
          .slice()
          .sort((a, b) => a.price - b.price);
        setProducts({
          ...products,
          lowestAll: lowestAndAll,
        });
      } else if (condition === "new") {
        let lowestAndNew = products.newProductos
          .slice()
          .sort((a, b) => a.price - b.price);
        setProducts({
          ...products,
          lowestNew: lowestAndNew,
        });
      } else if (condition === "used") {
        let lowestAndUsed = products.usedProductos
          .slice()
          .sort((a, b) => a.price - b.price);
        setProducts({
          ...products,
          lowestUsed: lowestAndUsed,
        });
      }
    } else if (sort === "highest") {
      if (condition === "all") {
        let highestAndAll = products.productos
          .slice()
          .sort((a, b) => b.price - a.price);
        setProducts({
          ...products,
          highestAll: highestAndAll,
        });
      } else if (condition === "new") {
        let highestAndNew = products.newProductos
          .slice()
          .sort((a, b) => b.price - a.price);
        setProducts({
          ...products,
          highestNew: highestAndNew,
        });
      } else if (condition === "used") {
        let highestAndUsed = products.usedProductos
          .slice()
          .sort((a, b) => b.price - a.price);
        setProducts({
          ...products,
          highestUsed: highestAndUsed,
        });
      }
    }
  };

  const filterProducts = (event) => {
    const condicion = event.target.value;
    if (condicion === "all") {
      setCondition(condicion);
    }
    if (condicion === "new") {
      setCondition(condicion);
      let newProducts = products.productos.filter(
        (prod) => prod.condition === "new"
      );
      setProducts({
        ...products,
        newProductos: newProducts,
      });
    }
    if (condicion === "used") {
      setCondition(condicion);
      let usedProducts = products.productos.filter(
        (prod) => prod.condition === "used"
      );
      setProducts({
        ...products,
        usedProductos: usedProducts,
      });
    }
  };

  const onSearch = (product) => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/api/search?q=${product}`)

      .then((res) => {
        if (res.data !== undefined) {
          const recursos = res.data;
          setProducts({
            ...products,
            productos: recursos,
          });
          setLoading(false);
        } else {
          alert("Producto no encontrado");
        }
      })
      .catch((err) => console.log(err));
  };
  // Conseguir productos actuales
  const indexOfLastProducts = currentPage * productsPerPage;
  const indexOfFirstProducts = indexOfLastProducts - productsPerPage;

  let currentProducts = [];
  let totalProducts = products.productos;
  let totalLength = totalProducts.length;
  currentProducts = totalProducts.slice(
    indexOfFirstProducts,
    indexOfLastProducts
  );

  //Ej de caso de definir por cada estado de filtro y orden en particular:
  /*   if(sort==="lowest" && condition === "all"){
    currentProducts = products.lowestAll.slice(
      indexOfFirstProducts,
      indexOfLastProducts
    )
  } */
  if (condition === "all") {
    if (sort === "default") {
      totalProducts = products.productos;
      currentProducts = totalProducts.slice(
        indexOfFirstProducts,
        indexOfLastProducts
      );
    } else if (sort === "lowest") {
      totalProducts = products.lowestAll;
      totalLength = totalProducts.length;
      currentProducts = totalProducts.slice(
        indexOfFirstProducts,
        indexOfLastProducts
      );
    } else if (sort === "highest") {
      totalProducts = products.highestAll;
      totalLength = totalProducts.length;
      currentProducts = totalProducts.slice(
        indexOfFirstProducts,
        indexOfLastProducts
      );
    }
  } else if (condition === "new") {
    if (sort === "default") {
      totalProducts = products.newProductos;
      totalLength = totalProducts.length;
      currentProducts = totalProducts.slice(
        indexOfFirstProducts,
        indexOfLastProducts
      );
    } else if (sort === "lowest") {
      totalProducts = products.lowestNew;
      totalLength = totalProducts.length;
      currentProducts = totalProducts.slice(
        indexOfFirstProducts,
        indexOfLastProducts
      );
    } else if (sort === "highest") {
      totalProducts = products.highestNew;
      totalLength = totalProducts.length;
      currentProducts = totalProducts.slice(
        indexOfFirstProducts,
        indexOfLastProducts
      );
    }
  } else if (condition === "used") {
    if (sort === "default") {
      totalProducts = products.usedProductos;
      totalLength = totalProducts.length;
      currentProducts = totalProducts.slice(
        indexOfFirstProducts,
        indexOfLastProducts
      );
    } else if (sort === "lowest") {
      totalProducts = products.lowestUsed;
      totalLength = totalProducts.length;
      currentProducts = totalProducts.slice(
        indexOfFirstProducts,
        indexOfLastProducts
      );
    } else if (sort === "highest") {
      totalProducts = products.highestUsed;
      totalLength = totalProducts.length;
      currentProducts = totalProducts.slice(
        indexOfFirstProducts,
        indexOfLastProducts
      );
    }
  }

  // Cambiar pagina
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div style={{ backgroundColor: "#212529" }}>
      <NavBar onSearch={onSearch} />
      <Container>
        <Navbar
          expand="lg"
          bg="dark"
          variant="dark"
          style={{ margin: "5px", borderRadius: "5px" }}
        >
          <Pagination
            productsPerPage={productsPerPage}
            totalProducts={totalLength}
            paginate={paginate}
          />
          <Filter
            condition={condition}
            sort={sort}
            filterProducts={filterProducts}
            sortProducts={sortProducts}
          />
        </Navbar>
        <Catalogo product={currentProducts} loading={loading} />
        <Navbar
          expand="lg"
          bg="dark"
          variant="dark"
          style={{
            margin: "5px",
            borderRadius: "5px",
          }}
        >
          <Pagination
            productsPerPage={productsPerPage}
            totalProducts={totalLength}
            paginate={paginate}
          />
        </Navbar>
      </Container>
    </div>
  );
}
