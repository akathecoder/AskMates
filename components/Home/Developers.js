import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Developers() {
  return (
    <div
      id="developers"
      className="bg-developers_light dark:bg-developers_dark bg-cover py-28"
    >
      <h1 className="text-6xl w-max mx-auto text-center font-bold pb-20 text-transparent bg-clip-text bg-displayGradient">
        Meet The Developers
      </h1>
      <div className="w-4/5 mx-auto">
        <div className="flex lg:flex-row md:flex-col justify-around">
          <DevBox
            src="/assets/sparsh.jpeg"
            alt="Picture of the author"
            title="Sparsh Agarwal"
            subtitle="B.Tech CSE 2023"
            github="https://www.github.com/akathecoder"
            linkedin="https://www.linkedin.com/in/akathecoder"
            instagram="https://www.instagram.com/akathecoder/"
          />
          <DevBox
            src="/assets/raghav.jpeg"
            alt="Picture of the author"
            title="Raghav Goyal"
            subtitle="B.Tech CSE 2023"
            github="https://www.github.com/rg12301"
            linkedin="https://www.linkedin.com/in/12301raghavgoyal"
            instagram="https://www.instagram.com/_r.g_12301/"
          />
          <DevBox
            src="/assets/nonit.jpeg"
            alt="Picture of the author"
            title="Nonit Mittal"
            subtitle="B.Tech CSE 2023"
            github="https://www.github.com/nonitmittal"
            linkedin="https://www.linkedin.com/in/nonit-mittal"
            instagram="https://www.instagram.com/nonit_mittal/"
          />
        </div>
      </div>
    </div>
  );
}

function DevBox({
  src,
  alt,
  title,
  subtitle,
  tagline,
  github,
  linkedin,
  instagram,
}) {
  return (
    <div className="text-gray-600 dark:text-gray-50">
      <Image
        src={src}
        alt={alt}
        className="rounded-full overflow-hidden shadow-md"
        width={250}
        height={250}
        objectFit="fill"
      />
      <h1 className="mt-2 text-3xl text-center font-bold">
        {title}
      </h1>
      <h2 className="text-lg text-center font-medium">
        {subtitle}
      </h2>
      <p className="space-x-7 pt-4 text-4xl text-center ">
        <a href={github}>
          <FontAwesomeIcon
            icon={faGithub}
            size="1x"
            className="hover:text-white dark:hover:text-displayGradientPrimary cursor-pointer"
          />
        </a>
        <a href={linkedin}>
          <FontAwesomeIcon
            icon={faLinkedin}
            size="1x"
            className="hover:text-white dark:hover:text-displayGradientPrimary cursor-pointer"
          />
        </a>
        <a href={instagram}>
          <FontAwesomeIcon
            icon={faInstagram}
            size="1x"
            className="hover:text-white dark:hover:text-displayGradientPrimary cursor-pointer"
          />
        </a>
      </p>
    </div>
  );
}

export default Developers;
