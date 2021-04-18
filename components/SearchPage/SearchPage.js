import { useState } from "react";
import LeftSidePane from "../LeftSideBar/LeftSidePane";
import SearchSection from "./SearchSection/SearchSection";
const Search = () => {
	const [searchTerm, setSearchTerm] = useState();
	return (
		<section className="md:mx-32 lg:mx-48 pb-20 mt-16">
			<div className="flex flex-row">
				<LeftSidePane />
				<SearchSection />
			</div>
		</section>
	);
};

export default Search;
