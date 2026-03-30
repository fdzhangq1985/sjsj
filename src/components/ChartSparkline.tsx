interface ChartSparklineProps {
  data: number[];
}

function ChartSparkline({ data }: ChartSparklineProps) {
  const width = 180;
  const height = 48;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const points = data
    .map((value, index) => {
      const x = (index / (data.length - 1)) * width;
      const y = height - ((value - min) / range) * height;
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <svg width={width} height={height} aria-label="趋势图" style={{ display: 'block' }}>
      <defs>
        <linearGradient id="sparkline-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00c896" />
          <stop offset="100%" stopColor="#0066ff" />
        </linearGradient>
      </defs>
      <polyline
        fill="none"
        stroke="url(#sparkline-gradient)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={points}
      />
    </svg>
  );
}

export default ChartSparkline;
