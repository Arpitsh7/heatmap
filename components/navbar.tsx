import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute left-0 top-0 z-20 flex h-20 w-full items-center px-5 sm:px-9">
      <Link href="/" className="flex shrink-0 items-center gap-2 md:w-56">
        <span className="h-1.5 w-1.5 rounded-full bg-[#ff9a92]" />
        <span className="text-base font-black tracking-normal text-[#2f1b17]">
          Heatstack
        </span>
      </Link>

      <div className="hidden flex-1 items-center justify-center gap-9 md:flex">
        <Link
          href="/overview"
          className="text-sm font-semibold text-[#2f1b17] transition-colors hover:text-[rgba(60,30,20,0.72)]"
        >
          Overview
        </Link>
        <Link
          href="/platforms"
          className="text-sm font-medium text-[rgba(60,30,20,0.55)] transition-colors hover:text-[#2f1b17]"
        >
          Platforms
        </Link>
        <Link
          href="/export"
          className="text-sm font-medium text-[rgba(60,30,20,0.55)] transition-colors hover:text-[#2f1b17]"
        >
          Export
        </Link>
        <Link
          href="/pricing"
          className="text-sm font-medium text-[rgba(60,30,20,0.55)] transition-colors hover:text-[#2f1b17]"
        >
          Pricing
        </Link>
      </div>

      <div className="flex flex-1 items-center justify-end md:w-56 md:flex-none">
        <Link
          href="/auth"
          aria-label="Profile"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#43251f] text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#2f1b17]"
        >
          A
        </Link>
      </div>
    </nav>
  );
}
