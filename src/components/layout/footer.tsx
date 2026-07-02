import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

const productLinks = [
  { href: "/pricing", label: "Pricing" },
  { href: "/login", label: "Login" },
];

const companyLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 bg-surface-soft">
      <div className="mx-auto w-full max-w-304 px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16 xl:px-0">
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,0.75fr)_minmax(0,0.75fr)_minmax(260px,1.1fr)] lg:gap-10 xl:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-flex max-w-full items-center gap-3"
              aria-label="Facturance home"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-brand-gradient-from-muted to-brand-gradient-to-muted text-lg font-extrabold text-white shadow-lg shadow-teal-900/15">
                F
              </span>

              <span className="truncate text-xl font-extrabold tracking-[-0.03em] text-zinc-950">
                Facturance
              </span>
            </Link>

            <p className="mt-5 max-w-lg text-body-sm leading-7 text-zinc-600 lg:max-w-md">
              A modern ERP and invoicing platform for multi-company teams,
              international operations, and offline-ready desktop workflows.
            </p>

            <Link
              href="/register"
              className="btn btn-primary btn-md btn-full mt-7 gap-2 py-3 shadow-lg shadow-teal-900/15 hover:-translate-y-0.5 sm:w-auto"
            >
              Start free
              <ArrowRight
                size={17}
                strokeWidth={2.6}
                className="shrink-0"
                aria-hidden="true"
              />
            </Link>
          </div>

          <div className="min-w-0">
            <h3 className="text-sm font-extrabold uppercase tracking-[0.14em] text-zinc-950">
              Product
            </h3>

            <nav className="mt-5 grid gap-3" aria-label="Product links">
              {productLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit text-body-sm font-medium text-zinc-600 transition hover:text-brand-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="min-w-0">
            <h3 className="text-sm font-extrabold uppercase tracking-[0.14em] text-zinc-950">
              Company
            </h3>

            <nav className="mt-5 grid gap-3" aria-label="Company links">
              {companyLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit text-body-sm font-medium text-zinc-600 transition hover:text-brand-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm sm:col-span-2 sm:p-6 lg:col-span-1">
            <h3 className="text-sm font-extrabold uppercase tracking-[0.14em] text-zinc-950">
              Need help?
            </h3>

            <p className="mt-4 max-w-2xl text-body-sm leading-7 text-zinc-600 lg:max-w-none">
              Have a question about pricing, onboarding, or Facturance features?
              Contact us anytime.
            </p>

            <Link
              href="/contact"
              className="btn btn-ghost mt-5 gap-2 px-0 text-sm font-extrabold text-brand-primary hover:text-brand-gradient-to-muted"
            >
              <Mail
                size={17}
                strokeWidth={2.4}
                className="shrink-0"
                aria-hidden="true"
              />
              Contact support
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-5 border-t border-zinc-200 pt-7 text-center text-sm text-zinc-500 sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="leading-6">© {year} Facturance. All rights reserved.</p>

          <nav
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:justify-end"
            aria-label="Footer secondary links"
          >
            <Link href="/pricing" className="transition hover:text-zinc-950">
              Pricing
            </Link>
            <Link href="/contact" className="transition hover:text-zinc-950">
              Contact
            </Link>
            <Link href="/login" className="transition hover:text-zinc-950">
              Login
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
