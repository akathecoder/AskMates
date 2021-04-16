import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const SearchBar = ({ searchTerm, onChange }) => {
	const [searching, setSearching] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setSearching(false);
		}, 1500);
	}, [searching]);
	return (
		<div className="flex flex-row justify-center items-center space-x-8 mb-6 mt-2">
			<input
				type="text"
				name="searchTerm"
				className="border-2 border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent rounded w-full py-2 px-5"
				value={searchTerm}
				onChange={e => {
					onChange(e.target.value);
					setSearching(true);
				}}
			/>
			<FontAwesomeIcon
				icon={faSearch}
				size="1x"
				className={`text-gray-700 cursor-pointer hover:text-gray-500 ${
					searching ? "animate-spin" : null
				}`}
			/>
		</div>
	);
};

export default SearchBar;
