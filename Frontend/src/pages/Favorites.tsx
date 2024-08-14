
import Header from "../components/header/Header";

// import "./Home/css"
import { Col, Container, Row } from "react-bootstrap";
import Sidemenu from "./Sidemenu";
import Footer from "../components/footer/Footer";

export default function Favorites() {
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
            <h2>Your Favorite Shahnameh Content</h2>

            <p>
              Welcome to your favorites page, where you can easily access all
              the parts of Shahnameh that resonate most with you. Here, you’ll
              find a curated collection of your favorite blog posts, characters,
              and stories. Whether it’s an insightful analysis of Rostam’s
              heroism, a detailed exploration of Sohrab’s tragic tale, or a
              breakdown of the themes that define the Shahnameh, this page
              allows you to revisit and relish the content that speaks to your
              heart.
            </p>
            <p>
              As you explore the Shahnameh through our blogs, you might find
              yourself drawn to specific articles that offer deeper
              interpretations of these timeless stories. In this section, you
              can save and return to your favorite blog posts anytime. Similarly,
              the beloved characters of Shahnameh, from the valiant Rostam to the
              wise Zal, are all here. Each time you add a character to your
              favorites, you’re building a personalized gallery of the figures
              that intrigue you the most.
            </p>
            <p>
              This page is designed to grow with your interests. As we expand our
              offerings to include more content, such as favorite stories or new
              insights into the Shahnameh, this space will continue to evolve,
              offering you a personalized gateway into the rich world of Persian
              mythology. Stay tuned as we add more ways for you to engage with
              and celebrate the epic tales of the Shahnameh.
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
