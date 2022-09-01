import "./RequestForm.css";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RequestForm = () => {
  const [radioButtonLiveValue, setRadioButtonLiveValue] = useState(false);
  const [radioButtonOnlineValue, setRadioButtonOnlineValue] = useState(false);
  const [waitingForSubmit, setWaitingForSubmit] = useState(false);

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
            <textarea className="field-input-textarea" type="text" />
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

  const handleSubmit = async () => {
    if (waitingForSubmit) {
      return;
    }

    setWaitingForSubmit(true);

    // Send form to API
    const headers = {
      "x-api-key": process.env.REACT_APP_API_KEY,
    };

    try {
      const sendFormToAPI = await axios.post(
        `${process.env.REACT_APP_API_URL}/sendemail`,
        { test: "test" },
        { headers: headers }
      );

      console.log("Result from send form to API", sendFormToAPI);

      setWaitingForSubmit(false);
      toast.success(
        "Your request has successfully been submitted! Due to higher than expected demand, it might take a little longer than expected to respond but Jane will get back to your as soon as possible, thank you!"
      );
    } catch (error) {
      console.log("Error sending form to API", error);
      setWaitingForSubmit(false);

      if (error.response.status === 429) {
        console.log("Too many request");
        toast.warn("Please try your request again after a few minutes.");
        return;
      }

      toast.error(
        "Sorry, we are having technical difficulties. Please email test@gmail.com"
      );
      return;
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

          <button
            className={`${
              waitingForSubmit
                ? "request-form-submit-button-disabled"
                : "request-form-submit-button"
            }`}
            disabled={waitingForSubmit}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </section>

        <section className="request-form-detail-container request-top-space">
          <p className="request-form-detail">
            If you are looking to entertain and bring joy to your nursing home,
            we look forward to sharing Jane's music with you! Jane can currently
            perform live in the Kitchener-Waterloo region. For Online
            performances, she can work with anyone in Canada. See You Soon!
          </p>

          <img
            alt="Person holding a bouquet of flowers"
            src="/wedding-table.jpg"
            className="request-detail-picture"
          />
        </section>
      </div>

      <ToastContainer />
    </main>
  );
};

export default RequestForm;
