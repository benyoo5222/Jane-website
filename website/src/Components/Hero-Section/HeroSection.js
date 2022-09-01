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
          If you are looking to entertain your members at your nursing home or
          at your long term care facility, book Jane today!
        </h2>
      </div>

      <ActionButton
        buttonText={"Hire Jane for Your Event!"}
        className={"action-button-hero-section"}
      />
    </section>
  );
};

export default HeroSection;
