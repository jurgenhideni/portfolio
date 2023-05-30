import Link from "next/link";
import Image from "next/image";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="text-white my-10 flex items-center justify-evenly max-sm:block">
        <div className="flex flex-col gap-6 max-sm:px-3">
          <h1 className="text-[3.5rem] font-extrabold max-w-[800px] max-sm:text-[2rem] ">
            Lets work together on your next project
          </h1>
          <p className="max-w-[600px] text-gray-400 font-sans">
            Collaboration is key! Lets join forces and combine our skills to
            tackle your next project with a powerful synergy that guarantees
            success.
          </p>
        </div>
        <Link
          href="/contact"
          className="text-white bg-red-600 px-10 py-3 rounded max-sm:hidden "
        >
          Contact
        </Link>
      </div>
      <div className="flex justify-between px-32 py-2 bg-[#101010] items-center">
        <Image
          src="/assets/logo01.png"
          width={80}
          height={50}
          alt=""
          className="max-sm:hidden"
        />
        <div className="flex gap-20 text-[2rem] text-white max-sm:gap-5 max-sm:pr-5 max-sm:text-[1.5rem]">
          <Link href="https://instagram.com/jurgen.hideni">
            <AiOutlineInstagram className="hover:text-rose-400 hover:scale-125 ease-in-out duration-200 cursor-pointer" />
          </Link>
          <BsFacebook className="hover:text-blue-500 hover:scale-125 ease-in-out duration-200 cursor-pointer" />
          <BsLinkedin className="hover:text-blue-800 hover:scale-125 ease-in-out duration-200 cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default Footer;
