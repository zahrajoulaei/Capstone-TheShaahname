import Header from "../components/header/Header";

// import "./Home/css"
import {Col, Container, Row } from "react-bootstrap";
import Sidemenu from "./Sidemenu";
import Footer from "../components/footer/Footer";

export default function Artworks() {
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
            <img
              src="https://via.placeholder.com/300"
              alt="Placeholder"
              style={{ marginBottom: "20px" }}
            />
            <h2>Shahnameh Artworks and Inspirations</h2>

            <p>
              The Shahnameh’s profound impact extends beyond literature into the
              realm of visual arts. Across the world, museums and galleries have
              showcased works inspired by this epic, offering a visual
              representation of its timeless tales. On this page, we introduce
              you to these institutions, as well as the professors and artists
              who have dedicated their craft to interpreting the Shahnameh
              through various art forms. Whether it’s a museum exhibit
              displaying ancient Persian miniatures or a modern art gallery
              exploring contemporary interpretations of Shahnameh themes, you’ll
              find a rich tapestry of creative expression here.
            </p>
            <p>
              In addition to museums and galleries, we also highlight the work
              of professors and scholars who have dedicated their academic
              careers to studying and teaching the Shahnameh. Their insights
              and research have inspired countless artists to create works that
              bridge the past and present, connecting the ancient stories of
              the Shahnameh with modern audiences. Through their dedication,
              the Shahnameh continues to live on in new and innovative forms,
              inspiring a new generation of artists and enthusiasts.
            </p>
           
          </div>
        </Col>
      </Row>

      <Row>
        <Footer />
      </Row>
    </Container>
  );
}
