"use client";

import Link from "next/link";
import { ReactNode, useState } from "react";

const trees = [
  { left: "2%", scale: 1.1, dark: true },
  { left: "12%", scale: 0.7 },
  { left: "81%", scale: 1.25, dark: true },
  { left: "92%", scale: 0.82 },
];

function Tree({
  left,
  scale,
  dark,
}: {
  left: string;
  scale: number;
  dark?: boolean;
}) {
  const color = dark ? "#286d2c" : "#438d39";

  return (
    <div
      className="absolute bottom-8 h-40 w-20 origin-bottom"
      style={{ left, transform: `scale(${scale})` }}
    >
      <span className="absolute bottom-0 left-1/2 h-12 w-3 -translate-x-1/2 bg-[#986233]" />
      <span
        className="absolute bottom-7 left-1/2 h-0 w-0 -translate-x-1/2 border-x-[42px] border-b-[58px] border-x-transparent"
        style={{ borderBottomColor: color }}
      />
      <span
        className="absolute bottom-13 left-1/2 h-0 w-0 -translate-x-1/2 border-x-[34px] border-b-[52px] border-x-transparent"
        style={{ borderBottomColor: color }}
      />
      <span
        className="absolute bottom-19 left-1/2 h-0 w-0 -translate-x-1/2 border-x-[25px] border-b-[45px] border-x-transparent"
        style={{ borderBottomColor: color }}
      />
    </div>
  );
}

function Cloud({ className }: { className: string }) {
  return (
    <span
      className={`auth-cloud absolute h-10 rounded-full bg-white/75 ${className}`}
    >
      <span className="absolute -top-5 left-7 h-12 w-12 rounded-full bg-white/75" />
      <span className="absolute -top-3 right-8 h-9 w-9 rounded-full bg-white/70" />
    </span>
  );
}

export default function AuthShell({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle: ReactNode;
  children: ReactNode;
}) {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#c7e8f4] px-4 py-12 font-sans text-[#2f1b17] sm:py-16">
      <style>{`
        @keyframes auth-cloud-drift {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(16px); }
        }
        @keyframes auth-grass-sway {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(5deg); }
        }
        .auth-cloud { animation: auth-cloud-drift 10s ease-in-out infinite; }
      `}</style>

      <div className="absolute inset-0 bg-gradient-to-b from-[#c9eaff] via-[#dcebd6] to-[#90bc70]" />
      <Cloud className="left-[13%] top-[12%] w-36" />
      <Cloud className="right-[15%] top-[9%] w-44 [animation-delay:-4s]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-[#7dae62]" />
      <div className="absolute inset-x-0 bottom-22 h-14 bg-[#9bc67c]" />

      {trees.map((tree) => (
        <Tree key={tree.left} {...tree} />
      ))}

      <div className="absolute inset-x-0 bottom-0 h-12">
        {Array.from({ length: 72 }, (_, index) => (
          <span
            key={index}
            className="absolute bottom-0 w-1 origin-bottom rounded-t-full bg-[#51b83a]"
            style={{
              left: `${index * 1.4}%`,
              height: 12 + (index % 5) * 4,
              animation: `auth-grass-sway 2.4s ease-in-out infinite ${(index % 7) * 0.2}s`,
            }}
          />
        ))}
      </div>

      <Link
        href="/"
        className="absolute left-5 top-5 z-20 flex items-center gap-2 rounded-full border border-white/70 bg-white/40 px-4 py-2 shadow-sm backdrop-blur-xl sm:left-8 sm:top-8"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[#ff817b]" />
        <span className="text-sm font-black">Heatstack</span>
      </Link>

      <section className="relative z-10 w-full max-w-[500px] overflow-hidden rounded-[18px] border border-white/75 bg-white/48 p-6 shadow-[0_32px_100px_rgba(60,30,20,0.22),inset_0_1px_0_rgba(255,255,255,0.86)] backdrop-blur-3xl backdrop-saturate-200 sm:p-9">
        <div className="pointer-events-none absolute -left-32 -top-36 h-72 w-72 rounded-full bg-[#ec78bd]/35 blur-[62px]" />
        <div className="pointer-events-none absolute -bottom-44 -right-36 h-80 w-80 rounded-full bg-[#fb923c]/30 blur-[70px]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/50 to-transparent" />

        <div className="relative">
          <p className="mb-3 text-[10px] font-black uppercase tracking-[0.16em] text-[#9b6b60]">
            {eyebrow}
          </p>
          <h1 className="text-3xl font-black tracking-normal text-[#251511] sm:text-4xl">
            {title}
          </h1>
          <p className="mt-2 border-b border-white/70 pb-5 text-sm text-[#6f5d57]">
            {subtitle}
          </p>

          <div className="pt-6">{children}</div>
        </div>
      </section>
    </main>
  );
}

