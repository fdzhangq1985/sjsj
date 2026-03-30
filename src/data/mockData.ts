export interface MetricItem {
  id: string;
  title: string;
  value: string;
  trend: string;
  description: string;
  series: number[];
}

export interface AlertItem {
  id: string;
  level: 'high' | 'medium' | 'low';
  title: string;
  summary: string;
  time: string;
}

export interface ForecastItem {
  id: string;
  category: string;
  title: string;
  current: string;
  predicted: string;
  interval: string;
  description: string;
}

export interface ReportTemplate {
  id: string;
  name: string;
  description: string;
  indicators: number;
  estimate: string;
}

export interface CountryItem {
  id: string;
  name: string;
  region: string;
  headline: string;
  metrics: Array<{ label: string; value: string; change: string }>;
  highlights: string;
}

export interface IndustryTab {
  id: string;
  title: string;
  overview: string;
  keyStats: Array<{ label: string; value: string }>; 
  details: string;
}

export const globalMetrics: MetricItem[] = [
  {
    id: 'global-gdp',
    title: '全球GDP增长率',
    value: '3.8%',
    trend: '+0.2%',
    description: '世界主要经济体整体增长趋势稳定。',
    series: [3.4, 3.5, 3.6, 3.8, 3.9, 3.8]
  },
  {
    id: 'global-cpi',
    title: '全球通胀率',
    value: '4.7%',
    trend: '-0.1%',
    description: '通胀压力有所缓解，但仍高于长期均值。',
    series: [4.9, 4.8, 4.7, 4.9, 4.8, 4.7]
  },
  {
    id: 'policy-rate',
    title: '主要央行利率',
    value: '4.2%',
    trend: '+0.1%',
    description: '货币政策继续在收紧与谨慎之间平衡。',
    series: [3.9, 4.0, 4.1, 4.1, 4.2, 4.2]
  },
  {
    id: 'commodity-index',
    title: '大宗商品价格指数',
    value: '112.3',
    trend: '+1.6%',
    description: '能源与金属价格短期回升。',
    series: [108, 109, 110, 111, 110, 112]
  },
  {
    id: 'trade-index',
    title: '全球贸易指数',
    value: '97.5',
    trend: '+0.4%',
    description: '贸易活动温和恢复。',
    series: [95, 95.5, 96, 96.8, 97.2, 97.5]
  },
  {
    id: 'fx-volatility',
    title: '汇率波动监测',
    value: '1.8%',
    trend: '+0.3%',
    description: '美元指数与主要货币对波动加强。',
    series: [1.5, 1.6, 1.7, 1.6, 1.7, 1.8]
  }
];

export const alerts: AlertItem[] = [
  {
    id: 'alert-1',
    level: 'high',
    title: '欧元区通胀率连续超预期',
    summary: '通胀率连续三个月高于目标水平，存在进一步加息风险。',
    time: '1小时前'
  },
  {
    id: 'alert-2',
    level: 'medium',
    title: '美国国债收益率曲线倒挂',
    summary: '长期与短期利差收窄，衰退风险值得关注。',
    time: '3小时前'
  },
  {
    id: 'alert-3',
    level: 'low',
    title: '新兴市场货币贬值压力增大',
    summary: '资本外流和政策不确定性导致风险上升。',
    time: '昨天'
  }
];

export const forecasts: ForecastItem[] = [
  {
    id: 'forecast-1',
    category: '宏观经济预测',
    title: '美国GDP增长预测',
    current: '2.1%',
    predicted: '2.4%',
    interval: '2.0% - 2.8%',
    description: '基于领先指标与季节性调整后的近期数据。'
  },
  {
    id: 'forecast-2',
    category: '大宗商品预测',
    title: '布伦特原油价格预测',
    current: '$92.50/桶',
    predicted: '$98.20/桶',
    interval: '$94.5 - $102.8',
    description: '考虑供应端风险与能源需求回暖。'
  },
  {
    id: 'forecast-3',
    category: '汇率预测',
    title: '美元指数预测',
    current: '104.6',
    predicted: '106.3',
    interval: '103.5 - 108.0',
    description: '货币政策分化推动美元中性偏强。'
  }
];

