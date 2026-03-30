import { MetricItem } from '../data/mockData';
import ChartSparkline from './ChartSparkline';

interface MetricCardProps {
  metric: MetricItem;
}

function MetricCard({ metric }: MetricCardProps) {
  const isPositive = metric.trend.startsWith('+');
  return (
    <article className="card metric-card">
      <div className="card-head">
        <p className="label">{metric.title}</p>
        <span className={`badge ${isPositive ? 'text-success' : 'text-warning'}`}>
          {metric.trend}
        </span>
      </div>
      <h3>{metric.value}</h3>
      <p className="section-description">{metric.description}</p>
      <div className="sparkline-wrapper">
        <ChartSparkline data={metric.series} />
      </div>
    </article>
  );
}

export default MetricCard;
