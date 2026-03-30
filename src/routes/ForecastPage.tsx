import { alerts, forecasts } from '../data/mockData';

function ForecastPage() {
  return (
    <div className="page-forecast">
      <div className="section page-title">
        <div>
          <h1>趋势预测与预警</h1>
          <p className="section-description">集中展示各领域预测结果与当前风险预警。</p>
        </div>
      </div>

      <section className="section">
        <div className="page-title">
          <h1>当前活跃预警</h1>
        </div>
        <div className="grid grid-2">
          {alerts.map((alert) => (
            <article key={alert.id} className="card small-card">
              <div className="card-head" style={{ justifyContent: 'space-between' }}>
                <span className={`status-pill ${alert.level}`}>{alert.level === 'high' ? '高风险' : alert.level === 'medium' ? '中风险' : '低风险'}</span>
                <span>{alert.time}</span>
              </div>
              <h3>{alert.title}</h3>
              <p className="section-description">{alert.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="page-title">
          <h1>预测模型展示</h1>
        </div>
        <div className="grid grid-3">
          {forecasts.map((item) => (
            <article key={item.id} className="card small-card">
              <p className="label">{item.category}</p>
              <h3>{item.title}</h3>
              <p><strong>当前：</strong>{item.current}</p>
              <p><strong>预测：</strong>{item.predicted}</p>
              <p className="section-description">置信区间 {item.interval}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="page-title">
          <h1>历史预测准确率</h1>
        </div>
        <div className="card glass">
          <div className="grid grid-2">
            <div className="small-card">
              <p className="label">通胀预测平均误差</p>
              <h2>0.3%</h2>
              <p className="section-description">过去12个月模型准确率稳定在可解释范围内。</p>
            </div>
            <div className="small-card">
              <p className="label">大宗商品预测准确率</p>
              <h2>87%</h2>
              <p className="section-description">考虑供应链与宏观因素后的预判表现良好。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ForecastPage;
