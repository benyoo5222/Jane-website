import "./HireJane.css";
import Navigation from "../Navigation/Navigation";
import RequestForm from "../Request-Form/RequestForm";

const HireJane = () => {
  return (
    <section className="other-pages-section">
      <div className="other-pages-veil"></div>
      <Navigation />

      <div className="hire-jane-text-container">
        <h1 className="hire-jane-text-headline">Hire Jane</h1>
      </div>

      <RequestForm />
    </section>
  );
};

export default HireJane;
