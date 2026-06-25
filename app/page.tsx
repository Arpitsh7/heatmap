import Navbar from "@/components/navbar";
import type { CSSProperties, ReactNode } from "react";

const treePositions = [
  { left: "1%", bottom: "5%", scale: 1.25, dark: true },
  { left: "10%", bottom: "1%", scale: 0.74, dark: true },
  { left: "13%", bottom: "10%", scale: 1.02 },
  { left: "21%", bottom: "5%", scale: 0.78 },
  { left: "79%", bottom: "3%", scale: 1.48, dark: true },
  { left: "87%", bottom: "1%", scale: 0.9 },
  { left: "95%", bottom: "3%", scale: 1.12, dark: true },
];

const grassBlades = Array.from({ length: 96 }, (_, index) => ({
  left: `${index * 1.05}%`,
  height: 13 + (index % 5) * 4,
  delay: `${(index % 8) * 0.2}s`,
}));

const flowers = [
  { left: "3%", color: "#ffd15c" },
  { left: "7%", color: "#a58cff" },
  { left: "11%", color: "#ff7ab7" },
  { left: "15%", color: "#7bdaca" },
  { left: "23%", color: "#a58cff" },
  { left: "28%", color: "#ff7ab7" },
  { left: "74%", color: "#7bdaca" },
  { left: "79%", color: "#ff7ab7" },
  { left: "85%", color: "#a58cff" },
  { left: "91%", color: "#ff7ab7" },
  { left: "96%", color: "#7bdaca" },
  { left: "99%", color: "#ffd15c" },
];

function Cloud({
  className,
  delay = "0s",
}: {
  className: string;
  delay?: string;
}) {
  return (
    <div
      className={`cloud absolute h-12 rounded-full bg-white/85 shadow-[0_16px_50px_rgba(255,255,255,0.50)] ${className}`}
      style={{ animationDelay: delay }}
    >
      <span className="absolute -top-6 left-8 h-14 w-14 rounded-full bg-white/85" />
      <span className="absolute -top-4 left-24 h-11 w-11 rounded-full bg-white/80" />
      <span className="absolute -top-1 right-5 h-9 w-9 rounded-full bg-white/75" />
    </div>
  );
}

