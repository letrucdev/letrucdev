import { techStack } from "@/lib/data";

export function TechStack() {
  return (
    <section id="stack" className="bg-canvas pb-20 md:pb-section">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="rounded-xl bg-surface-dark text-on-dark p-8 md:p-14">
          <div className="max-w-2xl">
            <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-on-dark-soft">
              Tech I work with
            </p>
            <h2 className="mt-4 font-serif font-medium text-[32px] md:text-[40px] leading-[1.15] tracking-[-0.015em] text-on-dark">
              The tools behind real-world systems serving 5K – 10K users.
            </h2>
            <p className="mt-4 text-[15px] leading-[1.6] text-on-dark-soft">
              From frontend frameworks and backend runtimes to caching,
              realtime layers, and the infrastructure that ties it all
              together.
            </p>
          </div>

          <div className="mt-12 space-y-10">
            {techStack.map((group) => (
              <div key={group.label}>
                <h3 className="text-[12px] uppercase tracking-[0.15em] font-medium text-on-dark-soft mb-4">
                  {group.label}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {group.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.name}
                        className="group flex items-center gap-3 px-4 py-3 rounded-md bg-surface-dark-elevated border border-surface-dark-elevated hover:border-primary/40 transition-colors"
                      >
                        <Icon
                          aria-hidden
                          width={20}
                          height={20}
                          color={item.color}
                          style={{ flexShrink: 0 }}
                        />
                        <span className="text-[14px] font-medium text-on-dark truncate">
                          {item.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
