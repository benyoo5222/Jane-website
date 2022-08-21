import "./Navigation.css";
import { ReactComponent as Icon } from "./menu.svg";

const Navigation = () => {
  return (
    <div className="navigation">
      <header className="navigation-logo-section">
        <a className="home-link" href="/">
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
        </a>
      </header>

      <div className="navigation-menu">
        <Icon className="navigation-hamburger-menu" />
      </div>
    </div>
  );
};

export default Navigation;
