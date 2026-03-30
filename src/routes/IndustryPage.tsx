import { useState } from 'react';
import { industryTabs } from '../data/mockData';

function IndustryPage() {
  const [activeId, setActiveId] = useState(industryTabs[0].id);
  const active = industryTabs.find((item) => item.id === activeId) ?? industryTabs[0];

  return (
    <div className="page-industry">
      <div className="section page-title">
        <div>
          <h1>行业与市场数据</h1>
          <p className="section-description">覆盖能源、金属、农产品等专项数据与市场趋势。</p>
        </div>
      </div>

      <div className="card glass" style={{ padding: 20 }}>
        <div className="tabs" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          {industryTabs.map((tab) => (
            <button
              key={tab.id}
              className={`button secondary${tab.id === activeId ? ' active' : ''}`}
              onClick={() => setActiveId(tab.id)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className="section" style={{ marginTop: 24 }}>
          <div className="page-title">
            <div>
              <h1>{active.title}</h1>
              <p className="section-description">{active.overview}</p>
            </div>
          </div>
          <div className="grid grid-3">
            {active.keyStats.map((stat) => (
              <div key={stat.label} className="card small-card">
                <p className="label">{stat.label}</p>
                <h3>{stat.value}</h3>
              </div>
            ))}
          </div>
          <div className="card small-card" style={{ marginTop: 20 }}>
            <h3>深度分析</h3>
            <p className="section-description">{active.details}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndustryPage;
