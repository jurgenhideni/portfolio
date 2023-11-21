import { AiOutlineCaretRight } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";

import Link from "next/link";

const Contact = () => {
 

  return (
    <div className="max-sm:mt-28 text-white ">
      <h1 className="flex items-center font-bold text-[1.5rem] max-sm:ml-8 lg:hidden">
        <AiOutlineCaretRight className="text-red-500" /> Contact
      </h1>

      <h2 className="font-bold mx-10 text-[1.4rem] lg:text-center lg:text-[3rem] lg:my-5">
        I&apos;d love to hear from you!!
      </h2>
      <div className="max-sm:flex flex-col gap-5  justify-center items-center max-sm:pt-5">
       <div className="md:hidden rounded-md max-sm:max-w-[224px] bg-red-500 max-sm:py-5 max-sm:px-5  flex flex-col justify-center items-center gap-3">
        <h2 className="flex justify-center items-center gap-3 font-bold"><FiPhoneCall className="text-[1.5rem]" /> Call Me</h2>
        <h3>Mon-Fri from 8am to 5pm</h3>
        <Link href="tel:+355695486984" className="text-red-500 bg-white p-1 font-bold rounded-md">+355695486984</Link>
       </div>
       <div className="md:hidden max-sm:max-w-[224px] rounded-md  bg-red-500 max-sm:py-5 max-sm:px-5  flex flex-col justify-center items-center gap-3">
        <h2 className="flex justify-center items-center gap-3 font-bold"><MdEmail  className="text-[1.5rem]" /> Email Me</h2>
        <h3>Mon-Fri from 8am to 5pm</h3>
        <a href="mailto:jurgenhideni@gmail.com" className="text-red-500 bg-white px-2 py-1 font-bold rounded-md">jurgenhideni@gmail.com</a>
       </div>
       <div className="md:hidden rounded-md bg-red-500 max-sm:py-5 max-sm:px-5  flex flex-col justify-center items-center gap-3">
        <h2 className="flex justify-center items-center gap-3 font-bold"><FaLocationArrow className="text-[1.5rem]" /> Visit Me</h2>
        <h3>Mon-Fri from 8am to 5pm</h3>
        <Link href="https://maps.app.goo.gl/CwrDYc9S6SMSPsQT8" className="text-red-500 bg-white p-1 font-bold rounded-md">Location</Link>
       </div>

<div className="max-sm:hidden md:flex justify-evenly my-32" >

 <div className="text-[1.5rem] rounded-md px-5 py-7 bg-red-600   flex flex-col justify-center items-center gap-5">
        <h2 className="flex justify-center items-center gap-5 font-bold"><FiPhoneCall className="text-[1.5rem]" /> Call Me</h2>
        <h3>Mon-Fri from 8am to 5pm</h3>
        <Link href="tel:+355695486984" className="text-red-500 bg-white p-1 font-bold rounded-md">+355695486984</Link>
       </div>
 <div className=" text-[1.5rem] rounded-md p-5 bg-red-600   flex flex-col justify-center items-center gap-3">
        <h2 className="flex justify-center items-center gap-5 font-bold"><MdEmail className="text-[1.5rem]" /> Email Me</h2>
        <h3>Mon-Fri from 8am to 5pm</h3>
        <a href="mailto:jurgenhideni@gmail.com" className="text-red-500 bg-white md:p-1  font-bold rounded-md">jurgenhideni@gmail.com</a>
       </div>
 <div className=" text-[1.5rem] rounded-md p-5 bg-red-600   flex flex-col justify-center items-center gap-3">
        <h2 className="flex justify-center items-center gap-5 font-bold"><FaLocationArrow  className="text-[1.5rem]" /> Visit Me</h2>
        <h3>Mon-Fri from 8am to 5pm</h3>
        <Link href="tel:+355695486984" className="text-red-500 bg-white p-1 font-bold rounded-md">Location</Link>
       </div>
 </div>


      </div>
    </div>
  );
};

export default Contact;
