import { importantLinks } from "@/menuItems/importantLinks";
import Link from "next/link";
import { LuCheckSquare } from "react-icons/lu";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { RxExternalLink } from "react-icons/rx";
const ImportantLinks = () => {
  return (
    <div className="mt-10">
      <h1 className="w-full bg-green text-white  rounded-sm px-3 pt-1 pb-0.5 text-xl mb-3 text-center">
        অভ্যন্তরীণ ই-সেবাসমূহ
      </h1>
      <div className="space-y-2 mt-10 pl-1">
        {importantLinks.map((link, index) => (
          <div key={index} className="flex items-center gap-2">
            <RxExternalLink className="text-green" />{" "}
            <Link href={link.url} className="hover:text-red transition-colors">
              {link.title}
            </Link>
          </div>
        ))}
      </div>
      <Link
        href={"#"}
        className="border w-fit mx-auto border-gray-300  px-4 pt-1 pb-0.5 mt-5 rounded-md flex justify-center items-center bg-violet-700 group text-white"
      >
        সকল লিংক{" "}
        <MdKeyboardDoubleArrowRight className="text-xl group-hover:ml-2 transition-all duration-300" />
      </Link>
      <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mt-3 px-2 py-4 flex text-xl  items-center gap-2 rounded-md bg-violet-50 border border-gray-300">
        <LuCheckSquare className="text-green" />
        <Link href={"#"} className="hover:text-red transition-colors">
          কেন্দ্রীয় ই-সেবা
        </Link>
      </div>
    </div>
  );
};

export default ImportantLinks;
