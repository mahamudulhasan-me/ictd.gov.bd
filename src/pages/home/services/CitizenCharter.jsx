import ServiceCard from "@/components/ui/ServiceCard";
import { citizensCharter } from "@/menuItems/citizensCharterMenu";

const CitizenCharter = () => {
  return (
    <>
      <ServiceCard
        title={"সেবা প্রদান প্রতিশ্রুতি (সিটিজেন্‌স চার্টার)"}
        menus={citizensCharter}
      />
    </>
  );
};

export default CitizenCharter;
