import ServiceCard from "@/components/ui/ServiceCard";
import { policiesAndPublications } from "@/menuItems/policiesAndPublications";

const PoliciesAndPublications = () => {
  return (
    <>
      <ServiceCard
        title={"নীতিমালা ও প্রকাশনা"}
        img={"/images/services/POLICY_PUBLICATION-New.png"}
        menus={policiesAndPublications}
      />
    </>
  );
};

export default PoliciesAndPublications;
