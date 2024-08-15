import ServiceCard from "@/components/ui/ServiceCard";
import { nationalIntegrityStrategy } from "@/menuItems/nationalIntegrityStrategyMenu";

const NationalIntegrityStrategy = () => {
  return (
    <>
      <ServiceCard
        title={"জাতীয় শুদ্ধাচার কৌশল"}
        menus={nationalIntegrityStrategy}
        img={"/images/services/nis_logo3.png"}
      />
    </>
  );
};

export default NationalIntegrityStrategy;
