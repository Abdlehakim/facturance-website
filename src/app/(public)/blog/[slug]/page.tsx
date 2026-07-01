import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Sparkles,
  UserRound,
} from "lucide-react";
import {
  getAllBlogPosts,
  getBlogPostBySlug,
  type BlogContentBlock,
  type BlogPost,
} from "@/components/blog/blog-data";

type BlogArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article not found | Facturance",
    };
  }

  return {
    title: `${post.title} | Facturance`,
    description: post.description,
  };
}

function formatPublishedDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

function ArticleContentBlock({ block }: { block: BlogContentBlock }) {
  if (block.type === "heading") {
    return (
      <h2 className="pt-4 text-3xl font-extrabold tracking-[-0.035em] text-zinc-950">
        {block.text}
      </h2>
    );
  }

  if (block.type === "list") {
    return (
      <ul className="space-y-4">
        {block.items.map((item) => (
          <li key={item} className="flex gap-4 text-lg leading-8 text-zinc-600">
            <CheckCircle2
              size={22}
              strokeWidth={2.7}
              className="mt-1 shrink-0 text-[#007f6d]"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "callout") {
    return (
      <div className="rounded-4xl border border-[#bde7df] bg-[#eefbf8] p-6">
        <div className="flex items-center gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-[#007f6d] text-white">
            <Sparkles size={19} strokeWidth={2.7} />
          </span>
          <h3 className="text-lg font-extrabold text-zinc-950">
            {block.title}
          </h3>
        </div>
        <p className="mt-4 text-lg leading-8 text-zinc-600">{block.text}</p>
      </div>
    );
  }

  return <p className="text-lg leading-8 text-zinc-600">{block.text}</p>;
}

function MoreArticlesSection({ currentPost }: { currentPost: BlogPost }) {
  const relatedPosts = getAllBlogPosts()
    .filter((post) => post.slug !== currentPost.slug)
    .slice(0, 3);

  return (
    <section className="select-none bg-white">
      <div className="mx-auto w-full max-w-304 px-6 py-20 xl:px-0">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#007f6d]">
              More articles
            </p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-[-0.04em] text-zinc-950">
              Keep exploring Facturance thinking.
            </h2>
          </div>

          <Link
            href="/blog"
            className="inline-flex h-12 items-center justify-center gap-3 rounded-2xl border border-zinc-300 bg-white px-6 text-sm font-extrabold text-zinc-950 transition hover:-translate-y-0.5 hover:border-[#007f6d] hover:text-[#007f6d]"
          >
            Back to blog
            <ArrowRight size={17} strokeWidth={2.7} />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {relatedPosts.map((post) => {
            const Icon = post.icon;

            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-4xl border border-zinc-200 bg-[#f8fbfa] p-6 transition hover:-translate-y-1 hover:border-[#8edbd0] hover:bg-white hover:shadow-[0_26px_75px_rgba(0,127,109,0.11)]"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-white text-[#007f6d] shadow-sm transition group-hover:bg-[#007f6d] group-hover:text-white">
                  <Icon size={22} strokeWidth={2.5} />
                </span>

                <p className="mt-6 text-xs font-extrabold uppercase tracking-widest text-[#007f6d]">
                  {post.category}
                </p>

                <h3 className="mt-3 text-xl font-extrabold leading-snug tracking-normal text-zinc-950">
                  {post.title}
                </h3>

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
    </section>
  );
}

function ArticleCtaSection() {
  return (
    <section className="select-none">
      <div className="mx-auto w-full max-w-304 px-6 pb-20 xl:px-0">
        <div className="relative overflow-hidden rounded-4xl bg-linear-to-br from-[#00342e] via-[#005f52] to-[#00917b] p-8 text-white shadow-[0_30px_90px_rgba(0,63,54,0.26)] sm:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20px_20px,rgba(255,255,255,0.13)_1.2px,transparent_1.2px)] bg-size-[28px_28px] opacity-35" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-emerald-300">
                <Sparkles size={15} strokeWidth={2.7} />
                Build with clarity
              </div>

              <h2 className="mt-5 max-w-170 text-4xl font-extrabold leading-tight tracking-[-0.04em]">
                Want to shape better finance operations?
              </h2>

              <p className="mt-4 max-w-150 text-base leading-8 text-white/78">
                Talk with the Facturance team about SaaS, desktop sync,
                permissions, and international business workflows.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex h-14 shrink-0 items-center justify-center gap-3 rounded-2xl bg-white px-8 text-base font-extrabold text-[#007f6d] shadow-xl shadow-black/10 transition hover:-translate-y-0.5"
              >
                Contact us
                <ArrowRight size={20} strokeWidth={2.7} />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex h-14 shrink-0 items-center justify-center rounded-2xl border border-white/30 px-8 text-base font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                View pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default async function BlogArticlePage({
  params,
}: BlogArticlePageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const Icon = post.icon;

  return (
    <>
      <section className="select-none relative overflow-hidden border-b border-zinc-200 bg-[#f7fbfa]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20px_20px,rgba(0,127,109,0.07)_1.2px,transparent_1.2px)] bg-size-[28px_28px]" />
        <div className="absolute -right-32 -top-32 h-120 w-120 rounded-full bg-teal-100 blur-3xl" />
        <div className="absolute -bottom-32 left-0 h-88 w-88 rounded-full bg-emerald-50 blur-3xl" />

        <div className="relative mx-auto w-full max-w-304 px-6 py-20 xl:px-0">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-extrabold text-[#007f6d] transition hover:-translate-x-0.5"
          >
            <ArrowLeft size={17} strokeWidth={2.7} />
            Back to blog
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-[#bde7df] bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#007f6d] shadow-sm">
                <Icon size={16} strokeWidth={2.6} />
                {post.category}
              </div>

              <h1 className="mt-6 max-w-190 text-[30px] font-extrabold leading-[1.06] tracking-[-0.035em] text-zinc-950 sm:text-[58px]">
                {post.title}
              </h1>
            </div>

            <div className="rounded-4xl border border-zinc-200 bg-white p-7 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
              <p className="text-lg leading-8 text-zinc-600">
                {post.description}
              </p>

              <div className="mt-8 grid gap-4 border-t border-zinc-200 pt-6 text-sm font-bold text-zinc-500 sm:grid-cols-3">
                <span className="inline-flex items-center gap-2">
                  <UserRound
                    size={17}
                    strokeWidth={2.5}
                    className="text-[#007f6d]"
                  />
                  {post.author}
                </span>
                <span className="inline-flex items-center gap-2">
                  <CalendarDays
                    size={17}
                    strokeWidth={2.5}
                    className="text-[#007f6d]"
                  />
                  {formatPublishedDate(post.publishedAt)}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock3
                    size={17}
                    strokeWidth={2.5}
                    className="text-[#007f6d]"
                  />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="bg-white">
        <div className="mx-auto w-full max-w-304 px-6 py-20 xl:px-0">
          <article className="mx-auto max-w-220 rounded-4xl border border-zinc-200 bg-white p-7 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-10">
            <div className="space-y-8">
              {post.content.map((block, index) => (
                <ArticleContentBlock key={`${block.type}-${index}`} block={block} />
              ))}
            </div>
          </article>
        </div>
      </main>

      <MoreArticlesSection currentPost={post} />
      <ArticleCtaSection />
    </>
  );
}
