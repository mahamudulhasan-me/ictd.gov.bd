"use client";
import AccordionItem from "@/components/ui/AccordionItem";
import { notices } from "@/utils/notices";
import { useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function NoticeBoard() {
  const [openIndex, setOpenIndex] = useState(0); // By default, the first accordion is open

  const handleAccordionClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div
      className="relative font-inter antialiased col-span-9 my-10 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
p-4 rounded-md"
    >
      <main className="relative flex flex-col justify-center overflow-hidden">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 mb-4">
            নোটিশ বোর্ড
          </h1>
          {/* Accordion component */}
          <div className="divide-y divide-gray-300">
            {notices.map((notice, index) => (
              <AccordionItem
                key={index}
                title={notice.title}
                content={notice.description}
                isOpen={openIndex === index}
                onClick={() => handleAccordionClick(index)}
              />
            ))}
          </div>
          <button className="border border-gray-300 mt-5 px-2 pt-2 pb-1 rounded-md flex justify-center items-center bg-violet-700 group text-white">
            সব নোটিশ দেখুন
            <MdKeyboardDoubleArrowRight className="text-xl group-hover:ml-2 transition-all duration-300" />
          </button>
        </div>
      </main>
    </div>
  );
}
