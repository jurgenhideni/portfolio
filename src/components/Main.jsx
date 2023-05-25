import React from "react";
import Image from "next/image";
import Link from "next/link";
const Main = () => {
  return (
    <>
      <div className="flex justify-around items-center pb-28">
        <div className="font-sans  ">
          <p className="font-bold font-sans text-[2rem] text-red-500">
            Hello, My Name Is
          </p>
          <h1 className="font-bold text-[4.5rem] text-white ">JURGEN HIDENI</h1>
          <p className="text-gray-400 font-semibold text-[1.2rem] max-w-[600px] mb-10">
            - A passionate and dedicated junior web developer, driven by the
            ever-evolving world of technology and its limitless possibilities.
          </p>
          <Link
            href="/about"
            className="text-white bg-red-600 px-10 py-3 font-semibold text-[1.1rem] rounded"
          >
            About me
          </Link>
        </div>
        <Image src="/assets/jurgenpic.png" alt="" height={800} width={900} />
      </div>
    </>
  );
};

export default Main;
