import React from "react";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-[#121212]  text-gray-300">
      <h2
        name="contact"
        className="text-center font-bold text-4xl text-gray-300 underline underline-offset-8 decoration-purple-700 pt-[7rem] pb-5"
      >
        Contact
      </h2>

      <div className="flex justify-center gap-[4rem] pt-5">
        <a
          href="https://www.linkedin.com/in/hemanth-ravilla/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          {" "}
          <FaLinkedin
            className="hover:text-purple-700 hover:cursor-pointer"
            size={32}
          ></FaLinkedin>
        </a>
        <a
          href="mailto:ravilla7137@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <FaEnvelope
            className="hover:text-purple-700 hover:cursor-pointer"
            size={32}
          ></FaEnvelope>
        </a>
        <a
          href="https://github.com/ravella7137"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <FaGithub
            className="hover:text-purple-700 hover:cursor-pointer"
            size={32}
          ></FaGithub>
        </a>
      </div>
      <div className="flex font-ligt flex-col justify-center items-center p-7 gap-1">
        <p>Made with React and Tailwind</p>
        <p>© Hemanth Kumar Ravilla</p>
      </div>
    </section>
  );
};

export default Contact;
