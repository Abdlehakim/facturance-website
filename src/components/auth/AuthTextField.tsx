"use client";

import type {
  ChangeEvent,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
} from "react";
import type { LucideIcon } from "lucide-react";

type AuthTextFieldProps = {
  label: string;
  icon: LucideIcon;
  type: HTMLInputTypeAttribute;
  name: string;
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  inputMode?: InputHTMLAttributes<HTMLInputElement>["inputMode"];
  autoComplete?: string;
};

export function AuthTextField({
  label,
  icon: Icon,
  type,
  name,
  placeholder,
  value,
  onChange,
  inputMode,
  autoComplete,
}: AuthTextFieldProps) {
  return (
    <label className="grid min-w-0 gap-2 text-sm font-semibold text-zinc-900">
      {label}
      <div className="relative min-w-0">
        <Icon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
        <input
          className="h-11 w-full min-w-0 rounded-xl border border-zinc-200 bg-white px-4 py-2.5 pl-11 text-sm text-zinc-950 shadow-sm outline-none transition placeholder:text-zinc-400 focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10"
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          inputMode={inputMode}
          autoComplete={autoComplete}
        />
      </div>
    </label>
  );
}