"use client";
import Link from "next/link";
import { useState } from "react";
import MAbout from "./submenus/MAbout";
import MContacts from "./submenus/MContacts";
import MProject from "./submenus/MProject";
const eServiceSubmenuItems = [
  "ইনোভেশন ইনফরমেশন সিস্টেম ম্যানেজমেন্ট",
  "নৈমিত্তিক ছুটি ব্যবস্থাপনা",
  "স্মার্ট ড্যাশবোর্ড",
  "ফ্রিল্যান্সার আইডি",
  "ফেলোশিপ ও বৃত্তি এবং ইনোভেশন ফান্ড এর আবেদন",
  "ই-নথি",
  "ওয়েব মেইল",
  "অনলাইনে বেতন দাখিল",
  "ই-টেন্ডারিং(e-GP)",
  "আমার সরকার",
  "GRP",
  "প্রকল্প মনিটরিং সিস্টেম",
  "অনলাইন এসিআর দাখিল",
  "অনলাইন নিয়োগ পোর্টাল",
  "ইমপোরিয়া",
];
const Nav = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const menuItems = [
    {
      label: "আমাদের সম্পর্কিত",
      color: "orange",
      content: <MAbout />,
    },
    {
      label: "অধীনস্থ দপ্তর/অফিস/সংস্থা",
      color: "rose",
      content: (
        <div
          className="flex items-center justify-center  gap-y-1 
        w-[18rem] "
        >
          <Link href="#" className="subMenuItem text-lg">
            ফটো গ্যালারি
          </Link>
        </div>
      ),
    },
    {
      label: "প্রকল্প/কর্মসূচি",
      color: "cyan",
      content: <MProject />,
    },
    {
      label: "গ্যালারি",
      color: "violet",
      content: (
        <div className="flex items-center justify-between  gap-y-1 w-[14rem]">
          <Link href="#" className="subMenuItem">
            ফটো গ্যালারি
          </Link>
          <Link href="#" className="subMenuItem">
            ভিডিও গ্যালারি
          </Link>
        </div>
      ),
    },

    {
      label: "আইন/নীতিমালা",
      color: "amber",
      content: (
        <div className="flex flex-col items-start justify-between  gap-y-1 w-[14rem]">
          <Link href="#" className="subMenuItem">
            আইন ও বিধি
          </Link>
          <Link href="#" className="subMenuItem">
            নীতিমালা
          </Link>
          <Link href="#" className="subMenuItem">
            নির্দেশিকা ও কৌশলপত্র
          </Link>
          <Link href="#" className="subMenuItem">
            খসড়া আইন, বিধি এবং নীতিমালা
          </Link>
        </div>
      ),
    },
    {
      label: "ই-সেবা",
      color: "lime",
      content: (
        <div className="flex flex-col items-start justify-between gap-y-1 w-[14rem]">
          {eServiceSubmenuItems.map((item, index) => (
            <Link key={index} href="#" className="subMenuItem">
              {item}
            </Link>
          ))}
        </div>
      ),
    },
    {
      label: "যোগাযোগ ও মতামত",
      color: "blue",
      content: <MContacts />,
    },
  ];

  return (
    <div className="hidden md:flex divide-x">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="relative"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <h4
            className={`navItem ${
              hoveredIndex === index
                ? ` bg-purple-700 text-white`
                : `text-${item.color}-600`
            }`}
          >
            {item.label}
          </h4>

          {hoveredIndex === index && item.content && (
            <div
              className={`absolute top-10 z-50 -left-20 border rounded-md subMenuBG border-t-8 border-t-purple-700 border-slate-300 p-4`}
            >
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Nav;
