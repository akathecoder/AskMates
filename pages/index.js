import Developers from "../components/Home/Developers";
import Hero from "../components/Home/Hero";
import Footer from "../components/Home/Footer";
import Navbar from "../components/Nav";

export default function Home({ questionData }) {
  return (
    <>
      <Navbar />
      <Hero />
      <Developers />
      <Footer />
    </>
  );
}
