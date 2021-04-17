import Developers from "../components/Home/Developers";
import Hero from "../components/Home/Hero";
import SubHero from "../components/Home/SubHero";
import Navbar from "../components/Nav";

export default function Home({ questionData }) {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <SubHero />
      <Developers />
      <div className="h-36"></div>
    </div>
  );
}
