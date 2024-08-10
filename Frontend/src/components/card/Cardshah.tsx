import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import "./Cardshah.css"
import { Link } from "react-router-dom";

export default function (props) {
  return (
    <div>
      <Card className="card-shah">
        <Card.Img variant="top" src="src/assets/images/cardpic.png" />
        <Card.Body>
          <Card.Title>{props.title} </Card.Title>
          <Card.Text>{props.desc}</Card.Text>
          <Link to={props.link}>
            <Button variant="primary">{props.button}</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}
