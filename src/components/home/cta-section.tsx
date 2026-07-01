import Link from "next/link";

export function CtaSection() {
  return (
    <section className="bg-zinc-950 py-16 text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <h2 className="text-3xl font-semibold tracking-normal">
            Start shaping your finance platform.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-300">
            Launch with a clean public website now, then grow into dashboards,
            APIs, desktop sync, and mobile workflows with a stable foundation.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-teal-100"
        >
          Talk to us
        </Link>
      </div>
    </section>
  );
}
