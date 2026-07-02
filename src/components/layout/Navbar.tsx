"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!headerRef.current) return;

      if (!headerRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="relative z-50 border-b border-border-soft bg-white/95 backdrop-blur"
    >
      <div className="mx-auto flex min-h-16 w-full max-w-304 items-center justify-between gap-3 px-4 sm:px-6 lg:px-8 xl:px-0">
        <Link
          href="/"
          onClick={closeMenu}
          className="flex min-w-0 shrink-0 items-center gap-2.5 sm:gap-3"
          aria-label="Facturance home"
        >
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-linear-to-br from-brand-gradient-from-bright to-brand-gradient-to text-lg font-bold text-white shadow-sm sm:h-9 sm:w-9 sm:text-xl">
            F
          </span>

          <span className="truncate text-logo font-bold tracking-tight text-text-strong sm:text-panel-title">
            Facturance
          </span>
        </Link>

        <nav
          className="hidden h-16 items-center gap-7 lg:flex xl:gap-10"
          aria-label="Primary navigation"
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
                aria-current={isActive ? "page" : undefined}
                className={`flex h-full items-center border-b-2 text-nav font-medium transition ${
                  isActive
                    ? "border-brand-primary text-brand-primary"
                    : "border-transparent text-text-muted hover:text-text-strong"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3 lg:gap-4">
          <Link
            href="/login"
            onClick={closeMenu}
            className="btn btn-outline btn-sm hidden lg:inline-flex"
          >
            Login
          </Link>

          <Link
            href="/register"
            onClick={closeMenu}
            className="btn btn-primary btn-sm hidden sm:inline-flex"
          >
            Start free
          </Link>

          <button
            type="button"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border-subtle bg-white text-text-strong transition hover:border-brand-primary hover:text-brand-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/30 lg:hidden"
          >
            {isMenuOpen ? (
              <X size={20} strokeWidth={2.4} aria-hidden="true" />
            ) : (
              <Menu size={20} strokeWidth={2.4} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`absolute left-0 top-full w-full border-t border-border-soft bg-white px-4 py-4 shadow-[0_18px_50px_rgba(15,23,42,0.08)] sm:px-6 lg:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="mx-auto w-full max-w-304">
          <nav className="grid gap-1" aria-label="Mobile navigation">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex min-h-11 items-center rounded-xl px-4 text-nav font-semibold transition ${
                    isActive
                      ? "bg-brand-soft text-brand-primary"
                      : "text-text-muted hover:bg-surface-hover hover:text-text-strong"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-4 grid gap-3 border-t border-border-soft pt-4 sm:grid-cols-2 lg:hidden">
            <Link
              href="/login"
              onClick={closeMenu}
              className="btn btn-outline btn-md"
            >
              Login
            </Link>

            <Link
              href="/register"
              onClick={closeMenu}
              className="btn btn-primary btn-md"
            >
              Start free
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
