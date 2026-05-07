import {
	SiAngular,
	SiCss,
	SiDocker,
	SiDotnet,
	SiFastapi,
	SiGit,
	SiGithub,
	SiGithubactions,
	SiGitlab,
	SiHtml5,
	SiJavascript,
	SiLaravel,
	SiMysql,
	SiNestjs,
	SiNextdotjs,
	SiNginx,
	SiNodedotjs,
	SiPhp,
	SiPostman,
	SiProxmox,
	SiReact,
	SiRedis,
	SiRedux,
	SiSharp,
	SiSocketdotio,
	SiTailwindcss,
	SiTraefikproxy,
	SiTypescript,
	SiWordpress,
} from 'react-icons/si'
import { Code2, Network, Scale } from 'lucide-react'
import type { ComponentType, CSSProperties } from 'react'

export type LogoIcon = ComponentType<{
	width?: number | string
	height?: number | string
	size?: number | string
	color?: string
	className?: string
	style?: CSSProperties
	'aria-hidden'?: boolean | 'true' | 'false'
}>

export type TechItem = {
	name: string
	icon: LogoIcon
	color: string
}

export type TechGroup = {
	label: string
	items: TechItem[]
}

export const profile = {
	name: 'letrucdev',
	fullName: 'Le Truc',
	role: 'Full-Stack Developer',
	location: 'Hoan Kiem, Vietnam',
	email: 'letruc.work@gmail.com',
	github: 'https://github.com/letrucdev',
	linkedin: 'https://www.linkedin.com/in/l%C3%AA-tr%E1%BB%B1c-67a3802b7/',
	motto: 'Code with purpose, ship with confidence.',
	funFact: 'Solving real business problems is more fun than chasing trends.',
	siteUrl:
		process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ??
		'https://www.nongdandev.com',
}

export const heroCode = `const letruc = {
  role: "Full-Stack Developer",
  location: "Hoan Kiem, Vietnam",
  currentFocus: [
    "CRM Systems",
    "Scalable Web Apps",
    "Clean Architecture",
  ],
  experience: {
    frontend: ["React", "Next.js"],
    backend:  ["NestJS", "Laravel", ".NET Core"],
    database: ["MySQL"],
    tools:    ["Git", "GitHub"],
  },
  projectsDelivered: 2,
  usersServed: "5K - 10K",
  motto: "Code with purpose, ship with confidence",
};`

export const aboutCards = [
	{
		title: 'Currently working on',
		body: 'Outsourced CRM systems serving 5K – 10K users — finance, accounting, payments, and MLM commission engines.',
	},
	{
		title: 'Currently learning',
		body: 'Angular, CI/CD workflows, and Proxmox for homelab and virtualization experiments.',
	},
	{
		title: 'Next goals',
		body: 'System design, microservices, and cloud-native architecture — moving from product to platform thinking.',
	},
] as const

