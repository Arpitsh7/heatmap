"use client";

import AuthShell, {
  AuthDivider,
  AuthMessage,
  GoogleButton,
  PasswordField,
} from "@/components/auth-shell";
import { createClient } from "@/lib/client";
import Link from "next/link";
import { FormEvent, useState } from "react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function signIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setMessage("");

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setIsError(true);
      setMessage(error.message);
      setIsLoading(false);
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

  async function resetPassword() {
    if (!email) {
      setIsError(true);
      setMessage("Enter your email address first.");
      return;
    }

    setIsLoading(true);
    setMessage("");

    const supabase = createClient();
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth`,
    });

    setIsLoading(false);
    setIsError(Boolean(error));
    setMessage(
      error?.message ?? "Password reset instructions have been sent to your email.",
    );
  }

  return (
    <AuthShell
      eyebrow="Welcome back"
      title="Sign in"
      subtitle={
        <>
          Don&apos;t have an account yet?{" "}
          <Link className="font-bold text-[#b74667] hover:text-[#8e304e]" href="/auth/signup">
            Sign up here
          </Link>
        </>
      }
    >
      <form className="space-y-5" onSubmit={signIn}>
        <label className="block">
          <span className="mb-2 block text-sm font-bold text-[#38221c]">
            Email address
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

        <PasswordField
          value={password}
          onChange={setPassword}
          action={
            <button
              type="button"
              onClick={resetPassword}
              className="font-bold text-[#b74667] transition-colors hover:text-[#8e304e]"
            >
              Forgot password?
            </button>
          }
        />

        <AuthMessage message={message} isError={isError} />

        <button
          type="submit"
          disabled={isLoading}
          className="flex h-13 w-full items-center justify-center rounded-lg bg-[#2f1b17] px-5 text-sm font-black text-white shadow-[0_12px_24px_rgba(47,27,23,0.18)] transition hover:bg-[#43251f] disabled:cursor-wait disabled:opacity-65"
        >
          {isLoading ? "Signing in..." : "Sign in"}
        </button>
      </form>

      <AuthDivider />
      <GoogleButton onClick={signInWithGoogle} disabled={isLoading}>
        Sign in with Google
      </GoogleButton>

      <p className="mt-7 text-center text-xs leading-5 text-[#7f6f69]">
        By signing in or creating an account, you agree to our{" "}
        <Link className="font-semibold text-[#b74667] underline" href="/terms">
          Terms &amp; Conditions
        </Link>{" "}
        and{" "}
        <Link className="font-semibold text-[#b74667] underline" href="/privacy">
          Privacy Policy
        </Link>
        .
      </p>
    </AuthShell>
  );
}
