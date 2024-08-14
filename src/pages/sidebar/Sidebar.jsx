import HonorablePersonCard from "./honorablePerson/HonorablePerson";

const Sidebar = () => {
  return (
    <div className="col-span-3 mt-10 ml-12 space-y-4">
      <HonorablePersonCard
        img={"/images/honorablePerson/HonorableAdviser.jpg"}
        designation="মাননীয় উপদেষ্টা"
        name={"জনাব মোঃ নাহিদ ইসলাম"}
      />
      <HonorablePersonCard
        img={"/images/honorablePerson/HonorableSecretary.jpg"}
        designation="সচিব"
        name="জনাব মোঃ সামসুল আরেফিন"
      />
    </div>
  );
};

export default Sidebar;
