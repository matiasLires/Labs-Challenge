/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Card, Button, ListGroup } from "react-bootstrap";
import "./ProductCard.css"
export default function ProductCard({
  thumbnail,
  title,
  price,
  currency,
  condition,
  stock,
}) {
  return (
    <Card style={{ width: "18rem", margin: "20px", borderColor: "cyan" }}>
      <Card.Img
        variant="top"
        src={thumbnail}
        style={{ margin: "auto", width: "200px", height: "200px" }}
      />
      <Card.Body>
        <Card.Title>
          <div>{title}</div>
        </Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>
            Precio: {"$"}
            {price} {currency}
          </ListGroup.Item>
          <ListGroup.Item>Estado: {condition}</ListGroup.Item>
          <ListGroup.Item>Stock: {stock}</ListGroup.Item>
        </ListGroup>
        <Button variant="outline-info" type="submit" className="buttonProduct">Comprar</Button>
      </Card.Body>
    </Card>
  );
}
