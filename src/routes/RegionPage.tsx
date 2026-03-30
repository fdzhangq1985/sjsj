import { useMemo, useState } from 'react';
import { countries } from '../data/mockData';

function RegionPage() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const regions = useMemo(() => Array.from(new Set(countries.map((item) => item.region))), []);

  return (
    <div className="page-region">
      <div className="section page-title">
        <div>
          <h1>国家/地区经济数据</h1>
          <p className="section-description">按国家与地区分类展示详细经济指标，支持快速对比分析。</p>
        </div>
      </div>

      <div className="grid grid-2">
        <aside className="card small-card" style={{ minHeight: 520 }}>
          <div className="label">按大洲筛选</div>
          {regions.map((region) => (
            <div key={region} style={{ marginTop: 18 }}>
              <h3 style={{ marginBottom: 10 }}>{region}</h3>
              <div style={{ display: 'grid', gap: 10 }}>
                {countries.filter((country) => country.region === region).map((country) => (
                  <button
                    key={country.id}
                    className="button secondary"
                    style={{ justifyContent: 'flex-start' }}
                    onClick={() => setSelectedCountry(country)}
                  >
                    {country.name}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </aside>

        <section>
          <article className="card glass">
            <div className="page-title">
              <div>
                <h1>{selectedCountry.name} 数据概览</h1>
                <p className="section-description">{selectedCountry.headline}</p>
              </div>
            </div>
            <div className="grid grid-3" style={{ marginTop: 16 }}>
              {selectedCountry.metrics.map((metric) => (
                <div key={metric.label} className="card small-card">
                  <p className="label">{metric.label}</p>
                  <h2>{metric.value}</h2>
                  <span className={metric.change.startsWith('+') ? 'text-success' : 'text-warning'}>{metric.change}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 22 }}>
              <h3>分析亮点</h3>
              <p className="section-description">{selectedCountry.highlights}</p>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}

export default RegionPage;
