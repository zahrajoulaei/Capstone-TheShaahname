import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Character } from "../../types";

interface CharacterModalProps {
  show: boolean;
  onHide: () => void;
  formValues: {
    name: string;
    monarchy: string;
    age: string;
    abilities: string;
    specialty: string;
  };
  setFormValues: React.Dispatch<
    React.SetStateAction<{
      name: string;
      monarchy: string;
      age: string;
      abilities: string;
      specialty: string;
    }>
  >;
  onSubmit: () => void;
  isEditing: boolean;
  currentCharacter: Character | null; // Add currentCharacter to the interface

}


export default function CharacterModal({
  show,
  onHide,
  formValues,
  setFormValues,
  onSubmit,
  isEditing,
}: CharacterModalProps) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{isEditing ? "Edit Character" : "Add New Character"}</Modal.Title>
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
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={onSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}