import Image from "next/image";

const Banner = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: "url('/images/banner/dottedMap.jpg')" }}
        className="h-[40vh] container mx-auto px-[10%]  bg-repeat bg-cover bg-blend-overlay flex items-center bg-white/90 gap-8"
      >
        <>
          <Image
            src={"/images/bdMinLogo.png"}
            alt="Bangladesh Ministry Logo"
            width={160}
            height={160}
          />
        </>
        <div className="space-y-3">
          <h1 className="text-3xl  font-semibold">
            তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ
          </h1>
          <h2 className="text-xl">গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
