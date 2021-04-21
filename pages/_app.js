import "../styles/globals.css";
import Head from "next/head";
import EE from "../utils/ee";
function MyApp({ Component, pageProps }) {
	EE();

	return (
		<div className="bg-gray-200 min-h-screen w-full bg-cover font-display">
			<Head>
				<meta charSet="utf-8" />
			</Head>
			<div
				className="absolute top-16 ml-40"
				id="popup"
			></div>
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
