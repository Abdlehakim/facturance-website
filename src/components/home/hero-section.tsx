import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-y-10 right-0 hidden w-3/5 opacity-95 lg:block">
        <div className="h-full rounded-l-lg border border-zinc-200 bg-[#f8fafc] p-4 shadow-2xl">
          <div className="grid h-full grid-rows-[auto_1fr] gap-4 rounded-lg border border-zinc-200 bg-white p-4">
            <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
              <div>
                <p className="text-xs font-semibold uppercase text-teal-700">
                  Revenue dashboard
                </p>
                <p className="mt-1 text-xl font-semibold text-zinc-950">
                  42,860 TND
                </p>
              </div>
              <span className="rounded-md bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                Synced
              </span>
            </div>

            <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-lg border border-zinc-200 p-4">
                <p className="text-sm font-semibold text-zinc-950">
                  Recent invoices
                </p>
                <div className="mt-4 space-y-3">
                  {["INV-1042", "INV-1041", "INV-1040"].map((invoice) => (
                    <div
                      key={invoice}
                      className="grid grid-cols-[1fr_auto] gap-4 rounded-md bg-zinc-50 px-3 py-3 text-sm"
                    >
                      <span className="font-medium text-zinc-700">
                        {invoice}
                      </span>
                      <span className="text-teal-700">Ready</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-zinc-200 p-4">
                <p className="text-sm font-semibold text-zinc-950">
                  Companies
                </p>
                <div className="mt-4 space-y-3 text-sm text-zinc-600">
                  <p>North Star Trading</p>
                  <p>Medina Services</p>
                  <p>Carthage Labs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase text-teal-700">
            SaaS, desktop, and mobile ready
          </p>
          <h1 className="mt-5 text-5xl font-semibold tracking-normal text-zinc-950 sm:text-6xl">
            Facturance
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
            A clean international ERP foundation for invoicing, companies,
            roles, permissions, cloud data, and offline desktop operations.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/register"
              className="inline-flex items-center justify-center rounded-md bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
            >
              Create account
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-md border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:border-zinc-400"
            >
              View pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
