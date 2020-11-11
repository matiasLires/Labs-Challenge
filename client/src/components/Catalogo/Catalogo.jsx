import React from "react";
import ProductCard from "../ProductCard/ProductCard";

export default function Catalogo(props) {
  const catalogue = props.products;
  console.log(catalogue)
  if (props.products) {
    return (
      <div>
        {catalogue.map((p) => (
          <div key={p.id}>
            <ProductCard
              thumbnail={p.thumbnail}
              id={p.id}
              title={p.title}
              price={p.price}
              currency={p.currency_id}
              condition={p.condition}
              stock={p.available_quantity}
            />
          </div>
        ))}
      </div>
    );
  } else {
    return <div>No hay Productos</div>;
  }
}
