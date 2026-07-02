import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { featuredPost } from "@/components/blog/blog-data";

export function BlogHeroSection() {
  return (
    <div className="relative overflow-hidden border-b border-zinc-200 bg-surface-soft">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20px_20px,rgba(0,127,109,0.07)_1.2px,transparent_1.2px)] bg-size-[28px_28px]" />
      <div className="absolute -right-32 -top-32 h-120 w-120 rounded-full bg-teal-100 blur-3xl" />
      <div className="absolute -bottom-32 left-0 h-88 w-88 rounded-full bg-emerald-50 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-304 items-center gap-12 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] xl:px-0">
        <div>
          <div className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border-brand bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-primary shadow-sm transition hover:-translate-y-0.5 hover:border-border-brand-hover">
            <BookOpen size={15} strokeWidth={2.6} />
            Facturance blog
          </div>

          <h1 className="mt-6 max-w-150 text-page-title-sm font-extrabold leading-[1.06] tracking-[-0.035em] text-zinc-950 sm:text-section-title-md">
            Notes on building modern business software.
          </h1>

          <p className="mt-6 max-w-140 text-lg leading-8 text-zinc-600">
            Product thinking, architecture notes, finance platform ideas, and
            updates from the Facturance team.
          </p>
        </div>

        <Link
          href={`/blog/${featuredPost.slug}`}
          className="group cursor-pointer rounded-4xl border border-zinc-200 bg-white p-7 shadow-[0_24px_70px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:border-border-brand-hover hover:shadow-[0_30px_90px_rgba(0,127,109,0.13)]"
        >
          <div className="flex items-center justify-between gap-4">
            <span className="rounded-full bg-brand-muted px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-brand-primary">
              Featured
            </span>

            <span className="text-sm font-bold text-zinc-500">
              {featuredPost.readTime}
            </span>
          </div>

          <p className="mt-8 text-sm font-extrabold uppercase tracking-[0.16em] text-brand-primary">
            {featuredPost.category}
          </p>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.035em] text-zinc-950">
            {featuredPost.title}
          </h2>

          <p className="mt-4 text-base leading-8 text-zinc-600">
            {featuredPost.description}
          </p>

          <div className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-brand-primary">
            Read article
            <ArrowRight
              size={17}
              strokeWidth={2.8}
              className="transition group-hover:translate-x-1"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
