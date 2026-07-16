"use client";

import { useId, useState, type ChangeEvent } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";

type AuthPasswordFieldProps = {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: string;
  showPasswordLabel: string;
  hidePasswordLabel: string;
};

export function AuthPasswordField({
  label,
  name,
  placeholder,
  value,
  onChange,
  autoComplete,
  showPasswordLabel,
  hidePasswordLabel,
}: AuthPasswordFieldProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const inputId = useId();

  const visibilityButtonLabel = isPasswordVisible
    ? hidePasswordLabel
    : showPasswordLabel;

  return (
    <div className="grid min-w-0 gap-2 text-sm font-semibold text-zinc-900">
      <label htmlFor={inputId}>{label}</label>

      <div className="relative min-w-0">
        <Lock
          className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400"
          aria-hidden="true"
        />

        <input
          className="h-11 w-full min-w-0 rounded-sm border border-zinc-200 bg-white px-4 py-2.5 pl-11 pr-11 text-sm text-zinc-950 shadow-sm outline-none transition placeholder:text-zinc-400 focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10"
          id={inputId}
          type={isPasswordVisible ? "text" : "password"}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
        />

        <button
          className="absolute right-3 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-sm text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600/30"
          type="button"
          aria-label={visibilityButtonLabel}
          aria-pressed={isPasswordVisible}
          title={visibilityButtonLabel}
          onClick={() =>
            setIsPasswordVisible((currentValue) => !currentValue)
          }
        >
          {isPasswordVisible ? (
            <EyeOff className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Eye className="h-4 w-4" aria-hidden="true" />
          )}
        </button>
      </div>
    </div>
  );
}
