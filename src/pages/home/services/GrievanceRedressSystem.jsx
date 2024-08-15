import ServiceCard from "@/components/ui/ServiceCard";
import { grievanceRedressSystem } from "@/menuItems/grievanceRedressSystemMenu";

const GrievanceRedressSystem = () => {
  return (
    <>
      <ServiceCard
        title={"অভিযোগ প্রতিকার ব্যবস্থাপনা"}
        menus={grievanceRedressSystem}
        img={"/images/services/complain.png"}
      />
    </>
  );
};

export default GrievanceRedressSystem;
