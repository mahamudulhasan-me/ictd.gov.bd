import TabServiceCard from "./TabServiceCard";

const services = [
  {
    title: "অর্থ ও বাণিজ্য",
    img: "/images/icons/portal/business.png",
    url: "/services/finance",
  },

  {
    title: "শিক্ষা-বিষয়ক",
    img: "/images/icons/portal/apply_education.png",
    url: "/services/education",
  },

  {
    title: "কৃষিনিয়োগ সংক্রান্ত",
    img: "/images/icons/portal/agriculture.png",
    url: "/services/agriculture-investment",
  },
  {
    title: "পাসপোর্ট",
    img: "/images/icons/portal/passport_visa.png",
    url: "/services/passport",
  },
  {
    title: "ভিসা ও ইমিগ্রেশন",
    img: "/images/icons/portal/passport_visa.png",
    url: "/services/visa-immigration",
  },

  {
    title: "প্রশিক্ষণ",
    img: "/images/icons/portal/training_1.png.png",
    url: "/services/training",
  },
  {
    title: " আপনার জিজ্ঞাসা",
    img: "/images/icons/portal/your_question.png",
    url: "/services/training",
  },

  {
    title: "আয়কর",
    img: "/images/icons/portal/tin.png",
    url: "/services/training",
  },

  {
    title: "ফরমস",
    img: "/images/icons/portal/invoice_forms.png",
    url: "/services/training",
  },

  {
    title: "স্বাস্থ্য বিষয়ক",
    img: "/images/icons/portal/health.png",
    url: "/services/training",
  },
  {
    title: "জন্ম নিবন্ধন",
    img: "/images/icons/portal/birth_certificate.png",
    url: "/services/training",
  },
];

const OfficeServices = () => {
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

export default OfficeServices;
