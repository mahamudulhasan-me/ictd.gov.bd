import Image from "next/image";

const Banner = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: "url('/images/banner/dottedMap.jpg')" }}
        className="md:h-[40vh] h-[30vh] container mx-auto md:px-[10%] px-2 bg-repeat bg-cover bg-blend-overlay flex items-center bg-white/90 md:gap-8 gap-1"
      >
        <div>
          <Image
            src={"/images/bdMinLogo.png"}
            alt="Bangladesh Ministry Logo"
            width={160}
            height={160}
            className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[160px] md:h-[160px]"
          />
        </div>
        <div className="md:space-y-3 space-y-2">
          <h1 className="md:text-3xl text-xl font-semibold">
            তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ
          </h1>
          <h2 className="md:text-xl">গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
