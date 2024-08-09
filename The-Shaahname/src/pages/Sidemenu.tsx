import {
  faBook,
  faBookOpen,
  faBrush,
  faHeart,
  faHorse,
  faImage,
  faNewspaper,
  faPerson,
  faShop,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Sidemenu.css";

export default function Sidemenu() {
  return (
    <div className="side-menu">
      <ul>
        <li>
          <FontAwesomeIcon icon={faPerson} />
          <span className="hide-on-small-screen"> Ferdowsi</span>
        </li>

        <li>
          <FontAwesomeIcon icon={faHorse} />
          <span className="hide-on-small-screen"> Characters</span>
        </li>

        <li>
          <FontAwesomeIcon icon={faBook} />
          <span className="hide-on-small-screen"> Stories</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faImage} />
          <span className="hide-on-small-screen"> Gallery</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faBrush} />
          <span className="hide-on-small-screen"> Art works</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faNewspaper} />
          <span className="hide-on-small-screen"> blog</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faBookOpen} />
          <span className="hide-on-small-screen"> Educate</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faShop} />
          <span className="hide-on-small-screen"> Store</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faHeart} />
          <span className="hide-on-small-screen"> Favorites</span>
        </li>
      </ul>
    </div>
  );
}
