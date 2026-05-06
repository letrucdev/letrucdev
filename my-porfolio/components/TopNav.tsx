'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { BrandMark } from './BrandMark'
import { profile } from '@/lib/data'

const navLinks = [
	{ href: '#about', label: 'About' },
	{ href: '#stack', label: 'Stack' },
	{ href: '#projects', label: 'Projects' },
	{ href: '#milestones', label: 'Milestones' },
]

export function TopNav() {
	const [open, setOpen] = useState(false)

	return (
		<header className='sticky top-0 z-50 bg-canvas/90 backdrop-blur supports-backdrop-filter:bg-canvas/75 border-b border-hairline'>
			<div className='mx-auto max-w-300 px-6 h-16 flex items-center justify-between'>
				<a href='#top' className='flex items-center gap-2 text-ink'>
					<BrandMark size={20} />
					<span className='text-[15px] font-medium tracking-tight'>
						{profile.name}
					</span>
				</a>

				<nav className='hidden md:flex items-center gap-1'>
					{navLinks.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className='px-3 py-2 text-[14px] font-medium text-muted hover:text-ink transition-colors'
						>
							{link.label}
						</a>
					))}
				</nav>

				<div className='flex items-center gap-2'>
					<a
						href={`mailto:${profile.email}`}
						className='hidden md:inline-flex items-center h-10 px-5 rounded-md bg-primary text-on-primary text-[14px] font-medium hover:bg-primary-active transition-colors'
					>
						Get in touch
					</a>

					<button
						type='button'
						aria-label='Toggle menu'
						aria-expanded={open}
						onClick={() => setOpen((v) => !v)}
						className='md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-ink hover:bg-surface-card transition-colors'
					>
						{open ? <X size={20} /> : <Menu size={20} />}
					</button>
				</div>
			</div>

			{open && (
				<div className='md:hidden border-t border-hairline bg-canvas'>
					<nav className='mx-auto max-w-[1200px] px-6 py-4 flex flex-col gap-1'>
						{navLinks.map((link) => (
							<a
								key={link.href}
								href={link.href}
								onClick={() => setOpen(false)}
								className='px-3 py-3 rounded-md text-[15px] font-medium text-ink hover:bg-surface-card transition-colors'
							>
								{link.label}
							</a>
						))}
						<a
							href={`mailto:${profile.email}`}
							onClick={() => setOpen(false)}
							className='mt-2 inline-flex items-center justify-center h-11 px-5 rounded-md bg-primary text-on-primary text-[14px] font-medium hover:bg-primary-active transition-colors'
						>
							Get in touch
						</a>
					</nav>
				</div>
			)}
		</header>
	)
}
