import { Briefcase, GraduationCap, Rocket } from 'lucide-react'
import { aboutCards, profile } from '@/lib/data'

const icons = [Briefcase, GraduationCap, Rocket]

export function AboutSection() {
	return (
		<section id='about' className='bg-canvas py-20 md:py-section'>
			<div className='mx-auto max-w-300 px-6'>
				<div className='max-w-3xl'>
					<p className='text-[12px] font-medium uppercase tracking-[0.18em] text-muted'>
						About me
					</p>
					<h2 className='mt-4 font-serif font-medium text-[36px] md:text-[44px] leading-[1.12] tracking-[-0.015em] text-ink'>
						A Full-Stack Developer who treats clean code as a tool, not a goal.
					</h2>
					<p className='mt-6 text-[17px] leading-[1.65] text-body'>
						I&apos;m passionate about clean code, clear architecture, and
						performance optimization. {profile.funFact}
					</p>
				</div>

				<div className='mt-14 grid gap-6 md:grid-cols-3'>
					{aboutCards.map((card, i) => {
						const Icon = icons[i] ?? Briefcase
						return (
							<article
								key={card.title}
								className='rounded-lg bg-surface-card p-8 border border-hairline-soft'
							>
								<div className='inline-flex items-center justify-center w-10 h-10 rounded-md bg-canvas text-ink border border-hairline'>
									<Icon size={18} />
								</div>
								<h3 className='mt-5 font-medium text-[18px] text-ink'>
									{card.title}
								</h3>
								<p className='mt-3 text-[15px] leading-[1.6] text-body'>
									{card.body}
								</p>
							</article>
						)
					})}
				</div>
			</div>
		</section>
	)
}
