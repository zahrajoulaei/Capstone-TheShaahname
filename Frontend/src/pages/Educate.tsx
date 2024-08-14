
import Header from "../components/header/Header";

// import "./Home/css"
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Sidemenu from "./Sidemenu";
import Footer from "../components/footer/Footer";

export default function Educate() {
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
        
        <div className="component-wrapper">


        <p>
              As you explore this page, you’ll also find a special feature:
              a collection of podcasts that delve deep into the stories, characters,
              and themes of the Shahnameh. To access these insightful discussions,
              simply click on the card below. These podcasts offer a rich audio
              experience that complements the visual feast of the artworks
              showcased here, providing you with a deeper understanding of the
              Shahnameh’s enduring legacy.
            </p>
            <Card className="mt-4">
              <Card.Body>
                <Card.Title>Explore Shahnameh Podcasts</Card.Title>
                <Card.Text>
                  Dive deeper into the stories and themes of the Shahnameh with our curated list of podcasts. Click here to start listening!
                </Card.Text>
                <Button variant="primary" href="#">
                  Go to Podcasts
                </Button>
              </Card.Body>
            </Card>


            <p className="mt-4">
              For those who are interested in exploring the Shahnameh further, we also recommend visiting the comprehensive Wikipedia page dedicated to this epic. The Wikipedia entry provides a detailed overview of the Shahnameh’s history, its author Ferdowsi, and the cultural significance of the work. Whether you’re new to the Shahnameh or a long-time admirer, the Wikipedia page offers valuable insights and context that can enrich your understanding of this monumental piece of literature.
            </p>
            
            <Card className="mt-4">
              <Card.Body>
                <Card.Title>Learn More on Wikipedia</Card.Title>
                <Card.Text>
                  Discover the rich history and cultural significance of the Shahnameh by visiting its Wikipedia page. Click below to read more!
                </Card.Text>
                <Button variant="primary" href="https://en.wikipedia.org/wiki/Shahnameh" target="_blank">
                  Go to Wikipedia
                </Button>
              </Card.Body>
            </Card>
        </div>

        </Col>
      </Row>

      <Row>
        <Footer />
      </Row>
    </Container>
  );
}
