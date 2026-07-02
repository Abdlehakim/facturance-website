import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogArticlePageContent } from "@/components/blog/blog-article-page-content";
import {
  getAllBlogPosts,
  getBlogPostBySlug,
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

export default async function BlogArticlePage({
  params,
}: BlogArticlePageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <BlogArticlePageContent slug={slug} />;
}
