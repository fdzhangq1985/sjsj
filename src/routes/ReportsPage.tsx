import { useState } from 'react';
import { reportTemplates } from '../data/mockData';

function ReportsPage() {
  const [activeTemplate, setActiveTemplate] = useState(reportTemplates[0]);

  return (
    <div className="page-reports">
      <div className="section page-title">
        <div>
          <h1>定制化数据报告</h1>
          <p className="section-description">选择报告模板，快速生成深度数据洞察报告。</p>
        </div>
      </div>

      <div className="grid grid-2">
        <aside className="card small-card" style={{ minHeight: 520 }}>
          <h3>报告模板库</h3>
          <div style={{ display: 'grid', gap: 16, marginTop: 18 }}>
            {reportTemplates.map((template) => (
              <button
                key={template.id}
                className={`button secondary${activeTemplate.id === template.id ? ' active' : ''}`}
                onClick={() => setActiveTemplate(template)}
              >
                {template.name}
              </button>
            ))}
          </div>
        </aside>

        <article className="card glass">
          <div className="page-title">
            <div>
              <h1>{activeTemplate.name}</h1>
              <p className="section-description">{activeTemplate.description}</p>
            </div>
          </div>
          <div className="grid grid-2" style={{ marginTop: 20 }}>
            <div className="small-card">
              <p className="label">指标数量</p>
              <h2>{activeTemplate.indicators}</h2>
            </div>
            <div className="small-card">
              <p className="label">预估生成时间</p>
              <h2>{activeTemplate.estimate}</h2>
            </div>
          </div>
          <div style={{ marginTop: 24 }}>
            <h3>创建参数</h3>
            <div className="grid grid-2" style={{ gap: 16 }}>
              <div>
                <label>区域范围</label>
                <select>
                  <option>全球</option>
                  <option>大洲</option>
                  <option>国家/地区</option>
                </select>
              </div>
              <div>
                <label>时间范围</label>
                <select>
                  <option>近1年</option>
                  <option>近5年</option>
                  <option>自定义</option>
                </select>
              </div>
            </div>
            <div style={{ marginTop: 20 }}>
              <label>可视化风格</label>
              <select>
                <option>自动推荐</option>
                <option>图表优先</option>
                <option>说明优先</option>
              </select>
            </div>
            <div style={{ marginTop: 24, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <button className="button">生成在线报告</button>
              <button className="button secondary">导出PDF</button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default ReportsPage;
