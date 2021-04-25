import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const getCurrentYear = new Date().getFullYear();

function Footer() {
  return (
    <div>
      <footer className="text-gray-50 bg-dark-background py-12">
        <div className="flex flex-row w-4/5 justify-around mx-auto items-center">
          <div className="text-center tracking-wider">
            <span>
              Made with &nbsp;
              {
                <FontAwesomeIcon
                  icon={faHeart}
                  size="1x"
                  className="leading-lg hover:text-displayGradientPrimary"
                />
              }
              &nbsp; by &nbsp;
              <div className="font-semibold inline-block">
                <Link href="https://www.github.com/akathecoder">
                  <span className="cursor-pointer hover:font-bold hover:text-displayGradientPrimary">
                    @akathecoder
                  </span>
                </Link>
                &nbsp;
                <Link href="https://www.github.com/nonitmittal">
                  <span className="cursor-pointer hover:font-bold hover:text-displayGradientPrimary">
                    @nonitmittal
                  </span>
                </Link>
                &nbsp;
                <Link href="https://www.github.com/rg12301">
                  <span className="cursor-pointer hover:font-bold hover:text-displayGradientPrimary">
                    @rg12301
                  </span>
                </Link>
              </div>
              <br />© {getCurrentYear} All rights reserved.
            </span>
          </div>
          <section className="text-lg">
            <div className="flex flex-row space-x-8">
              <div className="border-l-2 border-gray-100 pl-11">
                <p className="font-bold block">AskMates</p>
                <div className="flex flex-col mt-1">
                  <Link href="/ask">Ask Question</Link>
                  <Link href="/search">Search</Link>
                  <Link href="/q">Archive</Link>
                </div>
              </div>
              <div>
                <p className="font-bold block">Product</p>
                <div className="flex flex-col mt-1">
                  <Link href="/#about">About</Link>
                  <Link href="/#developers">
                    Developers
                  </Link>
                  <Link href="/">Help</Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
