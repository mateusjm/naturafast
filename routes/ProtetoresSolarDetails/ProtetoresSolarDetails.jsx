import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import protetoresolares from "../../data/protetoresolares.json";

// bootstrap
import { Container, Col, Row, Button } from "react-bootstrap";

// CSS
import styles from "./ProtetoresSolarDetails.module.css";
import ErrorPage from "../ErrorPage/ErrorPage";

const ProtetoresSolarDetails = ({ favicon }) => {
  const { id } = useParams();
  const [protetorSolar, setProtetorSolar] = useState(null);

  useEffect(() => {
    const protetorSolarEncontrado = protetoresolares.find(
      (protetorSolar) => protetorSolar.id === id
    );
    setProtetorSolar(protetorSolarEncontrado);
  }, [id]);

  if (!protetorSolar) {
    return <ErrorPage />;
  }

  return (
    <>
      <Helmet>
        <title>{protetorSolar.name} em Ponte Nova</title>
        <meta name="description" content={`${protetorSolar.description}`} />
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      </Helmet>
      <Container className={`mb-5`}>
        <h2 className="mt-5 mb-5">{protetorSolar.name}</h2>
        <Row>
          <Col xxl={6} xl={6} md={6} sm={12} className="text-center">
            <img
              width={500}
              className="img-fluid"
              src={protetorSolar.image}
              alt={protetorSolar.name}
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
            <p>{protetorSolar.description}</p>
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

export default ProtetoresSolarDetails;
