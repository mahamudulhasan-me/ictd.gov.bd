import { notices } from "@/menuItems/notices";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const NoticeMarquee = () => {
  return (
    <div className="container mx-auto w-full  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] flex items-center overflow-hidden rounded-sm">
      <div className="flex items-center gap-2 min-w-fit  md:px-4 px-1 md:py-3 py-5 bg-gray-200">
        <h2 className="md:text-2xl"> সর্বশেষ খবর</h2>
        <Image
          src={"/images/icons/announcement.png"}
          alt="announcement icon"
          width={48}
          height={48}
          className="w-[32px] h-[32px] md:w-[48px] md:h-[48px]"
        />
      </div>
      <div className=" bg-gray-100 py-5 text-black">
        <Marquee pauseOnHover speed={80}>
          <>
            {notices.map((notice, index) => (
              <p key={index} className="md:text-xl ml-5 flex items-center ">
                <MdKeyboardDoubleArrowRight color="ff0000" size={32} />
                <Link href={"#"} className="hover:text-red transition-colors">
                  {notice.title}
                </Link>
              </p>
            ))}
          </>
        </Marquee>
      </div>
    </div>
  );
};

export default NoticeMarquee;
