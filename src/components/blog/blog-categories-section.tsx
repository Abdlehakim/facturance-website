import { categories } from "@/components/blog/blog-data";

export function BlogCategoriesSection() {
  return (
    <div className="mx-auto w-full max-w-304 px-6 py-16 xl:px-0">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <div
              key={category.label}
              className="group flex cursor-pointer items-center gap-4 rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-border-brand-hover hover:bg-surface-soft"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-brand-muted text-brand-primary transition group-hover:bg-brand-primary group-hover:text-white">
                <Icon size={22} strokeWidth={2.5} />
              </span>

              <span className="font-extrabold text-zinc-950">
                {category.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
