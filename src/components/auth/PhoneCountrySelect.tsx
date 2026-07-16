"use client";

import { useState } from "react";
import { CircleChevronDown, CircleChevronUp, Globe } from "lucide-react";
import type { PhoneCountryOption } from "./registerData";

type PhoneCountrySelectProps = {
  label: string;
  placeholder?: string;
  selectedCountry: string;
  selectedCode: string;
  options: readonly PhoneCountryOption[];
  onSelect: (option: PhoneCountryOption) => void;
};

export function PhoneCountrySelect({
  label,
  placeholder,
  selectedCountry,
  selectedCode,
  options,
  onSelect,
}: PhoneCountrySelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = options.find(
    (option) => option.country === selectedCountry,
  );

  const selectedLabel = selectedOption
    ? `${selectedOption.shortCode} (${selectedOption.code})`
    : placeholder ?? selectedCode;

  return (
    <label className="grid min-w-0 gap-2 text-sm font-semibold text-zinc-900">
      {label}

      <div
        className="relative min-w-0"
        onBlur={(event) => {
          const nextFocusedElement = event.relatedTarget as Node | null;

          if (!event.currentTarget.contains(nextFocusedElement)) {
            setIsOpen(false);
          }
        }}
      >
        <input
          type="hidden"
          name="phoneCountry"
          value={selectedCountry}
          readOnly
        />

        <button
          type="button"
          className="flex h-11 w-full min-w-0 items-center rounded-sm border border-zinc-200 bg-white px-3 py-2.5 pl-10 pr-10 text-left text-sm font-semibold text-zinc-950 shadow-sm outline-none transition hover:border-zinc-300 focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((currentValue) => !currentValue)}
        >
          <Globe className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />

          <span className="block truncate">{selectedLabel}</span>

          {isOpen ? (
            <CircleChevronUp className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-current" />
          ) : (
            <CircleChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-current" />
          )}
        </button>

        {isOpen ? (
          <div className="absolute left-0 right-0 top-full z-30 mt-2 overflow-hidden rounded-sm border border-zinc-200 bg-white shadow-2xl shadow-zinc-950/15 ring-1 ring-zinc-950/5">
            <div
              className="max-h-64 overflow-y-auto p-1"
              role="listbox"
              aria-label={label}
            >
              {options.map((option) => {
                const isSelected = option.country === selectedCountry;

                return (
                  <button
                    key={`${option.country}-${option.code}`}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition ${
                      isSelected
                        ? "bg-teal-600 font-semibold text-white"
                        : "text-zinc-700 hover:bg-teal-50 hover:text-zinc-950"
                    }`}
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => {
                      onSelect(option);
                      setIsOpen(false);
                    }}
                  >
                    <span className="truncate">{option.country}</span>
                    <span className="shrink-0 font-semibold">
                      {option.shortCode} ({option.code})
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </label>
  );
}
