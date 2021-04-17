import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<Head>
				<meta charSet="utf-8" />
			</Head>
			<div className="absolute top-16" id="popup"></div>
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
