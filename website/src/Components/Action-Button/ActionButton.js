import "./ActionButton.css";

const ActionButton = ({ className }) => {
  const handleOnClick = () => {
    const currentURL = window.location.href;
    window.location.href = `${currentURL}hire-jane`;
  };

  return (
    <button className={`action-button ${className}`} onClick={handleOnClick}>
      Hire Jane for Your Event!
    </button>
  );
};

export default ActionButton;
