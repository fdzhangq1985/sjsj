function Footer() {
  return (
    <footer className="footer" style={{ background: 'rgba(7, 20, 36, 0.96)', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="footer-inner">
        <div>
          <strong>数据视界</strong> — 专业级宏观经济数据分析平台。
        </div>
        <div className="footer-links">
          <span>数据来源：IMF、世界银行、各国统计局</span>
          <span>© 2026 数据视界</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
