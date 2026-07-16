"use client";

import { useState } from "react";
import {
  BriefcaseBusiness,
  CircleChevronDown,
  CircleChevronUp,
} from "lucide-react";
import type { SelectablePlanId } from "@/lib/plans";

export type PlanSelectOption = {
  id: SelectablePlanId;
  label: string;
};

type PlanSelectProps = {
  label: string;
  selectedPlan: SelectablePlanId;
  options: readonly PlanSelectOption[];
  disabled?: boolean;
  onSelect: (planId: SelectablePlanId) => void;
};

export function PlanSelect({
  label,
  selectedPlan,
  options,
  disabled,
  onSelect,
}: PlanSelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = options.find(
    (option) => option.id === selectedPlan,
  );

  const selectedLabel = selectedOption?.label ?? selectedPlan;

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
        <input type="hidden" name="planId" value={selectedPlan} readOnly />

        <button
          type="button"
          className="flex h-11 w-full min-w-0 items-center rounded-sm border border-zinc-200 bg-white px-3 py-2.5 pl-10 pr-10 text-left text-sm font-semibold text-zinc-950 shadow-sm outline-none transition hover:border-zinc-300 focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10 disabled:cursor-not-allowed disabled:bg-zinc-100 disabled:opacity-60"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-label={label}
          disabled={disabled}
          onClick={() => {
            if (!disabled) {
              setIsOpen((currentValue) => !currentValue);
            }
          }}
        >
          <BriefcaseBusiness
            className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400"
            aria-hidden="true"
          />

          <span className="block truncate">{selectedLabel}</span>

          {isOpen ? (
            <CircleChevronUp
              className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-current"
              aria-hidden="true"
            />
          ) : (
            <CircleChevronDown
              className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-current"
              aria-hidden="true"
            />
          )}
        </button>

        {isOpen && !disabled ? (
          <div className="absolute left-0 right-0 top-full z-30 mt-2 overflow-hidden rounded-sm border border-zinc-200 bg-white shadow-2xl shadow-zinc-950/15 ring-1 ring-zinc-950/5">
            <div
              className="max-h-64 overflow-y-auto p-1"
              role="listbox"
              aria-label={label}
            >
              {options.map((option) => {
                const isSelected = option.id === selectedPlan;

                return (
                  <button
                    key={option.id}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    className={`flex w-full items-center rounded-lg px-3 py-2.5 text-left text-sm transition ${
                      isSelected
                        ? "bg-teal-600 font-semibold text-white"
                        : "text-zinc-700 hover:bg-teal-50 hover:text-zinc-950"
                    }`}
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => {
                      onSelect(option.id);
                      setIsOpen(false);
                    }}
                  >
                    <span className="truncate">{option.label}</span>
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
