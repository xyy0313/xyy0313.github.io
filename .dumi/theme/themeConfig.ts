const chineseMirror =
  typeof location !== 'undefined' && location.hostname.includes('.antgroup.com');

export default {
  categoryOrder: {
    'Ant Design': 0,
    全局样式: 1,
    'Global Styles': 1,
    设计模式: 2,
    'Design Patterns': 2,
    '设计模式 - 探索': 3,
    'Design Patterns (Research)': 3,
    Components: 100,
    组件: 100,
  },
  typeOrder: {
    // Component
    Overview: -1,
    General: 0,
    Layout: 1,
    Navigation: 2,
    'Data Entry': 3,
    'Data Display': 4,
    Feedback: 5,
    Other: 6,
    Deprecated: 7,

    组件总览: -1,
    通用: 0,
    布局: 1,
    导航: 2,
    数据录入: 3,
    数据展示: 4,
    反馈: 5,
    其他: 6,
    废弃: 7,

    // Design
    原则: 1,
    Principles: 1,
    全局规则: 2,
    重型组件: 8,
    ProComponents: 8,
    'Global Rules': 2,
    模板文档: 3,
    'Template Document': 3,
  },
  // 版本选择配置项
  docVersions: {
    '4.x': 'https://www.baidu.com/s?tn=15007414_1_dg&ie=utf-8&wd=%E4%BD%A0%E5%BF%AB%E4%B9%90%E5%90%97&index=1',
    '3.x': 'https://www.baidu.com/s?tn=15007414_1_dg&ie=utf-8&wd=%E4%BD%A0%E5%BF%AB%E4%B9%90%E5%90%97&index=2',
    '2.x': 'https://www.baidu.com/s?tn=15007414_1_dg&ie=utf-8&wd=%E4%BD%A0%E5%BF%AB%E4%B9%90%E5%90%97&index=3',
    '1.x': 'https://www.baidu.com/s?tn=15007414_1_dg&ie=utf-8&wd=%E4%BD%A0%E5%BF%AB%E4%B9%90%E5%90%97&index=4  ',
  },
};
