import { useState } from "react";
import ReactDOM from "react-dom";

const Notification = ({ text, color }) => {
	return (
		<div
			className={`fixed mt-10 flex flex-row justify-center items-center w-full z-50`}
		>
			<span
				className={`bg-${color}-400 px-3 py-1 text-justify font-semibold text-white rounded`}
			>
				{text}
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
	}, 2000);
};
