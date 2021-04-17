import Image from "next/image";
import Link from "next/link";

function Developers() {
  return (
    <div className="bg-gray-700 bg-cover lg:px-32 lg:pb-32">
      <h1 className="text-6xl text-center py-10">
        Meet The Team
      </h1>

      <div className="grid grid-cols-3 justify-items-center">
        <DevBox
          src="/assets/profilePic.jpeg"
          alt="Picture of the author"
          title="Sparsh Agarwal"
          subtitle="BTECH CSE 2023"
          tagline="lorem-50"
        />
        <DevBox
          src="/assets/profilePic.jpeg"
          alt="Picture of the author"
          title="Sparsh Agarwal"
          subtitle="BTECH CSE 2023"
          tagline="lorem-50"
        />
        <DevBox
          src="/assets/profilePic.jpeg"
          alt="Picture of the author"
          title="Sparsh Agarwal"
          subtitle="BTECH CSE 2023"
          tagline="lorem-50"
        />
      </div>
    </div>
  );
}

function DevBox({ src, alt, title, subtitle, tagline }) {
  return (
    <div>
      <Image
        src={src}
        alt={alt}
        className="rounded-full  overflow-hidden"
        width={250}
        height={250}
        objectFit="fill"
      />
      <h1 className="text-3xl text-center text-white font-medium">
        {title}
      </h1>
      <h2 className="text-lg text-center text-white font-light">
        {subtitle}
      </h2>
      <p className="text-sm text-justify text-white font-light">
        {tagline}
      </p>
    </div>
  );
}

export default Developers;
