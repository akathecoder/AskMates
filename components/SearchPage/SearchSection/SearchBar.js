import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const SearchBar = ({ searchTerm, onChange }) => {
	return (
		<div className="flex flex-row justify-center items-center space-x-8 mb-6 mt-2 border-2 border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent rounded w-full bg-white px-5">
			<FontAwesomeIcon icon={faSearch} size="1x" />
			<input
				type="text"
				name="searchTerm"
				className="outline-none focus:outline-none py-4 w-full"
				value={searchTerm}
				onChange={e => {
					onChange(e.target.value);
				}}
			/>
		</div>
	);
};

export default SearchBar;
