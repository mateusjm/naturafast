import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import shampoos from "../../data/shampoos.json";

// bootstrap
import { Container, Col, Row, Button } from "react-bootstrap";

// CSS
import styles from "./ShampoosCondicionadoresDetails.module.css";
import ErrorPage from "../ErrorPage/ErrorPage";

const SapatosSoftWorksDetails = ({ favicon }) => {
  const { id } = useParams();
  const [shampoo, setShampoo] = useState(null);

  useEffect(() => {
    const shampooEncontrado = shampoos.find((shampoo) => shampoo.id === id);
    setShampoo(shampooEncontrado);
  }, [id]);

  if (!shampoo) {
    return <ErrorPage />;
  }

  return (
    <>
      <Helmet>
        <title>{shampoo.name} em Ponte Nova</title>
        <meta name="description" content={`${shampoo.description}`} />
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      </Helmet>
      <Container className={`mb-5`}>
        <h2 className="mt-5 mb-5">{shampoo.name}</h2>
        <Row>
          <Col xxl={6} xl={6} md={6} sm={12} className="text-center">
            <img
              width={500}
              className="img-fluid"
              src={shampoo.image}
              alt={shampoo.name}
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
            <p>{shampoo.description}</p>
            <Col className="text-end">
              <Button
                className={styles.button_link}
                style={{ backgroundColor: "#F6A925", border: "transparent" }}
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

export default SapatosSoftWorksDetails;
