import "./ActionButton.css";
import { useNavigate } from "react-router-dom";

const ActionButton = ({ className }) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/hire-jane");
  };

  return (
    <button className={`action-button ${className}`} onClick={handleOnClick}>
      Hire Jane for Your Event!
    </button>
  );
};

export default ActionButton;
