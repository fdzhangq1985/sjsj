import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="section" style={{ textAlign: 'center', padding: '120px 0' }}>
      <h1>404</h1>
      <p className="section-description">抱歉，您访问的页面不存在。</p>
      <Link to="/" className="button">
        返回首页
      </Link>
    </div>
  );
}

export default NotFoundPage;
