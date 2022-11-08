import "./Home.css";
import HeroSection from "../Hero-Section/HeroSection";
import ShowCase from "../Show-Case/ShowCase";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const Home = () => {
  const ref = useRef();
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  const handleClick = (event) => {
    if (ref.current) {
      setOpenMenu(ref.current.contains(event.target));
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div className="home-container">
      <HeroSection handleMenu={handleMenu} />
      <ShowCase />
      <Footer />

      <div
        ref={(node) => {
          ref.current = node;
        }}
        className={`navigation-side-menu ${
          openMenu ? "show_side_bar side_bar" : "side_bar"
        }`}
      >
        <div className="navigation-side-menu-close" onClick={handleMenu}>
          X
        </div>

        <div className="navigation-side-menu-options-container">
          <div className="navigation-side-menu-link-text-container">
            <Link
              to="/"
              className="remove-text-decoration navigation-side-menu-text-container"
            >
              <p className="navigation-side-menu-text">Home</p>
            </Link>
          </div>

          <div className="navigation-side-menu-link-text-container">
            <Link
              to="/hire-jane"
              className="remove-text-decoration navigation-side-menu-text-container"
            >
              <p className="navigation-side-menu-text">Hire Jane</p>
            </Link>
          </div>

          <div className="navigation-side-menu-link-text-container">
            <Link
              to="/why-jane"
              className="remove-text-decoration navigation-side-menu-text-container"
            >
              <p className="navigation-side-menu-text">Why Jane?</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
