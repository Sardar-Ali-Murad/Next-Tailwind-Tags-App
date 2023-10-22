import React from "react";
import moment from "moment/moment";

const MessageBox = ({ data }) => {
  return (
    <div>
      <div className="flex items-center gap-[20px]">
        <div className="h-[50px] text-[18px] w-[50px] rounded-full flex items-center justify-center text-white bg-[#36454F]">
          {data.name.split("")[0]}
        </div>
        <p>{data?.name}</p>
        <p>{moment(data?.createdAt).format("YYYY-MM-DD HH:mm:ss")}</p>
      </div>
      <p className=" mt-[30px] text-[14px] text-gray-400 ">{data?.message}</p>
      <div className="h-[1px] w-[100%] bg-gray-900 mt-[10px]"></div>
    </div>
  );
};

export default MessageBox;
