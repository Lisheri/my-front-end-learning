(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{717:function(s,t,a){"use strict";a.r(t);var n=a(5),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"虚拟dom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#虚拟dom"}},[s._v("#")]),s._v(" 虚拟DOM")]),s._v(" "),a("h2",{attrs:{id:"虚拟dom库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#虚拟dom库"}},[s._v("#")]),s._v(" 虚拟DOM库")]),s._v(" "),a("ul",[a("li",[s._v("虚拟DOM库 - Snabbdom\n"),a("ul",[a("li",[s._v("Vue的模块机制包括"),a("code",[s._v("diff算法")]),s._v(" 基本和 "),a("code",[s._v("Snabbdom")]),s._v("一致")])])])]),s._v(" "),a("h2",{attrs:{id:"什么是虚拟dom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是虚拟dom"}},[s._v("#")]),s._v(" 什么是虚拟DOM")]),s._v(" "),a("ul",[a("li",[s._v("虚拟DOM(Virtual DOM)是使用JavaScript对象描述真实DOM\n"),a("ul",[a("li",[s._v("虚拟DOM的本质就是js对象")]),s._v(" "),a("li",[s._v("使用普通js对象来描述DOM的结构, 程序的各种状态变化首先作用于虚拟DOM, 最终映射到真实DOM")]),s._v(" "),a("li",[s._v("类似Vue这样的MVVM框架会帮开发者屏蔽DOM操作(其中小程序最彻底)")])])]),s._v(" "),a("li",[s._v("Vue中的虚拟DOM借鉴了"),a("code",[s._v("Snabbdom")]),s._v(", 并添加了Vue.js的特性(指令和组建机制等)\n"),a("ul",[a("li",[s._v("比如: 模块机制, 钩子函数, diff算法等和"),a("code",[s._v("Snabbdom")]),s._v("几乎一样")])])])]),s._v(" "),a("h2",{attrs:{id:"为什么要使用虚拟dom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么要使用虚拟dom"}},[s._v("#")]),s._v(" 为什么要使用虚拟DOM")]),s._v(" "),a("ul",[a("li",[s._v("避免直接操作真实DOM, 提高开发效率\n"),a("ul",[a("li",[s._v("开发过程只需要关注业务代码的实现")]),s._v(" "),a("li",[s._v("不需要关注如何操作DOM")]),s._v(" "),a("li",[s._v("也不需要关注DOM带来的浏览器兼容性问题")])])]),s._v(" "),a("li",[s._v("以虚拟DOM作为中间层, 可以方便的实现跨平台\n"),a("ul",[a("li",[s._v("支持浏览器等外部平台")]),s._v(" "),a("li",[s._v("支持SSR")]),s._v(" "),a("li",[s._v("支持weex")])])]),s._v(" "),a("li",[s._v("虚拟DOM不一定能提高性能\n"),a("ul",[a("li",[s._v("首次渲染会增加开销, 因为要维护一层额外的虚拟dom")]),s._v(" "),a("li",[s._v("复杂视图情况下提升渲染性能\n"),a("ul",[a("li",[s._v("频繁更新dom时, 虚拟DOM会对比差异, 将差异更新到DOM上, 而不是直接操作DOM")]),s._v(" "),a("li",[s._v("有key属性可以让节点重用, 避免大量的重绘")])])])])])]),s._v(" "),a("h2",{attrs:{id:"案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#案例"}},[s._v("#")]),s._v(" 案例")]),s._v(" "),a("div",{staticClass:"language-ts line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" vm "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  el"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#app"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  data"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    msg"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello vue'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// h(tag, data, children)")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// h(h1, this.msg); // 根据参数判断渲染")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// h(h1, { domProps: { innerHTML: this.msg } }) 设置节点属性")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// h(h1, { attrs: { id: 'title' } }, this.msg)")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" vnode "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("h")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'h1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        attrs"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'title'")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("msg\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("h3",{attrs:{id:"vnode核心属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vnode核心属性"}},[s._v("#")]),s._v(" vnode核心属性")]),s._v(" "),a("ul",[a("li",[s._v("children\n"),a("ul",[a("li",[s._v("vnode中的子节点, 如上面的"),a("code",[s._v("h1")]),s._v("对应的节点中有一个子节点, 只不过是一个文本节点")])])]),s._v(" "),a("li",[s._v("data: 调用 h函数时候, 传入的data选项")]),s._v(" "),a("li",[s._v("elm: 将vnode转换为真实DOM之后, 其中存储对应的真实DOM节点")]),s._v(" "),a("li",[s._v("tag: 调用h函数传入的第一个参数, 也就是标签名")]),s._v(" "),a("li",[s._v("text: 节点的文本内容")]),s._v(" "),a("li",[s._v("key: 用于复用当前元素")])]),s._v(" "),a("h3",{attrs:{id:"h函数总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#h函数总结"}},[s._v("#")]),s._v(" h函数总结")]),s._v(" "),a("blockquote",[a("p",[s._v("h函数本质上就是 $createElement(tag, data, children, normalizeChildren)")]),s._v(" "),a("p",[s._v("最后一个参数先忽略, 这里主要是前三个参数")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("tag")]),s._v(" "),a("ul",[a("li",[s._v("标签名称或组件对象")])])]),s._v(" "),a("li",[a("p",[s._v("data")]),s._v(" "),a("ul",[a("li",[s._v("描述tag, 可以设置DOM的属性或标签的属性")])])]),s._v(" "),a("li",[a("p",[s._v("children")]),s._v(" "),a("ul",[a("li",[s._v("tag中的文本内容或子节点")])])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);