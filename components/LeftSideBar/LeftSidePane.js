import React from "react";
import TagList from "./TagList";
import Footer from "./Footer";

import taglist from "../../data/tags.json";

const LeftSidePane = className => {
	const maptaglist = taglist.map((name, index) => {
		return <TagList tagname={name} key={index} />;
	});
	return (
		<div className="fixed h-auto w-56 lg:w-72 border-r border-gray-300 sm:hidden md:block z-0">
			<div className="flex flex-col content-center justify-center ">
				{maptaglist}
			</div>
			<Footer />
		</div>
	);
};

export default LeftSidePane;
