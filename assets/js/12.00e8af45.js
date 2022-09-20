(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{438:function(t,v,_){t.exports=_.p+"assets/img/example.77ca8912.png"},511:function(t,v,_){t.exports=_.p+"assets/img/activeSPA.38939bbd.png"},512:function(t,v,_){t.exports=_.p+"assets/img/render.ae6181b5.png"},594:function(t,v,_){"use strict";_.r(v);var a=_(5),s=Object(a.a)({},(function(){var t=this,v=t.$createElement,a=t._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"服务端渲染基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务端渲染基础"}},[t._v("#")]),t._v(" 服务端渲染基础")]),t._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),a("p",[t._v("随着前端技术栈和工具链的迭代成熟, 前端工程化、模块化也成了当下的主流技术方案")]),t._v(" "),a("p",[t._v("在这波技术浪潮中, 涌现了诸如Angular、React和Vue等基于客户端渲染的前端技术框架")]),t._v(" "),a("h3",{attrs:{id:"spa单页面应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spa单页面应用"}},[t._v("#")]),t._v(" SPA单页面应用")]),t._v(" "),a("h4",{attrs:{id:"优点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),a("ul",[a("li",[t._v("用户体验号")]),t._v(" "),a("li",[t._v("开发效率高")]),t._v(" "),a("li",[t._v("渲染性能好")]),t._v(" "),a("li",[t._v("可维护性好")]),t._v(" "),a("li",[t._v("...等")])]),t._v(" "),a("h4",{attrs:{id:"缺陷"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缺陷"}},[t._v("#")]),t._v(" 缺陷")]),t._v(" "),a("ul",[a("li",[t._v("首屏渲染时间长\n"),a("ul",[a("li",[t._v("与传统服务端渲染, 直接渲染已有的HTML不同, 单页应用会在客户端使用js生成HTML来呈现网页内容")]),t._v(" "),a("li",[t._v("用户需要等待客户端js解析执行完, 才能看到页面")]),t._v(" "),a("li",[t._v("这样会使得首屏时间过长从而影响用户体验")])])]),t._v(" "),a("li",[t._v("不利于SEO\n"),a("ul",[a("li",[t._v("搜索引擎爬取网站HTML文件时,  单页面的HTML是没有内容的")]),t._v(" "),a("li",[t._v("需要通过js解析执行完, 才能生成网页内容")]),t._v(" "),a("li",[t._v("而目前主流搜索引擎对于这部分的抓取还不是特别友好")])])])]),t._v(" "),a("h3",{attrs:{id:"解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决"}},[t._v("#")]),t._v(" 解决")]),t._v(" "),a("p",[t._v("为了解决上述问题, 业界借鉴了传统的服务端直出HTML的方案, 提出在服务器端执行前端框架代码来生成网页内容, 然后将渲染好的网页内容返回给客户端")]),t._v(" "),a("p",[t._v("客户端只需要负责展示")]),t._v(" "),a("p",[a("img",{attrs:{src:_(438),alt:"借鉴"}})]),t._v(" "),a("h2",{attrs:{id:"客户端激活为spa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#客户端激活为spa"}},[t._v("#")]),t._v(" 客户端激活为SPA")]),t._v(" "),a("p",[t._v("不仅仅像上面一样那么简单, 为了获得更好的用户体验以及页面交互, 同时会在客户端将来自服务端渲染的内容激活为一个SPA应用")]),t._v(" "),a("p",[t._v("也就数说之后的页面应用交互, 其实都是通过客户端渲染来进行处理的")]),t._v(" "),a("p",[a("img",{attrs:{src:_(511),alt:"激活SPA"}})]),t._v(" "),a("h2",{attrs:{id:"同构应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同构应用"}},[t._v("#")]),t._v(" 同构应用")]),t._v(" "),a("ul",[a("li",[t._v("通过服务端渲染首屏直出, 解决SPA应用首屏渲染慢以及不利于SEO的问题")]),t._v(" "),a("li",[t._v("通过客户端渲染接管页面内容交互得到更好的用户体验")])]),t._v(" "),a("blockquote",[a("p",[t._v("这种方式通常称为现代化的服务端渲染, 也叫同构渲染")]),t._v(" "),a("p",[t._v("这种方式构建的应用, 一般称之为服务端应用或者是同构应用")])]),t._v(" "),a("h2",{attrs:{id:"相关概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关概念"}},[t._v("#")]),t._v(" 相关概念")]),t._v(" "),a("p",[t._v("为了更好的理解SSR应用, 需要了解一下渲染相关的概念")]),t._v(" "),a("p",[t._v("主要涉及到:")]),t._v(" "),a("ul",[a("li",[t._v("什么是渲染")]),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/blogs/BaseSSR/2.html"}},[t._v("传统的服务端渲染")])],1),t._v(" "),a("li",[t._v("客户端渲染")]),t._v(" "),a("li",[t._v("现代化的服务端渲染(同构渲染)")])]),t._v(" "),a("h3",{attrs:{id:"什么是渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是渲染"}},[t._v("#")]),t._v(" 什么是渲染")]),t._v(" "),a("p",[t._v("这里包括后续所说的渲染, 指的就是将"),a("code",[t._v("【数据】")]),t._v("+"),a("code",[t._v("【模板】")]),t._v("拼接到一起的这个事")]),t._v(" "),a("p",[a("img",{attrs:{src:_(512),alt:"render"}})]),t._v(" "),a("p",[t._v("对于前端开发来说, 最常见的一种场景就是请求数据接口, 将数据通过模板绑定语法绑定到页面当中, 最终呈现给用户")]),t._v(" "),a("p",[t._v("这个过程就是我们所说的渲染")]),t._v(" "),a("p",[t._v("渲染的本质其实就是字符串的解析替换, 实现的方式有很多种")]),t._v(" "),a("p",[t._v("不过前端关注的并不是如何渲染, 而是"),a("code",[t._v("在哪里渲染")]),t._v("的问题")])])}),[],!1,null,null,null);v.default=s.exports}}]);