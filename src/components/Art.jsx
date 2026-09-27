// Original generated placeholder artwork (no third-party photos).
const tones = {
  brick: ['#9c4536', '#5b211a', '#e7b38f'],
  moss: ['#5f7359', '#2c382b', '#d6dfc4'],
  gold: ['#d9b676', '#8f6a2c', '#f6e7c1'],
  sand: ['#eadfca', '#b9a582', '#fbf6ea'],
}

export default function Art({ tone = 'brick', variant = 0, className = '', label }) {
  const [a, b, c] = tones[tone] || tones.brick
  const id = `g${tone}${variant}`
  return (
    <div className={`relative overflow-hidden ${className}`} role={label ? 'img' : undefined} aria-label={label}>
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={a} />
            <stop offset="1" stopColor={b} />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill={`url(#${id})`} />
        <circle cx={80 + (variant % 3) * 120} cy="70" r="34" fill={c} opacity=".55" />
        {variant % 2 === 0 ? (
          <g fill={b} opacity=".55">
            <rect x="40" y="130" width="90" height="170" />
            <rect x="130" y="100" width="70" height="200" />
            <path d="M200 300V150l55-40 55 40v150z" />
            <rect x="310" y="140" width="70" height="160" />
          </g>
        ) : (
          <g fill={b} opacity=".5">
            <path d="M0 300V190q80-70 160-10t160-20 80 30v110z" />
            <path d="M0 300V230q90-50 180-10t220-10v90z" opacity=".7" />
          </g>
        )}
        <g fill={c} opacity=".35">
          {Array.from({ length: 6 }).map((_, i) => (
            <rect key={i} x={55 + i * 55} y={165 + (i % 2) * 20} width="12" height="18" rx="2" />
          ))}
        </g>
      </svg>
    </div>
  )
}
