import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import perfumes from "../../data/perfumes.json";

// bootstrap
import { Container, Col, Row, Button } from "react-bootstrap";

// CSS
import styles from "./PerfumesDetails.module.css";
import ErrorPage from "../ErrorPage/ErrorPage";

const CurativosDetails = ({ favicon }) => {
  const { id } = useParams();
  const [perfume, setPerfume] = useState(null);

  useEffect(() => {
    const perfumeEncontrado = perfumes.find((perfume) => perfume.id === id);
    setPerfume(perfumeEncontrado);
  }, [id]);

  if (!perfume) {
    return <ErrorPage />;
  }

  return (
    <>
      <Helmet>
        <title>{perfume.name} em Ponte Nova</title>
        <meta name="description" content={`${perfume.description}`} />
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      </Helmet>
      <Container className={`mb-5`}>
        <h2 className="mt-5 mb-5">{perfume.name}</h2>
        <Row>
          <Col xxl={6} xl={6} md={6} sm={12} className="text-center">
            <img
              width={500}
              className="img-fluid"
              src={perfume.image}
              alt={perfume.name}
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
            <p>{perfume.description}</p>
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

export default CurativosDetails;
