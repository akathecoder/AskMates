import axios from "axios";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import QuestionSet from "../../QuestionsListPage/QuestionSet/QuestionSet";
import _ from "lodash";

const SearchSection = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [searchResult, setSearchResult] = useState();
	const handleOnChange = newTerm => {
		setSearchTerm(newTerm);
	};
	const [notFound, setNotFound] = useState(false);
	useEffect(() => {
		searchData(searchTerm)
			.then(searchedData => {
				if (_.isEmpty(searchedData)) {
					setSearchResult(false);
				} else {
					setSearchResult(searchedData);
				}
			})
			.catch(error => {
				console.log(error);
			});
	}, [searchTerm]);

	const searchData = async searchTerm => {
		if (searchTerm) {
			const searchedData = await axios
				.get(
					`http://localhost:4001/questions/question/${searchTerm}`
				)
				.catch(error => {
					if (error.response) {
						/*
						 * The request was made and the server responded with a
						 * status code that falls out of the range of 2xx
						 */
						if (error.response.status === 404) {
							setNotFound(true);
						}
					} else if (error.request) {
						/*
						 * The request was made but no response was received, `error.request`
						 * is an instance of XMLHttpRequest in the browser and an instance
						 * of http.ClientRequest in Node.js
						 */
						console.log(error.request);
					} else {
						// Something happened in setting up the request and triggered an Error
						console.log("Error", error.message);
					}
					console.log(error);
				});
			if (searchedData) {
				setNotFound(false);
				return searchedData.data;
			}
		} else {
			setNotFound(false);
		}
	};

	return (
		<section className="z-0 mt-2 ml-96 w-full">
			<h2 className="text-3xl font-bold block">Search</h2>
			<SearchBar
				searchTerm={searchTerm}
				onChange={handleOnChange}
			/>
			<div className="flex flex-col justify-center items-center pr-16 text-lg font-bold">
				{notFound ? (
					<p className="text-red-500">No Match Found</p>
				) : null}
				{searchResult ? (
					<>
						<p className="text-gray-600">
							Showing search results for&nbsp;
							<span className="text-white bg-blue-500 text-xl">
								&nbsp;
								{searchTerm}
								&nbsp;
							</span>
						</p>
						<p className="text-gray-600">
							Found &nbsp;
							<span className="text-white bg-blue-500 text-xl">
								&nbsp;
								{Object.keys(searchResult).length}
								&nbsp;
							</span>
							&nbsp;results
						</p>
						<QuestionSet
							questionData={JSON.stringify(searchResult)}
						/>
					</>
				) : notFound ? null : (
					<p>Start searching...</p>
				)}
			</div>
		</section>
	);
};

export default SearchSection;
