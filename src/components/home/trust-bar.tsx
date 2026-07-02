import { Building2, Globe2, MonitorDown, ShieldCheck } from "lucide-react";

const highlights = [
  {
    icon: Building2,
    title: "Multi-company",
    description: "Separate companies, users, settings, and documents.",
  },
  {
    icon: ShieldCheck,
    title: "RBAC ready",
    description: "Permission-first structure for controlled access.",
  },
  {
    icon: MonitorDown,
    title: "Offline desktop",
    description: "Desktop continuity when the network is unreliable.",
  },
  {
    icon: Globe2,
    title: "Internationalized",
    description: "Prepared for currencies, languages, and markets.",
  },
];

export function TrustBar() {
  return (
    <section className="border-y border-zinc-200 bg-surface-soft">
      <div className="mx-auto grid w-full max-w-304 gap-4 px-6 py-8 sm:grid-cols-2 lg:grid-cols-4 xl:px-0">
        {highlights.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-900/5"
            >
              <span className="grid size-11 place-items-center rounded-2xl bg-brand-muted text-brand-primary">
                <Icon size={21} strokeWidth={2.5} />
              </span>

              <h3 className="mt-5 text-lg font-extrabold tracking-normal-0.03em] text-zinc-950">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-600">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}