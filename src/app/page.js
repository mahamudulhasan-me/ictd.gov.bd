import AboutUs from "@/pages/home/about/AboutUs";
import AnotherMinistryMarquee from "@/pages/home/anotherMinistryMarquee/AnotherMinistryMarquee";
import Banner from "@/pages/home/banner/Banner";
import NoticeBoard from "@/pages/home/noticeBoard/NoticeBoard";
import NoticeMarquee from "@/pages/home/noticeMarquee/NoticeMarquee";
import CitizenCharter from "@/pages/home/services/CitizenCharter";
import CitizenEServices from "@/pages/home/services/CitizeneServices";
import NoticeOrderCircular from "@/pages/home/services/NoticeOrderCircular";
import PoliciesAndPublications from "@/pages/home/services/PoliciesAndPublications";
import EmbeddedVideo from "@/pages/home/video/EmbeddedVideo";
import AwarenessCard from "@/pages/sidebar/awernessCard/AwarnessCard";
import HonorablePerson from "@/pages/sidebar/honorablePerson/HonorablePerson";
import Hotline from "@/pages/sidebar/Hotline";
import ImportantLinks from "@/pages/sidebar/InternaleServices/ImportantLinks";
import InternaleServices from "@/pages/sidebar/InternaleServices/InternaleServices";

const page = () => {
  return (
    <div>
      <Banner />
      <NoticeMarquee />
      <div className="container mx-auto px-1 grid grid-cols-12 items-start">
        <NoticeBoard />
        <HonorablePerson />
      </div>
      <AboutUs />

      <div className="container mx-auto px-1 grid grid-cols-12 my-10">
        <div className="col-span-9 ">
          <h1 className="text-2xl w-full text-center  text-white mb-4 flex items-center justify-center  gap-1 bg-green rounded-sm pt-0.5">
            সকল সেবা সমূহ{" "}
          </h1>
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 mt-10">
            <NoticeOrderCircular />
            <PoliciesAndPublications />
            <CitizenEServices />
            <CitizenCharter />
          </div>
        </div>
        <div className="col-span-3  ml-12">
          <InternaleServices />
          <ImportantLinks />
        </div>
      </div>
      <AnotherMinistryMarquee />
      <div className="container mx-auto px-1 grid grid-cols-12 my-10">
        <div className="col-span-9 ">
          <h1 className="text-2xl w-full text-center  text-white mb-4 flex items-center justify-center  gap-1 bg-green rounded-sm pt-0.5">
            সেবা সমূহ{" "}
          </h1>
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 mt-10">
            <NoticeOrderCircular />
            <PoliciesAndPublications />
            <CitizenEServices />
            <CitizenCharter />
          </div>
        </div>
        <div className="col-span-3  ml-12">
          <Hotline />
        </div>
      </div>
      <div className="container mx-auto px-1 grid grid-cols-12 my-10">
        <div className="col-span-9 ">
          <h1 className="text-2xl w-full text-center  text-white mb-4 flex items-center justify-center  gap-1 bg-green rounded-sm pt-0.5">
            সচেতনতা ভিডিও
          </h1>
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 mt-10">
            <EmbeddedVideo />
            <EmbeddedVideo />
          </div>
        </div>
        <div className="col-span-3  ml-12">
          <AwarenessCard />
        </div>
      </div>
    </div>
  );
};

export default page;
