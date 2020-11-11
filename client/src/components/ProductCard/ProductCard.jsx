/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Card, Button, ListGroup } from "react-bootstrap";
export default function ProductCard({
  thumbnail,
  title,
  price,
  currency,
  condition,
  stock,
}) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={thumbnail} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>
            Precio: {price}
            {currency}
          </ListGroup.Item>
          <ListGroup.Item>Estado: {condition}</ListGroup.Item>
          <ListGroup.Item>Stock: {stock}</ListGroup.Item>
        </ListGroup>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    /*     <div>
      <img src={thumbnail} />
      <h1>Title: {title}</h1>
      <h1>Price: $ {price}</h1>
      <h1>Condition: {condition}</h1>
      <h1>Stock: {stock}</h1>
    </div> */
  );
}
/* 
available_quantity:
condition: 
currency_id:
id: 
price: 
thumbnail: 
title: */
