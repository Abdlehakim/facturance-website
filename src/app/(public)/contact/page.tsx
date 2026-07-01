import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Facturance",
  description: "Contact the Facturance team.",
};

export default function ContactPage() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase text-teal-700">
            Contact
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-normal text-zinc-950">
            Build your finance platform with a clear path.
          </h1>
          <p className="mt-4 text-base leading-7 text-zinc-600">
            Tell us what you are planning and the Facturance team will help you
            evaluate the right starting point.
          </p>
          <div className="mt-8 rounded-lg border border-zinc-200 bg-[#f7f9fc] p-5 text-sm leading-6 text-zinc-700">
            <p>Email: hello@facturance.com</p>
            <p>Region: International</p>
            <p>Focus: SaaS, desktop sync, and business operations</p>
          </div>
        </div>

        <form className="rounded-lg border border-zinc-200 bg-[#f7f9fc] p-6">
          <div className="grid gap-5">
            <label className="grid gap-2 text-sm font-medium text-zinc-800">
              Name
              <input
                className="rounded-md border border-zinc-300 bg-white px-3 py-3 outline-none transition focus:border-teal-600"
                type="text"
                name="name"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-zinc-800">
              Email
              <input
                className="rounded-md border border-zinc-300 bg-white px-3 py-3 outline-none transition focus:border-teal-600"
                type="email"
                name="email"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-zinc-800">
              Message
              <textarea
                className="min-h-32 rounded-md border border-zinc-300 bg-white px-3 py-3 outline-none transition focus:border-teal-600"
                name="message"
              />
            </label>
            <button
              className="rounded-md bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
              type="button"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
