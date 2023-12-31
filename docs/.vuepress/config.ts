import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Modernia 帮助中心',
  description: '基于botpy的娱乐QQ机器人。',
  base: '/Modernia-docs/',
  theme: defaultTheme({
    repo: 'xiayuanOvO/Modernia',
    docsRepo: 'xiayuanOvO/Modernia-docs',
    docsBranch: 'main',
    docsDir: 'docs',
    navbar: [
      { text: '首页', link: '/' },
      { text: '指南', children: ['/guide/', '/guide/start.md', '/guide/config.md'] },
      { text: '贡献', link: '/contributing/' },
      { text: 'FAQ', link: '/faq/' }
    ],
    backToHome: '返回首页',
    editLinkText: '编辑此页'
  }),
  plugins: [
    backToTopPlugin(),
  ],
})

// export default defineUserConfig({
  
//   title: 'Modernia Wiki',
//   description: '基于botpy的娱乐QQ机器人。',
//   base: "/Modernia-docs/",
//   lang: 'zh-cn',
  
//   theme: defaultTheme({
//     lang: 'zh-CN',
//     repo: 'xiayuanOvO/Modernia',
//     docsRepo: 'ishkong/go-cqhttp-docs',
//     docsBranch: 'main',
//     docsDir: 'docs',
//     navbar: [
//       { text: '首页', link: '/' },
//       { text: '指南', children: ['/guide/', '/guide/start.md'] },
//       { text: 'FAQ', link: '/faq/' }
//     ],
//     editLinkText: "编辑此页",
//     lastUpdated: true,
//     lastUpdatedText: '上一次编辑',
//     contributors: true,
//     tip: "提示",
//     warning: "注意",
//     danger: "警告",
//     backToHome: "返回首页",
//     sidebar: "auto",
//   }),
// })