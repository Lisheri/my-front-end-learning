(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{684:function(s,t,a){"use strict";a.r(t);var n=a(5),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"组件内的状态管理流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件内的状态管理流程"}},[s._v("#")]),s._v(" 组件内的状态管理流程")]),s._v(" "),a("p",[s._v("Vue中最核心的两个功能, 分别是数据驱动和组件化。")]),s._v(" "),a("p",[s._v("使用基于组件化的开发可以提供开发效率, 带来更好的可维护性")]),s._v(" "),a("h2",{attrs:{id:"一段最简单的组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一段最简单的组件"}},[s._v("#")]),s._v(" 一段最简单的组件")]),s._v(" "),a("div",{staticClass:"language-ts line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// state")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      count"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// view")]),s._v("\n  template"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("<div>{{ count }}</div>")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// actions")]),s._v("\n  methods"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("increment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("count"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("每个组件内部都有自己的数据，模板和方法")]),s._v(" "),a("p",[s._v("所谓数据, 其实就是"),a("code",[s._v("状态")]),s._v(", 每个组件都可以管理自己的内部状态")]),s._v(" "),a("p",[s._v("模板也可以称之为"),a("code",[s._v("视图")]),s._v(", 同时将状态绑定到视图上, 呈现给用户")]),s._v(" "),a("p",[s._v("当用户和视图交互时, 可能会更改状态, 比如点击按钮让count发生变化")]),s._v(" "),a("p",[s._v("当状态发生变化时, 会自动更新视图")]),s._v(" "),a("p",[s._v("更改状态的方法, 可以称之为"),a("code",[s._v("actions")]),s._v(", 也就是行为")]),s._v(" "),a("blockquote",[a("p",[s._v("这里所描述的是单个组件内的状态管理, 在实际过程中, 可能多个组件都要共享状态")]),s._v(" "),a("p",[s._v("所谓的状态管理, 其实就是通过状态集中管理和分发, 解决多个组件共享状态的问题")])]),s._v(" "),a("h2",{attrs:{id:"状态管理的组成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#状态管理的组成"}},[s._v("#")]),s._v(" 状态管理的组成")]),s._v(" "),a("ul",[a("li",[s._v("state, 驱动应用的数据源")]),s._v(" "),a("li",[s._v("view, 以声明方式将state映射到视图上")]),s._v(" "),a("li",[s._v("actions, 相应在view上的用户输入导致的状态变化(改变状态的方式)")])]),s._v(" "),a("p",[s._v("数据通常是单项流动的, 通常是state状态数据, 绑定到视图上, 展示给用户, 当用户和视图交互, 通过actions, 更改数据后, 在将数据更新到视图上")]),s._v(" "),a("p",[s._v("也就是 "),a("code",[s._v("state -> view -> actions -> state")]),s._v(" 形成一个闭环")]),s._v(" "),a("p",[s._v("单项数据流非常清晰, 但是多个组件共享数据时, 会破坏这种简单的结构")]),s._v(" "),a("h2",{attrs:{id:"组件间通信方式回顾"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件间通信方式回顾"}},[s._v("#")]),s._v(" 组件间通信方式回顾")]),s._v(" "),a("p",[s._v("大多数情况下, 组件都不是孤立存在的, 基本上都需要协作, 共同构成一个复杂的业务功能")]),s._v(" "),a("h3",{attrs:{id:"父传子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#父传子"}},[s._v("#")]),s._v(" 父传子")]),s._v(" "),a("ul",[a("li",[s._v("子组件通过props接收数据")]),s._v(" "),a("li",[s._v("父组件中给子组件通过相应属性传值")]),s._v(" "),a("li",[s._v("provide/inject")]),s._v(" "),a("li",[s._v("儿子访问this.$parent")])]),s._v(" "),a("h3",{attrs:{id:"子传父"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#子传父"}},[s._v("#")]),s._v(" 子传父")]),s._v(" "),a("ul",[a("li",[s._v("emits触发事件, 以参数形式传递给爹")]),s._v(" "),a("li",[s._v("props传递一个函数, 同样以参数的形式回传")]),s._v(" "),a("li",[s._v("爹访问this.$children寻找子组件, 直接访问子组件的数据")]),s._v(" "),a("li",[s._v("爹访问this.$refs.xxx直接访问子组件的数据")])]),s._v(" "),a("h3",{attrs:{id:"不相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不相关"}},[s._v("#")]),s._v(" 不相关")]),s._v(" "),a("ul",[a("li",[s._v("eventBus(发布订阅器)")]),s._v(" "),a("li",[s._v("Vuex(状态管理总线)")])]),s._v(" "),a("h3",{attrs:{id:"其他常见方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他常见方式"}},[s._v("#")]),s._v(" 其他常见方式")]),s._v(" "),a("ul",[a("li",[s._v("$root获取根节点状态和方法")]),s._v(" "),a("li",[s._v("$parent获取爹的状态和方法")]),s._v(" "),a("li",[s._v("$children获取儿子的状态和方法")]),s._v(" "),a("li",[s._v("$refs:\n"),a("ul",[a("li",[s._v("HTML标签上是DOM对象")]),s._v(" "),a("li",[s._v("组件标签上获取的是组件实例")])])])]),s._v(" "),a("h2",{attrs:{id:"简易的状态管理方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简易的状态管理方案"}},[s._v("#")]),s._v(" 简易的状态管理方案")]),s._v(" "),a("p",[s._v("多个组件互相传值, 如果使用上述方式, 难以跟踪状态变化")]),s._v(" "),a("p",[s._v("会有如下问题:")]),s._v(" "),a("ul",[a("li",[s._v("多个视图依赖同一状态")]),s._v(" "),a("li",[s._v("来自不同视图的行为需要变更同一状态")])]),s._v(" "),a("h3",{attrs:{id:"多个组件共享状态的方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多个组件共享状态的方案"}},[s._v("#")]),s._v(" 多个组件共享状态的方案")]),s._v(" "),a("p",[s._v("可以将多个组件的状态, 或整个程序的状态, 放到集中的位置存储, 并且可以检测到数据的更改, 这里做一个简易的实现")]),s._v(" "),a("h4",{attrs:{id:"store-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#store-js"}},[s._v("#")]),s._v(" store.js")]),s._v(" "),a("div",{staticClass:"language-ts line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  debug"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  state"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    user"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xiaomo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      age"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      sex"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'男'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setUserNameAction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("debug"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'setUserNameAction triggered: '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("状态用于存储数据")]),s._v(" "),a("p",[s._v("actions用于更新状态")]),s._v(" "),a("p",[s._v("debug属性主要用于调试, 如果为true, 通过actions修改数据会打印日志")]),s._v(" "),a("p",[s._v("所有的状态都可以在这里管理, 并且可以记录状态的变化")]),s._v(" "),a("blockquote",[a("p",[s._v("这个store可以导入到任何一个组件中使用, 但是需要将state合并到组件的data中, 使其作为一个响应式对象")]),s._v(" "),a("p",[s._v("但是这里要做一个约定, 不允许直接更新store中的元素")]),s._v(" "),a("p",[s._v("他是一个简易的状态集中管理工具, 和vuex很像, 但是vuex包含了更多的功能")])])])}),[],!1,null,null,null);t.default=e.exports}}]);