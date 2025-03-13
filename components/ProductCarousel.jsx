import React, { useState, useEffect } from "react";
import { Carousel, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ProductCarousel.css"; // Adicione um arquivo CSS para estilização

// Importando dados
import sabonetes from "../data/sabonetes.json";
import desodorantes from "../data/desodorantes.json";
import shampoos from "../data/shampoos.json";
import perfumes from "../data/perfumes.json";
import bodysplashs from "../data/bodysplashs.json";
import protetoresolares from "../data/protetoresolares.json";
import hidratantes from "../data/hidratantes.json";

const allProducts = [
  ...sabonetes,
  ...desodorantes,
  ...shampoos,
  ...perfumes,
  ...bodysplashs,
  ...protetoresolares,
  ...hidratantes,
];

const chunkArray = (array, size) => {
  return array.reduce((acc, _, i) => {
    if (i % size === 0) acc.push(array.slice(i, i + size));
    return acc;
  }, []);
};

const ProductCarousel = () => {
  const [itemsPerPage, setItemsPerPage] = useState(1); // Default to 1 item for small screens

  // Adiciona uma escuta de mudança de tamanho de tela para ajustar o número de itens no carrossel
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 900) { // Tela maior que 768px (tablets, desktops)
        setItemsPerPage(4);
      } else {
        setItemsPerPage(1); // Tela pequena (celulares)
      }
    };

    updateItemsPerPage(); // Define o valor inicial
    window.addEventListener("resize", updateItemsPerPage); // Atualiza ao redimensionar a janela

    return () => window.removeEventListener("resize", updateItemsPerPage); // Limpeza
  }, []);

  const groupedProducts = chunkArray(allProducts, itemsPerPage); // Divide os produtos com base na quantidade definida

  return (
    <div className="carousel-wrapper">
      <Carousel
        className="custom-carousel"
        interval={null}
        controls
        indicators={false}
        nextIcon={
          <span className="custom-arrow right" style={{ right: "100%" }}>
            ❯
          </span>
        }
        prevIcon={
          <span className="custom-arrow left" style={{ left: "100%" }}>
            ❮
          </span>
        }
      >
        {groupedProducts.map((group, index) => (
          <Carousel.Item key={index}>
            <div className="carousel-items-container">
              {group.map((product) => (
                <Card key={product.id} className="product-card">
                  <Link to={`/produtos/${product.tipo}/${product.id}`}>
                    <Card.Img
                      variant="top"
                      src={product.image}
                      alt={product.name}
                    />
                  </Link>
                  <Card.Body className="mb-5">
                    <Card.Title>{product.name}</Card.Title>
                  </Card.Body>
                  <Link
                    to={`/produtos/${product.tipo}/${product.id}`}
                    className="btn-overlay"
                  >
                    <Button
                      style={{
                        backgroundColor: "#F6A925",
                        border: "transparent",
                      }}
                    >
                      Veja mais
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>
            <div className="text-center mt-5 mb-3">
              <Link to="/produtos">
                <Button size="xs">Conheça nossos produtos</Button>
              </Link>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
