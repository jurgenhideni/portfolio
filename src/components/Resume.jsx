import React from "react";
import CurriculumVitae from "./CurriculumVitae";
import Link from "next/link";
import Image from "next/image";
import { TfiEmail } from "react-icons/tfi";
import { BsTelephoneFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { HiLanguage } from "react-icons/hi2";
import { GiSkills } from "react-icons/gi";
import { BsCode } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

const Resume = () => {
  return (
    <div className="flex justify-around max-sm:grid grid-cols-1 max-sm:mt-16">
      <div className="bg-[#202020] lg:min-h-[100vh]  lg:rounded-lg text-center text-white">
        <Image
          src="/assets/profile.png"
          width={500}
          height={500}
          alt=""
          className="px-5 "
        />
        <div className="flex flex-col gap-5 pb-12 border-b border-[#505050]">
          <h1 className="text-[2.2rem] font-bold">Jurgen Hideni</h1>
          <h2 className="bg-[#353535] max-w-[200px] mx-auto px-4 py-2 font-bold rounded-md">
            Frontend Developer
          </h2>
        </div>

        <div className="mx-5">
          <div className="flex items-center  gap-10 text-left pt-10 ">
            <TfiEmail className="text-[1.8rem] text-red-500" />
            <div>
              <h3 className="text-[#9f9f9f] font-bold uppercase">E-mail</h3>
              <p className="font font-semibold">jurgenhideni@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center  gap-10 text-left pt-10 ">
            <BsTelephoneFill className="text-[1.8rem] text-red-500" />
            <div>
              <h3 className="text-[#9f9f9f] font-bold uppercase">Phone</h3>
              <p className="font font-semibold">(00355) 695 486 984</p>
            </div>
          </div>
          <div className="flex items-center  gap-10 text-left pt-10 ">
            <ImLocation className="text-[1.8rem] text-red-500" />
            <div>
              <h3 className="text-[#9f9f9f] font-bold uppercase">Adress</h3>
              <p className="font font-semibold">
                Shyqyri Ishmi 43, Tirana, Albania
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:min-h-[100vh] lg:max-w-[1300px]  lg:rounded-lg bg-[#202020]">
        <h1 className="text-white font-bold text-[2.5rem] px-5 bg-red-600 max-w-[250px] max-sm:hidden py-2 rounded-br-full rounded-tl-md ">
          Resume
        </h1>
        <h2 className="md:hidden mt-16 text-center bg-[#101010] py-2 text-[2.5rem] font-bold text-red-500">
          Resume
        </h2>
        <div className="flex text-white max-sm:grid max-sm:grid-cols-1">
          <CurriculumVitae />
          <div className="flex flex-col gap-2">
            <div className="m-10">
              <h2 className="flex items-center gap-5 text-[2rem] font-bold">
                <HiLanguage className="text-red-500" /> Languages
              </h2>
              <div className="ml-14 font-light text-[1.2rem]">
                <h3>Albanian - Native</h3>
                <h3>English - B2</h3>
              </div>
            </div>
            <div className="m-10">
              <h2 className="flex items-center gap-5 text-[2rem] font-bold">
                <GiSkills className="text-red-500" /> Soft Skills
              </h2>
              <div className="ml-14 font-light text-[1.2rem] flex flex-col gap-2">
                <h3>Communication skills</h3>
                <h3>Attention to detail</h3>
                <h3>Teamwork</h3>
                <h3>Problem Solving skills</h3>
                <h3>Adaptability</h3>
              </div>
            </div>
            <div className="m-10">
              <h2 className="flex items-center gap-5 text-[2rem] font-bold">
                <BsCode className="text-red-500" /> Technical Skills
              </h2>
              <div className="ml-14 font-light text-[1.2rem] flex flex-col gap-2">
                <h3>Knowledge of HTML and CSS</h3>
                <h3>Familiarity with CSS preprocessors</h3>
                <h3>
                  Understanding of web development frameworks (React, NextJs)
                </h3>
                <h3>Problem Solving skills</h3>
                <h3>Adaptability</h3>
              </div>
            </div>
            <div className="m-10">
              <h2 className="flex items-center gap-5 text-[2rem] font-bold">
                <AiFillGithub className="text-red-500" /> GitHub
              </h2>
              <div className="ml-14 font-light text-[1.2rem] flex flex-col gap-2">
                <Link href="https://github.com/jurgenhideni">
                  https://github.com/jurgenhideni
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
