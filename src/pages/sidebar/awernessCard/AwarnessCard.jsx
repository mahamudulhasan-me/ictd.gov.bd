import Image from "next/image";
import Link from "next/link";

const AwarenessCard = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="w-full bg-green text-white  rounded-sm px-3 pt-1 pb-0.5 text-xl mb-3 text-center">
        ডেঙ্গু প্রতিরোধে করণীয়
      </h1>
      <Link href={"#"} className="mt-8">
        <Image src={"/images/banner/dengu.jpg"} width={300} height={600} />
      </Link>
    </div>
  );
};

export default AwarenessCard;
