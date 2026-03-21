import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#09090b",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 48,
          fontFamily: "sans-serif",
        }}
      >
        <svg width="160" height="184" viewBox="0 0 100 115" fill="none">
          <path
            d="M50 4L8 20V58C8 80 26 100 50 111C74 100 92 80 92 58V20L50 4Z"
            fill="#111111"
          />
          <path
            d="M50 4L92 20V58C92 80 74 100 50 111V4Z"
            fill="#CC2020"
          />
          <path
            d="M28 32L44 76L50 60M72 32L56 76L50 60"
            stroke="white"
            strokeWidth="9"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ display: "flex", gap: 12 }}>
            <span
              style={{
                color: "white",
                fontSize: 56,
                fontWeight: 700,
                letterSpacing: 4,
              }}
            >
              VIPER
            </span>
            <span
              style={{
                color: "#CC2020",
                fontSize: 56,
                fontWeight: 700,
                letterSpacing: 4,
              }}
            >
              OFFENSIVE
            </span>
          </div>
          <span
            style={{
              color: "#CC2020",
              fontSize: 56,
              fontWeight: 700,
              letterSpacing: 4,
            }}
          >
            SECURITY
          </span>
          <span
            style={{
              color: "#52525b",
              fontSize: 22,
              fontFamily: "monospace",
              letterSpacing: 3,
              marginTop: 8,
            }}
          >
            Offensive Security · Web3-Native · Web2-Capable
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
