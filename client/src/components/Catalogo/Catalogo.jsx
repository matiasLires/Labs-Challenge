import React from "react";
import { Col, Container, Row, Spinner, Card } from "react-bootstrap";
import ProductCard from "../ProductCard/ProductCard";

export default function Catalogo({ product, loading }) {
  if (loading) {
    return (
      <Card
        body
        
        bg="dark"
        variant="dark"
        style={{ display: "flex", alignItems: "center" }}
      >
        <Spinner
          style={{ marginRight: "10px" }}
          animation="border"
          variant="primary"
        />
        <h2>Loading...</h2>
      </Card>
    );
  }

  if (product) {
    return (
      <Container>
        <Row xs={3}>
          {product.map((p) => (
            <Col key={p.id}>
              <ProductCard
                thumbnail={p.thumbnail}
                id={p.id}
                title={p.title}
                price={p.price}
                currency={p.currency_id}
                condition={p.condition}
                stock={p.available_quantity}
              />
            </Col>
          ))}
        </Row>
      </Container>
    );
  } else {
    return <div>No hay Productos</div>;
  }
}
