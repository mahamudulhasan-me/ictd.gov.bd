import Image from "next/image";
import Link from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { RiArrowRightSFill } from "react-icons/ri";
const ServiceCard = ({ img, title, link, menus }) => {
  return (
    <div className="rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[rgba(0,_0,_0,_0.24)_0px_6px_12px] transition-shadow duration-300 ">
      <div
        className="bg-cover bg-center flex items-start justify-center h-[8rem] bg-violet-950/90 bg-blend-overlay text-white rounded-t-md relative"
        style={{ backgroundImage: "url('/images/banner/banner.jpg')" }}
      >
        <h1 className="text-2xl mt-7 text-white">{title}</h1>

        <div
          className="size-24 ring ring-violet-700 bg-white
        rounded-full absolute -bottom-10  overflow-hidden flex justify-center items-center"
        >
          <Image
            src={img || "/images/bdMinLogo.png"}
            alt="flag"
            width={96}
            height={96}
          />
        </div>
      </div>

      <div className="p-6 mt-6">
        {menus?.map((menu, index) => (
          <div key={index} className="flex items-start gap-1 ">
            <RiArrowRightSFill className="text-xl text-green" />
            <Link href={menu.url} className="min-h-7 hover:text-red">
              {menu.title}
            </Link>
          </div>
        ))}
      </div>
      <Link
        href={link || "#"}
        className="text-sm w-full border bg-violet-100 p-1 flex justify-center items-center text-violet-700 group"
      >
        বিস্তারিত
        <MdKeyboardDoubleArrowRight className=" group-hover:ml-2 transition-all duration-300" />
      </Link>
    </div>
  );
};

export default ServiceCard;
