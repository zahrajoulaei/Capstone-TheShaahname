import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import cardImage from "../../assets/images/cardpic.png";
import "./Cardshah.css";

interface CardshahProps {
  title: string;
  desc: string;
  button: string;
  link: string;
  image?: string;
}

export default function Cardshah(props: CardshahProps) {
  return (
    <div>
      <Card className="card-shah">
        <Card.Img variant="top" src={cardImage} />
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