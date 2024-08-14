
import Header from "../components/header/Header";

import "./Home.css";
import { Col, Container, Row } from "react-bootstrap";
import Sidemenu from "./Sidemenu";
import Mainmenu from "./Mainmenu";
import Footer from "../components/footer/Footer";

export default function Home() {
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
          <Mainmenu />
        </Col>
      </Row>

      <Row>
        <Footer />
      </Row>
    </Container>
  );
}
