import { internalServices } from "@/menuItems/internalServicesmenu";
import Link from "next/link";
import { LuCheckSquare } from "react-icons/lu";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
const InternaleServices = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="w-full bg-green text-white  rounded-sm px-3 pt-1 pb-0.5 text-xl mb-3 text-center">
        অভ্যন্তরীণ ই-সেবাসমূহ
      </h1>
      <div className="space-y-2 mt-8 pl-1">
        {internalServices.map((service, index) => (
          <div key={index} className="flex items-center gap-2">
            <LuCheckSquare className="text-green" />{" "}
            <Link
              href={service.url}
              className="hover:text-blue-700 transition-colors"
            >
              {service.title}
            </Link>
          </div>
        ))}
      </div>
      <Link
        href={"#"}
        className="border border-gray-300 w-fit px-4 pt-1 pb-0.5 mt-5 rounded-md flex justify-center items-center bg-violet-700 group text-white"
      >
        সকল লিংক{" "}
        <MdKeyboardDoubleArrowRight className="text-xl group-hover:ml-2 transition-all duration-300" />
      </Link>
      <h1 className="w-full bg-green text-white  rounded-sm px-3 pt-1 pb-0.5 text-xl mb-3 text-center">
        অভ্যন্তরীণ ই-সেবাসমূহ
      </h1>
    </div>
  );
};

export default InternaleServices;
