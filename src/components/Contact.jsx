import { AiOutlineCaretRight } from "react-icons/ai";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Email sent Successfully !");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="max-sm:mt-28 text-white ">
      <h1 className="flex items-center font-bold text-[1.5rem] max-sm:ml-8 lg:hidden">
        <AiOutlineCaretRight className="text-red-500" /> Contact
      </h1>

      <h2 className="font-bold mx-10 text-[1.8rem] lg:text-center lg:text-[3rem] lg:my-5">
        I&apos;d love to hear from you!!
      </h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="  flex flex-col mx-10 lg:mx-auto my-5  max-w-[300px] lg:max-w-[500px] gap-3 lg:gap-5  text-black"
      >
        <input
          className="p-4 rounded-md outline-none border-none focus:ring-2 focus:ring-red-500 "
          type="text"
          placeholder="First Name"
          name="firstName"
          required
          autoComplete="off"
        />
        <input
          className="p-4 rounded-md outline-none border-none focus:ring-2 focus:ring-red-500"
          type="text"
          placeholder="Last Name"
          name="lastName"
          required
          autoComplete="off"
        />
        <input
          className="p-4 rounded-md outline-none border-none focus:ring-2 focus:ring-red-500"
          type="email"
          placeholder="E-Mail"
          name="user_email"
          required
          autoComplete="off"
        />
        <textarea
          className="p-4 rounded-md align-top h-[200px] outline-none border-none focus:ring-2 focus:ring-red-500"
          type="text"
          placeholder="Message..."
          name="message"
          required
          autoComplete="off"
        />
        <button
          type="submit"
          value="Send"
          className="bg-red-600 text-white py-4 rounded-md  font-bold"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
