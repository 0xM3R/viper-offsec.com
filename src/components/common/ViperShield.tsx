export default function ViperShield({
  size = 32,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M50 4L8 20V58C8 80 26 100 50 111C74 100 92 80 92 58V20L50 4Z"
        fill="#111111"
        stroke="#111111"
        strokeWidth="2"
      />
      <path d="M50 4L92 20V58C92 80 74 100 50 111V4Z" fill="#CC2020" />
      <path
        d="M92 20V58C92 80 74 100 50 111"
        stroke="#CC2020"
        strokeWidth="3"
        fill="none"
      />
      <path
        d="M28 32L44 76L50 60"
        stroke="white"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M72 32L56 76L50 60"
        stroke="white"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
