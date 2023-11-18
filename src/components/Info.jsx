"use client";
import React from "react";
const Info = () => {
  return (
    <div className="flex flex-col gap-[50px]">
      <div className="flex flex-col gap-[30px]">
        <div>
          <h1 className="text-[20px] text-center font-bold ">
            5 Steps For Choosing Best Youtube/TikTok Tags
          </h1>
        </div>
        <div className="flex flex-col gap-[10px] text-[#36454F] ">
          <li>
            1. Run YouTube/TikTok tags generator to get a rough list of keywords
            ideas.
          </li>
          <li>2. Go through the list and remove irrelevant tags.</li>
          <li>
            3. Look up the
            <span
              className="text-gray-900 underline cursor-pointer px-[5px]"
              onClick={() => {
                window.open(
                  "https://rapidapi.com/Murad123/api/tags-generator",
                  "__blank"
                );
              }}
            >
              tags used by competing videos
            </span>
            for more ideas.
          </li>
          <li>4. Add your target keyword from the title as the first tag.</li>
          <li>
            5. Add your brand keywords, including common variations and
            alternative spelling.
          </li>
        </div>
      </div>

      <div className="flex flex-col gap-[30px]">
        <div>
          <h1 className="text-center font-bold text-[20px]">Terms Of Use</h1>
        </div>
        <div className="flex flex-col gap-[20px] text-[#36454F] ">
          <p>
            Engage with the Tags Generator API with confidence, knowing that
            your access and utilization are governed by our meticulously crafted
            Terms of Use. Your interaction with this service is contingent upon
            adherence to ethical and lawful practices. Unauthorized access or
            misuse is expressly prohibited. Users are obligated to uphold
            compliance with prevailing laws and regulations relevant to their
            usage.
          </p>
          <p>
            To maintain the integrity of our services, we retain the right to
            suspend or terminate access for any user found in violation of these
            terms. For a comprehensive understanding of acceptable use policies,
            data privacy commitments, and API limitations, we strongly encourage
            users to consult our exhaustive and professionally outlined Terms of
            Use documentation. Elevate your experience with Tags Generator by
            engaging responsibly and within the bounds of these guidelines.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
