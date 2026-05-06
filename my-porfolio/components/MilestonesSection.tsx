import { Calendar, DollarSign, Quote, Trophy } from "lucide-react";
import { milestones } from "@/lib/data";

const statIcons = [DollarSign, Calendar, Trophy];

export function MilestonesSection() {
  return (
    <section id="milestones" className="bg-canvas pb-20 md:pb-section">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="max-w-3xl">
          <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-muted">
            Milestones &amp; lessons learned
          </p>
          <h2 className="mt-4 font-serif font-medium text-[36px] md:text-[44px] leading-[1.12] tracking-[-0.015em] text-ink">
            A real-world classroom — and a financial first.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {milestones.stats.map((stat, i) => {
            const Icon = statIcons[i] ?? Trophy;
            return (
              <div
                key={stat.label}
                className="rounded-lg bg-surface-card p-8 border border-hairline-soft"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-canvas text-ink border border-hairline">
                  <Icon size={18} />
                </div>
                <p className="mt-5 font-serif font-medium text-[40px] leading-none tracking-[-0.015em] text-ink">
                  {stat.value}
                </p>
                <p className="mt-3 text-[14px] text-muted leading-[1.5]">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        <figure className="mt-14 rounded-xl bg-surface-cream-strong p-10 md:p-14 relative">
          <Quote
            className="absolute top-8 left-8 text-primary/30"
            size={32}
            strokeWidth={1.5}
          />
          <blockquote className="font-serif font-medium text-[24px] md:text-[30px] leading-[1.3] tracking-[-0.01em] text-body-strong italic max-w-3xl pl-12">
            &ldquo;{milestones.pullQuote}&rdquo;
          </blockquote>
        </figure>

        <div className="mt-14">
          <h3 className="font-serif font-medium text-[24px] md:text-[28px] leading-[1.2] tracking-[-0.01em] text-ink">
            What I learned
          </h3>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {milestones.lessons.map((lesson) => (
              <div
                key={lesson.title}
                className="rounded-lg bg-surface-card p-8 border border-hairline-soft h-full"
              >
                <h4 className="font-medium text-[18px] text-ink">
                  {lesson.title}
                </h4>
                <ul className="mt-4 space-y-3">
                  {lesson.body.map((b) => (
                    <li
                      key={b}
                      className="text-[14px] leading-[1.55] text-body pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary/70"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h3 className="font-serif font-medium text-[24px] md:text-[28px] leading-[1.2] tracking-[-0.01em] text-ink">
            Soft skills gained
          </h3>
          <div className="mt-6 flex flex-wrap gap-2">
            {milestones.softSkills.map((s) => (
              <span
                key={s}
                className="inline-flex items-center px-4 py-2 rounded-full bg-surface-card text-ink text-[13px] font-medium border border-hairline"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
