import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";
import Top from "./Top";

const Header = () => {
  return (
    <header className="mb-5">
      <Top />
      <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
        <div className="container mx-auto px-1  flex justify-between items-center ">
          <Link href="/">
            <Image src="/images/logo.png" alt="logo" width={100} height={100} />
          </Link>
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
