---
title: 幽居空谷轩
lang: zh-CN
datetime: 2019-08-08
meta:
  - name: description
    content: 绝代有佳人，幽居在空谷。天寒翠袖薄，日暮倚修竹。
  - name: keywords
    content: 个人博客, Hexo, Jekyll, VuePress, Docz, 简书, 博客园
---

# 幽居空谷轩

## 博客介绍

[幽居空谷轩](https://main.lovejade.cn/?utm_source=lovejade.cn)，由最新 `VuePress` 所驱动；部署于 `Github Page`；采用 `Google Analytics` 作为分析方案；支持 `Pwa`，如添加 Icon 到主屏幕，缓存页面支持离线访问等。目前打算是，会在后续用心经营[幽居空谷轩](https://main.lovejade.cn/?utm_source=lovejade.cn)，用以承载[各个博客](https://main.lovejade.cn/zh/blog/)、[新产出的博文](https://main.lovejade.cn/zh/article/)、以及[个人开源作品](https://main.lovejade.cn/zh/works/)等。

## 名字由来

向来比较喜欢“[轩](https://baike.baidu.com/item/轩/55500)”这个字，此前在很多博客命名中，都使用了这个字；依据个人之喜好，命名当也是用这“轩”字来结尾（同理，照旧会是五个字）；至于前面几个字选取，当时的操作是这样的：因一时间不好选定，就打开[古诗文网](https://www.gushiwen.org/?utm_source=site.lovejade.cn)，略翻了下，杜工部的一首[《佳人》](https://baike.baidu.com/item/佳人/3690867)映入眼帘，一读之下，当即选定此博客名：`幽居空谷轩`，描述则是诗句的首尾两句：“绝代有佳人，幽居在空谷。天寒翠袖薄，日暮倚修竹”。

## 搭建初衷

蛮早就注册了 `lovejade.cn` 域名，一直以来使用的都是二级域名，如: [JadeYang(杨琼璞)](https://github.lovejade.cn/)，[静晴轩别苑](https://nice.lovejade.cn)，[天意人间舫](https://blog.lovejade.cn)等；此次要将此域名使用，其初衷是为了可以将本域名下网站，接入 `Google AdSense`，从而可以在分享的同时略薅羊毛，以促进更充盈的分享热情，从而形成良性循环，于人于己，皆有裨益。

## VuePress 介绍

每一个由 `VuePress` 生成的页面都带有预渲染好的 HTML，也因此具有非常好的加载性能和搜索引擎优化（`SEO`）。同时，一旦页面被加载，Vue 将接管这些静态内容，并将其转换成一个完整的单页应用（`SPA`），其他的页面则会只在用户浏览到的时候才按需加载。除此之外，它还内置了以下优秀特性：

- 为技术文档而优化的[内置 Markdown 拓展](https://vuepress.vuejs.org/zh/guide/markdown.html)
- [在 Markdown 文件中使用 Vue 组件的能力](https://vuepress.vuejs.org/zh/guide/using-vue.html)
- [Vue 驱动的自定义主题系统](https://vuepress.vuejs.org/zh/guide/custom-themes.html)
- [自动生成 Service Worker](https://vuepress.vuejs.org/zh/config/#serviceworker)
- [Google Analytics 集成](https://vuepress.vuejs.org/zh/config/#ga)
- [多语言支持](https://vuepress.vuejs.org/zh/guide/i18n.html)
- 默认主题包含：
  - 响应式布局
  - [可选的主页](https://vuepress.vuejs.org/zh/default-theme-config/#%E9%A6%96%E9%A1%B5)
  - [简洁的开箱即用的标题搜索](https://vuepress.vuejs.org/zh/default-theme-config/#%E5%86%85%E7%BD%AE%E6%90%9C%E7%B4%A2)
  - [Algolia 搜索](https://vuepress.vuejs.org/zh/default-theme-config/#algolia-%E6%90%9C%E7%B4%A2)
  - 可自定义的[导航栏](https://vuepress.vuejs.org/zh/default-theme-config/#%E5%AF%BC%E8%88%AA%E6%A0%8F)和[侧边栏](https://vuepress.vuejs.org/zh/default-theme-config/#%E4%BE%A7%E8%BE%B9%E6%A0%8F)
  - [自动生成的 GitHub 链接和页面的编辑链接](https://vuepress.vuejs.org/zh/default-theme-config/#git-%E4%BB%93%E5%BA%93%E5%92%8C%E7%BC%96%E8%BE%91%E9%93%BE%E6%8E%A5)

相比与 `Nuxt`、 `Hexo`、`Jekyll`、`Docsify`、`GitBook` 等工具，`VuePress` 在不同方向，都拥有着巨大优势，并且仍在开发更新当中；如果你有搭建个人博客、技术文档的需求，那么 `VuePress` 将是超棒的选择。

---

::: tip 额外说明早前在[晚晴幽草轩 | AboutMe](https://jeffjade.com/about-me/)中就有提到，关于博客评论系统的一路折腾历程；从`多说`，转战`网易云跟帖`，又尝试使用 `Gitment`，最终选择了 `Gitalk` 的过程。不支持评论的博客，是没有灵魂的，所以也为此基于 `Vuepress` 的最新博客，注入了评论；鉴于在发布是采用服务端渲染，所以直接使用 `Gitalk` 插件，会存在问题；因此有将其以组件形式内置进项目；后续考虑集成更多功能，使得此博客可以更加丰富而多彩。  
:::

<Advertisement />
