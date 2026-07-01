import { CheckCircle2 } from "lucide-react";
import { principles } from "@/components/blog/blog-data";

export function BlogPrinciplesSection() {
  return (
    <div className="bg-[#eaf8f5]">
      <div className="mx-auto grid w-full max-w-304 gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center xl:px-0">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#007f6d]">
            Editorial principles
          </p>

          <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-[-0.04em] text-zinc-950">
            Practical notes for serious business software.
          </h2>

          <p className="mt-5 max-w-130 text-base leading-8 text-zinc-600">
            The blog focuses on technical clarity, product decisions, and real
            operational needs behind modern finance platforms.
          </p>
        </div>

        <div className="space-y-4">
          {principles.map((principle) => (
            <div
              key={principle}
              className="flex cursor-pointer items-center gap-4 rounded-3xl border border-[#bde7df] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-teal-900/8"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[#007f6d] text-white">
                <CheckCircle2 size={22} strokeWidth={2.7} />
              </span>

              <p className="font-bold leading-7 text-zinc-800">{principle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
