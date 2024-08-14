import Header from "../components/header/Header";
import { Col, Container, Row, Figure } from "react-bootstrap";
import Sidemenu from "./Sidemenu";
import Footer from "../components/footer/Footer";

export default function Gallery() {
  return (
    <Container fluid>
      <Row>
        <Header />
      </Row>

      <Row>
        <Col xs={2}>
          <Sidemenu />
        </Col>
        <Col xs={10} className="mt-4">
          <h2 className="mb-4 text-center">Gallery</h2>

          <Row>
            <Col md={4} className="mb-4">
              <Figure>
                <Figure.Image
                  width={400}
                  height={300}
                  alt="Placeholder"
                  src="https://via.placeholder.com/400x300"
                />
                <Figure.Caption>
                  Caption for first image.
                </Figure.Caption>
              </Figure>
            </Col>
            <Col md={4} className="mb-4">
              <Figure>
                <Figure.Image
                  width={400}
                  height={300}
                  alt="Placeholder"
                  src="https://via.placeholder.com/400x300"
                />
                <Figure.Caption>
                  Caption for second image.
                </Figure.Caption>
              </Figure>
            </Col>
            <Col md={4} className="mb-4">
              <Figure>
                <Figure.Image
                  width={400}
                  height={300}
                  alt="Placeholder"
                  src="https://via.placeholder.com/400x300"
                />
                <Figure.Caption>
                  Caption for third image.
                </Figure.Caption>
              </Figure>
            </Col>
          </Row>

          <Row>
            <Col md={6} className="mb-4">
              <Figure>
                <Figure.Image
                  width={500}
                  height={350}
                  alt="Placeholder"
                  src="https://via.placeholder.com/500x350"
                />
                <Figure.Caption>
                  Caption for fourth image.
                </Figure.Caption>
              </Figure>
            </Col>
            <Col md={6} className="mb-4">
              <Figure>
                <Figure.Image
                  width={500}
                  height={350}
                  alt="Placeholder"
                  src="https://via.placeholder.com/500x350"
                />
                <Figure.Caption>
                  Caption for fifth image.
                </Figure.Caption>
              </Figure>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Footer />
      </Row>
    </Container>
  );
}