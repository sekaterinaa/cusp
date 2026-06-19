import { useState, type ReactNode } from "react";

type FaqItem = {
  question: string;
  answer: ReactNode;
};

const faqs: FaqItem[] = [
  {
    question: "What is CUSP?",
    answer: (
      <p className="leading-[1.4]">
        CUSP is an AI-powered investment platform that lets you trade stocks and ETFs, build personalized portfolio
        strategies, and get guidance from AI — all from a single app.
      </p>
    ),
  },
  {
    question: "Is the CUSP investment platform regulated in the UAE?",
    answer: (
      <p className="leading-[1.4]">
        Yes. CUSP is registered in the DIFC and regulated by the Dubai Financial Services Authority (DFSA) under
        license number F011420.
      </p>
    ),
  },
  {
    question: "Are my funds and assets insured?",
    answer: (
      <p className="leading-[1.4]">
        Yes. Your investments are protected up to $500,000 by the Securities Investor Protection Corporation (SIPC).
      </p>
    ),
  },
  {
    question: "Is online investing safe in the UAE?",
    answer: (
      <>
        <p className="leading-[1.4] mb-0">When considering online investing in the UAE, make sure your chosen platform:</p>
        <ul className="list-disc mb-0">
          <li className="mb-0 ms-[24px]">
            <span className="leading-[1.4]">Is licensed and regulated by the Dubai Financial Services Authority (DFSA)</span>
          </li>
          <li className="mb-0 ms-[24px]">
            <span className="leading-[1.4]">Provides comprehensive insurance coverage for your funds</span>
          </li>
          <li className="ms-[24px]">
            <span className="leading-[1.4]">Safeguards your personal data with advanced security measures</span>
          </li>
        </ul>
        <p className="leading-[1.4] mb-0">&nbsp;</p>
        <p className="leading-[1.4]">
          CUSP is licensed by the DFSA, provides SIPC insurance coverage of up to $500,000 for your funds, and uses
          multi-factor authentication to keep your data secure from the moment you sign up.
        </p>
      </>
    ),
  },
  {
    question: "English and Arabic Customer Care, 24/7",
    answer: (
      <p className="leading-[1.4]">
        Our support team is available around the clock in both English and Arabic. Reach us anytime at
        support@cuspwealth.com.
      </p>
    ),
  },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <div
      className={`flex items-center justify-center relative shrink-0 size-[46px] transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
    >
      <svg className="block size-[46px]" fill="none" viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path
          d="M15 19.5L23 27.5L31 19.5"
          stroke="#1d1611"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(3);

  return (
    <div className="bg-[#fcf8ef] content-stretch flex flex-col items-center py-[80px] relative shrink-0 w-full" data-node-id="982:24589">
      <div className="content-stretch flex flex-col gap-[60px] items-center relative shrink-0 w-full" data-node-id="982:24590">
        <p className="[word-break:break-word] font-aeonik font-normal leading-[56px] not-italic relative shrink-0 text-[#1d1611] text-[48px] text-center tracking-[-0.96px]" data-node-id="982:24592">
          FAQ
        </p>
        <div className="content-stretch flex flex-col items-center px-[200px] relative shrink-0 w-full" data-node-id="982:24593">
          <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full" data-node-id="982:24595">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" key={faq.question}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className={`bg-white content-stretch flex gap-[16px] items-center justify-between px-[24px] py-[12px] relative shrink-0 text-left w-full ${
                      isOpen ? "rounded-tl-[16px] rounded-tr-[16px]" : "rounded-[16px]"
                    }`}
                  >
                    <p className="[word-break:break-word] font-aeonik font-normal leading-[29px] not-italic relative shrink-0 text-[24px] text-black tracking-[-0.48px]">
                      {faq.question}
                    </p>
                    <Chevron open={isOpen} />
                  </button>
                  {isOpen && (
                    <div className="bg-[#fffcf8] content-stretch flex items-center p-[24px] relative rounded-bl-[16px] rounded-br-[16px] shrink-0 w-full">
                      <div className="[word-break:break-word] flex-[1_0_0] font-inter font-normal leading-[0] min-w-px not-italic relative text-[#0f0a08] text-[16px] whitespace-pre-wrap">
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
