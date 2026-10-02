import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="focus-ring inline-flex items-center gap-3" aria-label="Zahbro Sports home">
      <svg viewBox="0 0 64 64" className={compact ? "h-9 w-9" : "h-11 w-11"} aria-hidden="true">
        <path fill="#D61D25" d="M8 6h50L46 21H26l-5 7h31L27 58H5l13-16h17l5-7H8L30 6Z" />
        <path fill="#fff" d="m31 10-9 11h7l9-11Zm3 33L25 54h-9l9-11Z" opacity=".92" />
      </svg>
      <span className="leading-none">
        <span className={`block font-display font-bold tracking-[-.04em] ${compact ? "text-xl" : "text-2xl"}`}>ZAHBRO</span>
        <span className="block text-[9px] font-extrabold tracking-[.36em] text-primary">SPORTS</span>
      </span>
    </Link>
  );
}
