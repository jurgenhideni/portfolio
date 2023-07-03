import Image from "next/image";
import Link from "next/link";

import { AiOutlineCaretRight } from "react-icons/ai";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { TbBrandJavascript } from "react-icons/tb";
import { DiSass } from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";

const About = () => {
  return (
    <>
      <div className="flex justify-around gap-5 bg-[#151515] py-20">
        <Image
          src="/assets/jur1.png"
          height={500}
          width={550}
          alt=""
          className="rounded-lg max-sm:hidden "
        />
        <div className="text-white flex flex-col max-sm:mx-10">
          <h2 className="font-semibold text-[1.5rem] items-center flex">
            <AiOutlineCaretRight className="text-red-500" /> About me
          </h2>
          <h1 className="font-bold text-[2.5rem]">Who Am I </h1>
          <p className="max-w-[950px] text-[1.1rem] font-semibold text-slate-400 leading-loose mt-10">
            My name is Jurgen Hideni, and I am a passionate frontend web
            developer. I have always been fascinated by the intersection of
            design and technology, and I am thrilled to be able to bring my
            creative ideas to life through coding. My primary focus is on
            frontend development, where I excel in crafting beautiful user
            interfaces that are both visually appealing and user-friendly.
            <span className="max-sm:hidden">
              My technical skills include proficiency in HTML, CSS, JavaScript,
              and various frontend frameworks such as React and Next.js . I am
              well-versed in responsive design principles, ensuring that
              websites look great and function seamlessly across different
              devices and screen sizes. Continuously learning and staying
              up-to-date with the latest trends and technologies is a priority
              for me. I am always exploring new tools, frameworks, and
              techniques to enhance my skills and deliver cutting-edge solutions
              to my clients.
            </span>
          </p>
          <div
            className="grid grid-cols-3 font-bold gap-7 mt-7 bg-[#101010] lg:px-4  py-5 rounded-lg max-sm:grid-cols-2 
          max-sm:px-2"
          >
            <div className="flex  bg-[#252525] justify-center rounded-md py-2">
              <AiFillHtml5 className="text-orange-500 text-[1.5rem] " />
              <h2>Html5</h2>
            </div>
            <div className="flex   bg-[#252525] justify-center rounded-md py-2">
              <DiCss3 className="text-blue-500 text-[1.5rem]" />
              <h2>Css3</h2>
            </div>
            <div className="flex  bg-[#252525] justify-center rounded-md py-2">
              <TbBrandJavascript className="text-yellow-500 text-[1.5rem]" />
              <h2>JavaScript</h2>
            </div>
            <div className="flex  bg-[#252525] justify-center rounded-md py-2">
              <DiSass className="text-pink-500 text-[1.5rem]" />
              <h2>Sass</h2>
            </div>
            <div className="flex  bg-[#252525] justify-center rounded-md py-2">
              <SiNextdotjs className="text-slate-500 text-[1.5rem]" />
              <h2>Next js</h2>
            </div>
          </div>
          <Link
            href="https://drive.google.com/file/d/1rtjoQfNGfbRn_XNOhUXwA0_TNnrh9pWA/view?usp=share_link"
            className=" bg-red-700 max-w-[200px] text-center mt-5 py-2 rounded-md font-bold transition ease-in-out duration-200
            max-sm:mx-2 max-sm:max-w-[193px] hover:bg-white hover:text-red-500"
          >
            Download CV
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
