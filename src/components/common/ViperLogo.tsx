import ViperShield from "./ViperShield";

export default function ViperLogo({
  size = "md",
  showTagline = false,
}: {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
}) {
  const shieldSize = size === "sm" ? 28 : size === "lg" ? 52 : 36;
  const textSize =
    size === "sm" ? "text-sm" : size === "lg" ? "text-xl" : "text-base";

  return (
    <div className="flex items-center gap-3">
      <ViperShield size={shieldSize} />
      <div className="flex flex-col leading-none">
        <div className={`font-bold tracking-wider ${textSize}`}>
          <span className="text-white">VIPER </span>
          <span className="text-red-500">OFFENSIVE</span>
        </div>
        <div className={`font-bold tracking-wider text-red-500 ${textSize}`}>
          SECURITY
        </div>
        {showTagline && (
          <p className="text-zinc-500 text-[10px] font-mono tracking-widest mt-0.5">
            Excellence in offensive security
          </p>
        )}
      </div>
    </div>
  );
}
