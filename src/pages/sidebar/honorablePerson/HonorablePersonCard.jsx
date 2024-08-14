import Image from "next/image";
import Link from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const HonorablePersonCard = ({ img, designation, name, profileLink }) => {
  return (
    <div className="flex flex-col items-center gap-2.5">
      <Image src={img} width={160} height={150} alt="" />
      <div className="text-center">
        <h3 className="text-lg ">{name}</h3>
        <h1 className="text-xl font-semibold">{designation}</h1>
      </div>
      <Link
        href={profileLink || "#"}
        className="border border-gray-300 w-fit px-4 pt-1 pb-0.5 rounded-md flex justify-center items-center bg-violet-700 group text-white"
      >
        বিস্তারিত জানুন{" "}
        <MdKeyboardDoubleArrowRight className="text-xl group-hover:ml-2 transition-all duration-300" />
      </Link>
    </div>
  );
};

export default HonorablePersonCard;
