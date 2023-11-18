"use client";
import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import { MdOutlineFileCopy } from "react-icons/md";

const Hero = () => {
  let [query, setQuery] = React.useState("");
  let [platform, setPlatform] = React.useState("youtube");
  let [tags, setTags] = React.useState([]);
  let [loading, setLoading] = React.useState(false);

  function handleDelete(tag) {
    setTags((pre) => pre.filter((item) => item !== tag));
  }

  const handleGenerate = async () => {
    if (query === "") {
      toast.error("Please provide the title/keyword");
    } else {
      if (platform === "youtube") {
        setLoading(true);
        const options = {
          method: "GET",
          url: `https://tags-generator.p.rapidapi.com/youtubeTags/${query}`,
          headers: {
            "X-RapidAPI-Key":
              "de47ac1912mshde13f25f720f215p186f6cjsn0a1dc5096334",
            "X-RapidAPI-Host": "tags-generator.p.rapidapi.com",
          },
        };

        try {
          const { data } = await axios.request(options);
          setTags(data?.data?.tags);
          setLoading(false);
        } catch (error) {
          toast.error("Some Error Occured. Please try Again Later");
          setLoading(false);
        }
      }
      if (platform === "tiktok") {
        const options = {
          method: "GET",
          url: `https://tags-generator.p.rapidapi.com/tiktokTags/${query}`,
          headers: {
            "X-RapidAPI-Key":
              "de47ac1912mshde13f25f720f215p186f6cjsn0a1dc5096334",
            "X-RapidAPI-Host": "tags-generator.p.rapidapi.com",
          },
        };

        setLoading(true);

        try {
          const { data } = await axios.request(options);
          setTags(data?.data?.tags);
          setLoading(false);
        } catch (error) {
          toast.error("Some Error Occured. Please try Again Later");
          setLoading(false);
        }
      }
    }
  };
  return (
    <div className="flex flex-col gap-[40px]">
      <h1 className="text-black text-center font-bold text-[20px]">
        YouTube/TikTok Tags Generator
      </h1>
      <p className="text-center text-[grey]">
        YouTube/TikTok tags generator is a free tool that allows you to easily
        generate SEO optimized YouTube/TikTok tags keywords for your video.
        <span
          className="text-gray-900 underline cursor-pointer"
          onClick={() => {
            window.open(
              "https://rapidapi.com/Murad123/api/tags-generator",
              "__blank"
            );
          }}
        >
          Learn more.
        </span>
      </p>
      <p className="text-center text-[grey]">
        To generate best tags for your video enter the video title below and
        click <span className="text-gray-400">"Generate Tags".</span>
      </p>
      <div className="flex flex-col lg:flex-row md:flex-row items-center justify-between gap-[40px]">
        <input
          type="text"
          id="first_name"
          class="bg-gray-50 flex-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          placeholder="Enter the title/keyword here"
          value={query}
          onChange={(e) => setQuery(e?.target?.value)}
        />

        <div className="flex flex-row gap-[20px] w-[100%] flex-1">
          <div>
            <select
              id="countries"
              value={platform}
              onChange={(e) => setPlatform(e?.target?.value)}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="youtube">Youtube</option>
              <option value="tiktok">TikTok</option>
            </select>
          </div>

          <button
            className="w-[220px] md:w-[250px] lg:w-[220px] bg-[#36454F] text-white h-[40px] rounded-lg border border-[#36454F]  md:text-[17px] lg:text-[17px] text-[12px]"
            onClick={handleGenerate}
          >
            GENERATE TAGS
          </button>
        </div>
      </div>
      {loading ? (
        <h1>Fetching Tags...</h1>
      ) : tags?.length === 0 ? (
        <p>Write the title or keyword above to get the related tags</p>
      ) : (
        <Card className="flex flex-row gap-[10px] items-center px-[20px] py-[10px] relative  flex-wrap">
          <MdOutlineFileCopy
            className="absolute right-[5px] top-[5px] cursor-pointer text-[20px]"
            onClick={() => {
              navigator.clipboard.writeText(tags?.join(","));
              toast.success("Tags added to the clipboard");
            }}
          />
          {tags?.map((tag) => {
            return (
              <Chip
                label={tag}
                variant="outlined"
                onDelete={() => handleDelete(tag)}
              />
            );
          })}
        </Card>
      )}
    </div>
  );
};

export default Hero;
