import Link from "next/link";
import Image from "next/image";

const getCurrentYear = () => new Date().getFullYear();
const copyright = `site design / logo © ${getCurrentYear()} Erroders; This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.3.26.38924`;

const Footer = () => {
  return (
    <footer className="bg-red-700 text-white h-80 flex flex-col space-my-10 md:flex-row flex-wrap items-baseline content-center justify-around py-3">
      <section className="mx-auto my-auto flex-none grid grid-flow-col auto-cols-max gap-10 md:gap-16">
        <div>
          <h3 className="font-bold block">Company</h3>
          <div className="text-sm flex flex-col">
            <Link href="">Login</Link>
            <Link href="">Questions</Link>
            <Link href="">Help</Link>
          </div>
        </div>
        <div>
          <h3 className="font-bold block">Product</h3>
          <div className="text-sm flex flex-col">
            <Link href="">About</Link>
            <Link href="">Developers</Link>
          </div>
        </div>
      </section>

      <section className="w-3/4 my-auto md:mx-auto md:w-1/3 flex flex-col space-y-5 md:space-y-5">
        <Image src="/vercel.svg" width="30" height="30" />
        <p className="text-xs md:text-sm break-normal md:break-word text-center">
          {copyright}
        </p>
      </section>
    </footer>
  );
};

export default Footer;
