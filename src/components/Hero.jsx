import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col gap-[40px]">
      <h1 className="text-black text-center font-bold text-[20px]">
        YouTube Tags Generator
      </h1>
      <p className="text-center text-[grey]">
        YouTube tags generator is a free tool that allows you to easily generate
        SEO optimized YouTube tags / keywords for your video.{" "}
        <span className="text-gray-900 underline cursor-pointer">
          Learn more.
        </span>
      </p>
      <p className="text-center text-[grey]">
        To generate best tags for your video enter the video title below and
        click <span className="text-gray-400">"Generate Tags".</span>
      </p>
      <div className="flex flex-row items-center gap-[20px] md:ml-[50%] md:translate-x-[-50%] lg:ml-[50%] lg:translate-x-[-50%]">
        <input
          type="text"
          id="first_name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          placeholder="Enter the title here"
        />

        <button className="w-[220px] md:w-[250px] lg:w-[220px] bg-[#36454F] text-white h-[40px] rounded-lg border border-[#36454F] text-[14px] md:text-[17px] lg:text-[17px]">
          GENERATE TAGS
        </button>
      </div>
    </div>
  );
};

export default Hero;
