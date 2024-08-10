import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Sidemenu.css";
import {
  faBook,
  faBookOpen,
  faBrush,
  faHeart,
  faHorse,
  faHouseUser,
  faImage,
  faNewspaper,
  faPerson,
  faShop,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Sidemenu() {
  return (
    <div className="side-menu">
      <ul>
        <li>
          <FontAwesomeIcon icon={faPerson} />

          <Link to="/ferdowsi" className="link-class">
            <span className="hide-on-small-screen"> Ferdowsi</span>
          </Link>
        </li>

        <li>
          <FontAwesomeIcon icon={faHorse} />

          <Link to="/characters" className="link-class">
            <span className="hide-on-small-screen"> Characters</span>
          </Link>
        </li>

        <li>
          <FontAwesomeIcon icon={faBook} />

          <Link to="/stories" className="link-class">
            <span className="hide-on-small-screen"> Stories</span>
          </Link>
        </li>

        <li>
          <FontAwesomeIcon icon={faImage} />

          <Link to="/gallery" className="link-class">
            <span className="hide-on-small-screen"> Gallery</span>
          </Link>
        </li>

        <li>
          <FontAwesomeIcon icon={faBrush} />

          <Link to="/artworks" className="link-class">
            <span className="hide-on-small-screen"> Art works</span>
          </Link>
        </li>

        <li>
          <FontAwesomeIcon icon={faNewspaper} />

          <Link to="/blog" className="link-class">
            <span className="hide-on-small-screen"> blog</span>
          </Link>
        </li>

        <li>
          <FontAwesomeIcon icon={faBookOpen} />

          <Link to="/gallery" className="link-class">
            <span className="hide-on-small-screen"> Educate</span>
          </Link>
        </li>

        <li>
          <FontAwesomeIcon icon={faShop} />

          <Link to="/gallery" className="link-class">
            <span className="hide-on-small-screen"> Store</span>
          </Link>
        </li>

        <li>
          <FontAwesomeIcon icon={faHeart} />

          <Link to="/gallery" className="link-class">
            <span className="hide-on-small-screen"> Favorites</span>
          </Link>
        </li>

        <li>
        <FontAwesomeIcon icon={faHouseUser} />

          <Link to="/" className="link-class">
            <span className="hide-on-small-screen"> Home</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
