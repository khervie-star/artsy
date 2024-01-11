import React from "react";

const Status = ({ status }: any) => {
  return (
    <div
      className={`w-[150px] h-[30px] rounded-[8px] text-[14px] text-white font-semibold flex justify-center items-center font-satoshi mb-8 ${
        status == "upcoming" && "bg-[#4693ED]"
      } ${status == "live" && "bg-[#3EA03B]"} ${
        status == "ended" && "bg-[#999EA5]"
      }`}>
      {status == "upcoming" && "UPCOMING"}
      {status == "live" && "LIVE NOW"}
      {status == "ended" && "ENDED"}
    </div>
  );
};

export default Status;
