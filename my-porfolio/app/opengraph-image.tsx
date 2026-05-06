import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Le Truc - Full-Stack Developer Portfolio'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
	return new ImageResponse(
		<div
			style={{
				background: '#1a1b26', // Tokyo Night background
				width: '100%',
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				padding: '80px',
				fontFamily: 'sans-serif',
			}}
		>
			{/* Decorative Gradient Background Elements */}
			<div
				style={{
					position: 'absolute',
					top: '-10%',
					right: '-5%',
					width: '600px',
					height: '600px',
					background:
						'radial-gradient(circle, rgba(0, 199, 183, 0.15) 0%, rgba(26, 27, 38, 0) 70%)',
				}}
			/>

			<p
				style={{
					color: '#00C7B7',
					fontSize: 32,
					fontWeight: 600,
					letterSpacing: '0.05em',
					margin: 0,
				}}
			>
				Hi there 👋 I&apos;m
			</p>
			<h1
				style={{
					color: '#ffffff',
					fontSize: 96,
					fontWeight: 900,
					margin: '10px 0 20px 0',
				}}
			>
				Le Truc
			</h1>
			<h2
				style={{
					color: '#a9b1d6',
					fontSize: 48,
					fontWeight: 700,
					margin: '0 0 30px 0',
				}}
			>
				Full-Stack Developer
			</h2>

			<p
				style={{
					color: '#9aa5ce',
					fontSize: 32,
					fontStyle: 'italic',
					marginBottom: '60px',
				}}
			>
				&quot;Code with purpose, ship with confidence 🚀&quot;
			</p>

			<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
				<div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
					<span style={{ fontSize: 28 }}>⚡</span>
					<span style={{ color: '#ffffff', fontSize: 28, fontWeight: 500 }}>
						Building scalable CRM systems for 10K+ users
					</span>
				</div>
				<div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
					<span style={{ fontSize: 28 }}>🛠️</span>
					<span style={{ color: '#00C7B7', fontSize: 28, fontWeight: 500 }}>
						React • Next.js • NestJS • Laravel • .NET Core
					</span>
				</div>
			</div>
		</div>,
		{ ...size },
	)
}
