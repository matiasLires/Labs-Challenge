import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Presentation.css";

export default function Presentation() {
  return (
    <div>
      <Jumbotron fluid className="jumb">
        <Container>
          <h1>Henry Labs Challenge!</h1>
          <p>
            El objetivo del challenge es construir un Front-End y un Back-End
            que interactuen con una API pública de Mercado Libre.
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
}
