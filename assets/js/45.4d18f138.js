(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{595:function(s,t,a){"use strict";a.r(t);var v=a(5),_=Object(v.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"csr主要缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csr主要缺点"}},[s._v("#")]),s._v(" CSR主要缺点")]),s._v(" "),a("h2",{attrs:{id:"为什么csr首屏渲染慢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么csr首屏渲染慢"}},[s._v("#")]),s._v(" 为什么CSR首屏渲染慢?")]),s._v(" "),a("h3",{attrs:{id:"csr首屏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csr首屏"}},[s._v("#")]),s._v(" CSR首屏")]),s._v(" "),a("ul",[a("li",[s._v("CSR渲染首先要请求网页地址, 获取空的HTML模板")]),s._v(" "),a("li",[s._v("紧接着需要请求js脚本(并行加载)")]),s._v(" "),a("li",[s._v("脚本加载完之后, 会执行js脚本内容初始化(如new Vue, new React等)")]),s._v(" "),a("li",[s._v("框架初始化完成后, 会生成首版VNode, 然后将VNode转换为真实DOM")]),s._v(" "),a("li",[s._v("如果有初始数据, 还会请求初始数据, 等待数据响应后, 重新渲染页面, 完成首屏渲染")]),s._v(" "),a("li",[s._v("在一个, 当SPA足够大之后, 首次请求的js脚本就会变得越来越大, 而在首屏js脚本完成请求前, 是不会执行主流程, 也就不会渲染页面了")])]),s._v(" "),a("h3",{attrs:{id:"传统ssr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#传统ssr"}},[s._v("#")]),s._v(" 传统SSR")]),s._v(" "),a("ul",[a("li",[s._v("通过请求处可以看到, 只有一个doc文档的请求")]),s._v(" "),a("li",[s._v("页面的数据和渲染, 都在服务端完成, 所有的一切完成后, 在返回给客户端即可")]),s._v(" "),a("li",[s._v("也就是说, 仅需一个请求, 即可将页面呈现")])]),s._v(" "),a("h3",{attrs:{id:"结论"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结论"}},[s._v("#")]),s._v(" 结论")]),s._v(" "),a("p",[s._v("所以CSR渲染, 首屏是比SSR慢很多的, 因为CSR渲染, 需要经历两到三次http请求周期(doc文档, js脚本, 初始数据), 和js初始化逻辑(初始化框架, 创建VNode, patchVnode转换生成正式DOM并挂在到DOM树上)")]),s._v(" "),a("p",[s._v("但是SSR的初始化, 只有一个doc请求, 因为所有的内容, 都是在服务端完成组装的, 组装完成后, 再将整体内容呈现给用户")]),s._v(" "),a("h2",{attrs:{id:"为什么csr不利于seo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么csr不利于seo"}},[s._v("#")]),s._v(" 为什么CSR不利于SEO?")]),s._v(" "),a("p",[s._v("这个直接对比CSR和SSR的代码即可明白")]),s._v(" "),a("h3",{attrs:{id:"什么是seo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是seo"}},[s._v("#")]),s._v(" 什么是SEO?")]),s._v(" "),a("p",[s._v("SEO翻译过来叫做搜索引擎优化, 是一种通过分析搜索引擎的排名规律，了解各种搜索引擎怎样进行搜索、怎样抓取互联网页面、怎样确定特定关键词的搜索结果排名的技术")]),s._v(" "),a("p",[s._v("SEO就是网站在搜索引擎中的一个排名, 数据是否存在等。")]),s._v(" "),a("p",[s._v("比如打开百度搜索Home, 搜索引擎得知道这个页面里面有什么东西, 才能根据对应的关键字去查询存在这些关键字的网站, 大约在经历高效的匹配算法, 将结果呈现")]),s._v(" "),a("h3",{attrs:{id:"为什么spa几乎没有seo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么spa几乎没有seo"}},[s._v("#")]),s._v(" 为什么SPA几乎没有SEO")]),s._v(" "),a("p",[s._v("单页面CSR程序, 几乎没有SEO, 主要原因就是搜索引擎要根据关键字搜索到一个网站, 首先要知道这个网站里面有什么")]),s._v(" "),a("p",[s._v("一般来说都是通过程序来获取网络内容, 然后进行分析, 收录和排名")]),s._v(" "),a("p",[s._v("简单来说, 搜索引擎首先要获取到页面的内容, 在根据页面的内容来分析, 收录, 在确定这个网页是否有对应的关键字内容")]),s._v(" "),a("p",[s._v("但是关键在于SPA应用, 通过网络请求获取到的网页, 其实只有最初的空模板, 几乎没有任何内容, 也就无法解析关键字了, 那么后续的收录等, 都无法完成。所以SPA几乎是不能做SEO的")]),s._v(" "),a("p",[s._v("搜索引擎不是浏览器本身, 他是不会解析执行js脚本的, 他只会获取html字符串, 再来分析和收录, 如果是无意义的页面(比如说CSR的初始空页面), 是不会被收录的")])])}),[],!1,null,null,null);t.default=_.exports}}]);