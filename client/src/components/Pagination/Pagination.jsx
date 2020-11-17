/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

export default function Pagination({
  productsPerPage,
  totalProducts,
  paginate,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ButtonGroup horizontal="true">
        {pageNumbers.map((number) => (
          <Button
            variant="outline-info"
            key={number}
            onClick={() => paginate(number)}
          >
            {number}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
}
