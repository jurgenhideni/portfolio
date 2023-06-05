import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { BiBookOpen } from "react-icons/bi";
import { MdOutlineWorkOutline } from "react-icons/md";
const CurriculumVitae = () => {
  return (
    <div className="max-w-[700px] border-r border-slate-400 ">
      <div className="mx-10 text-white">
        <div className="flex items-center gap-4  mt-10 mb-5">
          <BsFillPersonFill className="text-red-500 text-[2rem]" />
          <h2 className="text-[2rem] font-bold">Profile</h2>
        </div>
        <p className=" mx-11 leading-loose font-light text-[1.2rem]  ">
          A highly motivated and detail-oriented junior front-end developer with
          a passion for creating innovative and visually appealing web
          applications. Proficient in HTML, CSS, JavaScript, and React, with
          experience in developing responsive and user-friendly websites. Strong
          problem-solving skills and a desire to learn and grow in a dynamic and
          fast-paced environment. A collaborative team player with good
          communication skills and a commitment to delivering high-quality work.
        </p>
      </div>
      <div className="mx-10 text-white">
        <div className="flex items-center gap-4  mt-10 mb-5">
          <BiBookOpen className="text-red-500 text-[2rem]" />
          <h2 className="text-[2rem] font-bold">Education</h2>
        </div>
        <div className="font-semibold text-white ml-12 text-[1.2rem] mb-3 ">
          <p>
            <span className="text-red-500">-</span> Javascript from scratch,
            Software Development Academy SDA
          </p>
          <h3 className="text-slate-400 ml-5">17.09.2022 - 26.03.2023</h3>
        </div>
        <div className="font-semibold text-white ml-12 text-[1.2rem] mb-3">
          <p>
            <span className="text-red-500">-</span> Training Financa 5 & Alha
            Web, ATC
          </p>
          <h3 className="text-slate-400 ml-5">04.2022 - 05.2022</h3>
        </div>
        <div className="font-semibold text-white ml-12 text-[1.2rem] mb-3">
          <p>
            <span className="text-red-500">-</span> MSC Financial Markets &
            Banking, Universiteti Luarasi
          </p>
          <h3 className="text-slate-400 ml-5">11.2020 - 07.2022</h3>
        </div>

        <div className="font-semibold text-white ml-12 text-[1.2rem] mb-3">
          <p>
            <span className="text-red-500">-</span> Bachelor of Finance &
            Banking, Aleksandër Moisiu University of Durrës
          </p>
          <h3 className="text-slate-400 ml-5">10.2016 - 07.2020</h3>
        </div>
        <div className="flex items-center gap-4  mt-10 mb-5">
          <MdOutlineWorkOutline className="text-red-500 text-[2rem]" />
          <h2 className="text-[2rem] font-bold">Work Experience</h2>
        </div>
        <div className="font-semibold text-white ml-12 text-[1.2rem] mb-3 ">
          <p>
            <span className="text-red-500">-</span> Assistant Manager , Move One
            SHPK
          </p>
          <h3 className="text-slate-400 ml-5"> 05.2020 - 08.2022</h3>
        </div>
      </div>
    </div>
  );
};

export default CurriculumVitae;
