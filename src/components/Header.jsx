import Link from "next/link";
import Image from "next/image";

import { SiAboutdotme } from "react-icons/si";
import { BsFilePersonFill } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";
import { AiFillHome } from "react-icons/ai";
const Header = () => {
  return (
    <>
      <div className="md:hidden w-full fixed top-0 text-[2rem] bg-gradient-to-t from-black to-[#505050] flex justify-around py-5 text-red-500 ">
        <Link href="/">
          <AiFillHome />
        </Link>
        <Link href="/about">
          <SiAboutdotme />
        </Link>
        <Link href="/resume">
          <BsFilePersonFill />
        </Link>
        <Link href="/contact">
          <SiMinutemailer />
        </Link>
      </div>
      <div className="flex justify-between p-3 uppercase items-center max-sm:hidden sticky top-0 bg-black">
        <Image src="/assets/logo01.png" alt="" width={100} height={50} />
        <div className="flex gap-20  mx-10 text-white font-bold text-[1.1rem]">
          <Link
            className="hover:text-red-500 transition ease-in-out duration-200"
            href="/"
          >
            Home
          </Link>

          <Link
            className="hover:text-red-500 transition ease-in-out duration-200"
            href="/resume"
          >
            Resume
          </Link>
          <Link
            className="hover:text-red-500 transition ease-in-out duration-200"
            href="/about"
          >
            About Me
          </Link>
          <Link
            className="hover:text-red-500 transition ease-in-out duration-200"
            href="/projects"
          >
            MY PROJECTS
          </Link>
          <Link
            className="hover:text-red-500 transition ease-in-out duration-200"
            href="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
