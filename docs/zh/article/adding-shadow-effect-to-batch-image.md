---
title: 为批量图片添加外阴影效果
lang: zh-CN
datetime: 2020-05-25
meta:
  - name: description
    content: Mac OS 系统上，在获得焦点程序的周边，有一层浅灰色外阴影，使得应用程序看起来略带立体感；其阴影渐进变淡，与毕竟色融合在一起，也使得看起来流畅自然，不突兀。在一些优质博文中，所搭配的图片，也经常能看到这样的设计，增色不少。那如何为文章图片，添加好看的外阴影效果呢？本文即对此做出一些探讨。
  - name: keywords
    content: 批量图片, 外阴影效果, box-shadow, drop-shadow, imagemagick
---

Mac OS 系统上，在获得焦点程序的周边，有一层浅灰色外阴影，使得应用程序看起来略带立体感；其阴影渐进变淡，与毕竟色融合在一起，也使得看起来流畅自然，不突兀。在一些优质博文中，所搭配的图片，也经常能看到这样的设计，增色不少。那如何为文章图片，添加好看的外阴影效果呢？本文即对此做出一些探讨。

![为文章图片添加外阴影效果](https://image.lovejade.cn/jpg/nice-links-057.jpg)

对于这个需求，可以从多个不同的纬度去解决；最容易想到的即这两个：1. 通过 CSS 为图片，添加外阴影样式；2. 修改图片本身，为其添加外阴影；下面就基于这两个方案做下探讨。

## CSS 方案

### box-shadow

基于 [box-shadow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow) “盒阴影”，此属性用于在元素的框架上添加阴影效果，该属性可设置的值包括 X 轴偏移、Y 轴偏移、阴影模糊半径、阴影扩散半径，和阴影颜色，并以多个逗号分隔。

```html
img { box-shadow: 0px 0px 20px lightgrey; }
```

[Box-shadow generator](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Box-shadow_generator) 是一个允许你生成 `box-shadow` 的交互式工具。

### drop-shadow

使用 CSS3 的`filter`阴影滤镜 [drop-shadow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter-function/drop-shadow)；此函数有点类似于 [`box-shadow`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow 'CSS box-shadow 属性用于在元素的框架上添加阴影效果，该属性可设置的值包括X轴偏移、Y轴偏移、阴影模糊半径、阴影扩散半径，和阴影颜色，并以多个逗号分隔。') 属性；`box-shadow` 属性在元素的整个框后面创建一个矩形阴影, 而 `drop-shadow()` 过滤器则是创建一个符合图像本身形状 ( alpha 通道)的阴影。其语法是：

```html
drop-shadow(offset-x offset-y blur-radius spread-radius color)
```

```html
img { -webkit-filter: drop-shadow(0px 0px 20px lightgrey); filter: drop-shadow(0px 0px 20px lightgrey); }
```

对比这两个方案，采用 **drop-shadow** 是更加可取的方案；box-shadow，只是盒子的阴影；倘若盒子中间是透明的，其光线不能穿透；但是`drop-shadow`就符合真实世界的投影； 具体可以参见张鑫旭的文章：[CSS3 filter:drop-shadow 滤镜与 box-shadow 区别应用](https://www.zhangxinxu.com/wordpress/2016/05/css3-filter-drop-shadow-vs-box-shadow/)。当然，box-shadow 不仅可以外阴影，还可以有内阴影，且能无限叠加，因此可以在其他一些场景，发挥更大的作用。

在博客（[静轩之别苑](https://quickapp.lovejade.cn/)，[晚晴幽草轩](https://www.jeffjade.com/)）中，图片的外阴影效果，即使借助 `drop-shadow` 来实现。

## 为图片添加外阴影

处理图片的工具非常之多，不仅有为世人所熟知的 PhotoShop，就拿常见的编程语言如 Pyhton，Node.js, Lua 等，也都充盈了很多处理图片的库；这里推荐一款 [imagemagick](https://imagemagick.org/)，它的功能是如此的丰富，添加外阴影更是不在话下。

### imagemagick

如果您使用的是 Mac，可以通过如下命令，一键安装（其他平台，可以下载对应软件，参见 [imagemagick download](https://imagemagick.org/script/download.php)）：

```bash
brew install imagemagick
```

安装完成之后，通过以下命令，即可对指定的图片（ input.jpeg），添加外阴影处理：

```bash
convert input.jpeg -scale 600x400 -quality 86 -strip -bordercolor white -border 13 \( +clone -background grey -shadow 80x3+2+2 \) +swap -background white -layers merge +repage output.jpg
```

需要补充说明的是，`.jpg` 格式图片，属于有损压缩，导致该图片没有透明选项；因此，对 `.jpg` 格式添加外阴影，该阴影也不具有透明度；可以通过如下命令，对 `.jpg` 格式进行转换 `.png` 处理。

```bash
magick input.jpg input.png
```

如果要批量对一些图片，添加外阴影处理，一个个输入命令来完成，未免繁琐；可以将其写在一个脚本中，高效一键处理；有在原本维护的工具 [arya-jarvis](https://arya.lovejade.cn/#/zh-cn?id=%f0%9f%8c%8c-%e4%b8%ba%e6%89%b9%e9%87%8f%e5%9b%be%e7%89%87%e6%b7%bb%e5%8a%a0%e5%a4%96%e9%98%b4%e5%bd%b1%e6%95%88%e6%9e%9c) 中注入了这个功能，可助您高效完成：

```bash
// 安装：npm i arya-jarvis -g
arya  img:shadow YOUR-DIR-PATH
```

以上，就是所了解的，快捷为图片添加外阴影效果的几个方案，欢迎分享您所知晓的高效手段。

于 2020 年 05 月 21，深圳.福田。

> 原文首发于个人最新博客[静轩之别苑 | 为文章图片添加外阴影效果](https://quickapp.lovejade.cn/how-to-add-shadow-effects-to-image/)。
