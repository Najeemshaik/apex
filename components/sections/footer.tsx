import { FOOTER_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border-glass py-12">
      <div className="mx-auto flex max-w-[var(--container-max)] flex-col items-center justify-between gap-6 px-6 md:px-10 sm:flex-row">
        <span className="font-display text-sm font-semibold tracking-wide text-text-tertiary">
          APEX
        </span>

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
