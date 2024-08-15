import ServiceCard from "@/components/ui/ServiceCard";
import { annualPerformanceManagement } from "@/menuItems/annualPerformanceManagementMenu";

const AnnualPerformanceManagement = () => {
  return (
    <>
      <ServiceCard
        title={"বার্ষিক কর্মসম্পাদন চুক্তি"}
        menus={annualPerformanceManagement}
        img={"/images/services/apa.png"}
      />
    </>
  );
};

export default AnnualPerformanceManagement;
