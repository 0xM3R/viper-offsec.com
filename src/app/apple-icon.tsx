import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#09090b",
          borderRadius: 32,
        }}
      >
        <svg width="120" height="138" viewBox="0 0 100 115" fill="none">
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
      </div>
    ),
    { ...size }
  );
}
