import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import ActionButton from "../Action-Button/ActionButton";
import "./WhyJane.css";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const WhyJane = () => {
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
    <section className="other-pages-section">
      <div className="other-pages-veil"></div>
      <Navigation handleMenu={handleMenu} />

      <div className="hire-jane-text-container">
        <h1 className="hire-jane-text-headline">
          Why Jane for your Retirement Home?
        </h1>
      </div>

      <main className="other-pages-body-container">
        <h3 className="other-pages-body-title why-jane-title-container">
          Your co-workers will be thanking you for making their jobs so much
          easier! (Because your residents will be in such a good mood!)
        </h3>

        <div className="why-jane-offer-container">
          <p>
            Constantly researching, planning, and coordinating activities is
            hard.
          </p>
          <p>
            You (activity/recreational therapy director) are constantly thinking
            about how to incorporate 30 minutes of physical activities a day for
            Susan, while making sure everyone else can do the exercise.
          </p>
          <p>
            And because both you and the residents are sick of playing bingo for
            the 100th time, you spend hours upon hours researching for new
            activities.
          </p>
          <p>...All the while, Peter is throwing a fit again...</p>
          <p>
            We understand that you can be under appreciated at times compared to
            how much work is involved.
          </p>
          <p>
            <strong>
              <u>But</u> what if you could have a day where your residents are
              thanking you for such a fun, yet nostolgic activity.
            </strong>
          </p>
          <p>
            <strong>
              And because your residents are in such a good mood, your coworkers
              are also thanking you for making their jobs so much easier!
            </strong>
          </p>
          <p>
            The best part? Just relax and enjoy your coffee! Jane will provide
            the entertainment for you!
          </p>
          <p>
            <u>As a musician for over 40+ years</u>, she started her career as a
            music teacher, after receiving her degree in music. Additionally,
            she trained as a singer for the opera.
          </p>
          <p>
            Now she focuses on playing light classics (check out one of her
            performances right below!) to bring joy and nostalgia for seniors.
            By playing songs that your residents will be familiar with such as
            movie sound tracks, pop songs, folk songs, and hymns, it will allow
            them to walk down memory lane.
          </p>

          <div className="showcase-larger-main-container main-video-why-jane">
            <iframe
              title="Jane's most viewed video - Here Comes the Bride"
              src="https://www.youtube.com/embed/s1J9HjK6Bzs"
              className="showcase-main-video"
            ></iframe>
          </div>

          <p>
            <strong>
              Heads up! - Jane can only accept the first 20 clients so hurry
              before spots fill up!
            </strong>
          </p>

          <ActionButton
            buttonText={"Hire Jane for Your Retirement Home!"}
            className={"action-button-showcase why-jane-button"}
          />

          <section className="why-jane-new-section">
            <p>
              <strong>Why Music over other activities?</strong>
            </p>
            <p>
              The most common problems that residents face in retirement homes
              are lonliness, depression, and anxiety around memory loss.
            </p>
            <p>This is why music is so impactful for seniors!</p>
            <p>Music is known to: </p>
            <ol className="music-benefits">
              <li>
                Trigger memories and emotions from the past that allows them to
                reminisce about their youth (Nostolgia).
              </li>
              <li>Reduce stress levels and make residents' happier</li>
              <li>Improves speech and concentration</li>
              <li>Improves memory and recall</li>
            </ol>
            <p>This is why Jane focuses on playing light classics.</p>
            <p>
              By playing songs that the residents' will be familiar with, it
              allows them to travel back in time and remember their favourite
              memories!
            </p>
            <article className="bonus">
              <strong>
                Bonus #1: 30 light classics that seniors absolutely love! Curate
                the perfect playlist for your retirement home! (We also have 15
                songs picked out for you!)
              </strong>
              <p>
                We know that your residents want songs that they like and are
                familiar with. If you'd like, you and/or the residents can
                choose 15 songs or Jane can perform a pre-selected, top 15 songs
                for most retirement homes!
              </p>
              <div className="music-playlist-container">
                <img
                  src="/music_list.png"
                  className="music-playlist"
                  alt="Music Playlist"
                ></img>
              </div>
            </article>
          </section>

          <section className="why-jane-new-section">
            <p>
              <strong>Is it in person or online?</strong>
            </p>
            <p>Jane currently performs online only through Zoom.</p>
            <p>This makes sure that both Jane and the residents are safe.</p>
            <p>
              It also makes coordinating with you so much easier! Instead of
              preparing a piano, a mircophone, and a speaker, all you have to do
              is click on a Zoom link!
            </p>
            <p>
              When you hire Jane for your retirement home, she will send you a
              link for the performance 30 minutes prior to the session.
            </p>

            <article className="bonus">
              <strong>
                Bonus #2: Free recorded playlist that's curated for seniors for
                the first 20 clients! * Play music that your residents will love
                whenever they want!
              </strong>
              <p>
                Jane will update this list whenever she finds a new song that
                seniors might like!
              </p>
            </article>
          </section>

          <section className="why-jane-new-section line-break">
            <p>
              <strong>What about scheduling?</strong>
            </p>
            <p>
              Please feel free to schedule the best time that works for you! It
              would be great if you could also give 2 other time slots that
              could potentially work for you.
            </p>
          </section>

          <section className="why-jane-new-section">
            <p>
              <em>
                <u>
                  For all of this + an online performance of 15 songs, you only
                  pay $200!
                </u>
              </em>
            </p>

            <p>
              <strong>
                Heads up! - Jane can only accept the first 20 clients so hurry
                before spots fill up!
              </strong>
            </p>
          </section>

          <section className="why-jane-new-section bonus">
            <p>
              <strong>
                <em>
                  <u>Pay only if you are satisfied Guarantee!</u>
                </em>
              </strong>
            </p>
            <p>
              If you don't feel like Jane lived up to your expectations, please
              do not pay. No questions asked!
            </p>
          </section>

          <p>
            If you have any questions, please don't hesitate to ask us in the
            request form! We will get back to you in 1 business day.
          </p>

          <p>
            If you want to see Jane's work, please feel free to check out her{" "}
            <a href="https://www.youtube.com/watch?v=wwNOD-b45eM">Youtube</a>{" "}
            Page! Her most popular{" "}
            <a href="https://www.youtube.com/watch?v=oRQBDYv2ll8">
              performance
            </a>{" "}
            has over 25,000+ views!
          </p>

          <ActionButton
            buttonText={"Hire Jane for Your Retirement Home!"}
            className={"action-button-showcase why-jane-button"}
          />

          <section className="why-jane-new-section reference">
            <p>List of websites for research:</p>
            <p>
              <a href="https://www.retirementconcepts.com/positive-impact-music-can-have-on-seniors-memories/">
                THE POSITIVE IMPACT THAT MUSIC CAN HAVE ON SENIORS
              </a>
            </p>
            <p>
              <a href="https://rosewoodvillage.com/5-benefits-of-music-for-seniors-dealing-with-alzheimers/">
                5 BENEFITS OF MUSIC FOR SENIORS DEALING WITH ALZHEIMER’S
              </a>
            </p>

            <p>
              <a href="https://companionsforseniors.com/2021/01/benefits-music-for-the-elderly/">
                The Health and Lifestyle Benefits of Music for the Elderly
              </a>
            </p>

            <p>
              <a href="https://www.bannerhealth.com/healthcareblog/teach-me/the-benefits-of-music-on-the-mind-and-body-of-older-adults#:~:text=For%20aging%20adults%20who%20have,and%20improve%20cognitive%20processing%20speed">
                The Benefits of Music on the Mind and Body of Older Adults
              </a>
            </p>

            <p>
              <a href="https://briacommunities.ca/blogs/6-reasons-music-beneficial-seniors/">
                6 REASONS WHY MUSIC IS BENEFICIAL FOR SENIORS
              </a>
            </p>

            <p>
              <a href="https://crownschool.uchicago.edu/student-life/advocates-forum/music-nostalgia-and-wellness-care-older-adults#:~:text=From%20Music%20to%20Nostalgia%20in,emotions%20which%20are%20otherwise%20inaccessible.">
                Music, Nostalgia, and Wellness in the Care of Older Adults
              </a>
            </p>
          </section>
        </div>
      </main>

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

      <Footer />
    </section>
  );
};

export default WhyJane;
