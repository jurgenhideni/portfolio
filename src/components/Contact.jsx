import React from "react";
import { AiOutlineCaretRight } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="max-sm:mt-28 text-white">
      <h1 className="flex items-center font-bold text-[2.5rem]">
        <AiOutlineCaretRight className="text-red-500" /> Contact
      </h1>

      <h2 className="font-bold mx-10 text-[1.5rem]">
        Id love to hear from you!!
      </h2>
      <div className="mx-10 my-5 flex flex-col  max-w-[300px] gap-3 text-black">
        <input
          className="p-2 rounded-md"
          type="text"
          placeholder="First Name"
        />
        <input className="p-2 rounded-md" type="text" placeholder="Last Name" />
        <input className="p-2 rounded-md" type="email" placeholder="E-Mail" />
        <input
          className="p-2 rounded-md align-top h-[200px]"
          type="text"
          placeholder="Comment..."
        />
        <button
          type="submit"
          className="bg-red-600 text-white py-3 rounded-md  font-bold"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
