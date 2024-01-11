import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full p-5 md:p-14">
      <div className="newsletter border border-none md:border-solid md:border-[#333333] rounded-none flex justify-start md:justify-center mb-12 p-0 md:p-16">
        <div className="flex flex-col items-start md:items-center gap-6">
          <div className="title font-bakersville text-[24px] md:text-[30px] text-artsy-black uppercase">
            NewsLetter
          </div>
          <div className="description font-satoshi text-[11px] lg:text-base md:text-[20px] font-normal text-artsy-black uppercase mb-[25px]">
            Subscribe to get daily updates on new drops & exciting deals{" "}
          </div>
          <div className="w-full input-component flex flex-col md:flex-row justify-start lg:justify-center items-start lg:items-center gap-[20px]">
            <input
              placeholder="Enter your Email"
              type="text"
              className="h-[60px] w-full lg:w-[300px] border border-solid border-[#333333] rounded-none font-satoshi px-4 focus:outline-artsy-black placeholder:font-bakersville"
            />
            <button className="h-[60px] w-[160px] bg-artsy-black text-white flex justify-center items-center font-bakersville text-base ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="footer grid grid-cols-1 md:grid-cols-4 mb-6">
        <div className="logo hidden md:block">
          <div className="w-full h-full justify-center items-center flex text-[#292929] font-artsy font-semibold text-[40px]">
            ARTSY.
          </div>
        </div>
        <div className="menu-links hidden md:block">
          <div className="list flex flex-col gap-[24px] font-satoshi font-normal text-[22px] text-artsy-black">
            <Link href="#">Home</Link>
            <Link href="#">Marketplace</Link>
            <Link href="#">Auctions</Link>
            <Link href="#">Drops</Link>
          </div>
        </div>
        <div className="menu-links hidden md:block">
          <div className="list flex flex-col gap-[24px] font-satoshi font-normal text-[22px] text-artsy-black">
            <Link href="#">Blog</Link>
            <Link href="#">Wallets</Link>
            <Link href="#">Rates</Link>
            <Link href="#">High bids</Link>
          </div>
        </div>
        <div className="contact-links">
          <div className="list flex flex-col gap-[24px] font-satoshi font-normal text-[12px] lg:text-[22px] text-artsy-black">
            <div className="flex gap-5 items-center">
              <div></div>
              <div>artsystudios@gmail.com</div>
            </div>
            <div className="flex gap-5 items-center">
              <div></div>
              <div> Lagos, Nigeria.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright w-full flex justify-center font-rubik text-artsy-black opacity-50 font-medium text-[16px] md:text-[20px] mt-[60px]">
        Artsystudios © 2022. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
