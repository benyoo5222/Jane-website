import "./Navigation.css";
import { ReactComponent as Icon } from "./menu.svg";
import { Link, useLocation } from "react-router-dom";

const Navigation = ({ handleMenu }) => {
  const location = useLocation();
  return (
    <div className="navigation">
      <header className="navigation-logo-section">
        <Link to="/" className="home-link">
          <img
            className="music-note"
            src="/jane-logo.png"
            alt="G Clef as part as Jane's logo"
          />

          <div className="logo-text-container">
            <p className="logo-text">Jane</p>
            <p className="logo-text">Gabriela's</p>
            <p className="logo-text">Music</p>
          </div>
        </Link>
      </header>

      <div className="navigation-menu">
        <Icon className="navigation-hamburger-menu" onClick={handleMenu} />
      </div>

      <div className="navigation-larger-display-menu">
        <div
          className={`navigation-larger-display-home ${
            location.pathname === "/" ? "active" : null
          }`}
        >
          <Link to="/" className={`remove-text-decoration`}>
            <p className={`navigation-larger-display-text`}>Home</p>
          </Link>
        </div>

        <div
          className={`navigation-larger-display-hire ${
            location.pathname === "/hire-jane" ? "active nav-space-right" : null
          }`}
        >
          <Link to="/hire-jane" className={`remove-text-decoration`}>
            <p className={`navigation-larger-display-text `}>Hire Jane</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
