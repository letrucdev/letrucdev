import { CheckCircle2, Lock, UserRound } from "lucide-react";
import type { Project } from "@/lib/data";

type Props = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: Props) {
  return (
    <article className="rounded-xl bg-surface-dark text-on-dark p-8 md:p-12 border border-surface-dark-elevated">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[12px] uppercase tracking-[0.18em] text-on-dark-soft">
            Project 0{index + 1}
          </p>
          <h3 className="mt-3 font-serif font-medium text-[28px] md:text-[32px] leading-[1.18] tracking-[-0.01em] text-on-dark">
            {project.title} —{" "}
            <span className="text-on-dark-soft">{project.subtitle}</span>
          </h3>
          <p className="mt-4 text-[15px] leading-[1.6] text-on-dark-soft max-w-2xl">
            {project.blurb}
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.badges.map((badge) =>
          badge.tone === "coral" ? (
            <span
              key={badge.label}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-on-primary text-[11px] font-medium uppercase tracking-[0.12em]"
            >
              <Lock size={12} />
              {badge.label}
            </span>
          ) : (
            <span
              key={badge.label}
              className="inline-flex items-center px-3 py-1 rounded-full bg-surface-dark-elevated text-on-dark text-[12px] font-medium"
            >
              {badge.label}
            </span>
          )
        )}
      </div>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <div>
          <h4 className="text-[12px] uppercase tracking-[0.15em] font-medium text-on-dark-soft mb-4 flex items-center gap-2">
            <CheckCircle2 size={14} />
            Key features
          </h4>
          <ul className="space-y-3">
            {project.features.map((f) => (
              <li
                key={f}
                className="text-[14px] leading-[1.55] text-on-dark/90 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary"
              >
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[12px] uppercase tracking-[0.15em] font-medium text-on-dark-soft mb-4 flex items-center gap-2">
            <UserRound size={14} />
            My role
          </h4>
          <ul className="space-y-3">
            {project.role.map((r) => (
              <li
                key={r}
                className="text-[14px] leading-[1.55] text-on-dark/90 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent-teal"
              >
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 pt-8 border-t border-surface-dark-elevated">
        <h4 className="text-[12px] uppercase tracking-[0.15em] font-medium text-on-dark-soft mb-4">
          Tech stack
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => {
            const Icon = t.icon;
            return (
              <span
                key={t.name}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-surface-dark-elevated text-on-dark text-[13px] font-medium"
              >
                <Icon
                  aria-hidden
                  width={14}
                  height={14}
                  color={t.color}
                />
                {t.name}
              </span>
            );
          })}
        </div>
      </div>

      <p className="mt-8 text-[13px] text-on-dark-soft italic">
        Source code and client details are not publicly available due to
        contractual obligations.
      </p>
    </article>
  );
}
