import React, { useState, useEffect } from "react";
import Header from "../components/header/Header";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import Sidemenu from "./Sidemenu";
import Footer from "../components/footer/Footer";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cardshah from "../components/card/Cardshah";

interface Character {
  id: number;
  name: string;
  children: string[];
  monarchy: string;
  age: number | string;
  abilities: string[];
  specialty: string;
}

export default function Charachters() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/characters")
      .then((response) => {
        console.log("Response received:", response);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data received:", data);
        setCharacters(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching characters:", error);
        setError("Failed to load characters");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Container fluid>
      <Row>
        <Header />
      </Row>

      <Row>
        <Col xs={2}>
          <Sidemenu />
        </Col>
        <Col xs={10}>
          <Row className="search-box">
            <img src="src/assets/images/logohorse.png" />

            <InputGroup className="search">
              <InputGroup.Text id="basic-addon1">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </InputGroup.Text>

              <Form.Control
                placeholder="Search. . . "
                aria-label="search"
                aria-describedby="search"
              />
            </InputGroup>
          </Row>

          <Row>
            <h4>Characters in Shahnameh</h4>
            <p>
              Here is a selection of special characters from the Shahnameh, a
              timeless epic filled with over a hundred unique figures, each with
              their own remarkable abilities. Right now, 48 of these characters
              are listed below, giving you a glimpse into the rich world of this
              legendary story.
            </p>
          </Row>

          <Row>
            <div>
              <h1>Characters in Shahnameh</h1>

              <Row>
                {characters.map((character) => (
                  <Col key={character.id} md={4} className="mb-4">
                    <Cardshah
                      title={character.name}
                      desc={`Monarchy: ${character.monarchy}, Age: ${character.age}`} // Customize description as needed
                      button="View Details"
                      link={`/characters/${character.id}`}
                    />
                  </Col>
                ))}
              </Row>
            </div>
          </Row>
        </Col>
      </Row>

      <Row>
        <Footer />
      </Row>
    </Container>
  );
}
