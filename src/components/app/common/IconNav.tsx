import {
  faBriefcase,
  faEnvelopeCircleCheck,
  faHandFist,
  faHomeAlt,
  faListDots,
  faProjectDiagram,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconNav = () => {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 rounded-full border px-4 py-4 hidden xl:block">
      <ul className="icon_menu">
        <li>
          <a href="#introduction">
            <FontAwesomeIcon icon={faHomeAlt} />
          </a>
        </li>
        <li>
          <a href="#about">
            <FontAwesomeIcon icon={faUser} />
          </a>
        </li>
        <li>
          <a href="#resume">
            <FontAwesomeIcon icon={faBriefcase} />
          </a>
        </li>
        <li>
          <a href="#services">
            <FontAwesomeIcon icon={faListDots} />
          </a>
        </li>
        <li>
          <a href="#skills">
            <FontAwesomeIcon icon={faHandFist} />
          </a>
        </li>
        <li>
          <a href="#portfolio">
            <FontAwesomeIcon icon={faProjectDiagram} />
          </a>
        </li>
        <li>
          <a href="#contact">
            <FontAwesomeIcon icon={faEnvelopeCircleCheck} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default IconNav;
