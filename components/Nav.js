import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBars,
  faSearch,
  faSignOutAlt,
  faUser,
  faQuestion,
  faPencilAlt,
  faStream,
} from "@fortawesome/free-solid-svg-icons";
import {
  faEdit,
  faUserCircle,
} from "@fortawesome/free-regular-svg-icons";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function Navbar() {
  const user = Cookies.get("username");
  const router = useRouter();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [dropDownOpen, setdropDownOpen] = useState(false);

  const imageLink = user ? "/assets/profilePic.jpeg" : "";

  return (
    <>
      <nav className="w-full px-2 py-3 navbar-expand-lg bg-blue-500 z-10 sticky top-0 ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a className="text-xl font-bold leading-relaxed inline-block mr-4 ml-4 py-2 whitespace-no-wrap uppercase text-white">
                Ask Mates
              </a>
            </Link>

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
                <Link href="/q">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                    <FontAwesomeIcon
                      icon={faStream}
                      size="2x"
                      className="leading-lg text-white opacity-75"
                    />
                    <span className="ml-2">
                      Question Feed
                    </span>
                  </a>
                </Link>
              </li>

              <li className="nav-item my-auto">
                <Link href="/ask">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                    <FontAwesomeIcon
                      icon={faEdit}
                      size="2x"
                      className="leading-lg text-white opacity-75"
                    />
                    <span className="ml-2">
                      Ask Question
                    </span>
                  </a>
                </Link>
              </li>

              <li className="nav-item my-auto">
                <Link href="/search">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                    <FontAwesomeIcon
                      icon={faSearch}
                      size="2x"
                      className="leading-lg text-white opacity-75"
                    />
                    <span className="ml-2">Search</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="nav-item my-auto hidden lg:flex relative">
              <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 cursor-pointer">
                {imageLink ? (
                  <Image
                    src="/assets/profilePic.jpeg"
                    alt="Picture of the author"
                    className="rounded-full overflow-hidden"
                    width={40}
                    height={40}
                    objectFit="cover"
                    onClick={() =>
                      user
                        ? setdropDownOpen(!dropDownOpen)
                        : router.push("/login")
                    }
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faUserCircle}
                    size="3x"
                    className="leading-lg text-white opacity-75"
                    onClick={() =>
                      user
                        ? setdropDownOpen(!dropDownOpen)
                        : router.push("/login")
                    }
                  />
                )}
              </a>
              <div
                className={`${
                  dropDownOpen ? "inline" : "hidden"
                } absolute top-12 -right-6 z-50`}
              >
                <div className="text-sm py-2.5 w-48 mt-1.5 bg-white rounded-lg shadow-md mr-9">
                  <a
                    href="/me"
                    className="block pl-6 py-2.5 text-gray-800 hover:bg-blue-500 hover:text-white hover:font-semibold group"
                  >
                    <FontAwesomeIcon
                      icon={faUser}
                      size="1x"
                      className="text-gray-600 group-hover:text-gray-50"
                    />
                    &nbsp; My Profile
                  </a>
                  <a
                    href="/myQuestions"
                    className="block pl-6 py-2.5 text-gray-800 hover:bg-blue-500 hover:text-white hover:font-semibold group"
                  >
                    <FontAwesomeIcon
                      icon={faQuestion}
                      size="1x"
                      className="text-gray-600 group-hover:text-gray-50"
                    />
                    &nbsp; My Question
                  </a>
                  <a
                    href="/myAnswers"
                    className="block pl-6 py-2.5 text-gray-800 hover:bg-blue-500 hover:text-white hover:font-semibold group"
                  >
                    <FontAwesomeIcon
                      icon={faPencilAlt}
                      size="1x"
                      className="text-gray-600 group-hover:text-gray-50"
                    />
                    &nbsp; My Answers
                  </a>
                  <a
                    href="#"
                    className="block pl-6 py-2.5 text-gray-800 hover:bg-blue-500 hover:text-white hover:font-semibold group"
                    onClick={() => {
                      Cookies.remove("username");
                      Cookies.remove("auth");
                      router.reload();
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faSignOutAlt}
                      size="1x"
                      className="text-gray-600 group-hover:text-gray-50"
                    />
                    &nbsp; Sign Out
                  </a>
                </div>
              </div>
              <div
                onClick={() => setdropDownOpen(false)}
                className={
                  dropDownOpen
                    ? "fixed inset-0 h-full w-full bg-black opacity-30 cursor-default"
                    : "hidden"
                }
              ></div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
