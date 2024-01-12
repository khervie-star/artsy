/* eslint-disable @next/next/no-img-element */
import { drops } from "@/Lib/data";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Status from "@/components/Status";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Drops = () => {
  return (
    <div className="">
      <Navbar />

      <div className="my-[60px] container mx-auto px-5 py-8 lg:px-[100px] lg:py-0">
        <div className="flex items-center gap-[2px] text-[#BCB7B7] text-[24px] font-medium font-satoshi">
          <Link className="" href={""}>
            Home /{" "}
          </Link>
          <Link className="" href={"/auctions"}>
            Auctions /{" "}
          </Link>
          <Link className="" href={"/auctions"}>
            Live bid /{" "}
          </Link>
          <Link className="text-[#333]" href={"#"}>
            Drop
          </Link>
        </div>
      </div>

      <div className="w-full container mx-auto px-5 py-8 lg:p-[100px] lg:pt-0">
        <div className="w-full text-center">
          <div className="text-black text-[40px] font-satoshi font-medium mb-[20px]">
            Upcoming drops
          </div>
          <div className="description text-desc-gray text-[16px] font-light font-satoshi mb-[15px]">
            Turn on notifications so that no drops will miss you.
          </div>
          <div className="w-ful text-center">
            <button className="notify-me text-black text-[20px] font-satoshi font-medium border border-black border-solid rounded-[8px] w-fit px-[60px] py-[10px] hover:text-white hover:bg-black transition-all duration-200">
              Notify me
            </button>
          </div>
        </div>
        <div className="drops-list my-[80px] flex flex-col gap-[138px]">
          {drops.map((drop, i) => (
            <div
              className="w-full mx-auto flex items-start gap-[42px]"
              key={drop.id}>
              <div className="image w-6/12 relative">
                <img
                  src={drop.image.src}
                  alt=""
                  className="w-full h-[440px] object-cover rounded-[10px]"
                />
                <div className="w-full flex justify-center items-center">
                  <div className="absolute rounded-[8px] border-[0.5px] border-solid border-white bg-black/20 bottom-5 w-[80%] h-fit p-[18px] text-white font-satoshi backdrop-blur-[1px]">
                    <div className="flex justify-between items-end">
                      <div className="">
                        <p className="leading-[175%] font-satoshi text-[28px] mb-[6px] font-normal">
                          {drop.status == "live" || drop.status == "upcoming"
                            ? "Time Remaining"
                            : "Auction Ended"}
                        </p>
                        <p className="leading-[136%] font-artsy text-[40px] font-normal">
                          {drop.time_rem}
                        </p>
                      </div>
                      <div
                        className={`cursor-pointer  py-[6px] px-[30px] rounded-md bg ${
                          drop.status == "live" || drop.status == "upcoming"
                            ? "bg-[#4693ED] "
                            : "bg-[#B8BABC]"
                        }`}>
                        {drop.status == "live" || drop.status == "upcoming"
                          ? "Join"
                          : "View"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-6/12">
                <Status status={drop.status} />
                <div className="date font-satoshi text-black font-light text-[20px] mb-6">
                  {drop.time}
                </div>
                <div className="name font-satoshi text-black font-semibold text-[36px] mb-6">
                  {drop.name}
                </div>
                <div className="name font-satoshi text-desc-gray font-light text-[15px] mb-6 lg:w-[420px] leading-[157%]">
                  {drop.description}
                </div>
                <div className="name font-satoshi text-black font-semibold text-[18px] mb-6">
                  Creator:{" "}
                  <span className="text-[#006CA2]">{drop.creator}</span>
                </div>
                <Link
                  href="#"
                  className="cursor-pointer font-satoshi text-[18px] underline text-[#006CA2]">
                  {drop.status == "upcoming" && "Get notified"}
                  {drop.status == "live" && "Join now"}
                  {drop.status == "ended" && "View"}
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="w-ful text-center">
          <button className="notify-me text-black text-[20px] font-satoshi font-medium border border-black border-solid rounded-[8px] w-fit px-[60px] py-[10px]">
            See More
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Drops;
