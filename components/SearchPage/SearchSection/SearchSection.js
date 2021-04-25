import axios from "axios";
import _ from "lodash";
import { useState, useEffect, useReducer } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults/SearchResults";

const storiesReducer = (state, action) => {
  switch (action.type) {
    case "DATA_FETCH_INIT":
      return {
        ...state,
        questionData: false,
        answerData: false,
        questionsFound: false,
        answersFound: false,
        isLoading: true,
        isError: false,
      };
    case "QUESTIONS_FETCH_SUCESS":
      return {
        ...state,
        questionData: action.payload,
        questionsFound: true,
        isLoading: false,
        isError: false,
      };
    case "ANSWERS_FETCH_SUCESS":
      return {
        ...state,
        answerData: action.payload,
        answersFound: true,
        isLoading: false,
        isError: false,
      };
    case "QUESTIONS_NOT_FOUND":
      return {
        ...state,
        questionData: {},
        questionsFound: false,
        isLoading: false,
        isError: false,
      };
    case "ANSWERS_NOT_FOUND":
      return {
        ...state,
        answerData: {},
        answersFound: false,
        isLoading: false,
        isError: false,
      };
    case "FETCH_FALIURE":
      return {
        ...state,
        questionData: false,
        answerData: false,
        questionsFound: false,
        answersFound: false,
        isLoading: false,
        isError: true,
      };
    default:
      break;
  }
};

const SearchSection = ({ defaultSearchTerm }) => {
  const [searchTerm, setSearchTerm] = useState(
    defaultSearchTerm === "" ? "" : defaultSearchTerm
  );
  const [searchResult, dispatchSearchResult] = useReducer(
    storiesReducer,
    {
      questionData: false,
      answerData: false,
      questionsFound: false,
      answersFound: false,
      isLoading: false,
      isError: false,
    }
  );

  const handleOnChange = (newTerm) => {
    setSearchTerm(newTerm);
  };

  useEffect(() => {
    setSearchTerm(defaultSearchTerm);
  }, [defaultSearchTerm]);

  // Fetch data every time searchTerm changes
  useEffect(() => {
    if (searchTerm === "") {
      dispatchSearchResult({ type: "DATA_FETCH_INIT" });
    } else {
      searchData(
        `http://localhost:4001/questions/question/${searchTerm}`
      ).then((searchedQuestionData) => {
        if (_.isEmpty(searchedQuestionData)) {
          dispatchSearchResult({
            type: "QUESTIONS_NOT_FOUND",
          });
        } else {
          dispatchSearchResult({
            type: "QUESTIONS_FETCH_SUCESS",
            payload: searchedQuestionData,
          });
        }
      });
      searchData(
        `http://localhost:4001/answers/search/${searchTerm}`
      ).then((searchedAnswerData) => {
        if (_.isEmpty(searchedAnswerData)) {
          dispatchSearchResult({
            type: "ANSWERS_NOT_FOUND",
          });
        } else {
          dispatchSearchResult({
            type: "ANSWERS_FETCH_SUCESS",
            payload: searchedAnswerData,
          });
        }
      });
    }
  }, [searchTerm]);

  const searchData = async (searchPoint) => {
    return await axios
      .get(searchPoint)
      .then((searchedData) => {
        return searchedData.data;
      })
      .catch((error) => {
        if (error.response) {
          /*
           * The request was made and the server responded with a
           * status code that falls out of the range of 2xx
           */
          if (error.response.status !== 404) {
            dispatchSearchResult({
              type: "FETCH_FALIURE",
            });
            console.log(error.response);
          }
        } else if (error.request) {
          /*
           * The request was made but no response was received, `error.request`
           * is an instance of XMLHttpRequest in the browser and an instance
           * of http.ClientRequest in Node.js
           */
          dispatchSearchResult({
            type: "FETCH_FALIURE",
          });
          console.log(error.request);
        } else {
          // Something happened in setting up the request and triggered an Error
          console.log("Error", error.message);
          dispatchSearchResult({
            type: "FETCH_FALIURE",
          });
        }
        dispatchSearchResult({
          type: "FETCH_FALIURE",
        });
      });
  };

  return (
    <section className="z-0 mt-2 ml-96 w-full mr-16">
      <h2 className="text-3xl font-bold block dark:text-white">
        Search
      </h2>
      <SearchBar
        searchTerm={searchTerm}
        onChange={handleOnChange}
      />
      <SearchResults
        searchResult={searchResult}
        searchTerm={searchTerm}
      />
    </section>
  );
};

export default SearchSection;
