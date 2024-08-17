import Image from "next/image";
import Link from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const AboutCard = ({ img, title }) => {
  return (
    <div className="flex gap-5 justify-center items-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-4 rounded-md w-full bg-white transition-shadow duration-300 hover:shadow-[rgba(0,0,0,0.35)_0px_5px_15px]">
      <div>
        <Image src={img} alt={title} width={70} height={70} />
      </div>
      <div>
        <h2 className="text-xl">{title}</h2>
        <Link
          href="#"
          className="text-sm w-fit flex items-center text-violet-700 group"
        >
          বিস্তারিত{" "}
          <MdKeyboardDoubleArrowRight className="group-hover:ml-2 transition-all duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default AboutCard;
