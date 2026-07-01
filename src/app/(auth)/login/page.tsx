import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login | Facturance",
  description: "Login to Facturance.",
};

export default function LoginPage() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto w-full max-w-md px-4 sm:px-6">
        <div className="rounded-lg border border-zinc-200 bg-[#f7f9fc] p-6">
          <p className="text-sm font-semibold uppercase text-teal-700">
            Welcome back
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-normal text-zinc-950">
            Login to Facturance
          </h1>

          <form className="mt-8 grid gap-5">
            <label className="grid gap-2 text-sm font-medium text-zinc-800">
              Email
              <input
                className="rounded-md border border-zinc-300 bg-white px-3 py-3 outline-none transition focus:border-teal-600"
                type="email"
                name="email"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-zinc-800">
              Password
              <input
                className="rounded-md border border-zinc-300 bg-white px-3 py-3 outline-none transition focus:border-teal-600"
                type="password"
                name="password"
              />
            </label>
            <button
              className="rounded-md bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
              type="button"
            >
              Login
            </button>
          </form>

          <p className="mt-6 text-sm text-zinc-600">
            New to Facturance?{" "}
            <Link href="/register" className="font-semibold text-teal-700">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
