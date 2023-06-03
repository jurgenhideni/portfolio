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
          className=" transition-all duration-500 ease-in-out text-[1.2rem] text-center
       border-red-500 md:hidden max-sm:w-[150px] max-sm:absolute text-white  
       right-0 top-12 font-bold max-sm:grid max-sm:grid-cols-1 gap-5 max-sm:my-3 mx-1
       "
        >
          <button className="bg-red-500 border-2 border-black py-2 rounded-lg ">
            Home
          </button>
          <button className="bg-red-500 border-2 border-black py-2 rounded-lg">
            Resume
          </button>
          <button className="bg-red-500 border-2 border-black py-2 rounded-lg">
            Contact
          </button>
          <button className="bg-red-500 border-2 border-black py-2 rounded-lg">
            About me
          </button>
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
