import { ChevronDown } from "lucide-react";
import { pricingFaqs } from "@/data/pricing-plans";

export function PricingFaq() {
  const midpoint = Math.ceil(pricingFaqs.length / 2);
  const faqColumns = [
    pricingFaqs.slice(0, midpoint),
    pricingFaqs.slice(midpoint),
  ];

  return (
    <section className="mx-auto mt-0 max-w-[1090px] px-6 xl:px-0">
      <h2 className="my-6 text-center text-[18px] font-extrabold text-[#071827]">
        Frequently asked questions
      </h2>

      <div className="grid grid-cols-1 gap-x-4 gap-y-1 md:grid-cols-2">
        {faqColumns.map((column, columnIndex) => (
          <div key={columnIndex} className="space-y-0.5">
            {column.map((faq) => (
              <details
                key={faq.question}
                className="group overflow-hidden rounded-lg border border-[#dce7e5] bg-white"
              >
                <summary className="flex h-[21px] cursor-pointer list-none items-center justify-between px-4 text-[10px] font-semibold text-[#071827] hover:bg-[#f8fffd]">
                  {faq.question}
                  <ChevronDown
                    size={13}
                    strokeWidth={2.2}
                    className="ml-4 shrink-0 text-[#071827] transition group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="px-4 pb-3 text-[11.5px] leading-5 text-[#506070]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
