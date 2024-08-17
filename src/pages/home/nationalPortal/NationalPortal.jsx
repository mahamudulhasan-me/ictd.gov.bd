import Image from "next/image";
import "react-tabs/style/react-tabs.css";
import PortalBannerSlider from "./PortalBannerSlider";
import PortalTabs from "./PortalTabs";
const NationalPortal = () => {
  return (
    <div className=" container mx-auto md:px-1 px-2   my-20">
      <h1 className="text-2xl w-full text-center font-bold text-slate-900 mb-4 flex items-center justify-center  ">
        <Image
          src={"/images/icons/web-portal.png"}
          width={36}
          height={24}
          alt="into icon"
        />
        বাংলাদেশ জাতীয় তথ্য বাতায়ন
      </h1>
      <div className="md:grid grid-cols-2 mt-8  gap-8 items-stretch">
        <PortalBannerSlider />
        <PortalTabs />
      </div>
    </div>
  );
};

export default NationalPortal;
