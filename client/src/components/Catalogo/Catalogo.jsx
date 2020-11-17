import React from "react";
import { Col, Container, Row, Spinner, Card } from "react-bootstrap";
import ProductCard from "../ProductCard/ProductCard";
import "./Catalogo.css";

export default function Catalogo({ product, loading }) {
  if (loading) {
    return (
      <div>
        <Card body className="loading">
          <div className="spinner">
            <Spinner animation="border" variant="primary" />
            <h2>Loading...</h2>
          </div>
        </Card>
      </div>
    );
  }

  if (product) {
    return (
      <div>
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
      </div>
    );
  }
}
