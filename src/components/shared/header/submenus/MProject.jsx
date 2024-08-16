import Link from "next/link";

const MProject = () => {
  return (
    <div className="flex justify-between items-start min-w-[20rem] gap-2">
      <div className="w-full">
        <h2 className="text-lg border-b">উন্নয়ন প্রকল্পসমূহ</h2>
        <div className="flex flex-col mt-5 gap-y-1">
          <Link href="#" className="subMenuItem">
            চলমান প্রকল্প
          </Link>
          <Link href="#" className="subMenuItem">
            ক্রয় পরিকল্পনা
          </Link>
          <Link href="#" className="subMenuItem">
            সমাপ্ত প্রকল্পসমূহ
          </Link>
        </div>
      </div>

      <div className="w-full">
        <h2 className="text-lg border-b">কর্মসূচিসমূহ</h2>
        <div className="flex flex-col mt-5 gap-y-1">
          <Link href="#" className="subMenuItem">
            সমাপ্ত কর্মসূচিসমূহ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MProject;
