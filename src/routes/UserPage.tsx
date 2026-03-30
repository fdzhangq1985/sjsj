import { userProfile } from '../data/mockData';

function UserPage() {
  return (
    <div className="page-user">
      <div className="section page-title">
        <div>
          <h1>用户中心</h1>
          <p className="section-description">管理个人资料、收藏、配置与预警订阅。</p>
        </div>
      </div>

      <div className="grid grid-2">
        <article className="card glass">
          <h2>欢迎，{userProfile.name}</h2>
          <p className="section-description">{userProfile.role}，所属机构：{userProfile.organization}</p>
          <div className="grid grid-2" style={{ marginTop: 20 }}>
            <div className="small-card">
              <p className="label">邮箱</p>
              <strong>{userProfile.email}</strong>
            </div>
            <div className="small-card">
              <p className="label">订阅内容</p>
              <p>{userProfile.subscriptions.join('、')}</p>
            </div>
          </div>
        </article>

        <aside className="card small-card" style={{ minHeight: 260 }}>
          <h3>账户功能</h3>
          <ul style={{ paddingLeft: 18, marginTop: 14, lineHeight: 1.9 }}>
            <li>收藏指标与图表</li>
            <li>保存个性化仪表盘</li>
            <li>查看报告历史</li>
            <li>管理预警通知</li>
          </ul>
        </aside>
      </div>

      <section className="section">
        <div className="page-title">
          <h1>个性化配置</h1>
        </div>
        <div className="grid grid-2">
          <div className="card small-card">
            <label>默认时间范围</label>
            <select>
              <option>近1年</option>
              <option>近30天</option>
              <option>自定义</option>
            </select>
          </div>
          <div className="card small-card">
            <label>预警阈值设置</label>
            <select>
              <option>智能推荐</option>
              <option>主动提醒</option>
              <option>仅高风险</option>
            </select>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UserPage;
