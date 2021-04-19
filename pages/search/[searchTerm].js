import Router from "next/router";
import Navbar from "../../components/Nav";
import SearchPage from "../../components/SearchPage/SearchPage";
import tags from "../../data/tags.json";
import _ from "lodash";

const Search = searchTerm => {
	return (
		<>
			<Navbar />
			<SearchPage defaultSearchTerm={searchTerm} />
		</>
	);
};

export default Search;

export async function getStaticPaths() {
	const paths = tags.map(tag => {
		return {
			params: {
				searchTerm: tag,
			},
		};
	});
	return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
	const searchTerm = params.searchTerm;
	return { props: { searchTerm }, revalidate: 1000 };
}
