import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { BrandMark } from './BrandMark'
import { profile } from '@/lib/data'

const sections = [
	{
		label: 'Sections',
		links: [
			{ href: '#about', label: 'About' },
			{ href: '#stack', label: 'Tech stack' },
			{ href: '#projects', label: 'Projects' },
			{ href: '#milestones', label: 'Milestones' },
		],
	},
	{
		label: 'Connect',
		links: [
			{ href: `mailto:${profile.email}`, label: 'Email' },
			{ href: profile.github, label: 'GitHub', external: true },
			{ href: profile.linkedin, label: 'LinkedIn', external: true },
		],
	},
	{
		label: 'Focus',
		links: [
			{ href: '#stack', label: 'Full-stack development' },
			{ href: '#projects', label: 'CRM systems' },
			{ href: '#stack', label: 'Clean architecture' },
		],
	},
]

export function Footer() {
	return (
		<footer className='bg-surface-dark text-on-dark-soft'>
			<div className='mx-auto max-w-300 px-6 py-16'>
				<div className='grid grid-cols-1 gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]'>
					<div>
						<div className='flex items-center gap-2 text-on-dark'>
							<BrandMark size={20} />
							<span className='text-[15px] font-medium tracking-tight'>
								{profile.name}
							</span>
						</div>
						<p className='mt-4 text-[14px] leading-relaxed max-w-xs'>
							{profile.role} based in {profile.location}. Building thoughtful
							software for real-world business problems.
						</p>
						<div className='mt-6 flex items-center gap-2'>
							<a
								href={profile.github}
								target='_blank'
								rel='noreferrer'
								aria-label='GitHub'
								className='inline-flex items-center justify-center w-9 h-9 rounded-full bg-surface-dark-elevated text-on-dark hover:text-primary transition-colors'
							>
								<FaGithub size={16} />
							</a>
							<a
								href={profile.linkedin}
								target='_blank'
								rel='noreferrer'
								aria-label='LinkedIn'
								className='inline-flex items-center justify-center w-9 h-9 rounded-full bg-surface-dark-elevated text-on-dark hover:text-primary transition-colors'
							>
								<FaLinkedin size={16} />
							</a>
							<a
								href={`mailto:${profile.email}`}
								aria-label='Email'
								className='inline-flex items-center justify-center w-9 h-9 rounded-full bg-surface-dark-elevated text-on-dark hover:text-primary transition-colors'
							>
								<Mail size={16} />
							</a>
						</div>
					</div>

					{sections.map((section) => (
						<div key={section.label}>
							<h3 className='text-[12px] uppercase tracking-[0.15em] font-medium text-on-dark mb-4'>
								{section.label}
							</h3>
							<ul className='space-y-3'>
								{section.links.map((link) => (
									<li key={`${section.label}-${link.label}`}>
										<a
											href={link.href}
											target={
												'external' in link && link.external
													? '_blank'
													: undefined
											}
											rel={
												'external' in link && link.external
													? 'noreferrer'
													: undefined
											}
											className='text-[14px] hover:text-on-dark transition-colors'
										>
											{link.label}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<div className='mt-12 pt-8 border-t border-surface-dark-elevated flex flex-col md:flex-row md:items-center md:justify-between gap-3'>
					<p className='text-[13px] text-on-dark-soft'>
						&copy; {new Date().getFullYear()} {profile.name}. All rights
						reserved.
					</p>
					<p className='text-[13px] text-on-dark-soft'>{profile.motto}</p>
				</div>
			</div>
		</footer>
	)
}
