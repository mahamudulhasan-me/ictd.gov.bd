import TabServiceCard from "./TabServiceCard";

const services = [
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
    title: "অনলাইন নিবন্ধন",
    img: "/images/icons/portal/online_application.png",
    url: "/services/online-registration",
  },

  {
    title: "পাসপোর্ট",
    img: "/images/icons/portal/passport_visa.png",
    url: "/services/passport",
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
  {
    title: "প্রশিক্ষণ",
    img: "/images/icons/portal/training_1.png.png",
    url: "/services/training",
  },

  {
    title: "মোবাইল সেবা",
    img: "/images/icons/portal/mobile_service.png",
    url: "/services/training",
  },

  {
    title: "জন্ম নিবন্ধন",
    img: "/images/icons/portal/birth_certificate.png",
    url: "/services/training",
  },
];

const PopularServices = () => {
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

export default PopularServices;
