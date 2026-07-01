import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/components/blog/blog-data";

export function BlogPostsSection() {
  return (
    <div className="mx-auto w-full max-w-304 px-6 pb-20 xl:px-0">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#007f6d]">
            Latest articles
          </p>

          <h2 className="mt-3 text-4xl font-extrabold tracking-[-0.04em] text-zinc-950">
            Product, architecture, and operations.
          </h2>
        </div>

        <Link
          href="/contact"
          className="inline-flex h-12 cursor-pointer items-center justify-center gap-3 rounded-2xl border border-zinc-300 bg-white px-6 text-sm font-extrabold text-zinc-950 transition hover:-translate-y-0.5 hover:border-[#007f6d] hover:text-[#007f6d]"
        >
          Suggest a topic
          <ArrowRight size={17} strokeWidth={2.7} />
        </Link>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => {
          const Icon = post.icon;

          return (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group cursor-pointer rounded-4xl border border-zinc-200 bg-[#f8fbfa] p-6 transition hover:-translate-y-1 hover:border-[#8edbd0] hover:bg-white hover:shadow-[0_26px_75px_rgba(0,127,109,0.11)]"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="grid size-12 place-items-center rounded-2xl bg-white text-[#007f6d] shadow-sm transition group-hover:bg-[#007f6d] group-hover:text-white">
                  <Icon size={22} strokeWidth={2.5} />
                </span>

                <span className="rounded-full bg-[#eefbf8] px-3 py-1 text-[11px] font-extrabold uppercase tracking-widest text-[#007f6d]">
                  {post.category}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-extrabold leading-snug tracking-normal text-zinc-950">
                {post.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-600">
                {post.description}
              </p>

              <div className="mt-7 flex items-center justify-between border-t border-zinc-200 pt-5">
                <span className="text-xs font-bold text-zinc-500">
                  {post.readTime}
                </span>

                <span className="inline-flex items-center gap-2 text-sm font-extrabold text-[#007f6d]">
                  Read
                  <ArrowRight
                    size={16}
                    strokeWidth={2.8}
                    className="transition group-hover:translate-x-1"
                  />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
