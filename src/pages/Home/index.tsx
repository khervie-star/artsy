/* eslint-disable @next/next/no-img-element */
import { featuredProducts } from "@/Lib/data";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <div className="w-full lg:w-[75%] mx-auto mb-[40px] lg:mb-[75px] px-[20px] lg:px-10">
        <h6 className="text-[30px] lg:text-[80px] leading-[45px] lg:leading-[160%] font-semibold font-artsy text-[#292929] text-center mb-[48px]">
          Photography is poetry & beautiful untold stories
        </h6>
        <p className="font-medium font-satoshi text-[#292929] text-base lg:text-[24px] text-center w-full lg:w-[75%] mx-auto">
          Flip through more than 10,000 vintage shots, old photograghs, historic
          images and captures seamlessly in one place. Register to get top
          access.
        </p>
      </div>
      <div className="image-slider w-full flex"></div>
      <div className="featured-products my-[40px] px-3 lg:px-[100px]">
        <h6 className="text-artsy-black font-satoshi text-[28px] lg:text-[48px] font-bold lg:font-medium mb-[20px] lg:mb-[35px]">
          Featured products
        </h6>
        <div className="divide-y">
          {featuredProducts.map((product, i) => (
            <div
              className={`w-full flex lg:my-20 my-4 flex-col ${
                product.id % 2 == 0 ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-start gap-6`}
              key={product.id}>
              <div className="w-full lg:w-7/12">
                <img
                  src={product.image.src}
                  className="w-full h-[255px] lg:h-auto object-cover lg:rounded-md"
                  alt=""
                />
              </div>
              <div className="w-full lg:w-5/12">
                <h6 className="font-bold text-artsy-black font-artsy text-[32px] mb-[38px] hidden lg:block">
                  {product.name}
                </h6>
                <p className="font-normal text-[#616161] lg:text-artsy-black font-satoshi text-[15px] lg:text-[20px] mb-[38px]">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
