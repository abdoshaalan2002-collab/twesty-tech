interface LogoProps {
  className?: string;
  showText?: boolean;
  lightBg?: boolean;
}

export function Logo({ className = '', showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src="/twistytech-logo.png"
        alt="TwistyTech"
        className="h-10 w-10 shrink-0 rounded-lg object-cover"
      />
      {showText && (
        <span className="font-display text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Twisty<span className="text-primary-600 dark:text-primary-400">Tech</span>
        </span>
      )}
    </div>
  );
}
