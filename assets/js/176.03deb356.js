(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{772:function(t,s,a){"use strict";a.r(s);var n=a(5),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update"}},[t._v("#")]),t._v(" update")]),t._v(" "),a("blockquote",[a("p",[t._v("在"),a("code",[t._v("vm._render()")]),t._v("方法中最终调用了"),a("code",[t._v("createElement")]),t._v("去创建"),a("code",[t._v("VNode")]),t._v("对象")]),t._v(" "),a("p",[t._v("接下来要将创建好的 "),a("code",[t._v("VNode")]),t._v(" 对象传递给"),a("code",[t._v("vm._update")]),t._v("方法")]),t._v(" "),a("p",[a("code",[t._v("update")]),t._v("方法就是在调用"),a("code",[t._v("lifecycleMixin")]),t._v("时定义的, 而"),a("code",[t._v("lifecycleMixin")]),t._v("定义于"),a("code",[t._v("src/core/instance/lifecycle")]),t._v("中")]),t._v(" "),a("p",[t._v("而"),a("code",[t._v("lifecycleMixin")]),t._v("是在"),a("code",[t._v("core/instance/index")]),t._v("中定义完 Vue 的构造器后调用的")])]),t._v(" "),a("h2",{attrs:{id:"vue-prototype-update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-prototype-update"}},[t._v("#")]),t._v(" Vue.prototype._update")]),t._v(" "),a("blockquote",[a("p",[t._v("_update 方法的作用是把 VNode 渲染成真实的 DOM")]),t._v(" "),a("p",[t._v("首次渲染会调用, 数据更新也会调用("),a("code",[t._v("renderWatcher")]),t._v("调用"),a("code",[t._v("get")]),t._v("时, 触发"),a("code",[t._v("updateComponent")]),t._v(")")]),t._v(" "),a("p",[t._v("最核心的部分就是调用了 "),a("code",[t._v("vm.__patch__")]),t._v(" 方法")])]),t._v(" "),a("ol",[a("li",[t._v("通过 vm 触发"),a("code",[t._v("_update")]),t._v("方法, 所以这个"),a("code",[t._v("const vm = this")]),t._v("中的"),a("code",[t._v("this")]),t._v("其实就是当前实例对象")]),t._v(" "),a("li",[t._v("定义 "),a("code",[t._v("prevEl")]),t._v(", 指向当前实例的"),a("code",[t._v("$el")]),t._v(", 如果是二次渲染, 这个值就存储的上一次的"),a("code",[t._v("真实DOM对象")]),t._v(", 如果是首次渲染, 对于组件来说这个值是"),a("code",[t._v("undefined")]),t._v(", 对于入口来说这个值就是设置的挂载点")]),t._v(" "),a("li",[t._v("定义 "),a("code",[t._v("prevVnode")]),t._v(", 就是从vue实例中获取"),a("code",[t._v("_vnode")]),t._v(", "),a("code",[t._v("_vnode")]),t._v("中记载的是之前所处理的vnode对象, 首次渲染时调用"),a("code",[t._v("_update")]),t._v("该值为undefined, 所以该值不存在则代表首次渲染")]),t._v(" "),a("li",[t._v("调用"),a("RouterLink",{attrs:{to:"/blogs/vue-resource/virtualDOM/5.html#setactiveinstance"}},[t._v("setActiveInstance")]),t._v("(vm)设置激活实例并且返回一个函数, 用于在"),a("code",[t._v("__patch__")]),t._v("执行完毕后重置激活实例（重新设置为null）")],1),t._v(" "),a("li",[t._v("设置"),a("code",[t._v("vm._vnode")]),t._v("为当前"),a("code",[t._v("vnode")]),t._v("(所以非首次渲染, 都存在vm._vnode, 就是此处设置的)")]),t._v(" "),a("li",[t._v("如果不存在"),a("code",[t._v("prevVnode")]),t._v(", 说明当前是首次渲染")])]),t._v(" "),a("ul",[a("li",[t._v("首次渲染时, 调用"),a("code",[t._v("vm.__patch__(vm.$el, vnode, hydrating, false)")]),t._v(", vnode就是刚刚创建的vnode")]),t._v(" "),a("li",[t._v("在"),a("code",[t._v("__patch__")]),t._v("方法中, 会将传入的"),a("code",[t._v("vm.$el")]),t._v("转换为vnode, 然后和新的"),a("code",[t._v("vnode")]),t._v("进行比较")]),t._v(" "),a("li",[t._v("然后将比较的结果更新到真实DOM, 最后将其返回出来, 设置到"),a("code",[t._v("vm.$el")]),t._v("上")])]),t._v(" "),a("ol",{attrs:{start:"7"}},[a("li",[t._v("如果是数据改变后, 调用"),a("code",[t._v("_update")]),t._v("方法, 此时"),a("code",[t._v("preVnode")]),t._v("就有值了")])]),t._v(" "),a("ul",[a("li",[t._v("依然是调用"),a("code",[t._v("vm.__patch__")]),t._v("方法, 只不过是传入 "),a("code",[t._v("preVnode")]),t._v("和新的"),a("code",[t._v("vnode")])]),t._v(" "),a("li",[t._v("在其中比较两个vnode的差异")]),t._v(" "),a("li",[t._v("然后将差异更新到真实DOM, 然后将新的真实DOM返回, 在更新到"),a("code",[t._v("vm.$el")]),t._v("中")])]),t._v(" "),a("ol",{attrs:{start:"8"}},[a("li",[t._v("执行 "),a("code",[t._v("restoreActiveInstance")]),t._v(" 将 "),a("code",[t._v("activeInstance")]),t._v(" 设置为 "),a("code",[t._v("null")])]),t._v(" "),a("li",[t._v("始终保持"),a("code",[t._v("vm.$el.__vue__")]),t._v("指向当前最新的vm实例")])]),t._v(" "),a("ul",[a("li",[t._v("将以往的"),a("code",[t._v("vm.$el.__vue__")]),t._v("设置为null(因为是直接拷贝的, 他俩指向同一个"),a("code",[t._v("$el")]),t._v("), 是因为旧的"),a("code",[t._v("$el")]),t._v("已弃用")]),t._v(" "),a("li",[t._v("将新的"),a("code",[t._v("vm.$el.__vue__")]),t._v("设置为当前实例对象"),a("code",[t._v("vm")]),t._v(", 更新一下")])]),t._v(" "),a("ol",{attrs:{start:"10"}},[a("li",[t._v("处理HOC(高阶组件)")])]),t._v(" "),a("ul",[a("li",[t._v("判断 "),a("code",[t._v("vm.$vnode")]),t._v("存在且"),a("code",[t._v("vm.$parent")]),t._v("存在, 并且"),a("code",[t._v("vm.$vnode === vm.$parent._vnode")])]),t._v(" "),a("li",[t._v("进入判断后将"),a("code",[t._v("vm.$parent.$el")]),t._v("设置为"),a("code",[t._v("vm.$el")])])]),t._v(" "),a("h3",{attrs:{id:"hoc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hoc"}},[t._v("#")]),t._v(" HOC")]),t._v(" "),a("blockquote",[a("p",[t._v("HOC主要针对如下情况")]),t._v(" "),a("p",[t._v("关于HOC后续在组件中细🔐, 这里暂时先了解一下")])]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("root")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("child1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("child1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("child2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("child21")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("child21")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("child2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("root")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("ul",[a("li",[t._v("$el: 当前组件实例对应的DOM")]),t._v(" "),a("li",[t._v("_vnode: 当前组件实例对应的vnode")]),t._v(" "),a("li",[t._v("$parent: 当前组件的父组件实例 "),a("code",[t._v("child21.parent = child2")]),t._v("、"),a("code",[t._v("child1.parent = root")])]),t._v(" "),a("li",[t._v("$vnode: 子组件首先渲染出来的占位节点(在父组件中的引用节点, 就是组件标签) 所以"),a("code",[t._v("vnode.parent = $vnode")]),t._v("（源码 Vue.prototype._render 函数赋值），"),a("code",[t._v("$vnode")]),t._v(" 和 "),a("code",[t._v("_vnode")]),t._v(" 的 "),a("code",[t._v("$el")]),t._v("相同，指向同个DOM")])]),t._v(" "),a("blockquote",[a("p",[t._v("高阶组件HOC")]),t._v(" "),a("p",[t._v("HOC: "),a("code",[t._v("(component) => ({ template: <component></components> })")])]),t._v(" "),a("p",[t._v("所以 component 这个组件 的父节点是HOC，"),a("code",[t._v("vm(component).$vnode(包括组件标签) = vm(component).$parent(HOC)._vnode(不包含HOC标签)")]),t._v("，所以需要控制"),a("code",[t._v("component")]),t._v("的"),a("code",[t._v("HOC组件")]),t._v("引用同一个$el")])]),t._v(" "),a("h3",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结:")]),t._v(" "),a("blockquote",[a("p",[t._v("update方法比较简单, 主要就是判断是否有"),a("code",[t._v("prevVnode")])]),t._v(" "),a("p",[t._v("如果没有"),a("code",[t._v("prevVnode")]),t._v("就是首次渲染, 调用"),a("code",[t._v("__patch")]),t._v("方法, 用 "),a("code",[t._v("vm.$el")]),t._v("与新的"),a("code",[t._v("vnode")]),t._v("做比较, 更新差异到真实DOM, 然后返回真实DOM并设置给"),a("code",[t._v("vm.$el")])]),t._v(" "),a("p",[t._v("如果有"),a("code",[t._v("prevVnode")]),t._v(", 说明是数据更新后渲染, 调用"),a("code",[t._v("__patch__")]),t._v("方法, 用"),a("code",[t._v("prevVnode")]),t._v("与新的"),a("code",[t._v("vnode")]),t._v("作比较, 更新差异到真实DOM, 然后返回真实DOM并设置给"),a("code",[t._v("vm.$el")])])]),t._v(" "),a("h3",{attrs:{id:"源码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#源码"}},[t._v("#")]),t._v(" 源码")]),t._v(" "),a("div",{staticClass:"language-ts line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lifecycleMixin")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Vue"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Class"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Component"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("_update")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vnode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" VNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hydrating"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" vm"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Component "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" prevEl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$el\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" prevVnode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_vnode\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" restoreActiveInstance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setActiveInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_vnode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vnode\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Vue.prototype.__patch__ is injected in entry points")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// based on the rendering backend used.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// * 首次渲染")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("prevVnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// initial render")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vue原型中的 __patch__ 方法是在入口中被注入的")]),t._v("\n      vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$el "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__patch__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hydrating"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* removeOnly */")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// updates")]),t._v("\n      vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$el "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__patch__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prevVnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 始终保持activeInstance和prevActiveInstance是一个父子关系 ")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("restoreActiveInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// update __vue__ reference")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prevEl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      prevEl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__vue__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__vue__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vm\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// if parent is an HOC, update its $el as well")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$vnode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$parent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$vnode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$parent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$parent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$el "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$el\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// updated hook is called by the scheduler to ensure that children are")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// updated in a parent's updated hook.")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br")])]),a("h2",{attrs:{id:"setactiveinstance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setactiveinstance"}},[t._v("#")]),t._v(" setActiveInstance")]),t._v(" "),a("blockquote",[a("p",[t._v("主要是设置激活实例, 主要是在挂载组件时, 需要将当前实例作为所有组件的爹")])]),t._v(" "),a("div",{staticClass:"language-ts line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" activeInstance"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setActiveInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Component"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// * 在组件渲染的过程中，之所以将vm作为activeInstance，就是因为组件是作为当前实例的儿子，因此，会把当前实例当成父级vm实例，保存下来")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" prevActiveInstance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" activeInstance\n  activeInstance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vm\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    activeInstance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" prevActiveInstance\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);