export function PasswordField({
  value,
  onChange,
  action,
}: {
  value: string;
  onChange: (value: string) => void;
  action?: ReactNode;
}) {
  const [visible, setVisible] = useState(false);

  return (
    <label className="block">
      <span className="mb-2 flex items-center justify-between gap-3 text-sm font-bold text-[#38221c]">
        Password
        {action}
      </span>
      <span className="relative block">
        <input
          type={visible ? "text" : "password"}
          autoComplete="current-password"
          required
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Enter password"
          className="h-13 w-full rounded-lg border border-[#ddcfca] bg-white/58 px-4 pr-12 text-sm font-semibold text-[#2f1b17] outline-none transition placeholder:font-normal placeholder:text-[#a9958e] focus:border-[#e7837d] focus:bg-white/78 focus:ring-4 focus:ring-[#f5b4a8]/20"
        />
        <button
          type="button"
          onClick={() => setVisible((current) => !current)}
          aria-label={visible ? "Hide password" : "Show password"}
          title={visible ? "Hide password" : "Show password"}
          className="absolute right-1 top-1 flex h-11 w-11 items-center justify-center text-[#9b8882] hover:text-[#2f1b17]"
        >
          <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
            <path d="M2.7 12s3.4-5.2 9.3-5.2S21.3 12 21.3 12s-3.4 5.2-9.3 5.2S2.7 12 2.7 12Z" stroke="currentColor" strokeWidth="1.7" />
            <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.7" />
          </svg>
        </button>
      </span>
    </label>
  );
}

export function AuthDivider() {
  return (
    <div className="my-6 flex items-center gap-4">
      <span className="h-px flex-1 bg-[#d9cbc6]" />
      <span className="text-xs font-bold text-[#7f6f69]">Or continue with</span>
      <span className="h-px flex-1 bg-[#d9cbc6]" />
    </div>
  );
}

export function GoogleButton({
  children,
  onClick,
  disabled,
}: {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="flex h-13 w-full items-center justify-center gap-3 rounded-lg border border-[#d8cac5] bg-white/55 text-sm font-bold text-[#38221c] transition hover:bg-white/80 disabled:cursor-wait disabled:opacity-65"
    >
      <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.8 3-4.3 3-7.3Z" />
        <path fill="#34A853" d="M12 22c2.7 0 5-.9 6.6-2.4L15.4 17c-.9.6-2 1-3.4 1a5.8 5.8 0 0 1-5.5-4H3.2v2.6A10 10 0 0 0 12 22Z" />
        <path fill="#FBBC05" d="M6.5 14a6 6 0 0 1 0-3.9V7.5H3.2A10 10 0 0 0 2 12c0 1.6.4 3.1 1.2 4.5L6.5 14Z" />
        <path fill="#EA4335" d="M12 6c1.5 0 2.9.5 4 1.6l3-3A10 10 0 0 0 3.2 7.5l3.3 2.6A5.8 5.8 0 0 1 12 6Z" />
      </svg>
      {children}
    </button>
  );
}

export function AuthMessage({
  message,
  isError,
}: {
  message: string;
  isError: boolean;
}) {
  if (!message) return null;

  return (
    <p
      role="status"
      className={`rounded-lg border px-3 py-2 text-xs font-semibold leading-5 ${
        isError
          ? "border-[#e7a09b] bg-[#fff1ef]/65 text-[#a33f3f]"
          : "border-[#9ac592] bg-[#eff9ed]/65 text-[#356c31]"
      }`}
    >
      {message}
    </p>
  );
}
