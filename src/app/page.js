import Banner from "@/pages/home/banner/Banner";
import NoticeBoard from "@/pages/home/noticeBoard/NoticeBoard";
import NoticeMarquee from "@/pages/home/noticeMarquee/NoticeMarquee";
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
    </div>
  );
};

export default page;
