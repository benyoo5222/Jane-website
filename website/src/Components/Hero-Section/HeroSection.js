import "./HeroSection.css";
import Navigation from "../Navigation/Navigation";
import ActionButton from "../Action-Button/ActionButton";

const HeroSection = ({ handleMenu }) => {
  return (
    <section className="hero-section">
      <div className="hero-section-veil"></div>
      <Navigation handleMenu={handleMenu} />

      <div className="hero-section-text-container">
        <h1 className="hero-section-text-headline">
          Lover of Music with 20+ years of experience in Piano & Singing
        </h1>
        <h2 className="hero-section-text-subheadline">
          If you are looking for a musician for your nursing home, church, or
          for a live/online event, reach out to Jane Today!
        </h2>
      </div>

      <ActionButton className={"action-button-hero-section"} />
    </section>
  );
};

export default HeroSection;
