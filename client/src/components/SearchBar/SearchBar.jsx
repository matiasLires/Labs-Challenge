import React, { useState } from "react";

import { Form, FormControl, Button } from "react-bootstrap";

export default function SearchBar({ onSearch }) {
  const [product, setProduct] = useState("");

  return (
    <div>
      <Form
        inline
        onSubmit={(e) => {
          e.preventDefault();
          onSearch(product);
          setProduct("");
        }}
      >
        <FormControl
          className="mr-sm-2"
          type="text"
          placeholder="Buscar Producto"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        />
        <Button variant="outline-info" type="submit" value="Search">
          Search
        </Button>
      </Form>
    </div>
  );
}


