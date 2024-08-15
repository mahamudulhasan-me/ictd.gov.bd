import ServiceCard from "@/components/ui/ServiceCard";
import { noticeOrderCircularMenu } from "@/menuItems/noticeOrderCircularMenu";

const NoticeOrderCircular = () => {
  return (
    <div>
      <ServiceCard
        title={"বিজ্ঞপ্তি/আদেশ/পরিপত্র"}
        menus={noticeOrderCircularMenu}
        img={"/images/services/FinalLogoSDG.png"}
      />
    </div>
  );
};

export default NoticeOrderCircular;
