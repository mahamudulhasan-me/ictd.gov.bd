const OfficeTypeSelector = () => {
  return (
    <div className="flex items-center">
      <select className="text-black p-1 outline-none rounded-l">
        <option value="">অফিসের ধরণ</option>
        <option value="">মন্ত্রণালয়/বিভাগ</option>
        <option value="">অধিদপ্তর বাতায়ন</option>
        <option value="">বিভাগীয় বাতায়ন</option>
        <option value="">জেলা বাতায়ন</option>
        <option value="">উপজেলা বাতায়ন</option>
        <option value="">ইউনিয়ন বাতায়ন</option>
        <option value="">অন্যান্য</option>
      </select>
      <button className="bg-green text-white px-3  py-[0.048rem] font-semibold rounded-r">
        Go
      </button>
    </div>
  );
};

export default OfficeTypeSelector;
