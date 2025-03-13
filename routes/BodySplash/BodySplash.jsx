import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

// bootstrap
import { Container, Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import bodysplashs from "../../data/bodysplashs.json";

// CSS
import styles from "./BodySplash.module.css";

const BodySplash = ({ banner2, favicon }) => {
  return (
    <>
      <Helmet>
        <title>Body Splash em Ponte Nova</title>
        <meta
          name="description"
          content="Oferecemos materiais ortopédicos como tipoia, imobilizador de joelho, joelheira e palmilha ortopédica em Ponte Nova Mg. Produtos essenciais para o alívio de dores, prevenção e recuperação de lesões musculoesqueléticas com conforto e qualidade"
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
            {bodysplashs &&
              bodysplashs.map(({ id, name, image }) => (
                <Col key={id} xl={3} md={4} xs={6} className="mb-4">
                  <Card>
                    <Link to={`/produtos/bodysplashs/${id}`}>
                      <Card.Img
                        className={styles.images_bodysplash}
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

export default BodySplash;
