import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Globe2,
  Headphones,
  LifeBuoy,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Facturance",
  description: "Contact the Facturance team.",
};

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@smartwebify.com",
    href: "mailto:contact@smartwebify.com",
    description: "For product questions, demos, and partnerships.",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+216 54 555 688",
    href: "https://wa.me/21654555688",
    description: "Fast contact for direct discussion and follow-up.",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+216 54 555 688",
    href: "tel:+21654555688",
    description: "Call us for urgent business inquiries.",
  },
  {
    icon: Globe2,
    label: "Website",
    value: "facturance.com",
    href: "https://facturance.com",
    description: "Explore the product, pricing, and platform direction.",
  },
];

const quickInfo = [
  {
    icon: MapPin,
    label: "Region",
    value: "Tunisia & International",
  },
  {
    icon: Clock3,
    label: "Response time",
    value: "Usually within 24 hours",
  },
  {
    icon: Building2,
    label: "Focus",
    value: "SaaS, desktop sync, and business operations",
  },
  {
    icon: CalendarDays,
    label: "Availability",
    value: "Product demos and technical discussions",
  },
];

const supportTopics = [
  "SaaS platform planning",
  "Desktop to cloud migration",
  "Multi-company architecture",
  "Pricing and subscription setup",
  "Business workflow automation",
  "Cloud, offline, and sync strategy",
];

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Secure discussion",
    description: "Your business needs and product plans stay confidential.",
  },
  {
    icon: Users,
    title: "Clear guidance",
    description: "We help you identify the right starting point before scaling.",
  },
  {
    icon: LifeBuoy,
    title: "Product support",
    description: "Ask about setup, features, roadmap, or technical direction.",
  },
];

