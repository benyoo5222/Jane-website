import "./ActionButton.css";
import { useNavigate } from "react-router-dom";

const ActionButton = ({ className, buttonText }) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/hire-jane");
  };

  return (
    <button className={`action-button ${className}`} onClick={handleOnClick}>
      {buttonText}
    </button>
  );
};

export default ActionButton;
