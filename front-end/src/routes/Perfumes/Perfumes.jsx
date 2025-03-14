import { Helmet } from "react-helmet-async";

// bootstrap
import { Container, Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import perfumes from "../../data/perfumes.json";

// CSS
import styles from "./Perfumes.module.css";

const Perfumes = ({ banner2, favicon }) => {
  return (
    <>
      <Helmet>
        <title>Perfumes em Ponte Nova</title>
        <meta
          name="description"
          content="Descubra os perfumes Natura, com fragrâncias marcantes e elegantes que encantam. Escolha o seu favorito na Natura Fast, em Ponte Nova, e viva momentos inesquecíveis."
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
            {perfumes &&
              perfumes.map(({ id, name, image }) => (
                <Col key={id} xl={3} md={4} xs={6} className="mb-4">
                  <Card>
                    <Link to={`/produtos/perfumes/${id}`}>
                      <Card.Img
                        className={styles.images_perfumes}
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

export default Perfumes;
