import { useState } from "react";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faHome,
  faUsers,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import {
  faEdit,
  faBell,
  faUserCircle,
} from "@fortawesome/free-regular-svg-icons";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const imageLink = "/assets/profilePic.jpeg";

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-blue-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-xl font-bold leading-relaxed inline-block mr-4 ml-4 py-2 whitespace-no-wrap uppercase text-white"
              href="#pablo"
            >
              Ask Mates
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item my-auto">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <FontAwesomeIcon
                    icon={faHome}
                    size="2x"
                    className="leading-lg text-white opacity-75"
                  />
                  <span className="ml-2">Home</span>
                </a>
              </li>

              <li className="nav-item my-auto">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <FontAwesomeIcon
                    icon={faBell}
                    size="2x"
                    className="leading-lg text-white opacity-75"
                  />
                  <span className="ml-2">
                    Notifications
                  </span>
                </a>
              </li>

              <li className="nav-item my-auto">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <FontAwesomeIcon
                    icon={faEdit}
                    size="2x"
                    className="leading-lg text-white opacity-75"
                  />
                  <span className="ml-2">Ask Question</span>
                </a>
              </li>

              <li className="nav-item my-auto">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <FontAwesomeIcon
                    icon={faSearch}
                    size="2x"
                    className="leading-lg text-white opacity-75"
                  />
                  <span className="ml-2">Search</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="nav-item my-auto hidden lg:flex">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#pablo"
              >
                {imageLink ? (
                  <Image
                    src="/assets/profilePic.jpeg"
                    alt="Picture of the author"
                    className="rounded-full overflow-hidden"
                    width={40}
                    height={40}
                    objectFit="cover"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faUserCircle}
                    size="3x"
                    className="leading-lg text-white opacity-75"
                  />
                )}

                {/* <span className="ml-2"></span> */}
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
