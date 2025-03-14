import { Helmet } from "react-helmet-async";

// bootstrap
import { Container, Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import sabonetes from "../../data/sabonetes.json";

// CSS
import styles from "./Sabonetes.module.css";

const Sabonetes = ({ banner2, favicon }) => {
  return (
    <>
      <Helmet>
        <title>Sabonetes Natura Ponte Nova</title>
        <meta
          name="description"
          content="Experimente os sabonetes Natura, que oferecem limpeza suave e fragrâncias delicadas para sua pele. Encontre opções irresistíveis na Natura Fast, em Ponte Nova, e transforme seu banho em um momento de cuidado."
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
            {sabonetes.map(({ id, name, image }) => (
              <Col key={id} xl={3} md={4} xs={6} className="mb-4">
                <Card>
                  <Link to={`/produtos/sabonetes/${id}`}>
                    <Card.Img
                      className={styles.images_meias_de_compressao}
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

export default Sabonetes;
