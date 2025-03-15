import React from "react";
import { Helmet } from "react-helmet-async";
import ProductCarousel from "../../components/ProductCarousel";

// CSS
import styles from "./Home.module.css";

// bootstrap
import { Carousel } from "react-bootstrap";
import { Container, Row, Col, Stack, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = ({
  banner1,
  banner2,
  people,
  car,
  medalha,
  dinheiro,
  concorrencia,
  maps,
  favicon,
}) => {
  return (
    <>
      <Helmet>
        <title>Natura Fast Ponte Nova</title>
        <meta
          name="description"
          content="Encontre os melhores cosméticos da Natura com preços incríveis na Natura Fast. Maquiagens, perfumes e cuidados para sua beleza, com entrega rápida em Ponte Nova."
        />
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      </Helmet>
      <div>
        <Carousel controls={false} indicators={false}>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100 image-carousel"
              src={banner1}
              alt="Consultor Natura Fast"
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100 image-carousel-produtos"
              src={banner2}
              alt="Produtos da Natura Fast Ponte Nova"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div>
        <Container fluid>
          <Row className="mb-xs-5 mb-xl-0 mt-xl-5">
            <Col>
              <h5 style={{ color: "#F6A925" }} className="text-center mt-5">
                Nossos Produtos
              </h5>
              <h1 className="mb-3">
                Procurando{" "}
                <span style={{ color: "#F6A925" }}>Produtos Natura </span>em
                Ponte Nova Mg?
              </h1>
              <h4
                sm={12}
                xs={12}
                className="text-center text-black fst-italic mb-5"
              >
                Entregamos cosméticos, perfumes e maquiagens da Natura para toda
                região de Ponte Nova.
              </h4>
            </Col>
          </Row>
        </Container>
        <ProductCarousel />
      </div>
      <div>
        <Container>
          <Row className="mb-xs-5 mb-xl-0 mt-xl-5 d-flex justify-content-center align-items-end">
            <h5 style={{ color: "#F6A925" }} className="text-center mt-3 mb-3">
              Quem somos
            </h5>
            <h4 sm={12} xs={12} className="text-center fst-italic">
              Somos especialistas em produtos de beleza, cosméticos e cuidados
              pessoais.
            </h4>
            <p className="text-center p-4 mb-5">
              A Natura Fast é especializada em cosméticos, maquiagens, perfumes femininos e
              produtos de cuidados com a pele e cabelo da Natura, oferecendo às
              mulheres de Ponte Nova e região uma experiência única, com
              atendimento próximo e personalizado.
            </p>
            <Col
              xxl={5}
              xl={5}
              md={3}
              className={`d-none d-lg-block mt-3`}
              style={{ height: "600px" }}
            >
              <img
                src={people}
                alt="Pessoas"
                className={`${styles.img_people} w-100 h-100`}
                style={{ objectFit: "cover" }}
              />
            </Col>
            <Col className="mb-5">
              <ul className={`${styles.home}`}>
                <Stack gap={4}>
                  <li className={styles.list_item}>
                    <a href="produtos/sabonetes">
                      <div className={styles.circulo}>
                        <img
                          src={`https://cdn-icons-png.flaticon.com/128/1398/1398857.png`}
                          alt="Ícone de Sabonetes Natura"
                          className={styles.image}
                        />
                      </div>
                    </a>
                    <div className={styles.text_container}>
                      <h4 className={styles.span_list}>Sabonetes</h4>
                      <p>
                        Cuide da sua pele com suavidade e pureza em cada banho.
                      </p>
                    </div>
                  </li>
                  <li className={styles.list_item}>
                    <a href="produtos/shampoos">
                      <div className={styles.circulo}>
                        <img
                          src={`https://cdn-icons-png.flaticon.com/128/6722/6722750.png`}
                          alt="Ícone de Shampoos e Condicionadores Natura"
                          className={`${styles.image}`}
                        />
                      </div>
                    </a>
                    <div className={styles.text_container}>
                      <h4 className={styles.span_list}>
                        Shampoos e Condicionadores
                      </h4>
                      <p>
                        Nutrição e hidratação para cabelos sempre radiantes.
                      </p>
                    </div>
                  </li>
                  <li className={styles.list_item}>
                    <a href="produtos/desodorantes">
                      <div className={styles.circulo}>
                        <img
                          src={`https://cdn-icons-png.flaticon.com/128/1686/1686055.png`}
                          alt="Ícone de Desodorantes Natura"
                          className={styles.image}
                        />
                      </div>
                    </a>
                    <div className={styles.text_container}>
                      <h4 className={styles.span_list}>Desodorantes</h4>
                      <p>Proteção duradoura para o seu bem-estar e conforto.</p>
                    </div>
                  </li>
                  <li className={styles.list_item}>
                    <a href="produtos/perfumes">
                      <div className={styles.circulo}>
                        <img
                          src={`https://cdn-icons-png.flaticon.com/128/2047/2047370.png`}
                          alt="Ícone de Perfumes Natura"
                          className={styles.image}
                        />
                      </div>
                    </a>
                    <div className={styles.text_container}>
                      <h4 className={styles.span_list}>Perfumes</h4>
                      <p>Fragrâncias marcantes para realçar sua essência..</p>
                    </div>
                  </li>
                </Stack>
              </ul>
              <div className="text-center mt-5">
                <Link to="/produtos">
                  <Button
                    className={styles.button_link}
                    style={{
                      backgroundColor: "#F6A925",
                      border: "transparent",
                    }}
                  >
                    Conheça nossos produtos
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={`${styles.color_orange} pt-5 pb-5`}>
        <Container className="p-xs-0 mt-0 mt-xl-5 mb-0 mb-xl-5 p-xl-5" fluid>
          <Row className="p-3 justify-content-center">
            <Col xxl={12}>
              <h1 className={`text-light text-center p-3 mb-3`}>
                Compromisso com nossos clientes!
              </h1>
            </Col>
            <Col xxl={10} className="text-center">
              <h3>
                Nossa missão é proporcionar um serviço excepcional em todos os
                aspectos
              </h3>
              <h4 className="mb-5 d-none d-sm-block">
                Conheça os pilares que definem nossa excelência:
              </h4>
            </Col>
          </Row>
          <Row className={`text-center justify-content-around mb-5`}>
            <Col
              className={`${styles.cards} mb-4 p-4`}
              xxl={2}
              xl={2}
              lg={5}
              md={5}
              xs={10}
            >
              <img width={110} className="img-fluid" src={car} alt="" />
              <h4 className={styles.text_color_orange}>
                Entrega em toda Região
              </h4>
              <p className={`${styles.avaliacoes}`}>
                Garantimos uma experiência sem preocupações!
              </p>
            </Col>
            <Col
              className={`${styles.cards} mb-4 p-4`}
              xxl={2}
              xl={2}
              lg={5}
              md={5}
              xs={10}
            >
              <img width={110} className="img-fluid p-3" src={medalha} alt="" />
              <h4 className={styles.text_color_orange}>
                Ótimo <br />
                Atendimento
              </h4>
              <p>Refletimos nossa dedicação em cada detalhe!</p>
            </Col>
            <Col
              className={`${styles.cards} mb-4 p-4`}
              xxl={2}
              xl={2}
              lg={5}
              md={5}
              xs={10}
            >
              <img
                width={110}
                className="img-fluid p-3"
                src={dinheiro}
                alt=""
              />
              <h4 className={styles.text_color_orange}>
                Melhores <br /> Preços
              </h4>
              <p className={`${styles.avaliacoes}`}>
                Sua satisfação é nossa prioridade!
              </p>
            </Col>
            <Col
              className={`${styles.cards} mb-4 p-4`}
              xxl={2}
              xl={2}
              lg={5}
              md={5}
              xs={10}
            >
              <img
                width={110}
                className="img-fluid p-3"
                src={concorrencia}
                alt=""
              />
              <h4 className={styles.text_color_orange}>
                Líder no <br /> Mercado
              </h4>
              <p className={`${styles.avaliacoes}`}>
                Reconhecidos pela nossa excelência e confiança!
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={`pt-5 pb-5 mt-xl-5 mb-xl-5`}>
        <Container>
          <Row className="align-items-center justify-content-center mt-5 mb-5">
            <Col xxl={6} xl={5} lg={6} md={6} sm={10} className="text-black">
              <h1
                className={`${styles.text_color_orange} p-2 mb-5 ${styles.title_map}`}
              >
                Saiba onde nos encontrar!
              </h1>
              <ul className={styles.local}>
                <Stack className="pb-5" gap={3}>
                  <p>
                    <img src={maps} width={25} alt="Localização" />
                    Localização
                  </p>
                  <li>
                    <span className={`${styles.text_color_orange} fw-bold`}>
                      Logradouro:
                    </span>{" "}
                    Rua José Geraldo de Souza, 105 - 302
                  </li>
                  <li>
                    <span className={`${styles.text_color_orange} fw-bold`}>
                      Bairro:
                    </span>{" "}
                    Jardim
                  </li>
                  <li>
                    <span className={`${styles.text_color_orange} fw-bold`}>
                      CEP:
                    </span>{" "}
                    35430-238
                  </li>
                  <li>
                    <span className={`${styles.text_color_orange} fw-bold`}>
                      Cidade:
                    </span>{" "}
                    Ponte Nova-MG
                  </li>
                </Stack>
              </ul>
            </Col>
            <Col xxl={6} xl={7} lg={6} md={6} sm={10} className="text-center">
              <iframe
                className={styles.iframe}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3739.522043997092!2d-42.892264823706924!3d-20.402587453200688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6685407ede593b83%3A0xcd016ca67c5e3d0d!2sConsultor%20Natura%20Fast!5e0!3m2!1spt-PT!2sbr!4v1741730530654!5m2!1spt-PT!2sbr"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
