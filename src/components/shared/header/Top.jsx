import LanguageSwitcher from "./LanguageSwitcher";
import OfficeTypeSelector from "./OfficeTypeSelector";
import Search from "./Search";

const Top = () => {
  return (
    <div className=" bg-purple-700 text-white">
      <div className="container  mx-auto p-1 flex justify-between items-center">
        <aside className="flex gap-2 items-center">
          <p className="text-sm hidden md:block">
            বাংলাদেশ জাতীয় তথ্য বাতায়ন
          </p>
          <OfficeTypeSelector />
        </aside>
        <aside className="flex items-center gap-5">
          <Search />
          <LanguageSwitcher />
        </aside>
      </div>
    </div>
  );
};

export default Top;
