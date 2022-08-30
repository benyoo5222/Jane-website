import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container">
      <ul className="footer-nav-container">
        <li className="footer-home-youtube-container">
          <Link to="/" className="footer-text-container footer-left-item">
            <p className="footer-text">Home</p>
          </Link>

          <a
            href="https://www.youtube.com/channel/UCuJ5L_jILLjCY01Yt9KQulw"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-text-container footer-youtube"
          >
            <p className="footer-text">Jane's Youtube Page</p>
          </a>
        </li>

        <li className="footer-home-youtube-container">
          <Link
            to="/hire-jane"
            className="footer-text-container footer-left-item"
          >
            <p className="footer-text">Hire Jane</p>
          </Link>
        </li>
      </ul>

      <div className="footer-credit-container">
        <p className="footer-text footer-credit">Built By Ben</p>
      </div>
    </footer>
  );
};

export default Footer;
