import Head from "next/head";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <h1>Hello World!</h1>
      <Link href="/login">
        <a>
          <h1>Login Page</h1>
        </a>
      </Link>
      <Link href="/registration">
        <a>
          <h1>Registration Page</h1>
        </a>
      </Link>
      <Footer />
    </>
  );
}
