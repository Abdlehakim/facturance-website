"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="h-16 border-b border-[#e6eeec] bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-full w-full max-w-[1216px] items-center justify-between px-6 xl:px-0">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-[#009b84] to-[#006b5b] text-xl font-bold text-white shadow-sm">
            F
          </span>
          <span className="text-[22px] font-bold tracking-tight text-[#071827]">
            Facturance
          </span>
        </Link>

        <nav
          className="hidden h-full items-center gap-10 md:flex"
          aria-label="Primary"
        >
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex h-full items-center border-b-2 text-[15px] font-medium transition ${
                  isActive
                    ? "border-[#007f6d] text-[#007f6d]"
                    : "border-transparent text-[#506070] hover:text-[#071827]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="hidden text-sm font-semibold text-[#071827] transition hover:text-[#007f6d] sm:inline-flex"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="inline-flex h-9 items-center justify-center rounded-lg bg-gradient-to-r from-[#008f7a] to-[#006b5b] px-6 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(0,127,109,0.25)] transition hover:from-[#007f6d] hover:to-[#00594c]"
          >
            Start free
          </Link>
        </div>
      </div>
    </header>
  );
}
