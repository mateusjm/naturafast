import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

// bootstrap
import { Container, Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import shampoos from "../../data/shampoos.json";

// CSS
import styles from "./ShampoosCondicionadores.module.css";

const ShampoosCondicionadores = ({ banner2, favicon }) => {
  return (
    <>
      <Helmet>
        <title>Shampoos e Condicionadores em Ponte Nova</title>
        <meta
          name="description"
          content="Oferecemos sapatos hospitalares em Ponte Nova impermeáveis, ideais para o ambiente de trabalho em hospitais. Confortáveis, leves e macios, esses calçados foram desenvolvidos para garantir conforto
          durante toda a rotina, proporcionando segurança e praticidade no dia
          a dia."
        />
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      </Helmet>
      <style type="text/css">
        {`
        .container-fluid {
          --bs-gutter-x: 0;
        }
      `}
      </style>
      <div>
        <Container fluid>
          <img
            className={`img-fluid image-carousel-produtos`}
            src={banner2}
            alt="Pró-Vida Banner Produtos"
          />
        </Container>
      </div>
      <div>
        <Container className="p-4 mt-4">
          <Row>
            {shampoos &&
              shampoos.map(({ id, name, image }) => (
                <Col key={id} xl={3} md={4} xs={6} className="mb-4">
                  <Card>
                    <Link to={`/produtos/shampoos/${id}`}>
                      <Card.Img
                        className={styles.images_shampoos}
                        variant="top"
                        src={image}
                        alt={`${name} em Ponte Nova`}
                      />
                    </Link>
                  </Card>
                  <h6 className="text-center mt-3">{name}</h6>
                </Col>
              ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ShampoosCondicionadores;
