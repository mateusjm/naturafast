import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import sabonetes from "../../data/sabonetes.json";

// bootstrap
import { Container, Col, Row, Button } from "react-bootstrap";

// CSS
import styles from "./SabonetesDetails.module.css";
import ErrorPage from "../ErrorPage/ErrorPage";

const SabonetesDetails = ({ favicon }) => {
  const { id } = useParams();
  const [sabonete, setSabonete] = useState(null);

  useEffect(() => {
    const saboneEncontrado = sabonetes.find((sabonete) => sabonete.id === id);
    setSabonete(saboneEncontrado);
  }, [id]);

  if (!sabonete) {
    return <ErrorPage />;
  }

  return (
    <>
      <Helmet>
        <title>{sabonete.name} em Ponte Nova</title>
        <meta name="description" content={`${sabonete.description}`} />
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      </Helmet>
      <Container className={`mb-5`}>
        <h2 className="mt-5 mb-5">{sabonete.name}</h2>
        <Row>
          <Col xxl={6} xl={6} md={6} sm={12} className="text-center">
            <img
              width={500}
              className="img-fluid"
              src={sabonete.image}
              alt={sabonete.name}
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
            <p>{sabonete.description}</p>
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

export default SabonetesDetails;
