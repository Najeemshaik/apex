import { FOOTER_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="mx-auto flex max-w-[var(--container-max)] flex-col items-center justify-between gap-6 px-6 sm:flex-row md:px-10">
        <div className="flex items-center gap-2">
          <div className="flex size-6 items-center justify-center rounded-md bg-apex-accent/20">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="text-apex-bright">
              <path d="M8 1L14 5V11L8 15L2 11V5L8 1Z" stroke="currentColor" strokeWidth="1.5" fill="rgba(168,85,247,0.2)" />
              <path d="M8 5L11 7V11L8 13L5 11V7L8 5Z" fill="currentColor" opacity="0.6" />
            </svg>
          </div>
          <span className="font-display text-sm font-semibold tracking-wide text-text-tertiary">
            APEX
          </span>
        </div>

        <div className="flex items-center gap-6">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-text-tertiary transition-colors duration-300 hover:text-text-secondary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <span className="text-sm text-text-tertiary">
          Powered by OpenClaw
        </span>
      </div>
    </footer>
  );
}
