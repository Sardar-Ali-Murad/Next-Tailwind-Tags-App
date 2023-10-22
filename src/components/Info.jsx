import React from "react";
import Tags from "../../public/tags.jpg";
import Image from "next/image";
const Info = () => {
  return (
    <div className="flex flex-col gap-[50px]">
      <Image src={Tags} />
      <div className="flex flex-col gap-[30px]">
        <div>
          <h1 className="text-[20px] text-center font-bold ">
            5 Steps For Choosing Best YouTube Tags
          </h1>
        </div>
        <div className="flex flex-col gap-[10px] text-[#36454F] ">
          <li>
            1. Run YouTube tags generator to get a rough list of keywords ideas.
          </li>
          <li>2. Go through the list and remove irrelevant tags.</li>
          <li>
            3. Look up the{" "}
            <span className="text-gray-900 underline cursor-pointer">
              tags used by competing videos
            </span>{" "}
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
          <h1 className="text-start font-bold text-[20px]">Terms Of Use</h1>
        </div>
        <div className="flex flex-col gap-[20px] text-[#36454F] ">
          <p>
            This free YouTube tags generator tool is offered as is. TunePocket
            makes no warranties or guarantees and disclaims any liability
            related to using the tags generated with this tool on YouTube or
            elsewhere.
          </p>
          <p>
            This tool uses YouTube API services. By using this tool you agree to
            to YouTube Terms of Service and Google privacy policy.
          </p>
          <p>
            This tool does not relay any of your personal information to YouTube
            / Google.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[30px]">
        <div>
          <h1 className="text-start font-bold text-[20px]">Version History</h1>
        </div>
        <div className="flex flex-col gap-[20px] text-[#36454F] ">
          <p>
            December 2022: Added captcha due to the sharp increase in automated
            bot queries. Sorry about the inconvenience.
          </p>
          <p>January 2021: Improved the algorithm for short video titles.</p>
          <p>
            May 2020: You can now easily remove non-relevant tags before copying
            the results to YouTube.
          </p>
          <p>April 2020: Initial version released.</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
