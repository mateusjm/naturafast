import { Helmet } from "react-helmet-async";

// bootstrap
import { Container, Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import secoesprodutos from "../../data/secoesprodutos.json";

import ButtonSearch from '../../components/ButtonSearch'

// CSS
import styles from "./Products.module.css";

const Products = ({ banner2, favicon }) => {
  return (
    <>
      <Helmet>
        <title>Cosméticos em Ponte Nova</title>
        <meta
          name="description"
          content="Explore os produtos Natura, pensados para realçar sua beleza e bem-estar. Encontre itens exclusivos e de qualidade na Natura Fast, em Ponte Nova, e sinta-se ainda mais confiante."
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
      <ButtonSearch searchPath="/busca"  placeholder="Pesquisar produtos..." />
      <section aria-label="Produtos disponíveis">
        <Container className="p-4 mt-3">
          <Row>
            {secoesprodutos &&
              secoesprodutos.map(({ id, name, image }) => (
                <Col key={id} xl={3} md={4} xs={6} className="mb-4">
                  <Card>
                    <Link to={`/produtos/${id}`}>
                      <Card.Img
                        className={styles.images_products}
                        variant="top"
                        src={image}
                        alt={`${name} em Ponte Nova`}
                      />
                    </Link>
                  </Card>
                  <Card.Title className="text-center mt-3">{name}</Card.Title>
                </Col>
              ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Products;
