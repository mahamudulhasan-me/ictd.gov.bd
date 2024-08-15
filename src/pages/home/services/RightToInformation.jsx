import ServiceCard from "@/components/ui/ServiceCard";
import { rightToInformation } from "@/menuItems/rightToInformation";

const RightToInformation = () => {
  return (
    <>
      <ServiceCard
        title={"তথ্য অধিকার"}
        menus={rightToInformation}
        img={"/images/services/infocom.png"}
      />
    </>
  );
};

export default RightToInformation;
