"use client";

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Globe,
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
import { useTranslation } from "@/i18n/useTranslation";

export function ContactPageContent() {
  const { t } = useTranslation();

  const contactMethods = [
    {
      icon: Mail,
      value: "contact@smartwebify.com",
      href: "mailto:contact@smartwebify.com",
      ...t.contact.methods[0],
    },
    {
      icon: MessageCircle,
      value: "+216 54 555 688",
      href: "https://wa.me/21654555688",
      ...t.contact.methods[1],
    },
    {
      icon: Phone,
      value: "+216 54 555 688",
      href: "tel:+21654555688",
      ...t.contact.methods[2],
    },
    {
      icon: Globe,
      value: "facturance.com",
      href: "https://facturance.com",
      ...t.contact.methods[3],
    },
  ];

  const quickInfo = [
    { icon: MapPin, ...t.contact.quickInfo[0] },
    { icon: Clock3, ...t.contact.quickInfo[1] },
    { icon: Building2, ...t.contact.quickInfo[2] },
    { icon: CalendarDays, ...t.contact.quickInfo[3] },
  ];

  const supportTopics = t.contact.support.topics;

  const trustItems = [
    { icon: ShieldCheck, ...t.contact.support.trustCards[0] },
    { icon: Users, ...t.contact.support.trustCards[1] },
    { icon: LifeBuoy, ...t.contact.support.trustCards[2] },
  ];

  return (
    <section className="select-none overflow-hidden bg-white">
      <div className="relative overflow-hidden border-b border-zinc-200 bg-surface-soft">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20px_20px,rgba(0,127,109,0.07)_1.2px,transparent_1.2px)] bg-size-[28px_28px]" />
        <div className="absolute -right-36 -top-36 h-72 w-72 rounded-full bg-teal-100 blur-3xl sm:h-96 sm:w-96 lg:h-120 lg:w-120" />
        <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-emerald-50 blur-3xl sm:h-88 sm:w-88" />

        <div className="relative mx-auto grid w-full max-w-304 gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-12 lg:py-20 xl:px-0">
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-start">
            <div className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border-brand bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-normal text-brand-primary shadow-sm transition hover:-translate-y-0.5 hover:border-border-brand-hover">
              <Sparkles size={15} strokeWidth={2.6} />
              {t.contact.hero.badge}
            </div>

            <h1 className="mt-5 text-[clamp(2.25rem,9vw,3.55rem)] font-extrabold leading-[1.06] tracking-normal text-zinc-950 sm:mt-6 lg:max-w-150">
              {t.contact.hero.title}
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-zinc-600 sm:mt-6 sm:text-lg sm:leading-8 lg:mx-0 lg:max-w-140">
              {t.contact.hero.description}
            </p>

            <div className="mt-7 grid gap-3 sm:mx-auto sm:max-w-md sm:grid-cols-2 lg:mx-0 lg:flex lg:max-w-none lg:flex-wrap">
              <Link
                href="https://wa.me/21654555688"
                target="_blank"
                className="btn btn-primary btn-lg w-full sm:w-auto"
              >
                <MessageCircle size={20} strokeWidth={2.6} />
                {t.contact.hero.whatsappButton}
              </Link>

              <Link
                href="mailto:contact@smartwebify.com"
                className="btn btn-outline btn-lg w-full sm:w-auto"
              >
                <Mail size={19} strokeWidth={2.6} />
                {t.contact.hero.emailButton}
              </Link>
            </div>
          </div>

          <div className="grid min-w-0 gap-4 sm:grid-cols-2">
            {contactMethods.map((method) => {
              const Icon = method.icon;

              return (
                <Link
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  className="group min-w-0 overflow-hidden rounded-3xl border border-zinc-200 bg-white p-5 shadow-[0_18px_55px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:border-border-brand-hover hover:shadow-[0_26px_75px_rgba(0,127,109,0.12)] sm:rounded-4xl sm:p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand-muted text-brand-primary transition group-hover:bg-brand-primary group-hover:text-white sm:size-13">
                      <Icon size={23} strokeWidth={2.5} />
                    </span>

                    <ArrowRight
                      size={18}
                      strokeWidth={2.7}
                      className="mt-1 shrink-0 text-zinc-400 transition group-hover:translate-x-1 group-hover:text-brand-primary"
                    />
                  </div>

                  <p className="mt-5 text-xs font-extrabold uppercase tracking-normal text-brand-primary">
                    {method.label}
                  </p>

                  <h2 className="mt-2 min-w-0 break-words text-lg font-extrabold tracking-normal text-zinc-950 sm:text-xl">
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

      <div className="mx-auto grid w-full max-w-304 gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12 lg:py-18 xl:px-0">
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-start">
          <p className="text-sm font-extrabold uppercase tracking-normal text-brand-primary">
            {t.contact.details.badge}
          </p>

          <h2 className="mt-3 text-[clamp(2rem,7vw,2.75rem)] font-extrabold leading-tight tracking-normal text-zinc-950">
            {t.contact.details.title}
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-zinc-600 lg:mx-0 lg:max-w-130">
            {t.contact.details.description}
          </p>

          <div className="mt-8 grid gap-4 text-start">
            {quickInfo.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex min-w-0 items-start gap-4 rounded-3xl border border-zinc-200 bg-surface-muted p-4 sm:items-center sm:p-5"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-white text-brand-primary shadow-sm sm:size-12">
                    <Icon size={22} strokeWidth={2.5} />
                  </span>

                  <div className="min-w-0">
                    <p className="text-xs font-extrabold uppercase tracking-normal text-zinc-500">
                      {item.label}
                    </p>
                    <p className="mt-1 break-words font-bold leading-6 text-zinc-900">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <form className="rounded-3xl border border-zinc-200 bg-surface-muted p-5 shadow-[0_24px_70px_rgba(15,23,42,0.07)] sm:rounded-4xl sm:p-8">
          <div className="mb-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-normal text-brand-primary shadow-sm">
              <Send size={14} strokeWidth={2.7} />
              {t.contact.form.badge}
            </div>

            <h2 className="mt-5 text-[clamp(1.75rem,7vw,2.25rem)] font-extrabold leading-tight tracking-normal text-zinc-950">
              {t.contact.form.title}
            </h2>

            <p className="mt-3 text-sm leading-6 text-zinc-600">
              {t.contact.form.description}
            </p>
          </div>

          <div className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-zinc-800">
                {t.contact.form.labels.name}
                <input
                  className="h-12 rounded-2xl border border-zinc-300 bg-white px-4 text-sm outline-none transition placeholder:text-zinc-400 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 sm:h-13"
                  type="text"
                  name="name"
                  placeholder={t.contact.form.placeholders.name}
                />
              </label>

              <label className="grid gap-2 text-sm font-bold text-zinc-800">
                {t.contact.form.labels.email}
                <input
                  className="h-12 rounded-2xl border border-zinc-300 bg-white px-4 text-sm outline-none transition placeholder:text-zinc-400 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 sm:h-13"
                  type="email"
                  name="email"
                  placeholder={t.contact.form.placeholders.email}
                />
              </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-zinc-800">
                {t.contact.form.labels.phone}
                <input
                  className="h-12 rounded-2xl border border-zinc-300 bg-white px-4 text-sm outline-none transition placeholder:text-zinc-400 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 sm:h-13"
                  type="tel"
                  name="phone"
                  placeholder={t.contact.form.placeholders.phone}
                />
              </label>

              <label className="grid gap-2 text-sm font-bold text-zinc-800">
                {t.contact.form.labels.company}
                <input
                  className="h-12 rounded-2xl border border-zinc-300 bg-white px-4 text-sm outline-none transition placeholder:text-zinc-400 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 sm:h-13"
                  type="text"
                  name="company"
                  placeholder={t.contact.form.placeholders.company}
                />
              </label>
            </div>

            <label className="grid gap-2 text-sm font-bold text-zinc-800">
              {t.contact.form.labels.topic}
              <select
                className="h-12 rounded-2xl border border-zinc-300 bg-white px-4 text-sm outline-none transition focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 sm:h-13"
                name="topic"
                defaultValue=""
              >
                <option value="" disabled>
                  {t.contact.form.placeholders.topic}
                </option>
                {t.contact.form.topicOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-2 text-sm font-bold text-zinc-800">
              {t.contact.form.labels.message}
              <textarea
                className="min-h-36 resize-none rounded-2xl border border-zinc-300 bg-white px-4 py-4 text-sm leading-6 outline-none transition placeholder:text-zinc-400 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 sm:min-h-38"
                name="message"
                placeholder={t.contact.form.placeholders.message}
              />
            </label>

            <button className="btn btn-primary btn-lg w-full sm:w-auto" type="button">
              {t.contact.form.submit}
              <ArrowRight size={19} strokeWidth={2.8} />
            </button>

            <p className="text-center text-xs leading-5 text-zinc-500">
              {t.contact.form.visualNote}
            </p>
          </div>
        </form>
      </div>

      <div className="bg-surface-brand">
        <div className="mx-auto w-full max-w-304 px-4 py-14 sm:px-6 sm:py-16 lg:py-18 xl:px-0">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-extrabold uppercase tracking-normal text-brand-primary">
                {t.contact.support.badge}
              </p>

              <h2 className="mt-3 text-[clamp(2rem,7vw,2.75rem)] font-extrabold leading-tight tracking-normal text-zinc-950">
                {t.contact.support.title}
              </h2>
            </div>

            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border-brand bg-white px-4 py-2 text-sm font-extrabold text-brand-primary">
              <BadgeCheck size={18} strokeWidth={2.6} />
              {t.contact.support.discussionBadge}
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3">
            {supportTopics.map((topic) => (
              <div
                key={topic}
                className="flex cursor-pointer items-start gap-4 rounded-3xl border border-border-brand bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-teal-900/8 sm:items-center sm:p-5"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-brand-primary text-white">
                  <CheckCircle2 size={21} strokeWidth={2.7} />
                </span>

                <p className="font-bold leading-7 text-zinc-800">{topic}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-304 px-4 py-14 sm:px-6 sm:py-16 lg:py-20 xl:px-0">
        <div className="grid gap-5 md:grid-cols-3">
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-zinc-200 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:border-border-brand-hover hover:shadow-[0_26px_75px_rgba(0,127,109,0.11)] sm:rounded-4xl sm:p-6"
              >
                <span className="grid size-13 place-items-center rounded-2xl bg-brand-muted text-brand-primary transition group-hover:bg-brand-primary group-hover:text-white sm:size-14">
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

        <div className="relative mt-10 overflow-hidden rounded-3xl bg-linear-to-br from-brand-deep via-brand-forest to-brand-vivid p-5 text-white shadow-[0_30px_90px_rgba(0,63,54,0.26)] sm:rounded-4xl sm:p-8 lg:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20px_20px,rgba(255,255,255,0.13)_1.2px,transparent_1.2px)] bg-size-[28px_28px] opacity-35" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-4 py-2 text-xs font-extrabold uppercase tracking-normal text-emerald-300">
                <Headphones size={15} strokeWidth={2.7} />
                {t.contact.bottomCta.badge}
              </div>

              <h2 className="mt-5 max-w-170 text-[clamp(2rem,7vw,2.75rem)] font-extrabold leading-tight tracking-normal">
                {t.contact.bottomCta.title}
              </h2>

              <p className="mt-4 max-w-150 text-base leading-8 text-white/78">
                {t.contact.bottomCta.description}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:flex lg:flex-wrap lg:justify-end">
              <Link
                href="https://wa.me/21654555688"
                target="_blank"
                className="btn btn-white btn-lg w-full shrink-0 sm:w-auto"
              >
                {t.contact.bottomCta.whatsapp}
                <MessageCircle size={19} strokeWidth={2.7} />
              </Link>

              <Link
                href="mailto:contact@smartwebify.com"
                className="btn btn-outline btn-lg w-full shrink-0 sm:w-auto"
              >
                {t.contact.bottomCta.email}
                <Mail size={19} strokeWidth={2.7} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
