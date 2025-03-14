import { Helmet } from "react-helmet-async";

// bootstrap
import { Container, Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import desodorantes from "../../data/desodorantes.json";

// CSS
import styles from "./Desodorantes.module.css";

const Desodorantes = ({ banner2, favicon }) => {
  return (
    <>
      <Helmet>
        <title>Desodorantes em Ponte Nova</title>
        <meta
          name="description"
          content="Encontre os melhores desodorantes Natura para proteção e fragrância duradoura. Compre online e retire na Natura Fast, em Ponte Nova."
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
            alt="Produtos da Natura Fast Ponte Nova"
          />
        </Container>
      </div>
      <div>
        <Container className="p-4 mt-4">
          <Row>
            {desodorantes &&
              desodorantes.map(({ id, name, image }) => (
                <Col key={id} xl={3} md={4} xs={6} className="mb-4">
                  <Card>
                    <Link to={`/produtos/desodorantes/${id}`}>
                      <Card.Img
                        className={styles.images_desodorantes}
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

export default Desodorantes;
