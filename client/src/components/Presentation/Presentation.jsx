import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Presentation.css";

export default function Presentation() {
  return (
    <div>
      <Jumbotron fluid className="jumb">
        <Container>
          <h1>Henry Simple Project!</h1>
          <p>
            El objetivo del proyecto fué construir un Back-End que se conecte con API pública de Mercado Libre donde se extraerán las publicaciones y luego desarrollar un Front-End que muestre e interactúe con la información extraída a través de los componentes de React.
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
}
