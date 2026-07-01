import Link from "next/link";

const footerLinks = [
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/login", label: "Login" },
];

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.5fr_1fr] lg:px-8">
        <div>
          <Link href="/" className="text-lg font-semibold text-zinc-950">
            Facturance
          </Link>
          <p className="mt-3 max-w-md text-sm leading-6 text-zinc-600">
            A modern ERP and invoicing platform for multi-company teams,
            international operations, and offline-ready desktop workflows.
          </p>
        </div>

        <nav className="grid grid-cols-2 gap-3 text-sm" aria-label="Footer">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-medium text-zinc-600 transition hover:text-zinc-950"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
