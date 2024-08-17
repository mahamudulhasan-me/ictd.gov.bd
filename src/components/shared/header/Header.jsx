"use client";
import Image from "next/image";
import Link from "next/link";
import Headroom from "react-headroom";
import Nav from "./Nav";
import ResponsiveNav from "./ResponsiveNav";
import Top from "./Top";

const Header = () => {
  return (
    <header className="mb-5">
      <Top />
      {/* main  navbar header */}
      <Headroom>
        <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] z-[999999] bg-white">
          <div className="container mx-auto md:px-1 px-2  flex justify-between items-center ">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={100}
                height={100}
              />
            </Link>
            <Nav />
            <ResponsiveNav />
          </div>
        </div>
      </Headroom>
    </header>
  );
};

export default Header;
