import ServiceCard from "@/components/ui/ServiceCard";
import { citizenEServices } from "@/menuItems/Citizene-ServicesMenu";

const CitizenEServices = () => {
  return (
    <>
      <ServiceCard
        title={"নাগরিক ই-সেবাসমূহ"}
        img={"/images/services/citizenEService.png"}
        menus={citizenEServices}
      />
    </>
  );
};

export default CitizenEServices;
