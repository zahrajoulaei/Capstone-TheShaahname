
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
            <span> Ferdowsi</span>
          </Link>
        </li>

        <li>
          <FontAwesomeIcon icon={faHorse} />

          <Link to="/characters" className="link-class">
            <span> Characters</span>
          </Link>
        </li>

        <li>
          <FontAwesomeIcon icon={faBook} />

          <Link to="/stories" className="link-class">
            <span> Stories</span>
          </Link>
        </li>

        <li>
          <FontAwesomeIcon icon={faImage} />

          <Link to="/gallery" className="link-class">
            <span> Gallery</span>
          </Link>
        </li>

        <li>
          <FontAwesomeIcon icon={faBrush} />

          <Link to="/artworks" className="link-class">
            <span> Art works</span>
          </Link>
        </li>

        <li>
          <FontAwesomeIcon icon={faNewspaper} />

          <Link to="/blog" className="link-class">
            <span> blog</span>
          </Link>
        </li>

        <li>
          <FontAwesomeIcon icon={faBookOpen} />

          <Link to="/educate" className="link-class">
            <span> Educate</span>
          </Link>
        </li>

        <li>
          <FontAwesomeIcon icon={faShop} />

          <Link to="/store" className="link-class">
            <span> Store</span>
          </Link>
        </li>

        <li>
          <FontAwesomeIcon icon={faHeart} />

          <Link to="/favorites" className="link-class">
            <span> Favorites</span>
          </Link>
        </li>

        <li>
          <FontAwesomeIcon icon={faHouseUser} />

          <Link to="/" className="link-class">
            <span> Home</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
