import React from "react";
import {Col, Form, InputGroup, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./Mainmenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Cardshah from "../components/card/Cardshah";

export default function Mainmenu() {
  return (
    <>
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
        <Col>
          <Cardshah title="Ferdowsi" desc="Ferdowsi" button="see more"/>
        </Col>
        <Col>
          <Cardshah title="Characters" desc="Characters and features" button="see more"/>
        </Col>
        <Col>
          <Cardshah title="Stories" desc="Stories" button="see more"/>
        </Col>
      </Row>
      <Row>
        <Col>
            <Cardshah title="Gallery" desc="The Shahnameh gallery" button="see more"/>
          </Col>
          <Col>
            <Cardshah title="Stories" desc="The Shahnameh stories" button="see more"/>
          </Col>
          <Col>
            <Cardshah title="Stories" desc="The Shahnameh stories" button="see more"/>
          </Col>
      </Row>
    </>
  );
}
