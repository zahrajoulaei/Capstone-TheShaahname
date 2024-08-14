import React, { useState, useEffect } from "react";
import Header from "../components/header/Header";
import SearchChar from "../components/search/SearchChar";
import { Col, Container, Row, Button, Modal, Form } from "react-bootstrap";
import Sidemenu from "./Sidemenu";
import Footer from "../components/footer/Footer";
import Cardshah from "../components/card/Cardshah";
import { Character } from "../types"; // Use the Character type from types.ts

export default function Charachters() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentCharacter, setCurrentCharacter] = useState<Character | null>(null);
  const [formValues, setFormValues] = useState({
    name: "",
    monarchy: "",
    age: "",
    abilities: "",
    specialty: "",
  });

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/characters");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: Character[] = await response.json();
      setCharacters(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching characters:", error);
      setError("Failed to load characters");
      setLoading(false);
    }
  };

  const handleSearchResults = (searchResults: Character[]) => {
    setCharacters(searchResults); // Update characters with search results
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:3000/api/characters/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setCharacters(characters.filter((character) => character._id !== id));
    } catch (error) {
      console.error("Error deleting character:", error);
    }
  };

  const handleEdit = (character: Character) => {
    setCurrentCharacter(character);
    setFormValues({
      name: character.name,
      monarchy: character.monarchy,
      age: character.age.toString(),
      abilities: character.abilities.join(", "),
      specialty: character.specialty,
    });
    setShowModal(true);
  };

  const handleAddNew = () => {
    setCurrentCharacter(null);
    setFormValues({
      name: "",
      monarchy: "",
      age: "",
      abilities: "",
      specialty: "",
    });
    setShowModal(true);
  };

  const handleSubmit = async () => {
    const characterData = {
      ...formValues,
      age: parseInt(formValues.age), 
      abilities: formValues.abilities.split(",").map((ability) => ability.trim()), // Convert abilities to an array
    };

    try {
      let response;
      if (currentCharacter) {
        // Edit character
        response = await fetch(`http://localhost:3000/api/characters/${currentCharacter._id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(characterData),
        });
      } else {
        // Add new character
        response = await fetch(`http://localhost:3000/api/characters`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(characterData),
        });
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      fetchCharacters();
      setShowModal(false);
    } catch (error) {
      console.error("Error saving character:", error);
    }
  };

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
            <img src="src/assets/images/logohorse.png" alt="Logo" />
            <SearchChar characters={characters} onSearchResults={handleSearchResults} />
          </Row>

          <Row>
            <h4>Characters in Shahnameh</h4>
            <p>
              Here is a selection of special characters from the Shahnameh, a timeless epic filled
              with over a hundred unique figures, each with their own remarkable abilities. Right
              now, 48 of these characters are listed below, giving you a glimpse into the rich world
              of this legendary story.
            </p>
          </Row>

          <Row>
            <Button onClick={handleAddNew} variant="success" className="mb-3">
              Add New Character
            </Button>
          </Row>

          <Row>
            {characters.map((character) => (
              <Col key={character._id} md={4} className="mb-4">
                <Cardshah
                  title={character.name}
                  desc={`Monarchy: ${character.monarchy}, Age: ${character.age}`}
                  button="View Details"
                  link={`/characters/${character._id}`} // Use _id here
                />
                <Button
                  variant="warning"
                  className="mt-2"
                  onClick={() => handleEdit(character)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  className="mt-2 ms-2"
                  onClick={() => handleDelete(character._id)} // Use _id here
                >
                  Delete
                </Button>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      <Row>
        <Footer />
      </Row>

      {/* Modal for Add/Edit Character */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{currentCharacter ? "Edit Character" : "Add New Character"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter character name"
                value={formValues.name}
                onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Monarchy</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter monarchy"
                value={formValues.monarchy}
                onChange={(e) => setFormValues({ ...formValues, monarchy: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter age"
                value={formValues.age}
                onChange={(e) => setFormValues({ ...formValues, age: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Abilities</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter abilities (comma separated)"
                value={formValues.abilities}
                onChange={(e) => setFormValues({ ...formValues, abilities: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Specialty</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter specialty"
                value={formValues.specialty}
                onChange={(e) => setFormValues({ ...formValues, specialty: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}