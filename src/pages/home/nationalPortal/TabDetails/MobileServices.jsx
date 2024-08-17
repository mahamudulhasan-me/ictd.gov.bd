import TabServiceCard from "./TabServiceCard";

const services = [
  {
    title: "মোবাইল সেবা",
    img: "/images/icons/portal/mobile_service.png",
    url: "/services/training",
  },
  {
    title: "অনলাইন আবেদন",
    img: "/images/icons/portal/online_application.png",
    url: "/services/online-application",
  },
  {
    title: "শিক্ষা-বিষয়ক",
    img: "/images/icons/portal/apply_education.png",
    url: "/services/education",
  },
  {
    title: "হেল্পডেস্ক",
    img: "/images/icons/portal/helpdesk.png",
    url: "/services/training",
  },

  {
    title: "ভর্তির আবেদন",
    img: "/images/icons/portal/apply_education.png",
    url: "/services/admission",
  },
  {
    title: "ইউটিলিটি বিল",
    img: "/images/icons/portal/utility.png",
    url: "/services/utility-bill",
  },
  {
    title: "পরীক্ষার ফলাফল",
    img: "/images/icons/portal/exam_result.png",
    url: "/services/exam-results",
  },
  {
    title: "তথ্য ভাণ্ডার",
    img: "/images/icons/portal/info_vandar.png",
    url: "/services/database",
  },
];

const MobileSerVices = () => {
  return (
    <div className="flex items-center justify-evenly flex-wrap gap-x-8 gap-y-5 px-4 py-2">
      {services.map((service) => (
        <TabServiceCard
          key={service.title}
          img={service.img}
          title={service.title}
        />
      ))}
    </div>
  );
};

export default MobileSerVices;
