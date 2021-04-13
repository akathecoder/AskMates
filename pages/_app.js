import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<div className="pt-36">
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
