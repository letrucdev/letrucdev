import { ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";

export function CtaBand() {
  return (
    <section className="bg-canvas pb-20 md:pb-section">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="rounded-xl bg-primary text-on-primary p-10 md:p-16 lg:p-20 relative overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.08] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 80% 20%, #fff, transparent 50%), radial-gradient(circle at 20% 80%, #fff, transparent 40%)",
            }}
          />
          <div className="relative max-w-2xl">
            <p className="text-[12px] uppercase tracking-[0.18em] font-medium text-on-primary/80">
              Let&apos;s talk
            </p>
            <h2 className="mt-4 font-serif font-medium text-[36px] md:text-[48px] leading-[1.1] tracking-[-0.015em] text-on-primary">
              Have a system that needs a thoughtful frontend?
            </h2>
            <p className="mt-5 text-[17px] leading-[1.6] text-on-primary/90">
              I&apos;m open to outsourced frontend work, full-stack
              collaborations, and freelance engagements — particularly for
              CRM, finance, and high-concurrency systems.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 h-11 px-6 rounded-md bg-canvas text-ink text-[14px] font-medium hover:bg-surface-card transition-colors"
              >
                Email me
                <ArrowUpRight size={16} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 h-11 px-6 rounded-md bg-primary-active text-on-primary text-[14px] font-medium hover:bg-[#8d4731] transition-colors"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
