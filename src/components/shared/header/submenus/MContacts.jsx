import Link from "next/link";

const MContacts = () => {
  return (
    <div className="flex justify-between items-start min-w-[20rem] gap-2">
      <div className="w-full">
        <h2 className="text-lg border-b">যোগাযোগ</h2>
        <div className="flex flex-col mt-5 gap-y-1">
          <Link href="#" className="subMenuItem">
            অফিসের ঠিকানা
          </Link>
        </div>
      </div>

      <div className="w-full">
        <h2 className="text-lg border-b">মতামত</h2>
        <div className="flex flex-col mt-5 gap-y-1">
          <Link href="#" className="subMenuItem">
            আপনার জিজ্ঞাসা ও মতামত
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MContacts;
