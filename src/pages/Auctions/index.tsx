/* eslint-disable @next/next/no-img-element */
import { current_auctions, topBids } from "@/Lib/data";
import { PurpleButton } from "@/components/Buttons";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";
import { AiFillHeart } from "react-icons/ai";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const Auctions = () => {
  return (
    <div>
      <Navbar />

      <div className="my-[60px] container mx-auto px-5 py-8 lg:px-[100px] lg:py-0 hidden md:block">
        <div className="flex items-center gap-[2px] text-[#BCB7B7] text-[24px] font-medium font-satoshi">
          <Link className="" href={""}>
            Home /{" "}
          </Link>
          <Link className="text-[#333]" href={"#"}>
            Auctions
          </Link>
        </div>
      </div>

      <div className="w-full container mx-auto px-5 py-8 lg:px-[100px] lg:pt-0">
        <div className="overview mb-[110px]">
          <div className="text-[#333] lg:text-black text-[20px] lg:text-[24px] font-satoshi font-medium lg:font-semibold my-12">
            Here&apos;s an overview of products actively on auction, explore!
          </div>

          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1.5,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 2.7,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper mb-12">
            <SwiperSlide
              className={`!h-[186px] lg:!h-[350px] bg-[url("/images/current_auctions_1.jpeg")] bg-cover bg-center rounded-[15px] shadow-[0px_0px_9px_-1px_rgba(0,0,0,0.25)] px-[42px] py-[20px] !flex flex-col justify-end items-end`}>
              <div className="w-full rounded-[8px] border-[0.5px] border-solid border-white bg-[rgba(245,244,244,0.24)] backdrop-blur-[1.5px] py-[10px] px-[24px]">
                <p className="font-artsy text-white text-[40px] leading-[64px]">
                  6hr : 40mins: 15s
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className={`!h-[186px] lg:!h-[350px] bg-[url("/images/current_auctions_1.jpeg")] bg-cover bg-center rounded-[15px] shadow-[0px_0px_9px_-1px_rgba(0,0,0,0.25)] px-[42px] py-[20px] !flex flex-col justify-end items-end`}>
              <div className="w-full rounded-[8px] border-[0.5px] border-solid border-white bg-[rgba(245,244,244,0.24)] backdrop-blur-[1.5px] py-[10px] px-[24px]">
                <p className="font-artsy text-white text-[40px] leading-[64px]">
                  6hr : 40mins: 15s
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className={`!h-[186px] lg:!h-[350px] bg-[url("/images/current_auctions_1.jpeg")] bg-cover bg-center rounded-[15px] shadow-[0px_0px_9px_-1px_rgba(0,0,0,0.25)] px-[42px] py-[20px] !flex flex-col justify-end items-end`}>
              <div className="w-full rounded-[8px] border-[0.5px] border-solid border-white bg-[rgba(245,244,244,0.24)] backdrop-blur-[1.5px] py-[10px] px-[24px]">
                <p className="font-artsy text-white text-[40px] leading-[64px]">
                  6hr : 40mins: 15s
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className={`!h-[186px] lg:!h-[350px] bg-[url("/images/current_auctions_1.jpeg")] bg-cover bg-center rounded-[15px] shadow-[0px_0px_9px_-1px_rgba(0,0,0,0.25)] px-[42px] py-[20px] !flex flex-col justify-end items-end`}>
              <div className="w-full rounded-[8px] border-[0.5px] border-solid border-white bg-[rgba(245,244,244,0.24)] backdrop-blur-[1.5px] py-[10px] px-[24px]">
                <p className="font-artsy text-white text-[40px] leading-[64px]">
                  6hr : 40mins: 15s
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className={`!h-[186px] lg:!h-[350px] bg-[url("/images/current_auctions_1.jpeg")] bg-cover bg-center rounded-[15px] shadow-[0px_0px_9px_-1px_rgba(0,0,0,0.25)] px-[42px] py-[20px] !flex flex-col justify-end items-end`}>
              <div className="w-full rounded-[8px] border-[0.5px] border-solid border-white bg-[rgba(245,244,244,0.24)] backdrop-blur-[1.5px] py-[10px] px-[24px]">
                <p className="font-artsy text-white text-[40px] leading-[64px]">
                  6hr : 40mins: 15s
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className={`!h-[186px] lg:!h-[350px] bg-[url("/images/current_auctions_1.jpeg")] bg-cover bg-center rounded-[15px] shadow-[0px_0px_9px_-1px_rgba(0,0,0,0.25)] px-[42px] py-[20px] !flex flex-col justify-end items-end`}>
              <div className="w-full rounded-[8px] border-[0.5px] border-solid border-white bg-[rgba(245,244,244,0.24)] backdrop-blur-[1.5px] py-[10px] px-[24px]">
                <p className="font-artsy text-white text-[40px] leading-[64px]">
                  6hr : 40mins: 15s
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="top-bids">
          <div className="text-[#333] text-[20px] lg:text-[30px] font-satoshi font-medium lg:font-bold mb-[28px] lg:mb-12">
            Top bids from popular creators
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[110px]">
            {topBids.map((bid, i) => (
              <div key={i}>
                <div className="card rounded-[15px] bg-white shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)] h-[500px]">
                  <div className="h-1/4 w-full flex flex-row-reverse items-center px-4">
                    <div className="w-[68px] h-[68px] flex justify-center items-center border rounded-full border-black/50">
                      <AiFillHeart
                        fontSize={35}
                        color={bid.liked ? "red" : "#DDBAB7"}
                      />
                    </div>
                  </div>
                  <div className="h-1/2 w-full rounded-[8px]">
                    <img
                      src={bid.image.src}
                      alt=""
                      className="object-cover w-full h-full rounded-[8px]"
                    />
                  </div>
                  <div className="h-1/4 w-full flex items-center px-8">
                    <h2 className="leading-[140%] text-[20px] lg:text-[40px] font-bold font-satoshi">
                      {bid.name}
                    </h2>
                  </div>
                </div>
                <div className="details flex flex-col gap-[30px] my-[40px]">
                  <div className="flex items-center gap-[6px] my-2">
                    <div className="w-1/3 text-desc-gray text-[18px] font-medium font-satoshi">
                      Creator:
                    </div>
                    <div className="text-black text-[18px] font-bold font-satoshi">
                      {bid.creator}
                    </div>
                  </div>
                  <div className="flex items-center gap-[6px] my-2">
                    <div className="w-1/3 text-desc-gray text-[18px] font-medium font-satoshi">
                      Date:
                    </div>
                    <div className="text-black text-[18px] font-bold font-satoshi">
                      {bid.date}
                    </div>
                  </div>
                  <div className="flex items-center gap-[6px] my-2">
                    <div className="w-1/3 text-desc-gray text-[18px] font-medium font-satoshi">
                      Highest Bid:
                    </div>
                    <div className="text-black text-[18px] font-bold font-satoshi">
                      {bid.highestBid}
                    </div>
                  </div>
                </div>
                <div className="bg-[#F7F4F4] rounded-[10px] flex items-center justify-between p-4 my-6">
                  <div className="flex flex-col gap-[8px]">
                    <div className="font-satoshi text-desc-gray font-bold text-[18px]">
                      Current bid
                    </div>
                    <div className="font-satoshi text-black font-bold text-[18px]">
                      {bid.currentBid}
                    </div>
                  </div>
                  <button className="bg-black text-white rounded-none border-none px-[50px] py-[14px] font-satoshi font-medium text-base lg:text-[21px]">
                    Place Bid
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Auctions;
