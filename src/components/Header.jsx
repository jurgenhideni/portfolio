"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex justify-between md:hidden ">
        <Image
          src="/assets/logo01.png"
          alt=""
          width={100}
          height={50}
          className="m-5"
        />
        <div>
          <GiHamburgerMenu
            onClick={toggleMenu}
            className="text-white m-6 text-[1.5rem] cursor-pointer"
          />
        </div>
      </div>
      {isOpen && (
        <div
          className="max-sm:bg-white text-red-500 max-sm:border-2 text-center
       border-red-500 max-sm:px-5 max-sm:py-1 md:hidden max-sm:w-[150px] max-sm:absolute 
       right-0 top-12 font-bold uppercase max-sm:grid max-sm:grid-cols-1 max-sm:gap-5"
        >
          <Link href="/">Home</Link>
          <Link href="/resume">Resume</Link>
          <Link href="about">About Me</Link>
          <Link href="/contact">Contact</Link>
        </div>
      )}
      <div className="flex justify-between m-5 uppercase items-center max-sm:hidden">
        <Image src="/assets/logo01.png" alt="" width={100} height={50} />
        <div className="flex gap-20  mx-10 text-white ">
          <Link className="hover:text-red-400" href="/">
            Home
          </Link>

          <Link className="hover:text-red-400" href="/resume">
            Resume
          </Link>
          <Link className="hover:text-red-400" href="/about">
            About Me
          </Link>
          <Link className="hover:text-red-400" href="/contact">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
