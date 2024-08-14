
import Header from "../components/header/Header";

import { Col, Container, Row } from "react-bootstrap";
import Sidemenu from "./Sidemenu";
import Footer from "../components/footer/Footer";
import "./Ferdowsi.css"

export default function Ferdowsi() {
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
          <div className="ferdowsi-container">
            <h1>Ferdowsi - The Great Persian Poet</h1>
            <p>
              Abul-Qâsem Ferdowsi Tusi, known as Ferdowsi, was born in 940 in
              the village of Paj near the city of Tus, in the Khorasan region of
              the Samanid Empire (modern-day Iran). He is one of the most
              celebrated Persian poets and the author of the "Shahnameh" (The
              Book of Kings), which is one of the world's longest epic poems.
              Ferdowsi's work is considered a cornerstone of Persian literature,
              preserving the cultural heritage of pre-Islamic Iran through his
              epic stories of kings, heroes, and mythical creatures. Despite
              facing many hardships, including financial difficulties and the
              death of his son, Ferdowsi completed the Shahnameh in 1010,
              securing his place as one of the greatest poets in history.
            </p>

         
                <img
                  src="src/assets/images/ferdowsi-tehran.jpg"
                  alt="Ferdowsi Statue in Tehran"
                />
                <p className="description">
                  Statue of Ferdowsi in Tehran, honoring his contribution to
                  Persian literature.
                </p>
           
            <p>
              Ferdowsi was born into a family of landowners and was deeply
              influenced by the rich cultural traditions of pre-Islamic Iran.
              His aim in writing the Shahnameh was to preserve these traditions
              and the Persian language at a time when Arabic was becoming
              increasingly dominant in the region. He spent over three decades
              composing the Shahnameh, working tirelessly to compile and retell
              the legends of Iran's ancient kings and heroes. Despite facing
              numerous challenges, including financial hardship and the loss of
              his son, Ferdowsi remained dedicated to his mission of cultural
              preservation.
            </p>

            <p>
              The Shahnameh is not just a collection of stories; it is a
              profound reflection of Ferdowsi's patriotism and his desire to
              revive and safeguard Iran's cultural heritage. Through his epic,
              Ferdowsi sought to inspire a sense of pride in his people and to
              ensure that the history and legends of Iran would be remembered
              for generations to come. His work played a crucial role in the
              survival of the Persian language and has influenced countless
              writers and poets over the centuries.
            </p>

            
                <img
                  src="src/assets/images/shahname-matmuseum.jpeg"
                  alt="mat museum shaahnameh"
                />
                <p className="description">
                "The Angel Surush Rescues Khusrau Parviz from a Cul-de-sac", Folio 708v from the Shahnama (Book of Kings) of Shah Tahmasp"
                </p>
            

            <p>
              Ferdowsi's legacy lives on not only through the Shahnameh but also
              through the many statues, monuments, and institutions dedicated to
              his memory. He is celebrated as one of the greatest poets in the
              history of literature, and his work continues to be read and
              revered by people all over the world.
            </p>


            <h2>Further Reading and Resources</h2>
            <p>
              There are many resources available for those who want to learn
              more about Ferdowsi and the Shahnameh. Below are some of the most
              important links:
            </p>
            <ul>
              <li><a href="https://en.wikipedia.org/wiki/Ferdowsi" target="_blank">Ferdowsi - Wikipedia</a></li>
              <li><a href="https://www.britannica.com/biography/Ferdowsi" target="_blank">Ferdowsi - Encyclopædia Britannica</a></li>
              <li><a href="https://iranicaonline.org/articles/ferdowsi-i" target="_blank">Ferdowsi - Encyclopædia Iranica</a></li>
              <li><a href="https://www.metmuseum.org/toah/hd/shnm/ho_1970.301.4.htm" target="_blank">Shahnameh - The Mat Museum</a></li>
              <li><a href="https://www.hup.harvard.edu/books/9780674726802" target="_blank">Harvard University - Ferdowsi and the Shahnameh</a></li>
              <li><a href="https://cudl.lib.cam.ac.uk/collections/shahnama/1" target="_blank">Cambridge University -Shahnama Project</a></li>

            </ul>

          
          </div>
        </Col>
      </Row>

      <Row>
        <Footer />
      </Row>
    </Container>
  );
}
