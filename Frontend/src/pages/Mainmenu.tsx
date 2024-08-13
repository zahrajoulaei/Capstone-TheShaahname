import {Col, Row } from "react-bootstrap";
import "./Mainmenu.css";
import Cardshah from "../components/card/Cardshah";

export default function Mainmenu() {
  return (
    <>
      <Row className="search-box">
        <img src="src/assets/images/logohorse.png" />
      </Row>

      <Row>
        <h4>A Timeless Epic of Persian Heritage</h4>
        <p>The Shahnameh, also known as “The Book of Kings,” is a monumental epic poem composed by the Persian poet Ferdowsi between approximately 977 and 1010 CE. As the national epic of Greater Iran, this masterpiece spans nearly 50,000 couplets, making it one of the longest epic poems in the world, and the longest by a single author. The Shahnameh intricately weaves together the mythical and historical narratives of the Persian Empire, from the dawn of creation to the Muslim conquest in the seventh century. Revered as a cornerstone of Persian culture and language, the Shahnameh not only chronicles the rich history of Iran but also defines the cultural and ethno-national identity of the region. Its influence resonates across Iran, Azerbaijan, Afghanistan, Tajikistan, and other areas touched by Persian heritage, solidifying its place as a timeless literary treasure.</p>
      </Row>

      <Row>
        <Col>
          <Cardshah title="Ferdowsi" desc="Ferdowsi" button="see more" link="/ferdowsi"/>
        </Col>
        <Col>
          <Cardshah title="Characters" desc="Characters and features" button="see more" link="/characters"/>
        </Col>
        <Col>
          <Cardshah title="Stories" desc="Stories" button="see more" link="/stories" image={""}/>
        </Col>
      </Row>
      <Row>
        <Col>
            <Cardshah title="Gallery" desc="The Shahnameh gallery" button="see more" link="/gallery"/>
          </Col>
          <Col>
            <Cardshah title="Art Works" desc="The Shahnameh Artworks" button="see more" link="/artworks"/>
          </Col>
          <Col>
            <Cardshah title="Store" desc="Store" button="see more" link="/store"/>
          </Col>
      </Row>
    </>
  );
}
