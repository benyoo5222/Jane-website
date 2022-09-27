import "./RequestForm.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RequestForm = () => {
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [currentDateObject, setCurrentDateObject] = useState(new Date());
  const [dateSelected, setDateSelected] = useState(
    `${currentDateObject.getFullYear()}-${`0${
      currentDateObject.getMonth() + 1
    }`.slice(-2)}-${`0${currentDateObject.getDate()}`.slice(-2)}`
  );
  const [requestDetails, setRequestDetails] = useState("");
  const [radioButtonLiveValue, setRadioButtonLiveValue] = useState(false);
  const [radioButtonOnlineValue, setRadioButtonOnlineValue] = useState(false);
  const [businessNameFieldWarning, setBusinessNameFieldWarning] =
    useState(false);
  const [emailFieldWarning, setEmailFieldWarning] = useState(false);
  const [dateSelectedFieldWarning, setDateSelectedFieldWarning] =
    useState(false);
  const [requestDetailsFieldWarning, setRequestDetailsFieldWarning] =
    useState(false);
  const [waitingForSubmit, setWaitingForSubmit] = useState(false);

  useEffect(() => {
    const newDateObject = new Date();
    setCurrentDateObject(newDateObject);
    setDateSelected(
      `${newDateObject.getFullYear()}-${`0${
        newDateObject.getMonth() + 1
      }`.slice(-2)}-${`0${newDateObject.getDate()}`.slice(-2)}`
    );
  }, []);

  const handleTextChange = (event) => {
    event.preventDefault();
    const targetElement = event.target;

    switch (targetElement.name) {
      case "businessName":
        if (targetElement.value.length > 0) {
          setBusinessNameFieldWarning(false);
        }
        setBusinessName(targetElement.value);
        return;
      case "email":
        if (targetElement.value.length > 0) {
          setEmailFieldWarning(false);
        }
        setEmail(targetElement.value);
        return;
      default:
        if (targetElement.value.length > 0) {
          setRequestDetailsFieldWarning(false);
        }
        setRequestDetails(targetElement.value);
        return;
    }
  };

  const handleDateChange = (event) => {
    event.preventDefault();
    setDateSelectedFieldWarning(false);
    setDateSelected(event.target.value);
  };

  const handleRadioButtonSelection = (event) => {
    const setter =
      event.target.value === "live"
        ? setRadioButtonLiveValue
        : setRadioButtonOnlineValue;

    setter((previousValue) => !previousValue);
  };

  const isSelectedDateGreaterThanCurrentDate = () => {
    if (!dateSelected || dateSelected === "Invalid Date") {
      return false;
    }

    const currentYear = currentDateObject.getFullYear();
    const currentMonth = currentDateObject.getMonth() + 1;
    const currentDate = currentDateObject.getDate();

    const selectedDateString = dateSelected.split("-");
    return (
      currentYear <= selectedDateString[0] &&
      currentMonth <= selectedDateString[1] &&
      currentDate <= selectedDateString[2]
    );
  };

  const validateForm = () => {
    const isValidEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (
      businessName &&
      requestDetails &&
      dateSelected &&
      dateSelected !== "Invalid Date" &&
      isSelectedDateGreaterThanCurrentDate() &&
      email.length > 0 &&
      email.match(isValidEmail)
    ) {
      setBusinessNameFieldWarning(false);
      setDateSelectedFieldWarning(false);
      setRequestDetailsFieldWarning(false);
      setEmailFieldWarning(false);
      return true;
    }

    if (!businessName) {
      setBusinessNameFieldWarning(true);
    } else {
      setBusinessNameFieldWarning(false);
    }

    if (
      !dateSelected ||
      dateSelected === "Invalid Date" ||
      !isSelectedDateGreaterThanCurrentDate()
    ) {
      setDateSelectedFieldWarning(true);
    } else {
      setDateSelectedFieldWarning(false);
    }

    if (!requestDetails) {
      setRequestDetailsFieldWarning(true);
    } else {
      setRequestDetailsFieldWarning(false);
    }

    if (email.length === 0 || !email.match(isValidEmail)) {
      setEmailFieldWarning(true);
    } else {
      setEmailFieldWarning(false);
    }

    toast.warning("Please enter valid information in the following fields.");
  };

  const handleSubmit = async () => {
    if (waitingForSubmit) {
      return;
    }

    setWaitingForSubmit(true);

    if (!validateForm()) {
      setWaitingForSubmit(false);
      return;
    }

    // Send form to API
    const headers = {
      "x-api-key": process.env.REACT_APP_API_KEY,
    };

    try {
      const sendFormToAPI = await axios.post(
        `${process.env.REACT_APP_API_URL}/sendemail`,
        {
          businessName,
          email,
          requestDetails,
          dateSelected,
          online: radioButtonOnlineValue,
          live: radioButtonLiveValue,
        },
        { headers: headers }
      );

      console.log("Result from send form to API", sendFormToAPI);

      setWaitingForSubmit(false);
      toast.success(
        "Your request has successfully been submitted! Due to higher than expected demand, it might take a little longer than expected to respond but Jane will get back to your as soon as possible, thank you!"
      );

      setBusinessName("");
      setEmail("");
      const newDateObject = new Date();
      setCurrentDateObject(newDateObject);
      setDateSelected(
        `${newDateObject.getFullYear()}-${`0${
          newDateObject.getMonth() + 1
        }`.slice(-2)}-${`0${newDateObject.getDate()}`.slice(-2)}`
      );

      setRequestDetails("");
      setRadioButtonLiveValue(false);
      setRadioButtonOnlineValue(false);
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

  const createField = (
    { titleOfField, type, value, name, warningClass },
    index
  ) => {
    switch (type) {
      case "date":
        return (
          <div className="field-container" key={index}>
            <label className="field-label">{titleOfField}</label>
            <input
              className={warningClass ? "required-field" : ""}
              type="date"
              value={value}
              onChange={handleDateChange}
              name={name}
              min={`${currentDateObject.getFullYear()}-${`0${
                currentDateObject.getMonth() + 1
              }`.slice(-2)}-${`0${currentDateObject.getDate()}`.slice(-2)}`}
            />
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
            <textarea
              className={`field-input-textarea ${
                warningClass ? "required-field" : ""
              }`}
              type="text"
              value={value}
              onChange={handleTextChange}
            />
          </div>
        );
      default:
        return (
          <div className="field-container" key={index}>
            <label className="field-label">{titleOfField}</label>
            <input
              className={`field-input ${warningClass ? "required-field" : ""}`}
              type="text"
              onChange={handleTextChange}
              name={name}
              value={value}
            />
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
            {
              titleOfField: "Name/ Business Name*",
              type: "text",
              value: businessName,
              name: "businessName",
              warningClass: businessNameFieldWarning,
            },
            {
              titleOfField: "Email*",
              type: "text",
              value: email,
              name: "email",
              warningClass: emailFieldWarning,
            },
            {
              titleOfField: "Pick a Date*",
              type: "date",
              value: dateSelected,
              warningClass: dateSelectedFieldWarning,
            },
            {
              titleOfField: "Request Details*",
              type: "textArea",
              value: requestDetails,
              name: "requestDetails",
              warningClass: requestDetailsFieldWarning,
            },
          ].map((formInformation, index) =>
            createField(formInformation, index)
          )}

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
            <span>
              If you are looking to entertain and bring joy to your nursing
              home, we look forward to sharing Jane's music with you!
            </span>
            <span className="request-form-detail-text">
              Jane can currently perform live in the Kitchener-Waterloo region.
            </span>
            <span className="request-form-detail-text">
              For Online performances, she can work with anyone in Canada. See
              You Soon!
            </span>
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
