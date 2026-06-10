export default function PianoKeys() {
  const whites = 52
  const blacks = [1,2,4,5,6,8,9,11,12,13,15,16,18,19,20,22,23,25,26,27,29,30,32,33,34,36,37,39,40,41,43,44,46,47,48,50,51]

  return (
    <svg
      viewBox={`0 0 ${whites * 52} 220`}
      preserveAspectRatio="xMinYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%' }}
      aria-hidden
    >
      {Array.from({ length: whites }).map((_, i) => (
        <rect
          key={`w-${i}`}
          x={i * 52 + 1}
          y={0}
          width={50}
          height={218}
          rx={3}
          style={{ fill: 'var(--border)', stroke: 'var(--border-strong)' }}
          strokeWidth={1}
        />
      ))}
      {blacks.map((i) => (
        <rect
          key={`b-${i}`}
          x={i * 52 - 16}
          y={0}
          width={34}
          height={138}
          rx={3}
          style={{ fill: 'var(--text-faint)', stroke: 'var(--border)' }}
          strokeWidth={1}
        />
      ))}
    </svg>
  )
}
