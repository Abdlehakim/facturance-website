const highlights = [
  "Multi-company",
  "RBAC ready",
  "Offline desktop",
  "Internationalized",
];

export function TrustBar() {
  return (
    <section className="border-y border-zinc-200 bg-[#f7f9fc]">
      <div className="mx-auto grid w-full max-w-7xl gap-3 px-4 py-5 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {highlights.map((item) => (
          <div
            key={item}
            className="rounded-lg border border-zinc-200 bg-white px-4 py-3 text-center text-sm font-semibold text-zinc-700"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
