/* =================================================================================== */
/* ================================<       NPM       >================================ */
/* =================================================================================== */
import React, { useState } from "react";
import Axios from "axios";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
/* =================================================================================== */
/* ================================<       CSS       >================================ */
/* =================================================================================== */
import "./App.css";
/* =================================================================================== */
/* ================================<   Componentes   >================================ */
/* =================================================================================== */
import NavBar from "./components/NavBar/NavBar";
import Pagination from "./components/Pagination/Pagination";
import Catalogo from "./components/Catalogo/Catalogo";
import Filter from "./components/Filter/Filter";
import Presentation from "./components/Presentation/Presentation";
/* =================================================================================== */
/* ================================<       JSX       >================================ */
/* =================================================================================== */
export default function App() {
  /*<>*/
  /* =======< Estados >======= */
  /*<Productos>*/
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
  /*<Productos por página>*/
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(30);
  /*<Filtro y Orden>*/
  const [condition, setCondition] = useState("all");
  const [sort, setSort] = useState("default");
  /*<>*/
  /* =======< Ordenamiento >======= */
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
  /*<>*/
  /* =======< Filtrado >======= */
  const filterProducts = (event) => {
    const condicion = event.target.value;

    if (condicion === "all") {
      setCondition(condicion);
    } else if (condicion === "new") {
      setCondition(condicion);
      let newProducts = products.productos.filter(
        (prod) => prod.condition === "new"
      );
      setProducts({
        ...products,
        newProductos: newProducts,
      });
    } else if (condicion === "used") {
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
  /*<>*/
  /* =======< Búsqueda >======= */
  const onSearch = (product) => {
    setLoading(true);

    Axios.get(`http://localhost:8080/api/search?q=${product}`)
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
  /*<>*/
  /* =======< Productos por página >======= */
  const indexOfLastProducts = currentPage * productsPerPage;
  const indexOfFirstProducts = indexOfLastProducts - productsPerPage;
  let totalProducts = products.productos;
  let totalLength = totalProducts.length;
  let currentProducts = [];
  currentProducts = totalProducts.slice(
    indexOfFirstProducts,
    indexOfLastProducts
  );
  //Order for Conditions & Sorts independents
  //order for all
  if (condition === "all" && sort === "default" ) {
    totalProducts = products.productos;
    currentProducts = totalProducts.slice(
      indexOfFirstProducts,
      indexOfLastProducts
    );
  }
  if (condition === "all" && sort === "lowest") {
    totalProducts = products.lowestAll;
    totalLength = totalProducts.length;
    currentProducts = totalProducts.slice(
      indexOfFirstProducts,
      indexOfLastProducts
    );
  }
  if (condition === "all" && sort === "highest") {
    totalProducts = products.highestAll;
    totalLength = totalProducts.length;
    currentProducts = totalProducts.slice(
      indexOfFirstProducts,
      indexOfLastProducts
    );
  }
  // order for new
  if (condition === "new" && sort === "default") {
    totalProducts = products.newProductos;
    totalLength = totalProducts.length;
    currentProducts = totalProducts.slice(
      indexOfFirstProducts,
      indexOfLastProducts
    );
  }
  if (condition === "new" && sort === "lowest") {
    totalProducts = products.lowestNew;
    totalLength = totalProducts.length;
    currentProducts = totalProducts.slice(
      indexOfFirstProducts,
      indexOfLastProducts
    );
  }
  if (condition === "new" && sort === "highest") {
    totalProducts = products.highestNew;
    totalLength = totalProducts.length;
    currentProducts = totalProducts.slice(
      indexOfFirstProducts,
      indexOfLastProducts
    );
  }
  //order for used
  if (condition === "used" && sort === "default") {
    totalProducts = products.usedProductos;
    totalLength = totalProducts.length;
    currentProducts = totalProducts.slice(
      indexOfFirstProducts,
      indexOfLastProducts
    );
  }
  if (condition === "used" && sort === "lowest") {
    totalProducts = products.lowestUsed;
    totalLength = totalProducts.length;
    currentProducts = totalProducts.slice(
      indexOfFirstProducts,
      indexOfLastProducts
    );
  }
  if (condition === "used" && sort === "highest") {
    totalProducts = products.highestUsed;
    totalLength = totalProducts.length;
    currentProducts = totalProducts.slice(
      indexOfFirstProducts,
      indexOfLastProducts
    );
  }
  /* =================================================================================== */
  //order for Conditions when Sort depends on THEM.
  /* 
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
   */
  /*<>*/
  /* =======< Cambiar página >======= */
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  /*<>*/
  return (
    <div className="contain">
      <NavBar onSearch={onSearch} className="navbar" />
      <Presentation />
      <Navbar expand="lg" bg="dark" variant="dark" className="navFilterTop">
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={totalLength}
          paginate={paginate}
          className="pagination"
        />
        <Filter
          condition={condition}
          sort={sort}
          filterProducts={filterProducts}
          sortProducts={sortProducts}
          className="filter"
        />
      </Navbar>
      <Catalogo
        product={currentProducts}
        loading={loading}
        productsPerPage={productsPerPage}
        totalProducts={totalLength}
        paginate={paginate}
      />
    </div>
  );
}
