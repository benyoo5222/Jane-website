import "./RequestForm.css";
import { useState } from "react";

const RequestForm = () => {
  const [radioButtonLiveValue, setRadioButtonLiveValue] = useState(false);
  const [radioButtonOnlineValue, setRadioButtonOnlineValue] = useState(false);

  const handleRadioButtonSelection = (event) => {
    const setter =
      event.target.value === "live"
        ? setRadioButtonLiveValue
        : setRadioButtonOnlineValue;

    setter((previousValue) => !previousValue);
  };

  const createField = ({ titleOfField, type }, index) => {
    switch (type) {
      case "date":
        return (
          <div className="field-container" key={index}>
            <label className="field-label">{titleOfField}</label>
            <input type="date" />
          </div>
        );
      case "liveOrOnline":
        return (
          <div className="field-container" key={index}>
            <label className="field-label">{titleOfField}</label>
            <div className="radio-button-container">
              <div className="radio-selection-container">
                <input
                  className="radio-button"
                  type="checkbox"
                  checked={radioButtonLiveValue}
                  value="live"
                  onChange={handleRadioButtonSelection}
                  name="live"
                />
                <label className="radio-button-label">Live</label>
              </div>

              <div className="radio-selection-container">
                <input
                  className="radio-button"
                  type="checkbox"
                  checked={radioButtonOnlineValue}
                  value="online"
                  onChange={handleRadioButtonSelection}
                  name="online"
                />
                <label className="radio-button-label">Online</label>
              </div>
            </div>
          </div>
        );
      case "textArea":
        return (
          <div className="field-container" key={index}>
            <label className="field-label">{titleOfField}</label>
            <input className="field-input-textarea" type="text" />
          </div>
        );
      default:
        return (
          <div className="field-container" key={index}>
            <label className="field-label">{titleOfField}</label>
            <input className="field-input" type="text" />
          </div>
        );
    }
  };

  return (
    <main className="other-pages-body-container">
      <h3 className="other-pages-body-title">Request Form</h3>

      <div className="request-form-section-container">
        <section className="request-form-field-section">
          {[
            { titleOfField: "Name/ Business Name", type: "text" },
            { titleOfField: "Email", type: "text" },
            { titleOfField: "Pick a Date", type: "date" },
            { titleOfField: "Live/ Online", type: "liveOrOnline" },
            { titleOfField: "Request Details", type: "textArea" },
          ].map((title, index) => createField(title, index))}
        </section>

        <section className="request-form-detail-container request-top-space">
          <p className="request-form-detail">
            If you are looking for a great musician that can entertain and
            perform for your retirement home, we look forward to sharing Jane’s
            music with you! Jane can currently perform live in the
            Kitchener-Waterloo region. For Online, she can work with anyone in
            Canada. See You Soon!
          </p>

          <img
            alt="Person holding a bouquet of flowers"
            src="/wedding-table.jpg"
            className="request-detail-picture"
          />
        </section>
      </div>
    </main>
  );
};

export default RequestForm;
