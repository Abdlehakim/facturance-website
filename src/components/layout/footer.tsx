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
    <footer className="border-t border-zinc-200 bg-[#f7fbfa]">
      <div className="mx-auto w-full max-w-304 px-5 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.45fr_1fr_1fr_1.1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-2xl bg-linear-to-br from-[#008577] to-[#005f55] text-lg font-extrabold text-white shadow-lg shadow-teal-900/15">
                F
              </span>
              <span className="text-xl font-extrabold tracking-[-0.03em] text-zinc-950">
                Facturance
              </span>
            </Link>

            <p className="mt-5 max-w-115 text-[15px] leading-7 text-zinc-600">
              A modern ERP and invoicing platform for multi-company teams,
              international operations, and offline-ready desktop workflows.
            </p>

            <Link
              href="/register"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#007f6d] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-teal-900/15 transition hover:-translate-y-0.5 hover:bg-[#006f60]"
            >
              Start free
              <ArrowRight size={17} strokeWidth={2.6} aria-hidden="true" />
            </Link>
          </div>

          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.14em] text-zinc-950">
              Product
            </h3>

            <nav className="mt-5 grid gap-3" aria-label="Product links">
              {productLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[15px] font-medium text-zinc-600 transition hover:text-[#007f6d]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.14em] text-zinc-950">
              Company
            </h3>

            <nav className="mt-5 grid gap-3" aria-label="Company links">
              {companyLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[15px] font-medium text-zinc-600 transition hover:text-[#007f6d]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="text-sm font-extrabold uppercase tracking-[0.14em] text-zinc-950">
              Need help?
            </h3>

            <p className="mt-4 text-[15px] leading-7 text-zinc-600">
              Have a question about pricing, onboarding, or Facturance features?
              Contact us anytime.
            </p>

            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-[#007f6d] transition hover:text-[#005f55]"
            >
              <Mail size={17} strokeWidth={2.4} aria-hidden="true" />
              Contact support
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-zinc-200 pt-7 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Facturance. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/pricing" className="transition hover:text-zinc-950">
              Pricing
            </Link>
            <Link href="/contact" className="transition hover:text-zinc-950">
              Contact
            </Link>
            <Link href="/login" className="transition hover:text-zinc-950">
              Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}