import type { Metadata } from "next";

const posts = [
  "Designing finance systems for multi-company operations",
  "Why offline desktop workflows still matter for ERP teams",
  "Building permission-first SaaS products",
];

export const metadata: Metadata = {
  title: "Blog | Facturance",
  description: "Product thinking, architecture, and finance platform updates.",
};

export default function BlogPage() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase text-teal-700">Blog</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-normal text-zinc-950">
            Notes on building modern business software.
          </h1>
          <p className="mt-4 text-base leading-7 text-zinc-600">
            Early ideas from the Facturance team on architecture, operations,
            synchronization, and scalable SaaS foundations.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post}
              className="rounded-lg border border-zinc-200 bg-[#f7f9fc] p-6"
            >
              <p className="text-xs font-semibold uppercase text-teal-700">
                Article
              </p>
              <h2 className="mt-3 text-lg font-semibold leading-7 text-zinc-950">
                {post}
              </h2>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                A short editorial placeholder for future Facturance content.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
