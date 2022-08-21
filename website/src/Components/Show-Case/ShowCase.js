import "./ShowCase.css";

const ShowCase = () => {
  return (
    <main className="showcase-container">
      <h3 className="showcase-title">Jane's Work</h3>

      <div className="showcase-work-container">
        <section className="showcase-work">
          <img
            alt="Person holding a bouquet of flowers"
            src="/bouquet-of-flowers-original.jpg"
            className="showcase-work-image"
          />

          <p className="showcase-work-description">Lorem Ipsum</p>
        </section>

        <section className="showcase-work">
          <img
            alt="A tree with lights"
            src="/tree-lights.jpg"
            className="showcase-work-image2"
          />

          <p className="showcase-work-description2">Lorem Ipsum</p>
        </section>

        <section className="showcase-work">
          <img
            alt="A man and a woman's hands in a wedding"
            src="/wedding.jpg"
            className="showcase-work-image"
          />

          <p className="showcase-work-description">Lorem Ipsum</p>
        </section>

        <section className="showcase-work">
          <img
            alt="Pink flower beside a bible"
            src="/bible.jpg"
            className="showcase-work-image2"
          />

          <p className="showcase-work-description2">Lorem Ipsum</p>
        </section>
        <section className="showcase-work">
          <img
            alt="Tulip flowers"
            src="/lily.jpg"
            className="showcase-work-image"
          />

          <p className="showcase-work-description">Lorem Ipsum</p>
        </section>
      </div>
    </main>
  );
};

export default ShowCase;