export const techStack: TechGroup[] = [
	{
		label: 'Languages',
		items: [
			{ name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
			{ name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
			{ name: 'PHP', icon: SiPhp, color: '#777BB4' },
			{ name: 'C#', icon: SiSharp, color: '#9B4F96' },
			{ name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
			{ name: 'CSS3', icon: SiCss, color: '#1572B6' },
		],
	},
	{
		label: 'Frontend',
		items: [
			{ name: 'React', icon: SiReact, color: '#61DAFB' },
			{ name: 'Next.js', icon: SiNextdotjs, color: '#FAF9F5' },
			{ name: 'Redux', icon: SiRedux, color: '#764ABC' },
			{ name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38B2AC' },
		],
	},
	{
		label: 'Backend',
		items: [
			{ name: 'NestJS', icon: SiNestjs, color: '#E0234E' },
			{ name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
			{ name: '.NET Core', icon: SiDotnet, color: '#512BD4' },
			{ name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
		],
	},
	{
		label: 'Database & Cache',
		items: [
			{ name: 'MySQL', icon: SiMysql, color: '#4479A1' },
			{ name: 'Redis', icon: SiRedis, color: '#DC382D' },
		],
	},
	{
		label: 'Realtime',
		items: [
			{ name: 'Socket.IO', icon: SiSocketdotio, color: '#FAF9F5' },
			{ name: 'WebSocket', icon: SiSocketdotio, color: '#5DB8A6' },
		],
	},
	{
		label: 'Tools & Workflow',
		items: [
			{ name: 'Git', icon: SiGit, color: '#F05032' },
			{ name: 'GitHub', icon: SiGithub, color: '#FAF9F5' },
			{ name: 'VS Code', icon: Code2, color: '#007ACC' },
			{ name: 'Postman', icon: SiPostman, color: '#FF6C37' },
		],
	},
	{
		label: 'DevOps & Infrastructure',
		items: [
			{ name: 'Docker', icon: SiDocker, color: '#2496ED' },
			{ name: 'Nginx', icon: SiNginx, color: '#009639' },
			{ name: 'Reverse Proxy', icon: SiTraefikproxy, color: '#1F6FEB' },
			{ name: 'Load Balancing', icon: Scale, color: '#FF6F00' },
			{ name: 'Networking', icon: Network, color: '#5DB8A6' },
		],
	},
	{
		label: 'Currently learning',
		items: [
			{ name: 'Angular', icon: SiAngular, color: '#DD0031' },
			{ name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF' },
			{ name: 'GitLab CI', icon: SiGitlab, color: '#FC6D26' },
			{ name: 'Proxmox', icon: SiProxmox, color: '#E57000' },
		],
	},
]

export type Project = {
	id: string
	title: string
	subtitle: string
	blurb: string
	badges: { label: string; tone: 'default' | 'coral' }[]
	features: string[]
	role: string[]
	tech: TechItem[]
}

export const projects: Project[] = [
	{
		id: 'crm-finance',
		title: 'Account Management Platform',
		subtitle: 'Multi-Role Transaction & Banking System',
		blurb:
			'A multi-role account management platform (User, Admin, Super Admin, Cashier) built on a microservices architecture — one FastAPI backend serving four isolated Next.js frontends, packaged with Docker Compose. Built Oct 2023 – May 2024 and delivered to the client.',
		badges: [
			{ label: 'Delivered May 2024', tone: 'default' },
			{ label: 'Oct 2023 – May 2024', tone: 'default' },
			{ label: '10K+ users', tone: 'default' },
			{ label: '4 frontends, 1 backend', tone: 'default' },
			{ label: 'Outsource', tone: 'default' },
			{ label: 'Frontend Lead 100%', tone: 'default' },
			{ label: 'NDA — Confidential', tone: 'coral' },
		],
		features: [
			'Four isolated Next.js frontends — one per role (User, Admin, Super Admin, Cashier) — for smaller bundles and per-role access isolation',
			'Multi-role authentication with JWT access + refresh token flow and Axios interceptor token refresh',
			'2FA (TOTP) on the admin frontends — QR enrollment and code verification',
			'VietQR bank-transfer QR generation for the deposit flow',
			'Bank, transaction, and balance management — deposits, withdrawals, approval workflow, and ledger history',
			'Game transaction & activity history with per-user audit logging',
			'Realtime notifications via WebSocket + Socket.IO with room-based broadcast per user / agent',
			'CSV export with papaparse and form validation with React Hook Form + Yup',
		],
		role: [
			'Built all four Next.js + TypeScript frontends from scratch — architecture, Material-UI customization, and end-to-end business flows',
			'Integrated TanStack Query for data fetching/caching, React Hook Form + Yup for validation, and an Axios interceptor for JWT refresh',
			'Implemented 2FA TOTP enrollment, VietQR transfer QR generation, and Socket.IO realtime notifications on the client',
			'Worked directly with the client — gathered requirements and translated business rules into per-role UI flows',
			'Coordinated tightly with the FastAPI backend team on API contracts, schemas, and error/response shapes',
			'Contributed to the role-permission model design (User / Admin / Super Admin / Cashier) so the frontends matched the business logic',
		],
		tech: [
			{ name: 'Next.js', icon: SiNextdotjs, color: '#FAF9F5' },
			{ name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
			{ name: 'FastAPI', icon: SiFastapi, color: '#009688' },
			{ name: 'MySQL', icon: SiMysql, color: '#4479A1' },
			{ name: 'Redis', icon: SiRedis, color: '#DC382D' },
			{ name: 'Socket.IO', icon: SiSocketdotio, color: '#FAF9F5' },
			{ name: 'Docker', icon: SiDocker, color: '#2496ED' },
		],
	},
	{
		id: 'crm-payments',
		title: 'Multi-App Account Platform',
		subtitle: 'Four Next.js Frontends + Realtime Gateway',
		blurb:
			'A second outsourced platform built as four isolated Next.js 14 (App Router) frontends — User, Admin, Super-Admin, and Game Admin — backed by a FastAPI core API, a PHP/WordPress MLM commission module, a Socket.IO realtime gateway, and shared MySQL/Redis, all orchestrated with Docker Compose. Built Aug 2024 – Feb 2025 and delivered to the client.',
		badges: [
			{ label: 'Delivered Feb 2025', tone: 'default' },
			{ label: 'Aug 2024 – Feb 2025', tone: 'default' },
			{ label: '5K+ users', tone: 'default' },
			{ label: '4 frontends + realtime gateway', tone: 'default' },
			{ label: 'Outsource', tone: 'default' },
			{ label: 'Frontend Lead 100%', tone: 'default' },
			{ label: 'NDA — Confidential', tone: 'coral' },
		],
		features: [
			'Four isolated Next.js 14 (App Router) frontends — User, Admin, Super-Admin, Game Admin — for smaller bundles and per-role access isolation',
			'Multi-role authentication with JWT access + refresh and MFA via TOTP (QR enrollment + code verification) on the admin tiers',
			'User flows: deposit, withdrawal, transactions history, game catalog & detail, affiliate/MLM with referral-tree map, realtime notification center, profile',
			'Admin flows: user management (active/block, KYC verification requests), deposit/withdrawal approval, revenue and transaction reporting',
			'Super-Admin flows: admin manager, game manager, exchange-rate and Binance price-source management, MLM commission policy, theme & metakey manager, system statistics',
			'Game Admin console: room list, session/round configuration, game configuration, system settings',
			'Realtime notifications over Socket.IO — JWT-authenticated handshake, per-user and per-role rooms, transactional and custom push events with REST companion endpoints',
			'EN/VI internationalization with next-intl, dark mode with next-themes, dashboards via recharts, MLM tree via react-organizational-chart',
			'Redis (ioredis) for shared session and hot-data cache; full stack packaged with Docker Compose (4 frontends + FastAPI backend + PHP/WordPress MLM service + socket gateway + Redis + MySQL)',
		],
		role: [
			'Owned 100% of the frontend across all four Next.js + TypeScript apps — architecture, shared UI on Tailwind + Radix/shadcn-ui, data layer with TanStack Query/Table, Axios HTTP client',
			'Implemented JWT access/refresh with Axios interceptors and the TOTP MFA enrollment flow (QR + OTP verification) on the admin tiers',
			'Built the Socket.IO client — JWT handshake, auto-reconnect strategy, room-aware event handling for per-user/per-role push',
			'Built i18n (EN/VI) with next-intl, the MLM referral tree with react-organizational-chart, and dashboards/charts with recharts',
			'Designed component architecture and performance budget for systems serving 5K+ concurrent users',
			'Worked directly with the client to translate business rules across User / Admin / Super-Admin / Game-Admin tiers and finalize UI/UX',
			'Collaborated with the Python (FastAPI) backend team on the core API and with the PHP/WordPress team on the MLM commission module — aligning on contracts, schemas, and event payloads',
		],
		tech: [
			{ name: 'Next.js', icon: SiNextdotjs, color: '#FAF9F5' },
			{ name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
			{ name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38B2AC' },
			{ name: 'FastAPI', icon: SiFastapi, color: '#009688' },
			{ name: 'WordPress API', icon: SiWordpress, color: '#21759B' },
			{ name: 'PHP', icon: SiPhp, color: '#777BB4' },
			{ name: 'MySQL', icon: SiMysql, color: '#4479A1' },
			{ name: 'Redis', icon: SiRedis, color: '#DC382D' },
			{ name: 'Socket.IO', icon: SiSocketdotio, color: '#FAF9F5' },
			{ name: 'Docker', icon: SiDocker, color: '#2496ED' },
		],
	},
]

export const milestones = {
	stats: [
		{ label: 'Earned from outsourced projects', value: '$15,000+' },
		{ label: 'Age', value: '20' },
		{ label: 'Projects shipped', value: '2' },
	],
	pullQuote:
		"These two CRM projects weren't just a financial milestone — they've been my biggest real-world classroom so far.",
	achievements: [
		'Earned $15,000+ from two outsourced projects at age 20 — my first major financial milestone in a programming career.',
		'Proved my ability to work independently and take 100% ownership of the frontend for real-world systems serving 5K – 10K users.',
	],
	lessons: [
		{
			title: 'Frontend mastery',
			body: [
				'Deeper grasp of Next.js — SSR, ISR, App Router, performance optimization.',
				'State management for complex systems with dozens of modules.',
				'UI/UX thinking when working directly with clients — translating business needs into interfaces.',
			],
		},
		{
			title: 'Docker & DevOps',
			body: [
				'Containerizing Next.js apps and packaging consistent dev/staging/production environments.',
				'Writing Dockerfiles and docker-compose for multi-service stacks (Next.js + FastAPI + WordPress + MySQL).',
				'Image layering, multi-stage builds, and image-size optimization.',
			],
		},
		{
			title: 'Networking & infrastructure',
			body: [
				'Reverse Proxy with Nginx — routing multiple services under one domain, SSL termination.',
				'Load balancing for systems with high concurrent user load.',
				'Networking fundamentals — DNS, ports, internal container networking, firewall rules.',
				'Configuring rate limiting, CORS, and security headers at the proxy layer.',
			],
		},
	],
	softSkills: [
		'Client communication',
		'Cross-team collaboration',
		'Deadline management',
		'Systems thinking',
	],
}
