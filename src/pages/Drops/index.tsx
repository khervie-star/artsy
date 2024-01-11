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
      <div className="w-full p-[60px]">
        <div className="w-full text-center">
          <div className="text-black text-[40px] font-satoshi font-medium mb-[20px]">
            Upcoming drops
          </div>
          <div className="description text-desc-gray text-[16px] font-light font-satoshi mb-[15px]">
            Turn on notifications so that no drops will miss you.
          </div>
          <div className="w-ful text-center">
            <button className="notify-me text-black text-[20px] font-satoshi font-medium border border-black border-solid rounded-[8px] w-fit px-[60px] py-[10px]">
              Notify me
            </button>
          </div>
        </div>
        <div className="drops-list my-[80px]">
          {drops.map((drop, i) => (
            <div
              className="w-[90%] mx-auto flex items-start gap-[40px] mb-20"
              key={drop.id}>
              <div className="image w-7/12 relative">
                <img
                  src={drop.image.src}
                  alt=""
                  className="w-full h-auto object-cover rounded-[10px]"
                />
              </div>
              <div className="w-5/12">
                <Status status={drop.status} />
                <div className="date font-satoshi text-black font-light text-[20px] mb-6">
                  {drop.time}
                </div>
                <div className="name font-satoshi text-black font-semibold text-[36px] mb-6">
                  {drop.name}
                </div>
                <div className="name font-satoshi text-desc-gray font-light text-[15px] mb-6">
                  {drop.description}
                </div>
                <div className="name font-satoshi text-black font-semibold text-[18px] mb-6">
                  Creator:{" "}
                  <span className="text-[#006CA2]">{drop.creator}</span>
                </div>
                <Link
                  href="#"
                  className="cursor-pointer font-satoshi text-[18px] underline text-[#006CA2]">
                  Get notified
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
