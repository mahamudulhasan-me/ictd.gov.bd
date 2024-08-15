import Link from "next/link";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { SiFacebook } from "react-icons/si";

const SocialMedia = () => {
  return (
    <>
      <h1 className="w-full bg-green text-white rounded-sm px-3 pt-1 pb-0.5 text-xl mt-10 mb-8 text-center">
        সামাজিক যোগাযোগ
      </h1>
      <div className="w-full flex justify-start gap-5 items-center text-2xl px-4">
        <Link href="#">
          <SiFacebook color="#1877F2" />
        </Link>
        <Link href="#">
          <FaTwitter color="#1DA1F2" />
        </Link>
        <Link href="#">
          <FaYoutube color="#FF0000" />
        </Link>
        <Link href="#">
          <GiWorld color="#0077BE" />
        </Link>
      </div>
    </>
  );
};

export default SocialMedia;