export const reportTemplates: ReportTemplate[] = [
  {
    id: 'template-1',
    name: '区域经济概览报告',
    description: '快速生成全球/大洲/国家的关键宏观指标分析。',
    indicators: 6,
    estimate: '约45秒'
  },
  {
    id: 'template-2',
    name: '行业趋势分析报告',
    description: '覆盖能源、金属、农产品等行业供需与价格走势。',
    indicators: 8,
    estimate: '约60秒'
  },
  {
    id: 'template-3',
    name: '专题研究报告',
    description: '例如全球通胀、能源危机或汇率风险专题洞察。',
    indicators: 10,
    estimate: '约90秒'
  }
];

export const countries: CountryItem[] = [
  {
    id: 'us',
    name: '美国',
    region: '北美洲',
    headline: '美国经济增长保持温和，通胀仍需关注。',
    metrics: [
      { label: 'GDP增长率', value: '2.3%', change: '+0.1%' },
      { label: 'CPI通胀率', value: '3.7%', change: '-0.2%' },
      { label: '基准利率', value: '5.25%', change: '+0.25%' }
    ],
    highlights: '服务业稳定，劳动力市场紧张，政策制定者转为观望。'
  },
  {
    id: 'cn',
    name: '中国',
    region: '亚洲',
    headline: '制造业复苏与出口回暖，内需仍待加强。',
    metrics: [
      { label: 'GDP增长率', value: '4.8%', change: '+0.2%' },
      { label: 'PPI通胀率', value: '0.8%', change: '-0.1%' },
      { label: '货币供应M2', value: '11.4%', change: '+0.3%' }
    ],
    highlights: '财政刺激与结构性改革共同支持长期增长。'
  },
  {
    id: 'de',
    name: '德国',
    region: '欧洲',
    headline: '德国制造业承压，出口需求波动。',
    metrics: [
      { label: 'GDP增长率', value: '1.1%', change: '-0.1%' },
      { label: 'CPI通胀率', value: '2.6%', change: '-0.3%' },
      { label: '失业率', value: '5.8%', change: '+0.1%' }
    ],
    highlights: '欧洲增长放缓， Germany faces structural transition pressure.'
  }
];

export const industryTabs: IndustryTab[] = [
  {
    id: 'energy',
    title: '能源市场',
    overview: '观察原油、天然气及煤炭价格与库存供需变化。',
    keyStats: [
      { label: '布伦特原油', value: '$92.5/桶' },
      { label: '天然气', value: '$8.1/MMBtu' },
      { label: '全球能源库存', value: '+1.2%' }
    ],
    details: '地缘政治与需求波动是当前市场主要驱动因素。'
  },
  {
    id: 'metal',
    title: '金属与矿产',
    overview: '监测铜、铁矿石、黄金等价格走势与供给端变化。',
    keyStats: [
      { label: '铜', value: '$9,600/吨' },
      { label: '黄金', value: '$2,070/盎司' },
      { label: '铁矿石', value: '$123/吨' }
    ],
    details: '需求增长与供应收紧共同支撑价格。'
  },
  {
    id: 'agriculture',
    title: '农产品',
    overview: '分析大豆、玉米与小麦供需以及天气风险。',
    keyStats: [
      { label: '大豆', value: '$12.8/蒲式耳' },
      { label: '玉米', value: '$5.20/蒲式耳' },
      { label: '小麦', value: '$7.05/蒲式耳' }
    ],
    details: '生产环境与物流风险是价格波动主要来源。'
  }
];

export const userProfile = {
  name: '数据视界用户',
  email: 'user@example.com',
  organization: '宏观策略部',
  role: '策略分析师',
  subscriptions: ['实时预警', '定制报告提醒']
};
