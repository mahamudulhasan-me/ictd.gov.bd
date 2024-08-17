import Image from "next/image";
import AboutCard from "./AboutCard";

const AboutUs = () => {
  return (
    <div className="container mx-auto md:px-1 px-2 my-10 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-4 rounded-md bg-gradient-to-tr from-gray-200/40 to-gray-50/40">
      <h1 className="text-2xl w-full text-center font-bold text-slate-900 mb-4 flex items-center justify-center  ">
        <Image
          src={"/images/icons/info.png"}
          width={24}
          height={24}
          alt="into icon"
        />
        আমাদের বিষয়ে{" "}
      </h1>
      <div className="md:flex justify-evenly items-center gap-8 mt-6 mb-4 space-y-4 md:space-y-0 px-8">
        <AboutCard img={"/images/icons/goal.png"} title="ভিশন ও মিশন" />
        <AboutCard
          img={"/images/icons/hierarchical.png"}
          title="সাংগঠনিক কাঠামো"
        />
        <AboutCard img={"/images/icons/staff.png"} title="কর্মকর্তা/কর্মচারী" />
        <AboutCard img={"/images/icons/distributed.png"} title="কর্মবন্টন" />
      </div>
    </div>
  );
};

export default AboutUs;
