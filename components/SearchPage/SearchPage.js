import { Router, useRouter } from "next/router";
import { useState } from "react";
import LeftSidePane from "../LeftSideBar/LeftSidePane";
import SearchSection from "./SearchSection/SearchSection";
import tags from "../../data/tags.json";
import _ from "lodash";

const Search = () => {
	const router = useRouter();
	const [
		defaultSearchTerm,
		setdefaultSearchTerm,
	] = useState(router.asPath.substring(8));

	Router.events.on("routeChangeComplete", url => {
		const index = tags
			.map(tag => {
				return _.snakeCase(tag);
			})
			.indexOf(url.substring(8));
		const term =
			index === -1 ? url.substring(8) : tags[index];
		setdefaultSearchTerm(term);
	});
	return (
		<section className="md:mx-32 lg:mx-48 pb-20 mt-16">
			<div className="flex flex-row">
				<LeftSidePane />
				<SearchSection
					defaultSearchTerm={defaultSearchTerm}
				/>
			</div>
		</section>
	);
};

export default Search;
