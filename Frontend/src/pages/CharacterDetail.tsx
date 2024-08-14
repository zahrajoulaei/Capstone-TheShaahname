import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { CharactersContext } from "./CharactersContext";
import "./CharacterDetail.css";

import "../pages/Home.css";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
// import characterImages from "../assets/characterImages.js";

import { Col, Container, Row } from "react-bootstrap";
import Sidemenu from "./Sidemenu";

export default function CharacterDetail() {
  const { id } = useParams<{ id: string }>();
  const { characters, loading, error } = useContext(CharactersContext);

  if (!id) {
    return <div>Error: Character ID is missing</div>;
  }

  // const character = characters.find((char) => char.id === parseInt(id));
  const character = characters.find((char) => char._id === id);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !character) {
    return <div>Error loading character details</div>;
  }
  const characterIndex = characters.indexOf(character);

  const previousCharacter = characters[characterIndex - 1];
  const nextCharacter = characters[characterIndex + 1];

  return (
    <Container fluid>
      <Row>
        <Header />
      </Row>

      <Row>
        <Col xs={2}>
          <Sidemenu />
        </Col>
        <Col xs={10} className="CharDetailCard">
          <div className="CharDetailCardInfo">
            <h2>{character.name}</h2>
            {/* <img
              src={
                characterImages[character.name] ||
                "/src/assets/images/logohorse.png"
              }
              alt={character.name}
            /> */}

              <img
              src={
                "https://via.placeholder.com/300" 
               
              }
              alt={character.name}
            />

            


            <p>Monarchy: {character.monarchy}</p>
            <p>Age: {character.age}</p>
            <p>Abilities: {character.abilities.join(", ")}</p>
            <p>Specialty: {character.specialty}</p>
            <p>Children: {character.children}</p>

            <div className="navigation-links">
              {previousCharacter && (
                <Link
                  to={`/characters/${previousCharacter._id}`} // Use _id here
                  className="btn btn-primary"
                >
                  Previous: {previousCharacter.name}
                </Link>
              )}
              {nextCharacter && (
                <Link
                  to={`/characters/${nextCharacter._id}`} // Use _id here
                  className="btn btn-primary ml-2"
                >
                  Next: {nextCharacter.name}
                </Link>
              )}
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Footer />
      </Row>
    </Container>
  );
}