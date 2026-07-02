import { ArrowRight, CheckCircle2 } from "lucide-react";

const workflow = [
  {
    title: "Create companies and invite teams",
    description:
      "Start with a clean company structure and invite the people who need access.",
  },
  {
    title: "Assign roles and permissions",
    description:
      "Control what each user can view, create, edit, approve, or manage.",
  },
  {
    title: "Issue invoices and manage operations",
    description:
      "Run daily invoicing, customers, products, payments, and inventory workflows.",
  },
  {
    title: "Sync desktop work back to the cloud",
    description:
      "Keep offline desktop operations connected to the central business platform.",
  },
];

export function WorkflowSection() {
  return (
    <section className="relative select-none overflow-hidden bg-surface-brand">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20px_20px,rgba(0,127,109,0.06)_1.2px,transparent_1.2px)] bg-size-[28px_28px]" />
      <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-teal-100/80 blur-3xl" />
      <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-emerald-100/70 blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100svh-104px)] w-full max-w-304 items-center gap-12 px-6 py-14 lg:grid-cols-[0.88fr_1.12fr] xl:px-0">
        <div>
          <div className="inline-flex rounded-full border border-border-brand bg-white/70 px-4 py-2 text-xs font-extrabold uppercase tracking-normal text-brand-primary shadow-sm">
            Operating model
          </div>

          <h2 className="mt-5 max-w-145 text-section-title-lg font-extrabold leading-[1.08] tracking-tight text-zinc-950 lg:text-section-title-md">
            A simple path from setup to synchronized operations.
          </h2>

          <p className="mt-6 max-w-140 text-lg leading-8 text-zinc-600">
            Facturance is structured so public website, dashboards, APIs,
            desktop, mobile, sync, and shared business rules can grow cleanly.
          </p>

          <div className="mt-9 cursor-pointer rounded-4xl border border-border-brand bg-white/85 p-6 shadow-[0_18px_55px_rgba(0,127,109,0.10)] backdrop-blur transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_70px_rgba(0,127,109,0.14)]">
            <div className="flex items-start gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand-primary text-white shadow-lg shadow-teal-900/20">
                <CheckCircle2 size={23} strokeWidth={2.7} />
              </span>

              <div>
                <h3 className="text-xl font-extrabold leading-snug tracking-normal text-zinc-950">
                  Designed to grow step by step
                </h3>

                <p className="mt-2.5 text-body-sm leading-7 text-zinc-600">
                  Start simple, then add advanced dashboards, APIs, desktop
                  synchronization, and mobile workflows without rebuilding the
                  foundation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute bottom-8 left-8 top-8 hidden w-px bg-linear-to-b from-transparent via-border-brand-hover to-transparent lg:block" />

          <div className="space-y-4">
            {workflow.map((item, index) => (
              <article
                key={item.title}
                className="group relative cursor-pointer overflow-hidden rounded-4xl border border-border-brand bg-white p-6 shadow-[0_16px_50px_rgba(0,127,109,0.10)] transition duration-300 hover:-translate-y-1 hover:border-border-brand-strong hover:shadow-[0_24px_70px_rgba(0,127,109,0.16)]"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-brand-primary via-accent-teal to-transparent opacity-0 transition group-hover:opacity-100" />

                <div className="flex items-center gap-5">
                  <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-brand-primary text-lg font-black text-white shadow-lg shadow-teal-900/20 transition group-hover:scale-105">
                    {index + 1}
                  </span>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl font-extrabold leading-snug tracking-normal text-zinc-950">
                      {item.title}
                    </h3>

                    <p className="mt-1.5 text-body-sm leading-7 text-zinc-600">
                      {item.description}
                    </p>
                  </div>

                  <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-brand-muted text-brand-primary transition group-hover:bg-brand-primary group-hover:text-white">
                    <ArrowRight
                      size={19}
                      strokeWidth={2.7}
                      className="transition group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}