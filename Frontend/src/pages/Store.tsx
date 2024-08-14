
import Header from "../components/header/Header";

// import "./Home/css"
import { Col, Container, Row } from "react-bootstrap";
import Sidemenu from "./Sidemenu";
import Footer from "../components/footer/Footer";

export default function Store() {
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
            <h2>Order your own shaahname mugs</h2>

            <p>
              At this place, you have the unique opportunity to order custom
              mugs featuring the iconic characters of the Shahnameh, the epic
              Persian poem that has captivated readers for centuries. Whether
              you’re a fan of the mighty Rostam, the wise Zal, or the tragic
              Sohrab, our collection allows you to bring these legendary figures
              into your daily life. Each mug is meticulously designed to capture
              the essence of these characters, making them not just a functional
              item but also a piece of art that pays homage to Persian culture
              and heritage. Perfect for your morning coffee or as a thoughtful
              gift, these mugs are a must-have for any Shahnameh enthusiast.
            </p>
            <p>
              In the near future, we will be expanding our offerings to include
              t-shirts and other merchandise, allowing you to celebrate the
              heroes and stories of the Shahnameh in even more ways. Imagine
              wearing a t-shirt that showcases your favorite character or
              decorating your home with items that feature scenes from this
              timeless epic. Our goal is to create a range of products that not
              only bring the Shahnameh to life but also allow you to express
              your connection to these powerful narratives in your everyday
              life. Stay tuned for more exciting additions to our collection!
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
