import { ChevronDown } from "lucide-react";
import { pricingFaqs } from "@/data/pricing-plans";

export function PricingFaq() {
  const midpoint = Math.ceil(pricingFaqs.length / 2);
  const faqColumns = [
    pricingFaqs.slice(0, midpoint),
    pricingFaqs.slice(midpoint),
  ];

  return (
    <section className="mx-auto mt-17.5 w-full max-w-304 px-6 xl:px-0">
      <h2 className="text-center text-[30px] font-extrabold tracking-[-0.03em] text-[#071827]">
        Frequently asked questions
      </h2>

      <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-2">
        {faqColumns.map((column, columnIndex) => (
          <div key={columnIndex} className="space-y-3">
            {column.map((faq) => (
              <details
                key={faq.question}
                className="group overflow-hidden rounded-xl border border-[#dce7e5] bg-white shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
              >
                <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 px-7 text-[15px] font-bold text-[#071827] transition hover:bg-[#f8fffd]">
                  {faq.question}

                  <ChevronDown
                    size={20}
                    strokeWidth={2.2}
                    className="shrink-0 text-[#071827] transition group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>

                <p className="border-t border-[#e6eeec] px-7 pb-6 pt-4 text-[14px] font-medium leading-7 text-[#506070]">
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