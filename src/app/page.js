import AboutUs from "@/pages/home/about/AboutUs";
import AnotherMinistryMarquee from "@/pages/home/anotherMinistryMarquee/AnotherMinistryMarquee";
import Banner from "@/pages/home/banner/Banner";
import NoticeBoard from "@/pages/home/noticeBoard/NoticeBoard";
import NoticeMarquee from "@/pages/home/noticeMarquee/NoticeMarquee";
import NoticeOrderCircular from "@/pages/home/noticeOrderCircular/NoticeOrderCircular";
import PoliciesAndPublications from "@/pages/home/policies&Publications/PoliciesAndPublications";
import HonorablePerson from "@/pages/sidebar/honorablePerson/HonorablePerson";

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
        <div className="col-span-9 grid grid-cols-2 gap-6">
          <NoticeOrderCircular />
          <PoliciesAndPublications />
          <PoliciesAndPublications />
          <PoliciesAndPublications />
        </div>
        <div className="col-span-3">side bar</div>
      </div>
      <AnotherMinistryMarquee />
    </div>
  );
};

export default page;
