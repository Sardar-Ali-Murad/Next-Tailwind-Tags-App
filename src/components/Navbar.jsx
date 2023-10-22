"use client";
"use client";
import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";

const Navbar = () => {
  let [showLinks, setShowLinks] = useState(false);
  return (
    <div className="bg-[#36454F] text-white h-[120px] md:h-[80px] lg:h-[80px] flex px-[100px] justify-between items-center flex-col md:flex-col lg:flex-row gap-[40px]  md:gap-[40px] lg:gap-[0px] ">
      <div className="flex-1 flex justify-center items-center md:items-center lg:items-start md:justify-center lg:justify-start ">
        <BsCodeSlash className="text-white text-[30px]" />
      </div>
      <div className="hidden md:hidden lg:block flex-1">
        <div className="flex items-center justify-evenly flex-1 ">
          <div className="group">
            <li className="cursor-pointer hover:opacity-75 h-[80px] flex justify-center items-center">
              Start Downloading
            </li>
            <div className="hidden group-hover:block absolute top-[80px] bg-[#36454F] text-white  px-[10px] py-[8px] border border-gray-600 hover:block text-[14px]">
              <div className="flex flex-col gap-[10px]">
                <li className="cursor-pointer hover:opacity-75">By Category</li>
                <li className="cursor-pointer hover:opacity-75">By Mode</li>
                <li className="cursor-pointer hover:opacity-75">By Genre</li>

                <li className="cursor-pointer hover:opacity-75">By Playlist</li>
                <li className="cursor-pointer hover:opacity-75">
                  Trending This Week
                </li>
                <li className="cursor-pointer hover:opacity-75">
                  Most Popular
                </li>
                <li className="cursor-pointer hover:opacity-75">Most Recent</li>
              </div>
            </div>
          </div>

          <li className="cursor-pointer hover:opacity-75">Browse Music</li>
          <li className="cursor-pointer hover:opacity-75">Sound Effects</li>
          <div className="group">
            <li className="cursor-pointer hover:opacity-75 h-[80px] flex justify-center items-center">
              Tools
            </li>
            <div className="hidden group-hover:block absolute top-[80px] bg-[#36454F] text-white  px-[10px] py-[8px] border border-gray-600 hover:block text-[14px]">
              <div className="flex flex-col gap-[10px]">
                <li className="cursor-pointer hover:opacity-75">By Category</li>
                <li className="cursor-pointer hover:opacity-75">By Mode</li>
                <li className="cursor-pointer hover:opacity-75">By Genre</li>

                <li className="cursor-pointer hover:opacity-75">By Playlist</li>
                <li className="cursor-pointer hover:opacity-75">
                  Trending This Week
                </li>
                <li className="cursor-pointer hover:opacity-75">
                  Most Popular
                </li>
                <li className="cursor-pointer hover:opacity-75">Most Recent</li>
              </div>
            </div>
          </div>
          <div className="group">
            <li className="cursor-pointer hover:opacity-75 h-[80px] flex justify-center items-center">
              Support
            </li>
            <div className="hidden group-hover:block absolute top-[80px] bg-[#36454F] text-white  px-[10px] py-[8px] border border-gray-600 hover:block text-[14px]">
              <div className="flex flex-col gap-[10px]">
                <li className="cursor-pointer hover:opacity-75">By Category</li>
                <li className="cursor-pointer hover:opacity-75">By Mode</li>
                <li className="cursor-pointer hover:opacity-75">By Genre</li>

                <li className="cursor-pointer hover:opacity-75">By Playlist</li>
                <li className="cursor-pointer hover:opacity-75">
                  Trending This Week
                </li>
                <li className="cursor-pointer hover:opacity-75">
                  Most Popular
                </li>
                <li className="cursor-pointer hover:opacity-75">Most Recent</li>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="block md:block lg:hidden w-[100%]">
        <div className=" bg-gray-400 border border-gray-400 w-[100%] flex flex-row items-center justify-between py-[5px] px-[20px] ">
          <h1 className="text-white text-[20px]">Menu</h1>
          <FaBarsStaggered
            className="text-[20px] cursor-pointer"
            onClick={() => setShowLinks((pre) => !pre)}
          />
        </div>
        <div
          className={`absolute top-[120px] left-0 bg-[#36454F] text-white w-[100%] px-[40px] py-[20px] flex flex-col gap-[20px] ${
            showLinks ? "block" : "hidden"
          } `}
        >
          <div>
            <li className="cursor-pointer hover:opacity-75">
              Start Downloading
            </li>
          </div>
          <div className="flex flex-col gap-[20px]">
            <li className="cursor-pointer hover:opacity-75">Browse Music</li>
            <div className="relative left-[30px] flex flex-col gap-[10px]  text-[14px]">
              <div className="flex flex-row items-center gap-[20px]">
                <AiOutlineDoubleRight />
                <li className="cursor-pointer hover:opacity-75">By Category</li>
              </div>
              <div className="flex flex-row items-center gap-[20px]">
                <AiOutlineDoubleRight />
                <li className="cursor-pointer hover:opacity-75">By Mood</li>
              </div>
              <div className="flex flex-row items-center gap-[20px]">
                <AiOutlineDoubleRight />
                <li className="cursor-pointer hover:opacity-75">By Genre</li>
              </div>
              <div className="flex flex-row items-center gap-[20px]">
                <AiOutlineDoubleRight />
                <li className="cursor-pointer hover:opacity-75">
                  By Instrument
                </li>
              </div>
              <div className="flex flex-row items-center gap-[20px]">
                <AiOutlineDoubleRight />
                <li className="cursor-pointer hover:opacity-75">By Platform</li>
              </div>
              <div className="flex flex-row items-center gap-[20px]">
                <AiOutlineDoubleRight />
                <li className="cursor-pointer hover:opacity-75">
                  Trending This Week
                </li>
              </div>
              <div className="flex flex-row items-center gap-[20px]">
                <AiOutlineDoubleRight />
                <li className="cursor-pointer hover:opacity-75">
                  Most Popular
                </li>
              </div>
              <div className="flex flex-row items-center gap-[20px]">
                <AiOutlineDoubleRight />
                <li className="cursor-pointer hover:opacity-75">Most Recent</li>
              </div>
            </div>
          </div>

          <div>
            <li className="cursor-pointer hover:opacity-75">Tools</li>
          </div>
          <div>
            <li className="cursor-pointer hover:opacity-75">Support</li>
          </div>
          <div className="flex flex-col gap-[20px]">
            <li>Link 4</li>
            <div className="relative left-[30px] flex flex-col gap-[10px]  text-[14px]">
              <div className="flex flex-row items-center gap-[20px]">
                <AiOutlineDoubleRight />
                <li className="cursor-pointer hover:opacity-75">By Category</li>
              </div>
              <div className="flex flex-row items-center gap-[20px]">
                <AiOutlineDoubleRight />
                <li className="cursor-pointer hover:opacity-75">By Mood</li>
              </div>
              <div className="flex flex-row items-center gap-[20px]">
                <AiOutlineDoubleRight />
                <li className="cursor-pointer hover:opacity-75">By Genre</li>
              </div>
              <div className="flex flex-row items-center gap-[20px]">
                <AiOutlineDoubleRight />
                <li className="cursor-pointer hover:opacity-75">
                  By Instrument
                </li>
              </div>
              <div className="flex flex-row items-center gap-[20px]">
                <AiOutlineDoubleRight />
                <li className="cursor-pointer hover:opacity-75">By Platform</li>
              </div>
              <div className="flex flex-row items-center gap-[20px]">
                <AiOutlineDoubleRight />
                <li className="cursor-pointer hover:opacity-75">
                  Trending This Week
                </li>
              </div>
              <div className="flex flex-row items-center gap-[20px]">
                <AiOutlineDoubleRight />
                <li className="cursor-pointer hover:opacity-75">
                  Most Popular
                </li>
              </div>
              <div className="flex flex-row items-center gap-[20px]">
                <AiOutlineDoubleRight />
                <li className="cursor-pointer hover:opacity-75">Most Recent</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
