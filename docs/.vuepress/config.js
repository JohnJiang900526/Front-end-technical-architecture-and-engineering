module.exports = {
  base: '/', // /power-mobile-doc/
  dest: 'dist',
  title: '前端技术架构与工程(周俊鹏 著)',
  description: '业务是核心出发点 | 架构聚焦代码 | 工程聚焦流程',
  themeConfig: {
    editLinks: false,
    docsDir: 'docs',
    nav: [
      {
        text: '相关书籍',
        items: [
          { 
            text: '学习JavaScript数据结构与算法(第一版)', 
            link: 'https://johnjiang900526.github.io/algorithm' 
          }
        ]
      }
    ],
    sidebar: [
      {
        title: '前言',
        collapsable: true,
        children: [
          ['foreword/', '前言 背景']
        ]
      },
      {
        title: '第 01 章  前端工程化',
        collapsable: true,
        children: [
          'chapter01/meaning',
          'chapter01/architecture-engineering',
          'chapter01/front-end-architecture',
          'chapter01/fuzzy-boundary',
          'chapter01/front-end-architect-responsibilities',
        ]
      }
    ]
  }
}
