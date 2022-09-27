import "./ShowCase.css";
import ActionButton from "../Action-Button/ActionButton";

const ShowCase = () => {
  return (
    <main className="showcase-container">
      <h3 className="showcase-title">Jane's Work</h3>

      <div className="showcase-larger-main-container">
        <iframe
          title="Jane's most viewed video - Here Comes the Bride"
          src="https://www.youtube.com/embed/oRQBDYv2ll8"
          className="showcase-main-video"
        ></iframe>
      </div>

      <div className="showcase-work-container">
        <section className="showcase-work-picture-text-container show-case-most-viewed-container">
          <a
            href="https://www.youtube.com/watch?v=oRQBDYv2ll8"
            target="_blank"
            rel="noopener noreferrer"
            className="showcase-image-link"
          >
            <img
              alt="Person holding a bouquet of flowers"
              src="/bouquet-of-flowers-original.jpg"
              className="showcase-work-image"
            />
          </a>

          <article className="showcase-work-text-container">
            <a
              href="https://www.youtube.com/watch?v=oRQBDYv2ll8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4 className="showcase-work-title">Most Viewed Video</h4>
            </a>

            <h5 className="showcase-work-sub-title">24,000+ Views</h5>

            <p className="showcase-work-description">
              For more than a century, the Bridal Chorus from Wagner’s opera
              Lohengrin, often called “Here Comes The Bride”, has been the most
              popular processional.
            </p>
          </article>
        </section>

        <section className="showcase-work-picture-text-container">
          <a
            href="https://www.youtube.com/watch?v=Ld48wL88BvY&list=PLHoveutO9DW2wtkLkU4teGlQu8kvAuIIV"
            target="_blank"
            rel="noopener noreferrer"
            className="showcase-image-link2"
          >
            <img
              alt="A tree with lights"
              src="/tree-lights.jpg"
              className="showcase-work-image2"
            />
          </a>

          <article className="showcase-work-text-container2">
            <a
              href="https://www.youtube.com/watch?v=Ld48wL88BvY&list=PLHoveutO9DW2wtkLkU4teGlQu8kvAuIIV"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4 className="showcase-work-title">
                Classical Music{" "}
                <span className="show-case-work-title-extra-text">
                  Playlist
                </span>
              </h4>
            </a>

            <h5 className="showcase-work-sub-title">Light Classicals</h5>

            <p className="showcase-work-description">
              Popular songs like Hallelujah, Ave Maria, Chopsticks, and much
              more!
            </p>
          </article>
        </section>

        <section className="showcase-work-picture-text-container">
          <a
            href="https://www.youtube.com/watch?v=35FRpB49xgM&list=PLHoveutO9DW0OYHEg91Kl8quL8YZDWnQq"
            target="_blank"
            rel="noopener noreferrer"
            className="showcase-image-link"
          >
            <img
              alt="A man and a woman's hands in a wedding"
              src="/wedding.jpg"
              className="showcase-work-image"
            />
          </a>

          <article className="showcase-work-text-container">
            <a
              href="https://www.youtube.com/watch?v=35FRpB49xgM&list=PLHoveutO9DW0OYHEg91Kl8quL8YZDWnQq"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4 className="showcase-work-title">
                Wedding Music{" "}
                <span className="show-case-work-title-extra-text">
                  Playlist
                </span>
              </h4>
            </a>

            <h5 className="showcase-work-sub-title">Traditional Songs</h5>

            <p className="showcase-work-description">
              You can listen to beautiful wedding songs like Canon in D,
              Gertrude’s Dream Waltz, Minuet, and others.
            </p>
          </article>
        </section>

        <section className="showcase-work-picture-text-container">
          <a
            href="https://www.youtube.com/watch?v=N4XnZmdc7W0&list=PLHoveutO9DW164nyhmogS-MJNuCZ0s48E"
            target="_blank"
            rel="noopener noreferrer"
            className="showcase-image-link2"
          >
            <img
              alt="Pink flower beside a bible"
              src="/bible.jpg"
              className="showcase-work-image2"
            />
          </a>

          <article className="showcase-work-text-container2">
            <a
              href="https://www.youtube.com/watch?v=N4XnZmdc7W0&list=PLHoveutO9DW164nyhmogS-MJNuCZ0s48E"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4 className="showcase-work-title">Church/Psalms</h4>
            </a>

            <h5 className="showcase-work-sub-title">Church Music</h5>

            <p className="showcase-work-description">
              From Silent Night to Away in a Manger, to Responsorial Psalms.
              Enjoy church music being played on an organ, or on a piano.
            </p>
          </article>
        </section>

        <section className="showcase-work-picture-text-container">
          <a
            href="https://www.youtube.com/watch?v=s1J9HjK6Bzs&list=PLHoveutO9DW0gg3MntQIqqv-6iLb7q3DL"
            target="_blank"
            rel="noopener noreferrer"
            className="showcase-image-link"
          >
            <img
              alt="Tulip flowers"
              src="/lily.jpg"
              className="showcase-work-image"
            />
          </a>

          <article className="showcase-work-text-container">
            <a
              href="https://www.youtube.com/watch?v=s1J9HjK6Bzs&list=PLHoveutO9DW0gg3MntQIqqv-6iLb7q3DL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4 className="showcase-work-title">Much More!</h4>
            </a>

            <h5 className="showcase-work-sub-title">Other Fun Music</h5>

            <p className="showcase-work-description">
              Check out more of Jane’s music!
            </p>
          </article>
        </section>
      </div>

      <ActionButton
        buttonText={"Hire Jane for Your Event!"}
        className={"action-button-showcase"}
      />
    </main>
  );
};

export default ShowCase;
