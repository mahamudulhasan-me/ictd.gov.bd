import Image from "next/image";
import Link from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const AboutCard = ({ img, title }) => {
  return (
    <div className="flex gap-5 justify-center items-center gap shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-4 rounded-md w-full bg-white z-20">
      <>
        <div className="">
          <Image src={img} alt="flag" width={70} height={200} />
        </div>
      </>
      <div>
        <h2 className="text-xl">{title}</h2>
        <Link
          href={"#"}
          className=" text-sm w-fit flex justify-start items-center text-violet-700 group "
        >
          বিস্তারিত{" "}
          <MdKeyboardDoubleArrowRight className=" group-hover:ml-2 transition-all duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default AboutCard;
