import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import bodysplashs from "../../data/bodysplashs.json";

// bootstrap
import { Container, Col, Row, Button } from "react-bootstrap";

// CSS
import styles from "./BodySplashDetails.module.css";
import ErrorPage from "../ErrorPage/ErrorPage";

const BodySplashDetails = ({ favicon }) => {
  const { id } = useParams();
  const [bodysplash, setBodySplash] = useState(null);

  useEffect(() => {
    const bodysplashEncontrado = bodysplashs.find(
      (bodysplash) => bodysplash.id === id
    );
    setBodySplash(bodysplashEncontrado);
  }, [id]);

  if (!bodysplash) {
    return <ErrorPage />;
  }

  return (
    <>
      <Helmet>
        <title>{bodysplash.name} em Ponte Nova</title>
        <meta name="description" content={`${bodysplash.description}`} />
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      </Helmet>
      <Container className={`mb-5`}>
        <h2 className="mt-5 mb-5">{bodysplash.name}</h2>
        <Row>
          <Col xxl={6} xl={6} md={6} sm={12} className="text-center">
            <img
              width={500}
              className="img-fluid"
              src={bodysplash.image}
              alt={bodysplash.name}
            />
          </Col>
          <Col
            xxl={6}
            xl={5}
            md={6}
            sm={12}
            xs={12}
            className={`p-4 ${styles.text_justify_custom}`}
          >
            <p>{bodysplash.description}</p>
            <Col className="text-end">
              <Button
                className={styles.button_link}
                style={{ backgroundColor: "#EB6619", border: "transparent" }}
              >
                <a
                  className=""
                  href="https://wa.me/message/2NRV4OC3FNOXD1"
                  target="blank"
                >
                  Entrar em contato
                </a>
              </Button>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BodySplashDetails;
