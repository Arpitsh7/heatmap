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

const platforms = [
  {
    name: "GitHub",
    category: "Development",
    url: "https://github.com/",
    handle: "your-github",
    status: "Connected",
    accent: "#2f1b17",
    icon: <GitHubIcon />,
  },
  {
    name: "LeetCode",
    category: "Problem Solving",
    url: "https://leetcode.com/u/",
    handle: "your-leetcode",
    status: "Ready",
    accent: "#f59e0b",
    icon: <LeetCodeIcon />,
  },
  {
    name: "Codeforces",
    category: "Problem Solving",
    url: "https://codeforces.com/profile/",
    handle: "your-codeforces",
    status: "Ready",
    accent: "#3b82f6",
    icon: <CodeforcesIcon />,
  },
  {
    name: "CodeChef",
    category: "Problem Solving",
    url: "https://www.codechef.com/users/",
    handle: "your-codechef",
    status: "Ready",
    accent: "#8b5e3c",
    icon: <CodeChefIcon />,
  },
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

function PlatformIcon({
  children,
  color,
}: {
  children: ReactNode;
  color: string;
}) {
  return (
    <span
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/70 bg-white/72 shadow-[inset_0_1px_0_rgba(255,255,255,0.74)]"
      style={{ color }}
    >
      {children}
    </span>
  );
}

function GitHubIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.2A9.8 9.8 0 0 0 8.9 21.3c.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 2.9.9.1-.7.4-1.1.7-1.4-2.2-.3-4.6-1.1-4.6-4.9 0-1.1.4-2 1.1-2.7-.1-.3-.5-1.3.1-2.7 0 0 .9-.3 2.8 1a9.6 9.6 0 0 1 5.1 0c2-1.3 2.8-1 2.8-1 .6 1.4.2 2.4.1 2.7.7.7 1.1 1.6 1.1 2.7 0 3.8-2.3 4.6-4.6 4.9.4.3.7 1 .7 2v2.9c0 .3.2.6.7.5A9.8 9.8 0 0 0 12 2.2Z" />
    </svg>
  );
}

