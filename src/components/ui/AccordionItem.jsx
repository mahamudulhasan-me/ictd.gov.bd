"use client";
import { MdArrowForwardIos, MdKeyboardDoubleArrowRight } from "react-icons/md";

function AccordionItem({ title, content, isOpen, onClick }) {
  return (
    <div className="py-2">
      <h2>
        <button
          type="button"
          className="flex items-center justify-start w-full text-start text-lg py-2 gap-1"
          onClick={onClick}
          aria-expanded={isOpen}
          aria-controls={`faqs-text-${title}`}
        >
          <MdArrowForwardIos
            className={`fill-violet-600 shrink-0 transform transition duration-200 ease-out ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
            size={16}
          />
          <span>{title}</span>
        </button>
      </h2>
      <div
        id={`faqs-text-${title}`}
        role="region"
        className={`grid text-slate-700 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden ml-5">
          <p>{content}</p>
          <button className="border border-gray-300 mt-2 px-2 py-1 rounded-md flex justify-center items-center text-violet-600 group">
            বিস্তারিত দেখুন{" "}
            <MdKeyboardDoubleArrowRight className="text-xl group-hover:ml-2 transition-all duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;
