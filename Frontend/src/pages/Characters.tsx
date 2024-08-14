import  { useState, useEffect } from "react";
import Header from "../components/header/Header";
import SearchChar from "../components/search/SearchChar";
import CharacterModal from "../components/charmodal/CharacterModal";
import { Col, Container, Row, Button } from "react-bootstrap";
import Sidemenu from "./Sidemenu";
import Footer from "../components/footer/Footer";
import Cardshah from "../components/card/Cardshah";
import { Character } from "../types"; // Use the Character type from types.ts
import axios from "axios";

export default function Characters() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentCharacter, setCurrentCharacter] = useState<Character | null>(
    null
  );
  const [formValues, setFormValues] = useState({
    name: "",
    monarchy: "",
    age: "",
    abilities: "",
    specialty: "",
  });

  const baseURL = "http://localhost:3000";

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    try {
      const response = await fetch(`${baseURL}/api/characters`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: Character[] = await response.json();
      console.log("data:", data);
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

  const handleDelete = async (id: any) => {
    try {
      const response = await fetch(`${baseURL}/api/characters/${id}`, {
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

  // const handleSubmit = async () => {
  //   const characterData = {
  //     ...formValues,
  //     age: parseInt(formValues.age),
  //     abilities: formValues.abilities
  //       .split(",")
  //       .map((ability) => ability.trim()), // Convert abilities to an array
  //   };

  //   try {
  //     let response;
  //     if (currentCharacter) {
  //       // Edit character
  //       response = await fetch(
  //         `${baseURL}/api/characters/${currentCharacter._id}`,
  //         {
  //           method: "PATCH",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify(characterData),
  //         }
  //       );
  //     } else {
  //       response = await axios({
  //         url: `${baseURL}/api/characters`,
  //         method: "POST",
  //         data: characterData,
  //       });

  //       console.log(response);
  //     }

  //     if (response.status != 200) {
  //       console.log(response);
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }

  //     fetchCharacters();
  //     setShowModal(false);
  //   } catch (error) {
  //     console.error("Error saving character:", error);
  //   }
  // };

  const handleAddCharacter = async () => {
    if (!formValues.name || !formValues.monarchy || !formValues.age || !formValues.abilities || !formValues.specialty) {
      console.error("All fields are required");
      return;
    }
  
    const characterData = {
      ...formValues,
      age: parseInt(formValues.age),
      abilities: formValues.abilities.split(",").map((ability) => ability.trim()),
    };
  
    try {
      const response = await axios.post(
        `${baseURL}/api/characters`,
        characterData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      if (response.status !== 200) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      fetchCharacters();
      setShowModal(false);
    } catch (error) {
      console.error("Error adding character:", error);
    }
  };
  const handleEditCharacter = async () => {
    const characterData = {
      ...formValues,
      age: parseInt(formValues.age),
      abilities: formValues.abilities
        .split(",")
        .map((ability) => ability.trim()),
    };

    try {
      const response = await fetch(
        `${baseURL}/api/characters/${currentCharacter?._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(characterData),
        }
      );

      if (response.status !== 200) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      fetchCharacters();
      setShowModal(false);
    } catch (error) {
      console.error("Error editing character:", error);
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
            <SearchChar
              characters={characters}
              onSearchResults={handleSearchResults}
            />
          </Row>

          <Row>
            <h4>Characters in Shahnameh</h4>
            <p>
              Here is a selection of special characters from the Shahnameh, a
              timeless epic filled with over a hundred unique figures, each with
              their own remarkable abilities. Right now, some of these
              characters are listed below, giving you a glimpse into the rich
              world of this legendary story.
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
                {/* //TODO: id here */}
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
      <CharacterModal
        show={showModal}
        onHide={() => setShowModal(false)}
        formValues={formValues}
        setFormValues={setFormValues}
        onSubmit={currentCharacter ? handleEditCharacter : handleAddCharacter}
        isEditing={!!currentCharacter}
        currentCharacter={currentCharacter} // Pass currentCharacter as a prop
      />
    </Container>
  );
}
