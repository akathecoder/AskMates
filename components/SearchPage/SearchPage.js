import { useState } from "react";
import LeftSidePane from "../LeftSideBar/LeftSidePane";
import SearchSection from "./SearchSection/SearchSection";
const Search = () => {
	const [searchTerm, setSearchTerm] = useState();
	return (
		<section className="md:mx-32 lg:mx-48 pb-20">
			<div className="fixed top-0 w-full h-40 bg-white z-10"></div>
			<div className="flex flex-row">
				<LeftSidePane />
				<SearchSection />
			</div>
		</section>
	);
};

export default Search;
