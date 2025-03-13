import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Form,
  FormControl,
  Button,
  Container,
  Col,
  Row,
} from "react-bootstrap";

import styles from "../components/ButtonSearch.module.css";

function ButtonSearch({ searchPath, placeholder = "Pesquisar..." }) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === "") return;

    const normalizedSearchTerm = searchTerm.trim().toLowerCase();
    navigate(`${searchPath}?q=${encodeURIComponent(normalizedSearchTerm)}`);
    setSearchTerm("");
  };

  return (
    <Container>
      <Row className="justify-content-center align-items-center">
        <Col xs={11} xl={8}>
          <Form className="mt-5 d-flex" onSubmit={handleSearch}>
            <FormControl
              type="text"
              placeholder={placeholder}
              className="me-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Pesquisar"
              style={{
                outline: "none",
                boxShadow: "none",
                borderColor: "#EB6619",
              }}
            />
            <Button
              variant="outline-custom"
              className={`ms-2 me-1 ${styles.btn_outline_custom}`}
              type="submit"
            >
              Buscar
            </Button>

            <Button href="/busca" style={{ width: 200, backgroundColor: '#EB6619', border: 'transparent' }} type="submit">
              Mostrar todos
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ButtonSearch;
