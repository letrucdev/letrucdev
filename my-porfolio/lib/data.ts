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
		title: 'CRM System',
		subtitle: 'Finance & Accounting Platform',
		blurb:
			'An outsourced CRM system serving enterprises with a comprehensive finance and accounting module.',
		badges: [
			{ label: 'Delivered', tone: 'default' },
			{ label: '10K+ users', tone: 'default' },
			{ label: 'Outsource', tone: 'default' },
			{ label: 'Frontend Lead 100%', tone: 'default' },
			{ label: 'NDA — Confidential', tone: 'coral' },
		],
		features: [
			'User management with RBAC permissions',
			'Enterprise finance and accounting management',
			'Payment processing with payment-gateway integration',
			'Multi-level marketing (MLM) commission with multi-tier genealogy tree',
			'Real-time dashboards and reporting',
			'Realtime updates via WebSocket — live notifications, dashboard data, transaction status',
			'Redis caching for high-frequency reads, session storage and rate limiting',
		],
		role: [
			'Owned 100% of the frontend (Next.js) — UI/UX through performance optimization',
			'Collaborated directly with the Python (FastAPI) backend team and PHP WordPress API team',
			'Worked directly with the client to finalize business logic and UI requirements',
			'Reviewed and proposed improvements to the data flow between frontend and backend',
			'Integrated the WebSocket client for realtime data sync across modules',
		],
		tech: [
			{ name: 'Next.js', icon: SiNextdotjs, color: '#FAF9F5' },
			{ name: 'FastAPI', icon: SiFastapi, color: '#009688' },
			{ name: 'WordPress API', icon: SiWordpress, color: '#21759B' },
			{ name: 'PHP', icon: SiPhp, color: '#777BB4' },
			{ name: 'MySQL', icon: SiMysql, color: '#4479A1' },
			{ name: 'Redis', icon: SiRedis, color: '#DC382D' },
			{ name: 'Socket.IO', icon: SiSocketdotio, color: '#FAF9F5' },
		],
	},
	{
		id: 'crm-payments',
		title: 'CRM System',
		subtitle: 'User & Payment Management',
		blurb:
			'A second outsourced CRM system focused on user management and large-scale payment flows.',
		badges: [
			{ label: 'Delivered', tone: 'default' },
			{ label: '5K+ users', tone: 'default' },
			{ label: 'Outsource', tone: 'default' },
			{ label: 'Frontend Lead 100%', tone: 'default' },
			{ label: 'NDA — Confidential', tone: 'coral' },
		],
		features: [
			'User management with multi-role authentication',
			'Accounting management and transaction reconciliation',
			'Payment-gateway integration and transaction processing',
			'Multi-level marketing (MLM) module — commission calculation and tree visualization',
			'Performance optimization for high concurrent user load',
			'Realtime processing via WebSocket — instant payment status, balance updates, user notifications',
			'Redis caching for hot data — sessions, MLM tree, transaction lookups — to reduce DB load',
		],
		role: [
			'Owned 100% of the frontend (Next.js) — component architecture, state management, performance tuning',
			'Collaborated with the Python (FastAPI) backend team for the core API and PHP WordPress for the MLM commission module',
			'Worked directly with the client to deeply understand business logic and finalize UI/UX expectations',
			'Proposed API and UI structures suited for 5K+ concurrent users',
			'Implemented the WebSocket client with reconnect strategy and event-driven UI updates',
		],
		tech: [
			{ name: 'Next.js', icon: SiNextdotjs, color: '#FAF9F5' },
			{ name: 'FastAPI', icon: SiFastapi, color: '#009688' },
			{ name: 'WordPress API', icon: SiWordpress, color: '#21759B' },
			{ name: 'PHP', icon: SiPhp, color: '#777BB4' },
			{ name: 'MySQL', icon: SiMysql, color: '#4479A1' },
			{ name: 'Redis', icon: SiRedis, color: '#DC382D' },
			{ name: 'Socket.IO', icon: SiSocketdotio, color: '#FAF9F5' },
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
