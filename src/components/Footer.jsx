"use client";
import React, { useState } from "react";
import Image from "next/image";
import gift from "../../public/gift.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Footer = () => {
  let [email, setEmail] = useState("");

  const handleSubmit = async () => {};
  return (
    <div className="bg-[#36454F] text-center text-white flex flex-col gap-[30px] pt-[40px]">
      <ToastContainer />
      <h1>Never Miss A Good Deal</h1>
      <p>
        Get updates about new music, upcoming promotions, and exclusive freebies
      </p>
      <div className="flex flex-row justify-center items-center">
        <Image src={gift} className="h-[60px] w-[60px] " alt="gift" />
      </div>
      <div className="flex flex-row items-center gap-[20px]  md:ml-[50%] md:translate-x-[-50%] lg:ml-[50%] lg:translate-x-[-50%] px-[50px]">
        <input
          type="text"
          id="first_name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          className="w-[220px] bg-gray-500 text-white h-[40px] rounded-lg border border-white"
          onClick={handleSubmit}
        >
          Sign Up
        </button>
      </div>
      <p className="text-[14px] text-gray-400">
        WE WILL NOT SHARE OR SELL YOUR EMAIL
      </p>
      <div className="h-[1px] w-[100%] bg-white "></div>
      <p className="text-center text-gray-100 pb-[10px]">
        © 2023 Tags Generator by{" "}
        <span
          className="underline cursor-pointer px-[3px]"
          onClick={() => {
            window.open("https://sardar.live", "__blank");
          }}
        >
          Sardar Ali Murad
        </span>{" "}
        All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
