"use client";
import { Disclosure } from "@headlessui/react";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const Faqs = ( {services} ) => {
  const router = useRouter();
  const pathname = usePathname(); // Get the current path
  const [openIndex, setOpenIndex] = useState(null);

  if(services?.faqs?.length <= 0) return null;


  useEffect(() => {
    if (window.location.hash === "#faq") {
      setTimeout(() => {
        const faqSection = document.getElementById("faq");
        if (faqSection) {
          const offset = 100; // Adjust this value based on your navbar height
          const elementPosition = faqSection.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
        }
      }, 100); // Delay ensures page fully loads before scrolling
    }
  }, []);

  const handleToggle = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
      router.push(pathname, { scroll: false }); // Remove #faq from URL
    } else {
      setOpenIndex(index);
      router.push(`${pathname}#faq`, { scroll: false }); // Keep #faq in URL
    }
  };

  // Split the FAQs into two columns
  const half = Math.ceil(services?.faqs?.length / 2);
  const leftFaqs = services.faqs.slice(0, half);
  const rightFaqs = services.faqs.slice(half);

  return (
    <div id="faq" className="text-black pt-10 pb-16 scroll-mt-28">
      <div className="!max-w-7xl mx-auto">
        {services?.faqs && services.faqs.length > 0 && (
          <h3 className="text-center text-3xl font-bold mb-6 text-black">
            Frequently Asked Questions
          </h3>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div>
            {leftFaqs.map((item, index) => (
              <Disclosure key={index} as="div" className="mb-4 rounded shadow">
                {() => (
                  <>
                    <Disclosure.Button
                      onClick={() => handleToggle(index)}
                      className="flex justify-between items-center w-full px-6 py-3 text-left font-medium text-black bg-[#BDBABA24] hover:bg-opacity-80 transition-colors rounded !leading-[25px] cursor-pointer"
                    >
                      <span className="normal-case font-[600]">{item.question}</span>
                      {openIndex === index ? <MdExpandLess className="w-5 h-5 text-black" /> : <MdExpandMore className="w-5 h-5 text-black" />}
                    </Disclosure.Button>
                    <Disclosure.Panel className={`px-4 pb-4 pt-2 text-black ${openIndex === index ? "" : "hidden"}`}>
                      {item.answer}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>

          {/* Right Column */}
          <div>
            {rightFaqs.map((item, index) => {
              const globalIndex = index + half;
              return (
                <Disclosure key={globalIndex} as="div" className="mb-4 rounded shadow ">
                  {() => (
                    <>
                      <Disclosure.Button
                        onClick={() => handleToggle(globalIndex)}
                        className="flex justify-between items-center w-full px-6 py-3 text-left font-medium text-black bg-[#BDBABA24] hover:bg-opacity-80 transition-colors rounded !leading-[25px] cursor-pointer"
                      >
                        <span className="normal-case font-[600]">{item.question}</span>
                        {openIndex === globalIndex ? <MdExpandLess className="w-5 h-5 text-black" /> : <MdExpandMore className="w-5 h-5 text-black" />}
                      </Disclosure.Button>
                      <Disclosure.Panel className={`px-4 pb-4 pt-2 text-black ${openIndex === globalIndex ? "" : "hidden"}`}>
                        {item.answer}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;