import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const getCurrentYear = () => new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="text-sm text-gray-500 mt-5 border-t border-gray-300 pt-7 ">
      <div className="flex flex-col">
        <section className="flex flex-row space-x-8 justify-center items-start">
          <div>
            <h3 className="font-medium block">AskMates</h3>
            <div className="flex flex-col mt-1">
              <Link href="/ask">Ask Question</Link>
              <Link href="/search">Search</Link>
              <Link href="/q">Archive</Link>
            </div>
          </div>
          <div>
            <h3 className="font-medium block">Product</h3>
            <div className="flex flex-col mt-1">
              <Link href="/">About</Link>
              <Link href="/">Developers</Link>
              <Link href="/">Help</Link>
            </div>
          </div>
        </section>
        <div className="mt-5 border-t border-gray-300 pt-7 text-center">
          <span>
            Made with{" "}
            {
              <FontAwesomeIcon
                icon={faHeart}
                size="1x"
                className="leading-lg opacity-75 hover:text-displayGradientPrimary"
              />
            }{" "}
            by{" "}
            <div className="flex flex-col justify-center items-center font-semibold mt-1 ">
              <Link href="https://www.github.com/akathecoder">
                <span className="cursor-pointer hover:font-bold hover:text-displayGradientPrimary">
                  @akathecoder
                </span>
              </Link>
              <Link href="https://www.github.com/nonitmittal">
                <span className="cursor-pointer hover:font-bold hover:text-displayGradientPrimary">
                  @nonitmittal
                </span>
              </Link>
              <Link href="https://www.github.com/rg12301">
                <span className="cursor-pointer hover:font-bold hover:text-displayGradientPrimary">
                  @rg12301
                </span>
              </Link>
            </div>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
