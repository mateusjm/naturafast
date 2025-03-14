import { Helmet } from "react-helmet-async";

// bootstrap
import { Container, Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import shampoos from "../../data/shampoos.json";

// CSS
import styles from "./ShampoosCondicionadores.module.css";

const ShampoosCondicionadores = ({ banner2, favicon }) => {
  return (
    <>
      <Helmet>
        <title>Shampoos e Condicionadores em Ponte Nova</title>
        <meta
          name="description"
          content="Cuide dos seus fios com os shampoos e condicionadores Natura, que garantem brilho, maciez e saúde para seus cabelos. Encontre os produtos ideais na Natura Fast, em Ponte Nova, e conquiste cabelos radiantes."
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
            {shampoos &&
              shampoos.map(({ id, name, image }) => (
                <Col key={id} xl={3} md={4} xs={6} className="mb-4">
                  <Card>
                    <Link to={`/produtos/shampoos/${id}`}>
                      <Card.Img
                        className={styles.images_shampoos}
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

export default ShampoosCondicionadores;
