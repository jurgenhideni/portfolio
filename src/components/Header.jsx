import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex justify-between m-5 uppercase">
      <Image src="/assets/webdev.png" alt="" width={200} height={50} />
      <div className="flex gap-20  mx-10 text-white ">
        <Link className="hover:text-red-400" href="/">
          Home
        </Link>

        <Link className="hover:text-red-400" href="/resume">
          Resume
        </Link>
        <Link className="hover:text-red-400" href="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
