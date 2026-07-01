import type { Metadata } from "next";
import { BlogCategoriesSection } from "@/components/blog/blog-categories-section";
import { BlogCtaSection } from "@/components/blog/blog-cta-section";
import { BlogHeroSection } from "@/components/blog/blog-hero-section";
import { BlogPostsSection } from "@/components/blog/blog-posts-section";
import { BlogPrinciplesSection } from "@/components/blog/blog-principles-section";

export const metadata: Metadata = {
  title: "Blog | Facturance",
  description: "Product thinking, architecture, and finance platform updates.",
};

export default function BlogPage() {
  return (
    <section className="select-none bg-white">
      <BlogHeroSection />
      <BlogCategoriesSection />
      <BlogPostsSection />
      <BlogPrinciplesSection />
      <BlogCtaSection />
    </section>
  );
}
