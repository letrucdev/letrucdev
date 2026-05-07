import { ArrowRight, MapPin } from 'lucide-react'
import { CodeWindow } from './CodeWindow'
import { profile, heroCode } from '@/lib/data'

export function Hero() {
	return (
		<section
			id='top'
			className='relative bg-canvas pt-12 sm:pt-16 md:pt-24 pb-16 sm:pb-20 md:pb-section'
		>
			<div className='mx-auto max-w-300 px-5 sm:px-6 grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center'>
				<div className='min-w-0'>
					<div className='inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.18em] text-muted'>
						<span className='block w-1.5 h-1.5 rounded-full bg-primary' />
						{profile.role}
					</div>

					<h1 className='mt-6 font-serif font-medium text-[34px] sm:text-[44px] md:text-[56px] lg:text-[68px] leading-[1.1] sm:leading-[1.06] lg:leading-[1.04] tracking-[-0.02em] text-ink wrap-break-word'>
						Building thoughtful software for real-world business problems.
					</h1>

					<p className='mt-5 sm:mt-6 max-w-xl text-[15px] sm:text-[17px] leading-[1.6] text-body'>
						I&apos;m {profile.name} — a Full-Stack Developer who has shipped CRM
						systems serving 5K – 10K users. I work across React, Next.js,
						NestJS, Laravel, and .NET Core, and I care about clean architecture,
						performance, and the business problem behind the code.
					</p>

					<div className='mt-5 flex items-center gap-2 text-[14px] text-muted'>
						<MapPin size={14} />
						<span>{profile.location}</span>
					</div>

					<div className='mt-7 sm:mt-8 flex flex-wrap items-center gap-3'>
						<a
							href='#projects'
							className='inline-flex items-center gap-2 h-11 px-5 rounded-md bg-primary text-on-primary text-[14px] font-medium hover:bg-primary-active transition-colors'
						>
							View projects
							<ArrowRight size={16} />
						</a>
						<a
							href={`mailto:${profile.email}`}
							className='inline-flex items-center gap-2 h-11 px-5 rounded-md border border-hairline bg-canvas text-ink text-[14px] font-medium hover:bg-surface-card transition-colors'
						>
							Contact me
						</a>
					</div>
				</div>

				<div className='min-w-0 lg:pl-4'>
					<CodeWindow filename='letruc.ts' code={heroCode} />
				</div>
			</div>
		</section>
	)
}
