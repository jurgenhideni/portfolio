import React from "react";
import { AiOutlineCaretRight } from "react-icons/ai";
import { GoPencil } from "react-icons/go";
import { HiCodeBracket } from "react-icons/hi2";
import { BsLaptop } from "react-icons/bs";
import { BsFillBagCheckFill } from "react-icons/bs";
import { HiOutlineSupport } from "react-icons/hi";
import { BsFlagFill } from "react-icons/bs";
const Services = () => {
  return (
    <div className="bg-[#101010] p-10 " id="services">
      <div>
        <h2 className="flex items-center text-white font-bold max-sm:text-[1.5rem]">
          <AiOutlineCaretRight className="text-red-500" /> My Services
        </h2>
        <p className="text-white text-[2rem] font-bold max-sm:text-[2.5rem]">
          What Can I Do
        </p>
      </div>
      <div className="grid grid-cols-3 gap-10 mt-10 max-sm:grid-cols-1">
        <div className="bg-[#202020] max-w-[450px] py-10 text-center rounded-xl hover:scale-110 hover:bg-[#323232] max-sm:px-3">
          <GoPencil className="mx-auto text-[2.5rem] mb-5 text-red-500 " />
          <h2 className="font-bold text-white mb-4">Creative Design</h2>
          <p className="text-[.9rem] leading-relaxed text-white font-extralight">
            Leveraging artistic elements and aesthetic principles to craft
            visually appealing and engaging user experiences.
          </p>
        </div>
        <div className="bg-[#202020] max-w-[450px] py-10 text-center rounded-xl hover:scale-110 hover:bg-[#323232] max-sm:px-3">
          <HiCodeBracket className="mx-auto text-[2.5rem] mb-5 text-red-500 " />
          <h2 className="font-bold text-white mb-4">Clean Code</h2>
          <p className="text-[.9rem] leading-relaxed text-white font-extralight">
            Writing code that is well-structured, readable, and maintainable.
            <br /> It involves following coding best practices.
          </p>
        </div>
        <div className="bg-[#202020] max-w-[450px] py-10 text-center rounded-xl hover:scale-110 hover:bg-[#323232] max-sm:px-3">
          <BsLaptop className="mx-auto text-[2.5rem] mb-5 text-red-500 " />
          <h2 className="font-bold text-white mb-4">User Interface</h2>
          <p className="text-[.9rem] leading-relaxed text-white font-extralight">
            Creating intuitive and user-friendly designs that prioritize
            usability, accessibility, and a seamless user experience.
          </p>
        </div>
        <div className="bg-[#202020] max-w-[450px] py-10 text-center rounded-xl hover:scale-110 hover:bg-[#323232] max-sm:px-3">
          <BsFillBagCheckFill className="mx-auto text-[2.5rem] mb-5 text-red-500 " />
          <h2 className="font-bold text-white mb-4">User Experience</h2>
          <p className="text-[.9rem] leading-relaxed text-white font-extralight">
            Understanding user behaviors, needs, and preferences to create
            interfaces that are intuitive, efficient, and enjoyable to use.
          </p>
        </div>
        <div className="bg-[#202020] max-w-[450px] py-10 text-center rounded-xl hover:scale-110 hover:bg-[#323232] max-sm:px-3">
          <HiOutlineSupport className="mx-auto text-[2.5rem] mb-5 text-red-500 " />
          <h2 className="font-bold text-white mb-4">Fast Support</h2>
          <p className="text-[.9rem] leading-relaxed text-white font-extralight">
            Addressing and resolving user-reported issues or inquiries related
            to the website or application.
          </p>
        </div>
        <div className="bg-[#202020] max-w-[450px] py-10 text-center rounded-xl hover:scale-110 hover:bg-[#323232] max-sm:px-3">
          <BsFlagFill className="mx-auto text-[2.5rem] mb-5 text-red-500 " />
          <h2 className="font-bold text-white mb-4">Branding</h2>
          <p className="text-[.9rem] leading-relaxed text-white font-extralight">
            Creating consistent and cohesive brand experiences through the use
            of logos, color schemes, typography, and other branding assets.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
