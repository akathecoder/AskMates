import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div className="pt-36">
      <Head>
        <meta charSet="utf-8" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
