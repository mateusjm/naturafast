import { Helmet } from "react-helmet-async";

// bootstrap
import { Container, Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import hidratantes from "../../data/hidratantes.json";

// CSS
import styles from "./Hidratantes.module.css";

const Hidratantes = ({ banner2, favicon }) => {
  return (
    <>
      <Helmet>
        <title>Hidratantes em Ponte Nova</title>
        <meta
          name="description"
          content="Descubra os hidratantes Natura que proporcionam pele macia e hidratada o dia todo. Compre online e retire na Natura Fast, em Ponte Nova"
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
            {hidratantes &&
              hidratantes.map(({ id, name, image }) => (
                <Col key={id} xl={3} md={4} xs={6} className="mb-4">
                  <Card>
                    <Link to={`/produtos/hidratantes/${id}`}>
                      <Card.Img
                        className={styles.images_hidratantes}
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

export default Hidratantes;
