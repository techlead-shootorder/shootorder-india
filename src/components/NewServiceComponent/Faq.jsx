"use client";
import { Disclosure } from "@headlessui/react";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const Faqs = () => {
  const router = useRouter();
  const pathname = usePathname(); // Get the current path
  const [openIndex, setOpenIndex] = useState(null);

  // Static FAQ data
  const faq = [
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for all unused items in their original packaging. Simply contact our customer service team to initiate a return."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping typically takes 3-5 business days. Express shipping options are available for faster delivery within 1-2 business days."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to over 50 countries worldwide. International shipping costs and delivery times vary by destination."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on our website or the carrier's website."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay for secure checkout."
    },
    {
      question: "Can I modify or cancel my order?",
      answer: "Orders can be modified or cancelled within 1 hour of placement. After that, please contact customer service for assistance."
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes, our customer support team is available Monday through Friday, 9 AM to 6 PM EST. You can reach us via email, phone, or live chat."
    },
    {
      question: "Are your products eco-friendly?",
      answer: "We're committed to sustainability and use eco-friendly packaging materials. Many of our products are made from recycled or sustainable materials."
    }
  ];

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
  const half = Math.ceil(faq.length / 2);
  const leftFaqs = faq.slice(0, half);
  const rightFaqs = faq.slice(half);

  return (
    <div id="faq" className="text-black py-10 scroll-mt-28">
      <div className="!max-w-7xl mx-auto">
        {faq.length > 0 && (
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