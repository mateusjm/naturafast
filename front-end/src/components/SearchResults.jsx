import React from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import styles from "./SearchResults.module.css";

// Importando dados
import sabonetes from "../data/sabonetes.json";
import desodorantes from "../data/desodorantes.json";
import shampoos from "../data/shampoos.json";
import perfumes from "../data/perfumes.json";
import bodysplashs from "../data/bodysplashs.json";
import protetoresolares from "../data/protetoresolares.json";
import hidratantes from "../data/hidratantes.json";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = (searchParams.get("q") || "").toLowerCase();

  // Dados organizados em seções
  const generalSections = [
    { title: "Sabonetes", data: sabonetes },
    { title: "Desodorantes", data: desodorantes },
    { title: "Shampoos", data: shampoos },
    { title: "Perfumes", data: perfumes },
    { title: "Body Splash", data: bodysplashs },
    { title: "Protetores Solar", data: protetoresolares },
    { title: "Hidratantes", data: hidratantes },
  ];

  const filteredGeneral = generalSections.map(({ title, data }) => ({
    title,
    results: data.filter((item) => item.name.toLowerCase().includes(query)),
  }));

  const hasResults = filteredGeneral.some(
    (section) => section.results.length > 0
  );

  return (
    <div className="container py-4">
      <h2 className="mt-5 mb-5 text-center">
        Resultados para: "<span style={{ color: "#F6A925" }}>{query}</span>"
      </h2>

      {hasResults ? (
        <>
          {filteredGeneral.map(
            ({ title, results }) =>
              results.length > 0 && (
                <section key={title}>
                  <h3 className="mt-5">
                    <Link className={styles.link} to={`/produtos`}>
                      {title}
                    </Link>
                  </h3>
                  <Container className="p-3 mt-3">
                    <Row>
                      {results.map((item) => (
                        <Col
                          key={item.id}
                          xl={3}
                          md={4}
                          xs={6}
                          className="mb-4"
                        >
                          <Card>
                            <Link to={`/produtos/${item.tipo}/${item.id}`}>
                              <Card.Img
                                className={styles.images_search}
                                variant="top"
                                src={item.image}
                                alt={item.name}
                              />
                            </Link>
                          </Card>
                          <Card.Title className="text-center h6 mt-3">
                            {item.name}
                          </Card.Title>
                        </Col>
                      ))}
                    </Row>
                  </Container>
                </section>
              )
          )}
        </>
      ) : (
        <Container
          fluid
          className="d-flex flex-column justify-content-center align-items-center text-center vh-100"
        >
          <Row>
            <Col>
              <p className="fs-4 text-secondary">
                Ops! Nenhum resultado encontrado.
              </p>
              <Button
                href="/busca"
                style={{ backgroundColor: "#F6A925", border: "transparent" }}
              >
                Voltar para a Página de Busca
              </Button>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default SearchResults;
