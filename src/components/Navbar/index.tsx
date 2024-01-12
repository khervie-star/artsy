import { SearchIcon, CartIcon, NotificationIcon } from "@/assets/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <div>
      <header>
        <div className="w-full flex justify-between items-center px-6 md:px-[120px] py-[40px]">
          <div className="block md:hidden">
            <AiOutlineMenu fontSize={28} />
          </div>
          <Link
            href="/"
            className="logo font-bold font-artsy text-[32px] text-[#292929]">
            ARTSY.
          </Link>
          <div className="gap-16 items-center text-[24px] text-[#292929] font-satoshi hidden md:flex">
            <Link href="/" className="">
              Home
            </Link>
            <Link href="/" className="">
              Marketplace
            </Link>
            <Link
              href="/auctions"
              className={`${
                router.pathname == "/auctions" &&
                "border-artsy-black border-b-2 border-solid"
              }`}>
              Auctions
            </Link>
            <Link
              href="/drops"
              className={`${
                router.pathname == "/drops" &&
                "border-artsy-black border-b-2 border-solid"
              }`}>
              Drop
            </Link>
          </div>
          <div className="flex gap-2 items-center">
            <div>
              <SearchIcon />
            </div>
            <div>
              <CartIcon />
            </div>
            <div className="hidden md:block">
              <NotificationIcon />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
