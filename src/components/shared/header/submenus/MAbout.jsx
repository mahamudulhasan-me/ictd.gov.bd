import Link from "next/link";

const MAbout = () => {
  return (
    <div className="flex justify-between items-start min-w-[60rem] gap-2">
      <div className="w-full">
        <h2 className="text-lg border-b">বিভাগ পরিচিতি</h2>
        <div className="flex flex-col mt-5 gap-y-1">
          <Link href="#" className="subMenuItem">
            ইতিহাস ও কার্যাবলি
          </Link>
          <Link href="#" className="subMenuItem">
            ভিশন ও মিশন
          </Link>
          <Link href="#" className="subMenuItem">
            মাননীয় উপদেষ্টা
          </Link>
          <Link href="#" className="subMenuItem">
            ইতিহাস ও কার্যাবলি
          </Link>
          <Link href="#" className="subMenuItem">
            ভিশন ও মিশন
          </Link>
          <Link href="#" className="subMenuItem">
            মাননীয় উপদেষ্টা
          </Link>
        </div>
      </div>

      <div className="w-full">
        <h2 className="text-lg border-b">জনবল</h2>
        <div className="flex flex-col mt-5 gap-y-1">
          <Link href="#" className="subMenuItem">
            প্রাক্তন মন্ত্রীগণের তালিকা
          </Link>
          <Link href="#" className="subMenuItem">
            সচিব
          </Link>
          <Link href="#" className="subMenuItem">
            প্রাক্তন সচিবগণের তালিকা
          </Link>
        </div>
      </div>

      <div className="w-full">
        <h2 className="text-lg border-b">বিভাগের সেবাসমূহ</h2>
        <div className="flex flex-col mt-5 gap-y-1">
          <Link href="#" className="subMenuItem">
            সেবা প্রদান প্রতিশ্রুতি
          </Link>
          <Link href="#" className="subMenuItem">
            নাগরিক ই-সেবাসমূহের তালিকা
          </Link>
        </div>
      </div>

      <div className="w-full">
        <h2 className="text-lg border-b">মন্ত্রণালয়/বিভাগের কমিটিসমূহ</h2>
        <div className="flex flex-col mt-5 gap-y-1">
          <Link href="#" className="subMenuItem">
            মাননীয় প্রধানমন্ত্রী এবং মাননীয় মন্ত্রীর সভাপতিত্বে মন্ত্রণালয়/বিভাগ
            সম্পর্কিত কমিটিসমূহ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MAbout;
