
import Header from "../components/header/Header";

// import "./Home/css"
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Sidemenu from "./Sidemenu";
import Footer from "../components/footer/Footer";

export default function Blog() {
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
          <Col xs={10} className="mt-4">
            <div className="component-wrapper">
              <h2 className="mb-4">Our Latest Blog Posts</h2>

              <Row>
                <Col md={4}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://via.placeholder.com/300x200"
                    />
                    <Card.Body>
                      <Card.Title>Exploring the Myths of Shahnameh</Card.Title>
                      <Card.Text>
                        Dive into the legendary tales of Shahnameh, where heroes
                        like Rostam and Sohrab embark on epic journeys that have
                        captivated audiences for centuries.
                      </Card.Text>
                      <Button variant="primary">Read More</Button>
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={4}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://via.placeholder.com/300x200"
                    />
                    <Card.Body>
                      <Card.Title>The Tragic Tale of Sohrab</Card.Title>
                      <Card.Text>
                        Discover the heart-wrenching story of Sohrab, a tale of
                        love, loss, and the tragic consequences of fate as told
                        in the Shahnameh.
                      </Card.Text>
                      <Button variant="primary">Read More</Button>
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={4}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://via.placeholder.com/300x200"
                    />
                    <Card.Body>
                      <Card.Title>
                        Shahnameh’s Influence on Persian Culture
                      </Card.Title>
                      <Card.Text>
                        Explore how the Shahnameh has shaped Persian culture,
                        its enduring legacy, and why it remains a cornerstone of
                        Iranian identity.
                      </Card.Text>
                      <Button variant="primary">Read More</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </Col>
        </Col>
      </Row>

      <Row>
        <Footer />
      </Row>
    </Container>
  );
}
