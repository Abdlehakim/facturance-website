const workflow = [
  "Create companies and invite teams",
  "Assign roles and permissions",
  "Issue invoices and manage operations",
  "Sync desktop work back to the cloud",
];

export function WorkflowSection() {
  return (
    <section className="bg-[#eefaf7] py-20">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase text-teal-800">
            Operating model
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal text-zinc-950">
            A simple path from setup to synchronized operations.
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-700">
            Facturance is structured so public website, dashboards, APIs,
            desktop, mobile, sync, and shared business rules can grow cleanly.
          </p>
        </div>

        <div className="grid gap-4">
          {workflow.map((item, index) => (
            <div
              key={item}
              className="grid grid-cols-[auto_1fr] gap-4 rounded-lg border border-teal-100 bg-white p-5"
            >
              <span className="grid size-9 place-items-center rounded-md bg-teal-600 text-sm font-semibold text-white">
                {index + 1}
              </span>
              <p className="self-center font-medium text-zinc-800">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
