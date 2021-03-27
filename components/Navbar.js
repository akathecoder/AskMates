import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUsers,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import {
  faEdit,
  faBell,
  faUserCircle,
} from "@fortawesome/free-regular-svg-icons";

function Navbar() {
  return (
    <nav className="flex justify-center gap-12 p-2 text-red-700">
      <h1 className="text-4xl font-semibold my-auto mr-12">
        Quora
      </h1>

      <FontAwesomeIcon
        icon={faHome}
        size="2x"
        className="my-auto"
      />
      <FontAwesomeIcon
        icon={faEdit}
        size="2x"
        className="my-auto"
      />
      <FontAwesomeIcon
        icon={faBell}
        size="2x"
        className="my-auto"
      />
      <FontAwesomeIcon
        icon={faUsers}
        size="2x"
        className="my-auto"
      />

      <div className="border-red-700 border-2  my-auto ml-12 p-1 rounded-2xl">
        <FontAwesomeIcon
          icon={faSearch}
          size="1x"
          className="my-auto mx-2"
        />
        <input
          type="text"
          name="search"
          id="searchBox"
          placeholder="Search Quora"
          className="w-64 focus:outline-none text-gray-700"
        />
      </div>

      <FontAwesomeIcon
        icon={faUserCircle}
        size="2x"
        className="my-auto"
      />

      <button
        type="submit"
        className="text-base font-medium my-auto bg-red-700 text-white py-2 px-4 rounded-full focus:outline-none hover:bg-red-800 hover:shadow-lg"
      >
        Ask a Question
      </button>
    </nav>
  );
}

export default Navbar;