export default function ContactPage() {
  return (
    <section className="select-none bg-white">
      <div className="relative overflow-hidden border-b border-zinc-200 bg-[#f7fbfa]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20px_20px,rgba(0,127,109,0.07)_1.2px,transparent_1.2px)] bg-size-[28px_28px]" />
        <div className="absolute -right-32 -top-32 h-120 w-120 rounded-full bg-teal-100 blur-3xl" />
        <div className="absolute -bottom-32 left-0 h-88 w-88 rounded-full bg-emerald-50 blur-3xl" />

        <div className="relative mx-auto grid w-full max-w-304 gap-12 px-6 py-20 lg:grid-cols-[0.92fr_1.08fr] lg:items-center xl:px-0">
          <div>
            <div className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#bde7df] bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#007f6d] shadow-sm transition hover:-translate-y-0.5 hover:border-[#8edbd0]">
              <Sparkles size={15} strokeWidth={2.6} />
              Contact Facturance
            </div>

            <h1 className="mt-6 max-w-150 text-[42px] font-extrabold leading-[1.06] tracking-[-0.035em] text-zinc-950 sm:text-[40px]">
              Build your finance platform with a clear path.
            </h1>

            <p className="mt-6 max-w-140 text-lg leading-8 text-zinc-600">
              Tell us what you are planning and the Facturance team will help
              you evaluate the right starting point for your business,
              platform, or workflow.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="https://wa.me/21654555688"
                target="_blank"
                className="inline-flex h-14 cursor-pointer items-center justify-center gap-3 rounded-2xl bg-[#007f6d] px-6 text-sm font-extrabold text-white shadow-xl shadow-teal-900/15 transition hover:-translate-y-0.5 hover:bg-[#006f5f]"
              >
                <MessageCircle size={20} strokeWidth={2.6} />
                WhatsApp us
              </Link>

              <Link
                href="mailto:contact@smartwebify.com"
                className="inline-flex h-14 cursor-pointer items-center justify-center gap-3 rounded-2xl border border-zinc-300 bg-white px-6 text-sm font-extrabold text-zinc-950 shadow-sm transition hover:-translate-y-0.5 hover:border-[#007f6d] hover:text-[#007f6d]"
              >
                <Mail size={19} strokeWidth={2.6} />
                Send email
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {contactMethods.map((method) => {
              const Icon = method.icon;

              return (
                <Link
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  className="group rounded-4xl border border-zinc-200 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:border-[#8edbd0] hover:shadow-[0_26px_75px_rgba(0,127,109,0.12)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid size-13 place-items-center rounded-2xl bg-[#eefbf8] text-[#007f6d] transition group-hover:bg-[#007f6d] group-hover:text-white">
                      <Icon size={23} strokeWidth={2.5} />
                    </span>

                    <ArrowRight
                      size={18}
                      strokeWidth={2.7}
                      className="mt-1 text-zinc-400 transition group-hover:translate-x-1 group-hover:text-[#007f6d]"
                    />
                  </div>

                  <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.16em] text-[#007f6d]">
                    {method.label}
                  </p>

                  <h2 className="mt-2 text-xl font-extrabold tracking- text-zinc-950">
                    {method.value}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-zinc-600">
                    {method.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-304 gap-10 px-6 py-18 lg:grid-cols-[0.88fr_1.12fr] xl:px-0">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#007f6d]">
            Contact details
          </p>

          <h2 className="mt-3 text-4xl font-extrabold leading-tight tracking-[-0.04em] text-zinc-950">
            Choose the fastest way to reach us.
          </h2>

          <p className="mt-5 max-w-130 text-base leading-8 text-zinc-600">
            Whether you need a demo, pricing clarification, technical planning,
            or support, use the channel that fits your request.
          </p>

          <div className="mt-8 grid gap-4">
            {quickInfo.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex items-center gap-4 rounded-3xl border border-zinc-200 bg-[#f8fbfa] p-5"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white text-[#007f6d] shadow-sm">
                    <Icon size={22} strokeWidth={2.5} />
                  </span>

                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-zinc-500">
                      {item.label}
                    </p>
                    <p className="mt-1 font-bold text-zinc-900">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <form className="rounded-4xl border border-zinc-200 bg-[#f8fbfa] p-6 shadow-[0_24px_70px_rgba(15,23,42,0.07)] sm:p-8">
          <div className="mb-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#007f6d] shadow-sm">
              <Send size={14} strokeWidth={2.7} />
              Send a message
            </div>

            <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.035em] text-zinc-950">
              Tell us about your project.
            </h2>

            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Share your business need, current workflow, and what you want to
              build with Facturance.
            </p>
          </div>

          <div className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-zinc-800">
                Name
                <input
                  className="h-13 rounded-2xl border border-zinc-300 bg-white px-4 text-sm outline-none transition placeholder:text-zinc-400 focus:border-[#007f6d] focus:ring-4 focus:ring-[#007f6d]/10"
                  type="text"
                  name="name"
                  placeholder="Your name"
                />
              </label>

              <label className="grid gap-2 text-sm font-bold text-zinc-800">
                Email
                <input
                  className="h-13 rounded-2xl border border-zinc-300 bg-white px-4 text-sm outline-none transition placeholder:text-zinc-400 focus:border-[#007f6d] focus:ring-4 focus:ring-[#007f6d]/10"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-zinc-800">
                Phone / WhatsApp
                <input
                  className="h-13 rounded-2xl border border-zinc-300 bg-white px-4 text-sm outline-none transition placeholder:text-zinc-400 focus:border-[#007f6d] focus:ring-4 focus:ring-[#007f6d]/10"
                  type="tel"
                  name="phone"
                  placeholder="+216 ..."
                />
              </label>

              <label className="grid gap-2 text-sm font-bold text-zinc-800">
                Company
                <input
                  className="h-13 rounded-2xl border border-zinc-300 bg-white px-4 text-sm outline-none transition placeholder:text-zinc-400 focus:border-[#007f6d] focus:ring-4 focus:ring-[#007f6d]/10"
                  type="text"
                  name="company"
                  placeholder="Company name"
                />
              </label>
            </div>

            <label className="grid gap-2 text-sm font-bold text-zinc-800">
              What do you need?
              <select
                className="h-13 rounded-2xl border border-zinc-300 bg-white px-4 text-sm outline-none transition focus:border-[#007f6d] focus:ring-4 focus:ring-[#007f6d]/10"
                name="topic"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a topic
                </option>
                <option value="demo">Product demo</option>
                <option value="pricing">Pricing question</option>
                <option value="support">Support</option>
                <option value="migration">Desktop to cloud migration</option>
                <option value="partnership">Partnership</option>
                <option value="other">Other</option>
              </select>
            </label>

            <label className="grid gap-2 text-sm font-bold text-zinc-800">
              Message
              <textarea
                className="min-h-38 resize-none rounded-2xl border border-zinc-300 bg-white px-4 py-4 text-sm leading-6 outline-none transition placeholder:text-zinc-400 focus:border-[#007f6d] focus:ring-4 focus:ring-[#007f6d]/10"
                name="message"
                placeholder="Tell us about your project, current workflow, or question..."
              />
            </label>

            <button
              className="inline-flex h-14 cursor-pointer items-center justify-center gap-3 rounded-2xl bg-[#007f6d] px-7 text-sm font-extrabold text-white shadow-xl shadow-teal-900/15 transition hover:-translate-y-0.5 hover:bg-[#006f5f]"
              type="button"
            >
              Send message
              <ArrowRight size={19} strokeWidth={2.8} />
            </button>

            <p className="text-center text-xs leading-5 text-zinc-500">
              The form is ready visually. Connect it later to your email,
              backend API, or CRM.
            </p>
          </div>
        </form>
      </div>

      <div className="bg-[#eaf8f5]">
        <div className="mx-auto w-full max-w-304 px-6 py-18 xl:px-0">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#007f6d]">
                We can help with
              </p>

              <h2 className="mt-3 text-4xl font-extrabold tracking-[-0.04em] text-zinc-950">
                Product, support, and platform questions.
              </h2>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-[#bde7df] bg-white px-4 py-2 text-sm font-extrabold text-[#007f6d]">
              <BadgeCheck size={18} strokeWidth={2.6} />
              Clear technical discussion
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {supportTopics.map((topic) => (
              <div
                key={topic}
                className="flex cursor-pointer items-center gap-4 rounded-3xl border border-[#bde7df] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-teal-900/8"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-[#007f6d] text-white">
                  <CheckCircle2 size={21} strokeWidth={2.7} />
                </span>

                <p className="font-bold leading-7 text-zinc-800">{topic}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-304 px-6 py-20 xl:px-0">
        <div className="grid gap-5 md:grid-cols-3">
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-4xl border border-zinc-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:border-[#8edbd0] hover:shadow-[0_26px_75px_rgba(0,127,109,0.11)]"
              >
                <span className="grid size-14 place-items-center rounded-2xl bg-[#eefbf8] text-[#007f6d] transition group-hover:bg-[#007f6d] group-hover:text-white">
                  <Icon size={25} strokeWidth={2.5} />
                </span>

                <h3 className="mt-5 text-xl font-extrabold tracking-normal text-zinc-950">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 relative overflow-hidden rounded-4xl bg-linear-to-br from-[#00342e] via-[#005f52] to-[#00917b] p-8 text-white shadow-[0_30px_90px_rgba(0,63,54,0.26)] sm:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20px_20px,rgba(255,255,255,0.13)_1.2px,transparent_1.2px)] bg-size-[28px_28px] opacity-35" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-emerald-300">
                <Headphones size={15} strokeWidth={2.7} />
                Need faster help?
              </div>

              <h2 className="mt-5 max-w-170 text-4xl font-extrabold leading-tight tracking-[-0.04em]">
                Talk directly with the Facturance team.
              </h2>

              <p className="mt-4 max-w-150 text-base leading-8 text-white/78">
                Use WhatsApp for fast contact, or email us with project details
                if your request needs deeper review.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="https://wa.me/21654555688"
                target="_blank"
                className="inline-flex h-14 shrink-0 cursor-pointer items-center justify-center gap-3 rounded-2xl bg-white px-7 text-sm font-extrabold text-[#007f6d] shadow-xl shadow-black/10 transition hover:-translate-y-0.5"
              >
                WhatsApp
                <MessageCircle size={19} strokeWidth={2.7} />
              </Link>

              <Link
                href="mailto:contact@smartwebify.com"
                className="inline-flex h-14 shrink-0 cursor-pointer items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/8 px-7 text-sm font-extrabold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/12"
              >
                Email
                <Mail size={19} strokeWidth={2.7} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}