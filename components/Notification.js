import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import ReactDOM from "react-dom";

const Notification = ({ text, color }) => {
  const handleClick = () => {
    ReactDOM.render(null, document.getElementById("popup"));
  };
  return (
    <div
      className={`fixed mt-10 flex flex-row justify-center items-center w-full z-50 bg-${color}-400 px-3 py-1 tracking-widest text-lg`}
    >
      <span
        className={`text-center font-bold text-white w-full`}
      >
        {text}
      </span>
      <span
        className="text-right cursor-pointer"
        onClick={handleClick}
      >
        <FontAwesomeIcon
          icon={faTimes}
          size="sm"
          className="text-white"
        />
      </span>
    </div>
  );
};

export const showPopup = (text, color) => {
  ReactDOM.render(
    <Notification color={color} text={text} />,
    document.getElementById("popup")
  );
  setTimeout(() => {
    ReactDOM.render(null, document.getElementById("popup"));
  }, 5000);
};