function PineTree({
  left,
  bottom,
  scale,
  dark,
}: {
  left: string;
  bottom: string;
  scale: number;
  dark?: boolean;
}) {
  const leaf = dark ? "#246b29" : "#3e8b35";

  return (
    <div
      className="absolute h-44 w-24 origin-bottom"
      style={{ left, bottom, transform: `scale(${scale})` }}
    >
      <div className="absolute bottom-0 left-1/2 h-14 w-3 -translate-x-1/2 rounded-sm bg-[#9c6935]" />
      <div
        className="absolute bottom-8 left-1/2 h-0 w-0 -translate-x-1/2 border-x-[50px] border-b-[64px] border-x-transparent"
        style={{ borderBottomColor: leaf }}
      />
      <div
        className="absolute bottom-48 left-1/2 hidden h-0 w-0 -translate-x-1/2 border-x-[42px] border-b-[58px] border-x-transparent"
        style={{ borderBottomColor: leaf }}
      />
      <div
        className="absolute bottom-14 left-1/2 h-0 w-0 -translate-x-1/2 border-x-[42px] border-b-[58px] border-x-transparent"
        style={{ borderBottomColor: leaf }}
      />
      <div
        className="absolute bottom-[78px] left-1/2 h-0 w-0 -translate-x-1/2 border-x-[30px] border-b-[48px] border-x-transparent"
        style={{ borderBottomColor: leaf }}
      />
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <article className="border-t border-[#eadfdb] px-8 py-6 first:border-t-0 md:border-l md:border-t-0 md:first:border-l-0">
      <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg border border-[#eadfdb] bg-[#fbf6f3] text-[#3c1e14]">
        {icon}
      </div>
      <h2 className="mb-2 text-sm font-bold text-[#2a1714]">{title}</h2>
      <p className="text-sm leading-6 text-[#8b7772]">{text}</p>
    </article>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#c7e8f4] font-sans text-[#2a1714]">
      <style>{`
        @keyframes cloud-drift {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(18px); }
        }

        @keyframes rocket-rise {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        @keyframes grass-sway {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(5deg); }
        }

        @keyframes blob-pulse {
          0%, 100% { transform: translate(var(--blob-x), var(--blob-y)) scale(1); }
          50% { transform: translate(var(--blob-x), var(--blob-y)) scale(1.18); }
        }

        .cloud {
          animation: cloud-drift 10s ease-in-out infinite;
        }

        .panel-noise {
          background-image:
            radial-gradient(circle at 20% 30%, rgba(255,255,255,0.48) 0 1px, transparent 1px),
            radial-gradient(circle at 80% 70%, rgba(60,30,20,0.10) 0 1px, transparent 1px),
            linear-gradient(135deg, rgba(255,255,255,0.46), rgba(255,255,255,0.12));
          background-size: 4px 4px, 5px 5px, 100% 100%;
          mix-blend-mode: overlay;
        }
      `}</style>

      <div className="absolute inset-0 bg-gradient-to-b from-[#c8eafe] via-[#d8ead7] to-[#91bd70]" />
      <Cloud className="left-[27%] top-[11%] w-40" delay="-2s" />
      <Cloud className="left-[44%] top-[7%] w-44" />
      <Cloud className="right-[25%] top-[8%] w-36" delay="-4s" />
      <div className="absolute left-1/2 top-[13%] h-5 w-2 rounded-full bg-[#f99732] shadow-[0_8px_14px_rgba(249,151,50,0.45)] [animation:rocket-rise_2.4s_ease-in-out_infinite]" />

      <div className="absolute inset-x-0 bottom-0 h-28 bg-[#7dae62]" />
      <div className="absolute inset-x-0 bottom-24 h-16 bg-[#9ac47a]" />

      {treePositions.map((tree, index) => (
        <PineTree key={index} {...tree} />
      ))}

      <div className="absolute inset-x-0 bottom-0 z-10 h-16">
        {grassBlades.map((blade, index) => (
          <span
            key={index}
            className="absolute bottom-0 w-1 origin-bottom rounded-t-full bg-[#52ba38]"
            style={{
              left: blade.left,
              height: blade.height,
              animation: `grass-sway 2.4s ease-in-out infinite ${blade.delay}`,
            }}
          />
        ))}
        {flowers.map((flower, index) => (
          <span
            key={index}
            className="absolute bottom-8 h-8 w-1 rounded-full bg-[#419c34]"
            style={{ left: flower.left }}
          >
            <span
              className="absolute -left-1.5 -top-2 h-4 w-4 rounded-full border-2 border-white/70"
              style={{ backgroundColor: flower.color }}
            />
          </span>
        ))}
      </div>

      <section className="relative z-20 mx-auto mt-20 flex min-h-[660px] w-[min(1032px,calc(100vw-32px))] flex-col overflow-hidden rounded-[18px] border border-white/75 bg-white/42 shadow-[0_34px_110px_rgba(60,30,20,0.20),inset_0_1px_0_rgba(255,255,255,0.78),inset_0_-1px_0_rgba(255,255,255,0.34)] backdrop-blur-3xl backdrop-saturate-200 md:mt-32">
        <div
          className="pointer-events-none absolute left-0 top-0 h-[400px] w-[480px] rounded-full bg-gradient-to-br from-[#f472b6] to-[#e879f9] opacity-70 blur-[58px]"
          style={{
            "--blob-x": "-50%",
            "--blob-y": "-50%",
            animation: "blob-pulse 18s ease-in-out infinite",
          } as CSSProperties}
        />
        <div
          className="pointer-events-none absolute bottom-0 right-0 h-[800px] w-[600px] rounded-full bg-gradient-to-br from-[#fdba74] to-[#fb923c] opacity-60 blur-[62px]"
          style={{
            "--blob-x": "50%",
            "--blob-y": "50%",
            animation: "blob-pulse 20s ease-in-out infinite 2s",
          } as CSSProperties}
        />
        <div className="pointer-events-none absolute inset-0 bg-white/18 backdrop-blur-3xl backdrop-saturate-200" />
        <div className="panel-noise pointer-events-none absolute inset-0 opacity-65" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-white/55 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.36),rgba(255,255,255,0.08))]" />

        <Navbar />

        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-8 pb-6 pt-28 text-center">
          <div className="mb-7 inline-flex max-w-full items-center gap-2 rounded-full border border-[#eadfdb] bg-white/70 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#8b7772] sm:text-[11px] sm:tracking-[0.18em]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff9a92]" />
            Codeforces / LeetCode / GitHub / Habits
          </div>

          <h1 className="max-w-[620px] text-4xl font-black leading-[1.08] tracking-normal text-[#251511] md:text-5xl">
            Every streak,
            <span className="block bg-gradient-to-r from-[#d84eea] via-[#ff6262] to-[#f49a2f] bg-clip-text text-transparent">
              one heatmap
            </span>
          </h1>

          <p className="mt-6 max-w-[560px] text-base leading-7 text-[#8b7772]">
            Connect your coding profiles and personal habits. See the full
            picture of your consistency, then export it.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/auth"
              className="rounded-full bg-[#2f1b17] px-6 py-3 text-sm font-bold text-white shadow-[0_12px_24px_rgba(47,27,23,0.18)] transition-colors hover:bg-[#43251f]"
            >
              Connect your accounts
            </a>
            <a
              href="/export"
              className="inline-flex items-center gap-2 rounded-full border border-[#cdbbb5] bg-white/55 px-6 py-3 text-sm font-semibold text-[#2f1b17] transition-colors hover:bg-white"
            >
              See a sample export
              <svg
                aria-hidden="true"
                className="h-4 w-4"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M3 8H13M9 4L13 8L9 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="relative z-10 grid border-t border-white/60 bg-white/24 backdrop-blur-2xl md:grid-cols-4">
          <FeatureCard
            title="Codeforces sync"
            text="Submissions pulled daily. Ratings, problems solved, and contest history all heatmapped."
            icon={
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                <path d="M2 8H5L6.4 4L9 12L10.4 8H14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
          />
          <FeatureCard
            title="LeetCode streaks"
            text="Daily challenge completions, difficulty breakdown, and submission counts in one view."
            icon={
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                <rect x="3" y="4" width="10" height="7" rx="1.4" stroke="currentColor" strokeWidth="1.3" />
                <path d="M6 13H10M8 11V13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            }
          />
          <FeatureCard
            title="GitHub commits"
            text="Your contribution graph, unified with the rest. See coding and building side by side."
            icon={
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="4.5" stroke="currentColor" strokeWidth="1.3" />
                <path d="M8 5.5V8L10 9.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
          />
          <FeatureCard
            title="Custom habits"
            text="Log gym sessions, reading, sleep, anything. Export the full grid as PNG, CSV, or JSON."
            icon={
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                <path d="M5 3V5M8 3V5M11 3V5M4 6H12V11.5A1.5 1.5 0 0 1 10.5 13H5.5A1.5 1.5 0 0 1 4 11.5V6Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 8H6.01M8 8H8.01M10 8H10.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            }
          />
        </div>
      </section>
    </main>
  );
}
