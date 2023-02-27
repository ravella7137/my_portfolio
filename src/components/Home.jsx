import React from "react";


const Home = () => {
  return (
    <div>
      <div
        name="home"
        className="bg-[#121212] h-screen flex flex-col justify-center "
      >
        <div className="max-w-3xl mx-auto md:pr-7 md:pl-[5rem] px-7">
          <p className="text-purple-700">Hi , I'm</p>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#ccd6f6] ">
            Hemanth Ravilla
          </h1>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#8892b0] ">
            I'm a Full Stack Developer
          </h2>
          <p className="text-[#8892b0] sm:text-sm my-3">
            Professional full stack web developer with 3.5+ years of experience
            developing application in various stacks at corporate, research and
            start-up environments.
          </p>
          <button className="text-slate-100	 border-2 border-solid p-2 hover:bg-purple-700 hover:border-purple-700">
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
