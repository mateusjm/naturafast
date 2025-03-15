import React, { useState, useEffect } from "react";
import { Carousel, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ProductCarousel.css";
import styles from "../routes/Home/Home.module.css";

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
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1600) {
        setItemsPerPage(4); // Telas grandes
      } else if (window.innerWidth >= 1250) {
        setItemsPerPage(3); // Telas médias
      } else if (window.innerWidth >= 850) {
        setItemsPerPage(2); // Telas um pouco menores
      } else {
        setItemsPerPage(1); // Telas pequenas
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const groupedProducts = chunkArray(allProducts, itemsPerPage);

  return (
    <div className="carousel-wrapper">
      <Carousel
        className="custom-carousel custom-arrow"
        interval={null}
        controls
        indicators={false}
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
                  <Card.Body>
                    <Card.Title className="mb-4">{product.name}</Card.Title>
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
            <div className="text-center mt-5 mb-5">
              <Link to="/produtos">
                <Button
                  style={{ backgroundColor: "#F6A925", border: "transparent" }}
                >
                  Conheça nossos produtos
                </Button>
              </Link>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
