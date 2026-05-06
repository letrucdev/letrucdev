import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const runtime = "edge";
export const alt = `${profile.fullName} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const tokens = {
  canvas: "#faf9f5",
  surfaceCard: "#efe9de",
  surfaceDark: "#181715",
  surfaceDarkSoft: "#1f1e1b",
  surfaceDarkElevated: "#252320",
  ink: "#141413",
  body: "#3d3d3a",
  muted: "#6c6a64",
  mutedSoft: "#8e8b82",
  hairline: "#e6dfd8",
  primary: "#cc785c",
  onDark: "#faf9f5",
  onDarkSoft: "#a09d96",
  accentTeal: "#5db8a6",
  accentAmber: "#e8a55a",
};

async function loadGoogleFont(family: string, weight: number) {
  const url = `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, "+")}:wght@${weight}&display=swap`;
  const css = await fetch(url).then((res) => res.text());
  const match = css.match(/src:\s*url\(([^)]+)\)\s*format\('(woff2|opentype|truetype)'\)/);
  if (!match) throw new Error(`Could not resolve font URL for ${family} ${weight}`);
  const data = await fetch(match[1]).then((res) => res.arrayBuffer());
  return data;
}

function SpikeMark({ size: glyphSize = 28, color = tokens.ink }: { size?: number; color?: string }) {
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
  const [serif, sans, sansMedium, mono] = await Promise.all([
    loadGoogleFont("Cormorant Garamond", 500),
    loadGoogleFont("Inter", 400),
    loadGoogleFont("Inter", 500),
    loadGoogleFont("JetBrains Mono", 400),
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
          padding: "56px 72px",
          fontFamily: "Inter",
        }}
      >
        {/* Top row: wordmark + badge */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <SpikeMark size={28} color={tokens.ink} />
            <span style={{ fontSize: 22, fontWeight: 500, color: tokens.ink, letterSpacing: "-0.2px" }}>
              {profile.name}
            </span>
          </div>
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
            }}
          >
            Portfolio · 2026
          </div>
        </div>

        {/* Body: 6/6 split */}
        <div style={{ display: "flex", flex: 1, gap: 40, marginTop: 36 }}>
          {/* Left text column */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              justifyContent: "center",
            }}
          >
            <div
              style={{
                fontFamily: "Cormorant Garamond",
                fontSize: 140,
                fontWeight: 500,
                color: tokens.ink,
                letterSpacing: "-4px",
                lineHeight: 1,
                marginBottom: 8,
              }}
            >
              {profile.fullName}
            </div>
            <div
              style={{
                fontFamily: "Cormorant Garamond",
                fontSize: 44,
                fontWeight: 500,
                color: tokens.body,
                letterSpacing: "-0.6px",
                lineHeight: 1.1,
                marginBottom: 28,
              }}
            >
              {profile.role}
            </div>
            <div
              style={{
                display: "flex",
                width: 64,
                height: 3,
                background: tokens.primary,
                marginBottom: 22,
              }}
            />
            <div
              style={{
                fontFamily: "Inter",
                fontSize: 22,
                fontWeight: 400,
                color: tokens.body,
                lineHeight: 1.45,
                maxWidth: 460,
              }}
            >
              {`“${profile.motto}”`}
            </div>
          </div>

          {/* Right code window card */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              background: tokens.surfaceDark,
              borderRadius: 12,
              padding: 24,
            }}
          >
            <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
              <div style={{ width: 12, height: 12, borderRadius: 9999, background: "#3d3d3a" }} />
              <div style={{ width: 12, height: 12, borderRadius: 9999, background: "#3d3d3a" }} />
              <div style={{ width: 12, height: 12, borderRadius: 9999, background: "#3d3d3a" }} />
              <div style={{ flex: 1 }} />
              <div
                style={{
                  display: "flex",
                  fontFamily: "JetBrains Mono",
                  fontSize: 12,
                  color: tokens.onDarkSoft,
                  letterSpacing: "0.6px",
                }}
              >
                profile.ts
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontFamily: "JetBrains Mono",
                fontSize: 17,
                lineHeight: 1.7,
                color: tokens.onDark,
              }}
            >
              <div style={{ display: "flex" }}>
                <span style={{ color: tokens.accentTeal }}>const</span>
                <span>&nbsp;</span>
                <span style={{ color: tokens.accentAmber }}>letruc</span>
                <span>&nbsp;= {"{"}</span>
              </div>
              <div style={{ display: "flex", paddingLeft: 24 }}>
                <span style={{ color: tokens.onDarkSoft }}>role:</span>
                <span>&nbsp;</span>
                <span style={{ color: tokens.primary }}>&quot;Full-Stack Developer&quot;</span>
                <span>,</span>
              </div>
              <div style={{ display: "flex", paddingLeft: 24 }}>
                <span style={{ color: tokens.onDarkSoft }}>stack:</span>
                <span>&nbsp;[</span>
                <span style={{ color: tokens.primary }}>&quot;Next.js&quot;</span>
                <span>,&nbsp;</span>
                <span style={{ color: tokens.primary }}>&quot;NestJS&quot;</span>
                <span>],</span>
              </div>
              <div style={{ display: "flex", paddingLeft: 24 }}>
                <span style={{ color: tokens.onDarkSoft }}>focus:</span>
                <span>&nbsp;</span>
                <span style={{ color: tokens.primary }}>&quot;CRM Systems&quot;</span>
                <span>,</span>
              </div>
              <div style={{ display: "flex", paddingLeft: 24 }}>
                <span style={{ color: tokens.onDarkSoft }}>location:</span>
                <span>&nbsp;</span>
                <span style={{ color: tokens.primary }}>&quot;Hoan Kiem, VN&quot;</span>
                <span>,</span>
              </div>
              <div style={{ display: "flex" }}>
                <span>{"};"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 24,
            marginTop: 24,
            borderTop: `1px solid ${tokens.hairline}`,
          }}
        >
          <div style={{ display: "flex", fontSize: 17, color: tokens.muted, fontWeight: 500 }}>
            {profile.siteUrl.replace(/^https?:\/\//, "")}
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {["Next.js", "NestJS", "Laravel", ".NET Core"].map((tech) => (
              <div
                key={tech}
                style={{
                  display: "flex",
                  background: tokens.surfaceCard,
                  color: tokens.ink,
                  fontSize: 13,
                  fontWeight: 500,
                  padding: "6px 14px",
                  borderRadius: 9999,
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
        { name: "JetBrains Mono", data: mono, style: "normal", weight: 400 },
      ],
    },
  );
}
