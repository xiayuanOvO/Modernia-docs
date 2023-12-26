import { defaultTheme } from 'vuepress'

export default {
  base: "/Modernia-docs/",
  lang: 'zh-CN',
  title: 'Modernia Wiki',
  description: '基于botpy的娱乐QQ机器人。',
  theme: defaultTheme({
    navbar: [
      { text: '首页', link: '/' },
      { text: '指南', children: ['/guide/', '/guide/start.md'] },
      { text: 'FAQ', link: '/faq/' }
    ],
    editLinkText: "编辑此页",
    lastUpdated: true,
    lastUpdatedText: '上一次编辑',
    contributors: true,
    tip: "提示",
    warning: "注意",
    danger: "警告",
    backToHome: "返回首页",
    sidebar: "auto",
  }),
}