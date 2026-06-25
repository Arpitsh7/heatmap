"use client";

import AuthShell, {
  AuthDivider,
  AuthMessage,
  GoogleButton,
} from "@/components/auth-shell";
import { createClient } from "@/lib/client";
import Link from "next/link";
import { FormEvent, useState } from "react";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function signUp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    if (password !== confirmPassword) {
      setIsError(true);
      setMessage("Passwords do not match.");
      return;
    }

    if (password.length < 8) {
      setIsError(true);
      setMessage("Password must be at least 8 characters.");
      return;
    }

    setIsLoading(true);

    const supabase = createClient();
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    setIsLoading(false);
    setIsError(Boolean(error));

    if (error) {
      setMessage(error.message);
      return;
    }

    window.location.assign("/platforms");
  }

  async function signInWithGoogle() {
    setIsLoading(true);
    setMessage("");

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/platforms`,
      },
    });

    if (error) {
      setIsError(true);
      setMessage(error.message);
      setIsLoading(false);
    }
  }

  return (
    <AuthShell
      eyebrow="Create your account"
      title="Sign up"
      subtitle={
        <>
          Already have an account?{" "}
          <Link className="font-bold text-[#b74667] hover:text-[#8e304e]" href="/auth">
            Sign in here
          </Link>
        </>
      }
    >
      <form className="space-y-5" onSubmit={signUp}>
        <label className="block">
          <span className="mb-2 block text-sm font-bold text-[#38221c]">
            Email address <span className="text-[#d55353]">*</span>
          </span>
          <input
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter email address"
            className="h-13 w-full rounded-lg border border-[#ddcfca] bg-white/58 px-4 text-sm font-semibold text-[#2f1b17] outline-none transition placeholder:font-normal placeholder:text-[#a9958e] focus:border-[#e7837d] focus:bg-white/78 focus:ring-4 focus:ring-[#f5b4a8]/20"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-bold text-[#38221c]">
            Password <span className="text-[#d55353]">*</span>
          </span>
          <input
            type="password"
            autoComplete="new-password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="At least 8 characters"
            className="h-13 w-full rounded-lg border border-[#ddcfca] bg-white/58 px-4 text-sm font-semibold text-[#2f1b17] outline-none transition placeholder:font-normal placeholder:text-[#a9958e] focus:border-[#e7837d] focus:bg-white/78 focus:ring-4 focus:ring-[#f5b4a8]/20"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-bold text-[#38221c]">
            Confirm password <span className="text-[#d55353]">*</span>
          </span>
          <input
            type="password"
            autoComplete="new-password"
            required
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            placeholder="Re-enter your password"
            className="h-13 w-full rounded-lg border border-[#ddcfca] bg-white/58 px-4 text-sm font-semibold text-[#2f1b17] outline-none transition placeholder:font-normal placeholder:text-[#a9958e] focus:border-[#e7837d] focus:bg-white/78 focus:ring-4 focus:ring-[#f5b4a8]/20"
          />
        </label>

        <AuthMessage message={message} isError={isError} />

        <button
          type="submit"
          disabled={isLoading}
          className="flex h-13 w-full items-center justify-center rounded-lg bg-[#2f1b17] px-5 text-sm font-black text-white shadow-[0_12px_24px_rgba(47,27,23,0.18)] transition hover:bg-[#43251f] disabled:cursor-wait disabled:opacity-65"
        >
          {isLoading ? "Creating account..." : "Create account"}
        </button>
      </form>

      <AuthDivider />
      <GoogleButton onClick={signInWithGoogle} disabled={isLoading}>
        Continue with Google
      </GoogleButton>
    </AuthShell>
  );
}