import { Container, Row, Col, Button } from "react-bootstrap";
import { Helmet } from "react-helmet-async";

function ErrorPage({ favicon }) {
  return (
    <>
      <Helmet>
        <title>Natura Fast Ponte Nova</title>
        <meta
          name="description"
          content="Oops! Parece que a página que você procurou não está disponível. Mas não se preocupe, explore outras opções na Natura Fast ou entre em contato conosco para assistência."
        />
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      </Helmet>
      <Container
        fluid
        className="d-flex flex-column justify-content-center align-items-center text-center vh-100"
      >
        <Row>
          <Col>
            <h1 style={{color: '#F6A925'}} className="display-1 fw-bold">404</h1>
            <p className="fs-4">
              Ops! A página que você está procurando não foi encontrada.
            </p>
            <Button href="/" size="md" className="mt-3">
              Voltar para a Página Inicial
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ErrorPage;