function LeetCodeIcon() {
  return (
    <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none">
      <path d="M14.5 4.2 7.2 11.5a2.9 2.9 0 0 0 0 4.1l3.1 3.1a2.9 2.9 0 0 0 4.1 0l1.5-1.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path d="m9.1 9.6 3.3-3.3" stroke="#2f1b17" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M10.7 13.5h7.8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

function CodeforcesIcon() {
  return (
    <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="9" width="4" height="10" rx="1.2" fill="#f8c33a" />
      <rect x="10" y="5" width="4" height="14" rx="1.2" fill="#2563eb" />
      <rect x="16" y="12" width="4" height="7" rx="1.2" fill="#ef4444" />
    </svg>
  );
}

function CodeChefIcon() {
  return (
    <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none">
      <path d="M7.2 10.3C6.8 7.2 8.7 4.7 12 4.7s5.2 2.5 4.8 5.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M6.5 10.2h11c.8 0 1.4.7 1.2 1.5l-1.1 4.7a3.4 3.4 0 0 1-3.3 2.7H9.7a3.4 3.4 0 0 1-3.3-2.7l-1.1-4.7c-.2-.8.4-1.5 1.2-1.5Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8.7 13.6c1.6.8 3.6.8 5.2 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 16 16" fill="none">
      <path d="M6 3.5 10.5 8 6 12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 16 16" fill="none">
      <path d="M3.5 4.5h9M6.5 4.5V3.2h3v1.3M5 6.2l.5 6.1c.1.7.6 1.2 1.3 1.2h2.4c.7 0 1.2-.5 1.3-1.2l.5-6.1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function PlatformsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#c7e8f4] font-sans text-[#2a1714]">
      <style>{`
        @keyframes cloud-drift {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(18px); }
        }

        @keyframes grass-sway {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(5deg); }
        }

        @keyframes blob-pulse {
          0%, 100% { transform: translate(var(--blob-x), var(--blob-y)) scale(1); }
          50% { transform: translate(var(--blob-x), var(--blob-y)) scale(1.16); }
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
      <Cloud className="left-[24%] top-[10%] w-40" delay="-2s" />
      <Cloud className="left-[49%] top-[6%] w-44" />
      <Cloud className="right-[20%] top-[11%] w-36" delay="-4s" />

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
      </div>

      <section className="relative z-20 mx-auto mb-20 mt-20 flex min-h-[690px] w-[min(1080px,calc(100vw-32px))] flex-col overflow-hidden rounded-[18px] border border-white/75 bg-white/42 shadow-[0_34px_110px_rgba(60,30,20,0.20),inset_0_1px_0_rgba(255,255,255,0.78),inset_0_-1px_0_rgba(255,255,255,0.34)] backdrop-blur-3xl backdrop-saturate-200 md:mt-28">
        <div
          className="pointer-events-none absolute left-0 top-0 h-[380px] w-[500px] rounded-full bg-gradient-to-br from-[#f472b6] to-[#e879f9] opacity-62 blur-[58px]"
          style={{
            "--blob-x": "-45%",
            "--blob-y": "-48%",
            animation: "blob-pulse 18s ease-in-out infinite",
          } as CSSProperties}
        />
        <div
          className="pointer-events-none absolute bottom-0 right-0 h-[720px] w-[560px] rounded-full bg-gradient-to-br from-[#fdba74] to-[#fb923c] opacity-54 blur-[62px]"
          style={{
            "--blob-x": "48%",
            "--blob-y": "50%",
            animation: "blob-pulse 20s ease-in-out infinite 2s",
          } as CSSProperties}
        />
        <div className="pointer-events-none absolute inset-0 bg-white/18 backdrop-blur-3xl backdrop-saturate-200" />
        <div className="panel-noise pointer-events-none absolute inset-0 opacity-65" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-white/55 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.36),rgba(255,255,255,0.08))]" />

        <Navbar />

        <div className="relative z-10 px-5 pb-8 pt-28 sm:px-8 md:px-10">
          <div className="flex flex-col gap-5 border-b border-white/65 pb-7 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#eadfdb] bg-white/62 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#8b7772] sm:text-[11px]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ff9a92]" />
                Account Sources
              </p>
              <h1 className="text-3xl font-black tracking-normal text-[#251511] sm:text-4xl">
                Platforms
              </h1>
              <p className="mt-3 max-w-[580px] text-sm leading-6 text-[#7f6f69] sm:text-base">
                Add the profiles that power your heatmap and keep each coding
                source easy to update.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 rounded-2xl border border-white/70 bg-white/46 p-2 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]">
              <span className="px-3 py-2">
                <strong className="block text-lg font-black text-[#251511]">4</strong>
                <span className="text-[11px] font-semibold text-[#8b7772]">Sources</span>
              </span>
              <span className="px-3 py-2">
                <strong className="block text-lg font-black text-[#251511]">1</strong>
                <span className="text-[11px] font-semibold text-[#8b7772]">Live</span>
              </span>
              <span className="px-3 py-2">
                <strong className="block text-lg font-black text-[#251511]">3</strong>
                <span className="text-[11px] font-semibold text-[#8b7772]">Ready</span>
              </span>
            </div>
          </div>

          <div className="mt-7 space-y-7">
            {["Development", "Problem Solving"].map((category) => (
              <section key={category}>
                <h2 className="mb-3 text-sm font-black uppercase tracking-[0.16em] text-[#7f6f69]">
                  {category}
                </h2>
                <div className="overflow-hidden rounded-[16px] border border-white/70 bg-white/46 shadow-[inset_0_1px_0_rgba(255,255,255,0.78)]">
                  {platforms
                    .filter((platform) => platform.category === category)
                    .map((platform) => (
                      <div
                        key={platform.name}
                        className="grid gap-4 border-t border-[#eadfdb]/80 p-4 first:border-t-0 md:grid-cols-[260px_1fr_auto] md:items-center md:p-5"
                      >
                        <div className="flex min-w-0 items-center gap-3">
                          <PlatformIcon color={platform.accent}>
                            {platform.icon}
                          </PlatformIcon>
                          <div className="min-w-0">
                            <div className="flex items-center gap-1.5">
                              <h3 className="truncate text-base font-black text-[#2f1b17]">
                                {platform.name}
                              </h3>
                              <span className="text-[#8b7772]">
                                <ArrowIcon />
                              </span>
                            </div>
                            <p className="text-xs font-semibold text-[#8b7772]">
                              {platform.status}
                            </p>
                          </div>
                        </div>

                        <label className="flex min-w-0 items-center rounded-2xl border border-[#d8cac5] bg-white/56 px-4 py-3 text-sm text-[#8b7772] shadow-[inset_0_1px_0_rgba(255,255,255,0.76)] focus-within:border-[#ff9a92]">
                          <span className="shrink-0 text-[#9b8882]">
                            {platform.url}
                          </span>
                          <input
                            className="min-w-0 flex-1 bg-transparent font-bold text-[#2f1b17] outline-none placeholder:text-[#b39f98]"
                            defaultValue={platform.handle}
                            aria-label={`${platform.name} username`}
                          />
                        </label>

                        <div className="flex items-center gap-2 md:justify-end">
                          <button className="h-11 rounded-full bg-[#2f1b17] px-5 text-sm font-bold text-white shadow-[0_12px_24px_rgba(47,27,23,0.18)] transition-colors hover:bg-[#43251f]">
                            Enter
                          </button>
                          <button
                            aria-label={`Delete ${platform.name}`}
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d8cac5] bg-white/52 text-[#8b7772] transition-colors hover:border-[#ff9a92] hover:text-[#d04444]"
                          >
                            <TrashIcon />
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
