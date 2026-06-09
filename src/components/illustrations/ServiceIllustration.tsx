interface ServiceIllustrationProps {
  type: string;
  className?: string;
}

export function ServiceIllustration({ type, className = "" }: ServiceIllustrationProps) {
  const illustrations: Record<string, React.ReactNode> = {
    software: (
      <svg viewBox="0 0 120 120" fill="none" className={className}>
        <rect x="20" y="25" width="80" height="55" rx="6" stroke="url(#grad1)" strokeWidth="2" fill="rgba(0,123,255,0.08)" />
        <rect x="28" y="35" width="30" height="4" rx="2" fill="#007BFF" opacity="0.6" />
        <rect x="28" y="45" width="50" height="3" rx="1.5" fill="#00D9FF" opacity="0.4" />
        <rect x="28" y="53" width="40" height="3" rx="1.5" fill="#00D9FF" opacity="0.3" />
        <rect x="28" y="61" width="55" height="3" rx="1.5" fill="#00D9FF" opacity="0.3" />
        <circle cx="85" cy="40" r="8" stroke="#00D9FF" strokeWidth="1.5" fill="rgba(0,217,255,0.1)" />
        <path d="M82 40 L84 42 L88 38" stroke="#00D9FF" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="35" y="88" width="50" height="4" rx="2" fill="#007BFF" opacity="0.3" />
        <defs>
          <linearGradient id="grad1" x1="0" y1="0" x2="120" y2="120">
            <stop stopColor="#007BFF" />
            <stop offset="1" stopColor="#00D9FF" />
          </linearGradient>
        </defs>
      </svg>
    ),
    web: (
      <svg viewBox="0 0 120 120" fill="none" className={className}>
        <rect x="15" y="20" width="90" height="65" rx="6" stroke="url(#grad2)" strokeWidth="2" fill="rgba(0,123,255,0.06)" />
        <rect x="15" y="20" width="90" height="12" rx="6" fill="rgba(0,123,255,0.15)" />
        <circle cx="25" cy="26" r="2" fill="#FF5F57" />
        <circle cx="33" cy="26" r="2" fill="#FFBD2E" />
        <circle cx="41" cy="26" r="2" fill="#28CA41" />
        <rect x="25" y="40" width="35" height="35" rx="4" fill="rgba(0,217,255,0.1)" stroke="#00D9FF" strokeWidth="1" />
        <rect x="65" y="40" width="30" height="8" rx="2" fill="#007BFF" opacity="0.4" />
        <rect x="65" y="52" width="25" height="4" rx="2" fill="#00D9FF" opacity="0.3" />
        <rect x="65" y="60" width="30" height="4" rx="2" fill="#00D9FF" opacity="0.2" />
        <rect x="65" y="68" width="20" height="4" rx="2" fill="#00D9FF" opacity="0.2" />
        <defs>
          <linearGradient id="grad2" x1="0" y1="0" x2="120" y2="120">
            <stop stopColor="#007BFF" />
            <stop offset="1" stopColor="#00D9FF" />
          </linearGradient>
        </defs>
      </svg>
    ),
    mobile: (
      <svg viewBox="0 0 120 120" fill="none" className={className}>
        <rect x="40" y="15" width="40" height="75" rx="8" stroke="url(#grad3)" strokeWidth="2" fill="rgba(0,123,255,0.06)" />
        <rect x="44" y="25" width="32" height="50" rx="2" fill="rgba(0,217,255,0.08)" />
        <rect x="48" y="30" width="24" height="3" rx="1.5" fill="#007BFF" opacity="0.5" />
        <rect x="48" y="37" width="24" height="15" rx="3" fill="rgba(0,123,255,0.15)" stroke="#007BFF" strokeWidth="0.5" />
        <rect x="48" y="56" width="10" height="10" rx="2" fill="rgba(0,217,255,0.15)" />
        <rect x="62" y="56" width="10" height="10" rx="2" fill="rgba(0,217,255,0.15)" />
        <circle cx="60" cy="84" r="3" stroke="#00D9FF" strokeWidth="1" />
        <defs>
          <linearGradient id="grad3" x1="0" y1="0" x2="120" y2="120">
            <stop stopColor="#007BFF" />
            <stop offset="1" stopColor="#00D9FF" />
          </linearGradient>
        </defs>
      </svg>
    ),
    cloud: (
      <svg viewBox="0 0 120 120" fill="none" className={className}>
        <path d="M35 70 C25 70 20 60 25 52 C20 45 28 38 38 40 C42 30 55 28 62 35 C70 32 80 38 78 48 C88 50 90 62 82 68 C78 72 72 74 65 72 Z" stroke="url(#grad4)" strokeWidth="2" fill="rgba(0,123,255,0.08)" />
        <circle cx="50" cy="55" r="3" fill="#00D9FF" opacity="0.6" />
        <circle cx="62" cy="50" r="3" fill="#007BFF" opacity="0.6" />
        <circle cx="70" cy="58" r="3" fill="#00D9FF" opacity="0.4" />
        <path d="M45 78 L50 85 L55 78" stroke="#00D9FF" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <path d="M60 78 L65 88 L70 78" stroke="#007BFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <defs>
          <linearGradient id="grad4" x1="0" y1="0" x2="120" y2="120">
            <stop stopColor="#007BFF" />
            <stop offset="1" stopColor="#00D9FF" />
          </linearGradient>
        </defs>
      </svg>
    ),
    devops: (
      <svg viewBox="0 0 120 120" fill="none" className={className}>
        <circle cx="60" cy="60" r="25" stroke="url(#grad5)" strokeWidth="2" fill="rgba(0,123,255,0.05)" strokeDasharray="4 4" />
        <circle cx="60" cy="35" r="8" fill="rgba(0,217,255,0.15)" stroke="#00D9FF" strokeWidth="1.5" />
        <circle cx="38" cy="72" r="8" fill="rgba(0,123,255,0.15)" stroke="#007BFF" strokeWidth="1.5" />
        <circle cx="82" cy="72" r="8" fill="rgba(0,217,255,0.15)" stroke="#00D9FF" strokeWidth="1.5" />
        <line x1="60" y1="43" x2="42" y2="65" stroke="#007BFF" strokeWidth="1" opacity="0.4" />
        <line x1="60" y1="43" x2="78" y2="65" stroke="#00D9FF" strokeWidth="1" opacity="0.4" />
        <line x1="46" y1="72" x2="74" y2="72" stroke="#007BFF" strokeWidth="1" opacity="0.4" />
        <path d="M55 60 L58 63 L65 56" stroke="#00D9FF" strokeWidth="2" strokeLinecap="round" />
        <defs>
          <linearGradient id="grad5" x1="0" y1="0" x2="120" y2="120">
            <stop stopColor="#007BFF" />
            <stop offset="1" stopColor="#00D9FF" />
          </linearGradient>
        </defs>
      </svg>
    ),
    ai: (
      <svg viewBox="0 0 120 120" fill="none" className={className}>
        <circle cx="60" cy="55" r="20" stroke="url(#grad6)" strokeWidth="2" fill="rgba(0,123,255,0.06)" />
        <circle cx="53" cy="50" r="4" fill="#00D9FF" />
        <circle cx="67" cy="50" r="4" fill="#00D9FF" />
        <path d="M50 62 Q60 70 70 62" stroke="#007BFF" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <line x1="60" y1="35" x2="60" y2="25" stroke="#00D9FF" strokeWidth="1.5" />
        <line x1="45" y1="40" x2="38" y2="33" stroke="#007BFF" strokeWidth="1.5" />
        <line x1="75" y1="40" x2="82" y2="33" stroke="#007BFF" strokeWidth="1.5" />
        <circle cx="60" cy="23" r="3" fill="#00D9FF" opacity="0.6" />
        <circle cx="36" cy="31" r="2" fill="#007BFF" opacity="0.6" />
        <circle cx="84" cy="31" r="2" fill="#007BFF" opacity="0.6" />
        <rect x="30" y="80" width="60" height="8" rx="4" fill="rgba(0,217,255,0.1)" stroke="#00D9FF" strokeWidth="0.5" />
        <rect x="35" y="82" width="20" height="4" rx="2" fill="#007BFF" opacity="0.4" />
        <defs>
          <linearGradient id="grad6" x1="0" y1="0" x2="120" y2="120">
            <stop stopColor="#007BFF" />
            <stop offset="1" stopColor="#00D9FF" />
          </linearGradient>
        </defs>
      </svg>
    ),
    api: (
      <svg viewBox="0 0 120 120" fill="none" className={className}>
        <rect x="20" y="45" width="25" height="30" rx="4" stroke="#007BFF" strokeWidth="1.5" fill="rgba(0,123,255,0.08)" />
        <rect x="75" y="45" width="25" height="30" rx="4" stroke="#00D9FF" strokeWidth="1.5" fill="rgba(0,217,255,0.08)" />
        <path d="M45 55 L60 55 L60 50 L70 60 L60 70 L60 65 L45 65 Z" fill="#007BFF" opacity="0.5" />
        <path d="M75 55 L60 55 L60 50 L50 60 L60 70 L60 65 L75 65 Z" fill="#00D9FF" opacity="0.5" />
        <circle cx="32" cy="38" r="4" stroke="#007BFF" strokeWidth="1" />
        <circle cx="88" cy="38" r="4" stroke="#00D9FF" strokeWidth="1" />
        <line x1="32" y1="42" x2="32" y2="45" stroke="#007BFF" strokeWidth="1" />
        <line x1="88" y1="42" x2="88" y2="45" stroke="#00D9FF" strokeWidth="1" />
        <defs>
          <linearGradient id="grad7" x1="0" y1="0" x2="120" y2="120">
            <stop stopColor="#007BFF" />
            <stop offset="1" stopColor="#00D9FF" />
          </linearGradient>
        </defs>
      </svg>
    ),
    infra: (
      <svg viewBox="0 0 120 120" fill="none" className={className}>
        <rect x="25" y="30" width="70" height="15" rx="3" stroke="#007BFF" strokeWidth="1.5" fill="rgba(0,123,255,0.08)" />
        <rect x="25" y="52" width="70" height="15" rx="3" stroke="#00D9FF" strokeWidth="1.5" fill="rgba(0,217,255,0.08)" />
        <rect x="25" y="74" width="70" height="15" rx="3" stroke="#007BFF" strokeWidth="1.5" fill="rgba(0,123,255,0.08)" />
        <circle cx="33" cy="37" r="2" fill="#28CA41" />
        <circle cx="33" cy="59" r="2" fill="#28CA41" />
        <circle cx="33" cy="81" r="2" fill="#FFBD2E" />
        <rect x="42" y="35" width="20" height="3" rx="1" fill="#007BFF" opacity="0.3" />
        <rect x="42" y="57" width="30" height="3" rx="1" fill="#00D9FF" opacity="0.3" />
        <rect x="42" y="79" width="15" height="3" rx="1" fill="#007BFF" opacity="0.3" />
      </svg>
    ),
    consulting: (
      <svg viewBox="0 0 120 120" fill="none" className={className}>
        <circle cx="45" cy="45" r="12" stroke="#007BFF" strokeWidth="1.5" fill="rgba(0,123,255,0.08)" />
        <circle cx="75" cy="45" r="12" stroke="#00D9FF" strokeWidth="1.5" fill="rgba(0,217,255,0.08)" />
        <path d="M35 70 Q45 60 55 70" stroke="#007BFF" strokeWidth="1.5" fill="rgba(0,123,255,0.05)" />
        <path d="M65 70 Q75 60 85 70" stroke="#00D9FF" strokeWidth="1.5" fill="rgba(0,217,255,0.05)" />
        <rect x="40" y="85" width="40" height="20" rx="4" stroke="url(#grad8)" strokeWidth="1.5" fill="rgba(0,123,255,0.05)" />
        <rect x="48" y="91" width="24" height="3" rx="1.5" fill="#007BFF" opacity="0.4" />
        <rect x="48" y="97" width="16" height="3" rx="1.5" fill="#00D9FF" opacity="0.3" />
        <defs>
          <linearGradient id="grad8" x1="0" y1="0" x2="120" y2="120">
            <stop stopColor="#007BFF" />
            <stop offset="1" stopColor="#00D9FF" />
          </linearGradient>
        </defs>
      </svg>
    ),
  };

  return (
    <div className="h-24 w-24">
      {illustrations[type] || illustrations.software}
    </div>
  );
}
