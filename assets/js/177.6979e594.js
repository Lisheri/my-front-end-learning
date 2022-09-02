(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{755:function(s,t,a){"use strict";a.r(t);var r=a(5),v=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"snabbdom源码解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#snabbdom源码解析"}},[s._v("#")]),s._v(" Snabbdom源码解析")]),s._v(" "),a("p",[s._v("Vue中的虚拟DOM是通过改造Snabbdom实现的, 因此优先看Snabbdom, 就基本可以了解到Vue中的VNode实现原理, 便于进一步的学习")]),s._v(" "),a("p",[s._v("掌握h init patch是如何工作的")]),s._v(" "),a("h2",{attrs:{id:"学习源码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#学习源码"}},[s._v("#")]),s._v(" 学习源码")]),s._v(" "),a("ul",[a("li",[s._v("宏观了解")]),s._v(" "),a("li",[s._v("带着目标看源码（目标不需要那么大）")]),s._v(" "),a("li",[s._v("看源码的过程要不求甚解 (要围绕核心目标, 代码分支逻辑会很多, 容易干扰源码观看, 主要需要看的是主线逻辑)")]),s._v(" "),a("li",[s._v("调试")]),s._v(" "),a("li",[s._v("参考资料(多参考文章, 提升阅读效率)")])]),s._v(" "),a("h2",{attrs:{id:"snabbdom的核心"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#snabbdom的核心"}},[s._v("#")]),s._v(" Snabbdom的核心")]),s._v(" "),a("ul",[a("li",[s._v("init() 设置模块, 创建 "),a("code",[s._v("patch")]),s._v(" 函数")]),s._v(" "),a("li",[s._v("使用 h 函数创建 js对象(VNode) 描述真实DOM")]),s._v(" "),a("li",[s._v("patch 比较新旧两个Vnode")]),s._v(" "),a("li",[s._v("把变化的内容更新到真实DOM树")])]),s._v(" "),a("p",[s._v("上述几点就是Snabbdom的核心执行流程")]),s._v(" "),a("h3",{attrs:{id:"snabbdom-perf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#snabbdom-perf"}},[s._v("#")]),s._v(" snabbdom/perf")]),s._v(" "),a("p",[s._v("性能测试文件")]),s._v(" "),a("h3",{attrs:{id:"snabbdom-src"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#snabbdom-src"}},[s._v("#")]),s._v(" snabbdom/src")]),s._v(" "),a("p",[s._v("源码所在目录")]),s._v(" "),a("h2",{attrs:{id:"snabbdom源码结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#snabbdom源码结构"}},[s._v("#")]),s._v(" Snabbdom源码结构")]),s._v(" "),a("h3",{attrs:{id:"src-modules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#src-modules"}},[s._v("#")]),s._v(" src/modules")]),s._v(" "),a("p",[s._v("包含snabbdom的模块")]),s._v(" "),a("h3",{attrs:{id:"src-modules-hero-ts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#src-modules-hero-ts"}},[s._v("#")]),s._v(" src/modules/hero.ts")]),s._v(" "),a("p",[s._v("自定义模块")]),s._v(" "),a("h3",{attrs:{id:"src-modules-module-ts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#src-modules-module-ts"}},[s._v("#")]),s._v(" src/modules/module.ts")]),s._v(" "),a("p",[s._v("定义了模块中使用的所有钩子函数, create等")]),s._v(" "),a("h3",{attrs:{id:"src-h-ts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#src-h-ts"}},[s._v("#")]),s._v(" src/h.ts")]),s._v(" "),a("p",[s._v("定义h函数, 用于创建vnode")]),s._v(" "),a("h3",{attrs:{id:"src-hooks-ts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#src-hooks-ts"}},[s._v("#")]),s._v(" src/hooks.ts")]),s._v(" "),a("p",[s._v("定义VNode所有生命周期的函数")]),s._v(" "),a("h3",{attrs:{id:"src-htmldomapi-ts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#src-htmldomapi-ts"}},[s._v("#")]),s._v(" src/htmldomapi.ts")]),s._v(" "),a("p",[s._v("对DOM的API进行包装, 主要有创建元素删除元素等")]),s._v(" "),a("h3",{attrs:{id:"src-init-ts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#src-init-ts"}},[s._v("#")]),s._v(" src/init.ts")]),s._v(" "),a("p",[s._v("定义了init函数, 加载模块和domapi等.")]),s._v(" "),a("h3",{attrs:{id:"src-is-ts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#src-is-ts"}},[s._v("#")]),s._v(" src/is.ts")]),s._v(" "),a("p",[s._v("辅助模块, 导出两个函数, 一个用于判断数组, 一个用于判断原始值")]),s._v(" "),a("h3",{attrs:{id:"src-jsx-global-ts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#src-jsx-global-ts"}},[s._v("#")]),s._v(" src.jsx.global.ts")]),s._v(" "),a("p",[s._v("jsx类型声明文件")]),s._v(" "),a("h3",{attrs:{id:"src-jsx-ts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#src-jsx-ts"}},[s._v("#")]),s._v(" src.jsx.ts")]),s._v(" "),a("p",[s._v("用于处理jsx")]),s._v(" "),a("h3",{attrs:{id:"src-thunk-ts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#src-thunk-ts"}},[s._v("#")]),s._v(" src/thunk.ts")]),s._v(" "),a("p",[s._v("用于处理对复杂视图的优化")]),s._v(" "),a("h3",{attrs:{id:"src-tovnode-ts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#src-tovnode-ts"}},[s._v("#")]),s._v(" src/tovnode.ts")]),s._v(" "),a("p",[s._v("提供了一个把DOM转换为VNode的函数")]),s._v(" "),a("h3",{attrs:{id:"src-vnode-ts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#src-vnode-ts"}},[s._v("#")]),s._v(" src/vnode.ts")]),s._v(" "),a("p",[s._v("定义了vnode的结构, 主要是一些interface")])])}),[],!1,null,null,null);t.default=v.exports}}]);