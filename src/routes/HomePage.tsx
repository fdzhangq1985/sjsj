import { Link } from 'react-router-dom';
import MetricCard from '../components/MetricCard';
import { alerts, forecasts, globalMetrics } from '../data/mockData';

function HomePage() {
  return (
    <div className="page-home">
      <section className="hero card glass">
        <div className="hero-copy">
          <span className="badge">全球经济智能分析</span>
          <h1>数据视界 - 洞察全球经济脉搏</h1>
          <p className="section-description">
            实时追踪全球主要经济体的GDP、通胀率、利率及贸易数据，
            通过可视化图表与趋势预测帮助专业人士快速决策。
          </p>
          <div className="hero-actions">
            <Link to="/regions" className="button">
              开始探索
            </Link>
            <Link to="/forecast" className="button secondary">
              查看趋势预测
            </Link>
          </div>
        </div>
        <div className="hero-meta">
          <div className="hero-metric">
            <p className="label">当前预警</p>
            <h2 className="text-warning">欧元区通胀率异常</h2>
            <p className="section-description">当前存在高风险预警，建议关注货币政策动态。</p>
          </div>
          <div className="hero-summary">
            <div>
              <p className="label">更新时间</p>
              <strong>2026-03-30 10:40</strong>
            </div>
            <div>
              <p className="label">数据来源</p>
              <strong>IMF / 世界银行 / 统计局</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="page-title">
          <div>
            <h1>核心指标一览</h1>
            <p className="section-description">全球主要经济数据实时更新，帮助快速发现趋势与风险。</p>
          </div>
          <Link to="/regions" className="button secondary">
            进入数据页
          </Link>
        </div>
        <div className="grid grid-3">
          {globalMetrics.map((metric) => (
            <MetricCard key={metric.id} metric={metric} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="page-title">
          <h1>当前预警信息</h1>
        </div>
        <div className="grid grid-2">
          {alerts.map((alert) => (
            <article key={alert.id} className="card small-card">
              <div className="card-head" style={{ justifyContent: 'space-between' }}>
                <p className="label">{alert.level === 'high' ? '高风险' : alert.level === 'medium' ? '中风险' : '低风险'}</p>
                <span className={`status-pill ${alert.level}`}>{alert.time}</span>
              </div>
              <h3>{alert.title}</h3>
              <p className="section-description">{alert.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="page-title">
          <h1>未来趋势预测</h1>
        </div>
        <div className="grid grid-3">
          {forecasts.map((item) => (
            <article key={item.id} className="card small-card">
              <p className="label">{item.category}</p>
              <h3>{item.title}</h3>
              <div className="status-pill medium">当前 {item.current}</div>
              <p style={{ marginTop: 10 }}><strong>预测：</strong>{item.predicted}</p>
              <p className="section-description">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
