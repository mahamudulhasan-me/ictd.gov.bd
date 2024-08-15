import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="md:-mt-5 mt-5 w-full b ">
      <Image
        alt="footer"
        src="/images/banner/footer_top_bg.png"
        width={1920}
        height={100}
        className="md:w-[1920px] md:h-[100px]  w-[500px] h-[50px] "
      />
      <div className="w-full py-6 bg-violet-100">
        <div className="container mx-auto md:px-1 px-2 md:grid grid-cols-12 md:gap-20 space-y-4 md:space-y-0">
          <div className="col-span-4">
            <Image
              src={"/images/logo.png"}
              width={150}
              height={100}
              alt="logo"
            />
            <p className="text-sm text-justify text-gray-800">
              তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ, গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের
              একটি অনন্য প্রতিষ্ঠান, ডিজিটাল বাংলাদেশ গড়ার লক্ষ্যে প্রযুক্তি এবং
              সৃজনশীলতার মেলবন্ধনে এগিয়ে চলছে। দেশের তথ্যপ্রযুক্তি খাতকে উন্নত
              এবং বিশ্বমানের করার প্রতিশ্রুতি নিয়ে, আমরা ভবিষ্যৎ প্রজন্মের জন্য
              সম্ভাবনার নতুন দিগন্ত উন্মোচন করছি।
            </p>
          </div>
          <div className="col-span-5 flex justify-evenly items-center gap-20">
            <div>
              <p className="md:text-lg w-fit border-dashed border-b border-slate-400">
                প্রয়োজনীয় লিংক:
              </p>
              <div className="flex flex-col items-start gap-2 text-sm mt-4">
                <Link
                  href={"#"}
                  className="hover:text-red transition-colors flex items-center gap-1"
                >
                  <MdKeyboardArrowRight className="text-green text-lg" />{" "}
                  সাইটম্যাপ{" "}
                </Link>
                <Link
                  href={"#"}
                  className="hover:text-red transition-colors flex items-center gap-1"
                >
                  <MdKeyboardArrowRight className="text-green text-lg" />{" "}
                  গোপনীয়তার নীতিমালা
                </Link>
                <Link
                  href={"#"}
                  className="hover:text-red transition-colors flex items-center gap-1"
                >
                  <MdKeyboardArrowRight className="text-green text-lg" />{" "}
                  যোগাযোগ
                </Link>
                <Link
                  href={"#"}
                  className="hover:text-red transition-colors flex items-center gap-1"
                >
                  <MdKeyboardArrowRight className="text-green text-lg" /> সচরাচর
                  জিজ্ঞাসা
                </Link>
                <Link
                  href={"#"}
                  className="hover:text-red transition-colors flex items-center gap-1"
                >
                  <MdKeyboardArrowRight className="text-green text-lg" />{" "}
                  ব্যবহারের শর্তাবলি
                </Link>
              </div>
            </div>
            <div>
              <p className="md:text-lg w-fit border-dashed border-b border-slate-400 flex items-center gap-1">
                পরিকল্পনা ও বাস্তবায়নে:
              </p>
              <div className="flex flex-col items-start gap-2 text-sm mt-4">
                <Link
                  href={"#"}
                  className="hover:text-red transition-colors flex items-center gap-1"
                >
                  <MdKeyboardArrowRight className="text-green text-lg" />{" "}
                  মন্ত্রিপরিষদ বিভাগ
                </Link>
                <Link
                  href={"#"}
                  className="hover:text-red transition-colors flex items-center gap-1"
                >
                  <MdKeyboardArrowRight className="text-green text-lg" /> এটুআই
                </Link>
                <Link
                  href={"#"}
                  className="hover:text-red transition-colors flex items-center gap-1"
                >
                  <MdKeyboardArrowRight className="text-green text-lg" /> বিসিসি
                </Link>
                <Link
                  href={"#"}
                  className="hover:text-red transition-colors flex items-center gap-1"
                >
                  <MdKeyboardArrowRight className="text-green text-lg" />{" "}
                  ডিওআইসিটি
                </Link>
                <Link
                  href={"#"}
                  className="hover:text-red transition-colors flex items-center gap-1"
                >
                  <MdKeyboardArrowRight className="text-green text-lg" /> বেসিস
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-3 h-full flex flex-col justify-center">
            <div className="flex flex-col items-center gap-2 text-xl justify-end">
              <p className="md:ext-lg w-fit border-dashed border-b border-slate-400">
                কারিগরি সহায়তায়:
              </p>

              <Image src={"/images/np-logo-set.png"} width={300} height={100} />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-400 bg-violet-50 text-center py-2 text-xs">
        কপিরাইট &copy; ২০২৪ সর্বস্বত্ব সংরক্ষিত গণপ্রজাতন্ত্রী বাংলাদেশ সরকার
      </div>
    </footer>
  );
};

export default Footer;
