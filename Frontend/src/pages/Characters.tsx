import React, { useState, useEffect } from 'react';
import Header from "../components/header/Header";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import Sidemenu from "./Sidemenu";
import Footer from "../components/footer/Footer";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    fetch('http://localhost:3000/api/characters')
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
        console.error('Error fetching characters:', error);
        setError('Failed to load characters');
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
      <div>
        
        <h1>Characters in Shahnameh</h1>
        <ul>
          {characters.map((character) => (
            <li key={character.id}>
              <h2>{character.name}</h2>
              <p>Monarchy: {character.monarchy}</p>
              <p>Age: {character.age}</p>
              <p>Abilities: {character.abilities.join(', ')}</p>
              <p>Specialty: {character.specialty}</p>
            </li>
          ))}
        </ul>
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
