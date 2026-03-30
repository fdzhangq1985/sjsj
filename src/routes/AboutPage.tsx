function AboutPage() {
  return (
    <div className="page-about">
      <div className="section page-title">
        <div>
          <h1>关于我们</h1>
          <p className="section-description">了解平台定位、数据来源与专业设计理念。</p>
        </div>
      </div>
      <div className="card glass">
        <div className="grid grid-2">
          <div>
            <h2>我们的使命</h2>
            <p className="section-description">
              数据视界致力于将复杂枯燥的全球经济数据转化为直观、动态、可交互的可视化分析，
              帮助专业人士快速洞察宏观经济形势并做出决策。
            </p>
          </div>
          <div>
            <h2>品牌定位</h2>
            <p className="section-description">
              专业权威+前沿科技，既传递信任感，又通过智能预测与动态图表展现科技领先性。
            </p>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="grid grid-2">
          <div className="card small-card">
            <h3>核心差异</h3>
            <ul style={{ paddingLeft: 18, lineHeight: 1.9 }}>
              <li>数据深度：不仅展示数据，更提供趋势预测和风险预警。</li>
              <li>可视化质量：动态图表、热力图、交互式地图。</li>
              <li>专业度：面向专业用户的设计语言与交互逻辑。</li>
            </ul>
          </div>
          <div className="card small-card">
            <h3>技术方向</h3>
            <ul style={{ paddingLeft: 18, lineHeight: 1.9 }}>
              <li>响应式设计，兼容移动端与桌面端。</li>
              <li>骨架屏与进度反馈，提升加载体验。</li>
              <li>动态交互与智能预测，增强科技感。</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
