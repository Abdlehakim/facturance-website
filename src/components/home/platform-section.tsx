const capabilities = [
  {
    title: "Cloud source of truth",
    description:
      "PostgreSQL-backed architecture for authoritative company, user, invoice, audit, and sync data.",
  },
  {
    title: "Desktop offline cache",
    description:
      "SQLite-ready desktop workflows for teams that need continuity when the network is unreliable.",
  },
  {
    title: "Permission-first platform",
    description:
      "Role and permission boundaries designed for company users, platform admins, and future growth.",
  },
];

export function PlatformSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase text-teal-700">
            Platform foundation
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal text-zinc-950">
            Built for a serious multi-company ERP future.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {capabilities.map((item) => (
            <article
              key={item.title}
              className="rounded-lg border border-zinc-200 bg-[#f7f9fc] p-6"
            >
              <h3 className="text-lg font-semibold text-zinc-950">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
