/* eslint-disable @next/next/no-img-element */
import { topBids } from "@/Lib/data";
import { PurpleButton } from "@/components/Buttons";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { AiFillHeart } from "react-icons/ai";

const Auctions = () => {
  return (
    <div>
      <Navbar />
      <div className="p-[60px]">
        <div className="overview mb-12">
          <div className="text-black text-[24px] font-satoshi font-semibold my-12">
            Here&apos;s an overview of products actively on auction, explore!
          </div>
        </div>

        <div className="top-bids">
          <div className="text-black text-[30px] font-satoshi font-bold mb-12">
            Top bids from popular creators
          </div>
          <div className="flex justify-center gap-12">
            {topBids.map((bid, i) => (
              <div key={i}>
                <div className="card rounded-[15px] bg-white shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)] h-[300px]">
                  <div className="h-1/4 w-full flex flex-row-reverse items-center px-4">
                    <div className="w-[40px] h-[40px] flex justify-center items-center border rounded-full border-black/50">
                      <AiFillHeart
                        fontSize={24}
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
                </div>
                <div className="details mt-4">
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
                  <PurpleButton>Place Bid</PurpleButton>
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
