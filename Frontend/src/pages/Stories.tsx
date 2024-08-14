
import Header from "../components/header/Header";

// import "./Home/css"
import { Col, Container, Row } from "react-bootstrap";
import Sidemenu from "./Sidemenu";
import Footer from "../components/footer/Footer";
import "./Home.css";

export default function Stories() {
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
            <h2>Amazing Stories of Shaahname</h2>

            <p>
              The stories of the Shahnameh, often referred to as the “Book of
              Kings,” are some of the most captivating and timeless narratives
              in Persian literature. Composed by the poet Ferdowsi over a
              thousand years ago, this epic masterpiece weaves together tales of
              heroism, love, betrayal, and the eternal struggle between good and
              evil. The Shahnameh spans a mythical and historical timeline that
              captures the essence of Persian culture and identity. Its stories
              are not only a treasure trove of moral and ethical lessons but
              also a vivid portrayal of the human condition, making them
              resonate across generations.
            </p>
            <p>
              Among the many characters that populate the Shahnameh, figures
              like Rostam, Sohrab, and Zal stand out as paragons of strength,
              courage, and wisdom. Rostam, the mightiest of heroes, is a symbol
              of loyalty and valor, his exploits in battles and his tragic
              encounter with his son Sohrab echoing the depth of human emotions
              and the complexities of fate. These characters are richly
              developed, with layers of personality and moral dilemmas that
              would translate beautifully to the screen. Imagine a movie or a
              popular series where Rostam’s legendary feats are brought to life
              with modern cinematography, or where the intricate relationships
              between these iconic figures are explored in a multi-season
              narrative. The Shahnameh’s stories, with their epic scale and
              profound themes, are ripe for adaptation into a format that could
              introduce them to a global audience.
            </p>
            <p>
              In a world where mythological and historical epics are
              increasingly popular in film and television, the Shahnameh offers
              a wealth of material that could rival the success of franchises
              like “Game of Thrones” or “The Lord of the Rings.” The rich
              tapestry of its tales, combined with the universal appeal of its
              themes, ensures that the characters and stories of the Shahnameh
              could capture the imaginations of viewers worldwide, bringing the
              grandeur of Persian mythology to the forefront of popular culture.
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
