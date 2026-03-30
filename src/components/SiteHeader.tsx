import { NavLink } from 'react-router-dom';

const navItems = [
  { label: '首页', path: '/' },
  { label: '国家/地区', path: '/regions' },
  { label: '行业市场', path: '/industries' },
  { label: '趋势预测', path: '/forecast' },
  { label: '报告中心', path: '/reports' },
  { label: '用户中心', path: '/user' },
  { label: '关于我们', path: '/about' }
];

function SiteHeader() {
  return (
    <header className="site-header" style={{ background: 'rgba(7, 20, 36, 0.95)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="header-inner">
        <div className="brand">
          <div className="brand-mark">数据视界</div>
          <div className="brand-sub">全球经济数据智能分析平台</div>
        </div>
        <nav className="nav-links">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default SiteHeader;
