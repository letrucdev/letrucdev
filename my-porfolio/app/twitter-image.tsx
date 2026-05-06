import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const runtime = "edge";
export const alt = `${profile.fullName} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const tokens = {
  canvas: "#faf9f5",
  surfaceCard: "#efe9de",
  surfaceCreamStrong: "#e8e0d2",
  surfaceDark: "#181715",
  surfaceDarkSoft: "#1f1e1b",
  ink: "#141413",
  body: "#3d3d3a",
  muted: "#6c6a64",
  mutedSoft: "#8e8b82",
  hairline: "#e6dfd8",
  primary: "#cc785c",
  onPrimary: "#ffffff",
  onDark: "#faf9f5",
  onDarkSoft: "#a09d96",
};

async function loadGoogleFont(family: string, weight: number) {
  const url = `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, "+")}:wght@${weight}&display=swap`;
  const css = await fetch(url).then((res) => res.text());
  const match = css.match(/src:\s*url\(([^)]+)\)\s*format\('(woff2|opentype|truetype)'\)/);
  if (!match) throw new Error(`Could not resolve font URL for ${family} ${weight}`);
  const data = await fetch(match[1]).then((res) => res.arrayBuffer());
  return data;
}

function SpikeMark({ size: glyphSize = 32, color = tokens.ink }: { size?: number; color?: string }) {
  const c = glyphSize / 2;
  const long = glyphSize / 2;
  const short = glyphSize / 16;
  return (
    <svg width={glyphSize} height={glyphSize} viewBox={`0 0 ${glyphSize} ${glyphSize}`} style={{ display: "flex" }}>
      <path
        d={`M ${c} ${c - long} L ${c + short} ${c - short} L ${c + long} ${c} L ${c + short} ${c + short} L ${c} ${c + long} L ${c - short} ${c + short} L ${c - long} ${c} L ${c - short} ${c - short} Z`}
        fill={color}
      />
    </svg>
  );
}

export default async function Image() {
  const [serif, sans, sansMedium] = await Promise.all([
    loadGoogleFont("Cormorant Garamond", 500),
    loadGoogleFont("Inter", 400),
    loadGoogleFont("Inter", 500),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: tokens.canvas,
          display: "flex",
          flexDirection: "column",
          fontFamily: "Inter",
          position: "relative",
        }}
      >
        {/* Top-left wordmark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            position: "absolute",
            top: 56,
            left: 72,
          }}
        >
          <SpikeMark size={28} color={tokens.ink} />
          <span style={{ fontSize: 22, fontWeight: 500, color: tokens.ink, letterSpacing: "-0.2px" }}>
            {profile.name}
          </span>
        </div>

        {/* Top-right meta */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: 56,
            right: 72,
            fontSize: 13,
            fontWeight: 500,
            color: tokens.muted,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
          }}
        >
          Hoan Kiem · Vietnam
        </div>

        {/* Centered editorial column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: "0 96px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              background: tokens.surfaceCard,
              color: tokens.ink,
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              padding: "6px 14px",
              borderRadius: 9999,
              marginBottom: 28,
            }}
          >
            Full-Stack Developer Portfolio
          </div>

          <div
            style={{
              fontFamily: "Cormorant Garamond",
              fontSize: 168,
              fontWeight: 500,
              color: tokens.ink,
              letterSpacing: "-5px",
              lineHeight: 1,
              marginBottom: 12,
            }}
          >
            {profile.fullName}
          </div>

          <div
            style={{
              fontFamily: "Cormorant Garamond",
              fontSize: 40,
              fontWeight: 500,
              color: tokens.body,
              letterSpacing: "-0.4px",
              marginBottom: 28,
            }}
          >
            {profile.role}
          </div>

          <div
            style={{
              display: "flex",
              width: 72,
              height: 3,
              background: tokens.primary,
              marginBottom: 28,
            }}
          />

          <div
            style={{
              fontFamily: "Inter",
              fontSize: 24,
              color: tokens.body,
              lineHeight: 1.45,
              maxWidth: 760,
            }}
          >
            {`“${profile.motto}”`}
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 72px 56px 72px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              background: tokens.primary,
              color: tokens.onPrimary,
              fontSize: 15,
              fontWeight: 500,
              padding: "12px 22px",
              borderRadius: 8,
            }}
          >
            {`${profile.siteUrl.replace(/^https?:\/\//, "")} →`}
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {["Next.js", "NestJS", "Laravel", ".NET Core"].map((tech) => (
              <div
                key={tech}
                style={{
                  display: "flex",
                  background: tokens.canvas,
                  color: tokens.ink,
                  fontSize: 13,
                  fontWeight: 500,
                  padding: "6px 14px",
                  borderRadius: 9999,
                  border: `1px solid ${tokens.hairline}`,
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Cormorant Garamond", data: serif, style: "normal", weight: 500 },
        { name: "Inter", data: sans, style: "normal", weight: 400 },
        { name: "Inter", data: sansMedium, style: "normal", weight: 500 },
      ],
    },
  );
}
