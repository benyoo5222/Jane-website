import "./RequestForm.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const RequestForm = () => {
  const createField = ({ titleOfField, type }, index) => {
    switch (type) {
      case "date":
        return (
          <div className="field-container" key={index}>
            <label className="field-label">{titleOfField}</label>
            <DatePicker showTimeSelect />
          </div>
        );
      case "liveOrOnline":
        return (
          <div className="field-container" key={index}>
            <label className="field-label">{titleOfField}</label>
            <div className="radio-button-container">
              <input className="radio-button" type="radio" />
              <input className="radio-button" type="radio" />
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

        <section className="request-form-detail-container">Test</section>
      </div>
    </main>
  );
};

export default RequestForm;
