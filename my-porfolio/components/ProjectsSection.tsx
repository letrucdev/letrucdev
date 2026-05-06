import { Lock, Mail } from "lucide-react";
import { ProjectCard } from "./ProjectCard";
import { profile, projects } from "@/lib/data";

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-canvas py-20 md:py-section">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="max-w-3xl">
          <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-muted">
            Featured projects
          </p>
          <h2 className="mt-4 font-serif font-medium text-[36px] md:text-[44px] leading-[1.12] tracking-[-0.015em] text-ink">
            Two outsourced CRM systems, shipped end-to-end.
          </h2>
          <div className="mt-6 inline-flex items-start gap-3 rounded-md bg-surface-card border border-hairline p-4 text-[14px] leading-[1.55] text-body">
            <Lock size={16} className="mt-0.5 shrink-0 text-muted" />
            <p>
              Both projects below are outsourced under client contracts. Due to
              NDA terms, I cannot publicly share source code, client names,
              screenshots, or specific technical details — what follows is a
              high-level overview of scope and role.
            </p>
          </div>
        </div>

        <div className="mt-12 space-y-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <p className="mt-10 text-[15px] text-body">
          Want to know more about architecture, performance handling, or
          payment integration?{" "}
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-1.5 text-primary hover:text-primary-active font-medium underline underline-offset-4 decoration-primary/30"
          >
            <Mail size={14} />
            Reach out
          </a>{" "}
          and I&apos;ll share whatever the NDA permits.
        </p>
      </div>
    </section>
  );
}
