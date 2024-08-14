"use client";
// Import the useRouter hook
import { useState } from "react";
import { MdOutlineLanguage } from "react-icons/md";

const LanguageSwitcher = () => {
  const [lang, setLang] = useState("bn");

  const handleLocales = () => {
    if (lang === "bn") {
      setLang("en");
    } else {
      setLang("bn");
    }
  };

  return (
    <div>
      <button
        className="flex items-center gap-1  w-20 text-sm"
        onClick={handleLocales}
      >
        <MdOutlineLanguage />
        {lang === "bn" ? "English" : "বাংলা"}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
