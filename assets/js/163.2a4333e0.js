(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{737:function(t,s,n){"use strict";n.r(s);var a=n(5),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"vnode的创建过程-createelement上"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vnode的创建过程-createelement上"}},[t._v("#")]),t._v(" VNode的创建过程-createElement上")]),t._v(" "),n("h2",{attrs:{id:"createelement"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#createelement"}},[t._v("#")]),t._v(" $createElement")]),t._v(" "),n("blockquote",[n("p",[t._v("首先定位到"),n("code",[t._v("updateComponent")]),t._v(", 从"),n("code",[t._v("_render")]),t._v("开始")]),t._v(" "),n("p",[t._v("位置: "),n("code",[t._v("src/core/instance/lifecycle")])])]),t._v(" "),n("ol",[n("li",[t._v("先找到"),n("code",[t._v("mountComponent")]),t._v(", 在"),n("code",[t._v("mountComponent")]),t._v("中定义了"),n("code",[t._v("updateComponent")])])]),t._v(" "),n("div",{staticClass:"language-ts line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("updateComponent")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// * 通过vm_render()返回了一个VNode，这是顶层的一个VirtualDom节点")]),t._v("\n  vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("_update")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("_render")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hydrating"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br")])]),n("ol",{attrs:{start:"2"}},[n("li",[t._v("此处只是定义了"),n("code",[t._v("updateComponent")]),t._v(", 然后将其传给了 "),n("code",[t._v("watcher")]),t._v(", 在"),n("code",[t._v("watcher")]),t._v("中调用"),n("code",[t._v("get")]),t._v("时, 在触发"),n("code",[t._v("updateComponent")])]),t._v(" "),n("li",[t._v("在"),n("code",[t._v("updateComponent")]),t._v("中首先调用了"),n("code",[t._v("render")]),t._v("方法, 创建"),n("code",[t._v("VNode")]),t._v(", 然后在"),n("code",[t._v("update")]),t._v("方法中, 再将"),n("code",[t._v("VNode")]),t._v("转换为"),n("code",[t._v("真实DOM")])]),t._v(" "),n("li",[t._v("实例方法"),n("code",[t._v("_render")]),t._v("是在"),n("code",[t._v("Vue")]),t._v("的入口中初始化的, 执行"),n("code",[t._v("renderMixin")]),t._v("初始化, 位置在"),n("code",[t._v("src/core/instance/render")]),t._v("的"),n("code",[t._v("renderMixin")]),t._v("这个函数中")]),t._v(" "),n("li",[t._v("在"),n("code",[t._v("_render")]),t._v("这个方法中, 核心是调用用户传入的"),n("code",[t._v("render")]),t._v("方法(或者在"),n("code",[t._v("entry-runtime-with-compiler")]),t._v("的"),n("code",[t._v("$mount")]),t._v("中通过"),n("code",[t._v("template")]),t._v("转换的)")]),t._v(" "),n("li",[n("code",[t._v("render")]),t._v("函数来源于"),n("code",[t._v("vm.$options")]),t._v(", 也就是从用户的选项中获取的, 来源方式就是上面两种")]),t._v(" "),n("li",[t._v("在"),n("code",[t._v("_render")]),t._v("函数中, 有一个 "),n("code",[t._v("vm.$vnode")]),t._v(", 这个"),n("code",[t._v("vm.$vnode = _parentVnode")]),t._v("中的"),n("code",[t._v("_parentVnode")]),t._v("实际上是指占位符的VNode，也就是父级的VNode")]),t._v(" "),n("li",[t._v("获取到"),n("code",[t._v("render")]),t._v("后通过"),n("code",[t._v("call")]),t._v("方法改变内部this指向, "),n("code",[t._v("vm._renderProxy")]),t._v("就是当前的"),n("code",[t._v("vue")]),t._v("实例, 定义于"),n("code",[t._v("_init")]),t._v("中")]),t._v(" "),n("li",[t._v("而"),n("code",[t._v("vm.$createElement")]),t._v("就是前面一直写的"),n("code",[t._v("h")]),t._v("函数")]),t._v(" "),n("li",[n("code",[t._v("vm.$createElement")]),t._v("定义于"),n("code",[t._v("initRender")]),t._v("中, 而"),n("code",[t._v("initRender")]),t._v("是在"),n("code",[t._v("_init")]),t._v("执行时初始化的")]),t._v(" "),n("li",[t._v("其实也是调用了一个叫做"),n("code",[t._v("createElement")]),t._v("的函数"),n("code",[t._v("vm.$createElement = (a, b, c, d) => createElement(vm, a, b, c, d, true)")])])]),t._v(" "),n("ul",[n("li",[t._v("上面还有一个"),n("code",[t._v("_c")]),t._v(", "),n("code",[t._v("_c")]),t._v("前面说过, 他是对通过template构建的render生效的, 几乎和"),n("code",[t._v("$createElement")]),t._v("一样: "),n("code",[t._v("vm._c = (a, b, c, d) => createElement(vm, a, b, c, d, false)")])]),t._v(" "),n("li",[t._v("他们唯一的区别就是最后一个参数")])]),t._v(" "),n("blockquote",[n("p",[t._v("当"),n("code",[t._v("render")]),t._v("函数是由用户传递时, 内部会调用"),n("code",[t._v("$createElement")]),t._v(", 而如果是"),n("code",[t._v("template")]),t._v("编译出来的"),n("code",[t._v("render")]),t._v(", 则使用"),n("code",[t._v("_c")])])]),t._v(" "),n("ol",{attrs:{start:"11"}},[n("li",[t._v("创建完成后, 如果在执行过程中有报错, 则通过catch接收错误, 进行异常处理")]),t._v(" "),n("li",[t._v("最终将 currentRenderingInstance 设置为 null, 表示当前render已经结束了")]),t._v(" "),n("li",[t._v("接着判断vnode是否是一个数组, 如果是且长度为1则将其取出在赋值给"),n("code",[t._v("vnode")])]),t._v(" "),n("li",[t._v("判断vnode是否是VNode的实例, 如果不是则说明vnode创建失败了, 将一个新创建的空节点赋值给vnode")]),t._v(" "),n("li",[t._v("将"),n("code",[t._v("_parentVnode")]),t._v("挂载到vnode.parent上, 其实就是最终将渲染VNode的parent指向占位符_parentVnode, 这个占位符Vnode就是父的Vnode, 其实就是组件标签")]),t._v(" "),n("li",[t._v("返回vnode")])]),t._v(" "),n("div",{staticClass:"language-ts line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("renderMixin")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Vue"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Class"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Component"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// * _render方法的定义，返回的是一个VNode")]),t._v("\n  Vue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("_render")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" VNode "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" vm"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Component "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" render"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" _parentVnode "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$options\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ! 插槽相关，先不慌")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_parentVnode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$scopedSlots "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("normalizeScopedSlots")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        _parentVnode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scopedSlots"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$slots"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$scopedSlots\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// set parent vnode. this allows render functions to have access")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// to the data on the placeholder node.")]),t._v("\n    vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$vnode "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _parentVnode\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// render self")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" vnode\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// There's no need to maintain a stack because all render fns are called")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// separately from one another. Nested component's render fns are called")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// when parent component is patched.")]),t._v("\n      currentRenderingInstance "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vm\n      vnode "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_renderProxy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$createElement"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleError")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("render")]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// return error render result,")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or previous vnode to prevent render error causing blank component")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* istanbul ignore else */")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'production'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("renderError"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          vnode "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("renderError")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_renderProxy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$createElement"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleError")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("renderError")]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          vnode "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_vnode\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        vnode "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_vnode\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("finally")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      currentRenderingInstance "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// if the returned array contains only a single node, allow it")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Array")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isArray")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vnode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" vnode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      vnode "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vnode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// return empty vnode in case the render function errored out")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vnode "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VNode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'production'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Array")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isArray")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vnode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("warn")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Multiple root nodes returned from render function. Render function '")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'should return a single root node.'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          vm\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      vnode "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createEmptyVNode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// set parent")]),t._v("\n    vnode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parent "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _parentVnode\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" vnode\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br"),n("span",{staticClass:"line-number"},[t._v("34")]),n("br"),n("span",{staticClass:"line-number"},[t._v("35")]),n("br"),n("span",{staticClass:"line-number"},[t._v("36")]),n("br"),n("span",{staticClass:"line-number"},[t._v("37")]),n("br"),n("span",{staticClass:"line-number"},[t._v("38")]),n("br"),n("span",{staticClass:"line-number"},[t._v("39")]),n("br"),n("span",{staticClass:"line-number"},[t._v("40")]),n("br"),n("span",{staticClass:"line-number"},[t._v("41")]),n("br"),n("span",{staticClass:"line-number"},[t._v("42")]),n("br"),n("span",{staticClass:"line-number"},[t._v("43")]),n("br"),n("span",{staticClass:"line-number"},[t._v("44")]),n("br"),n("span",{staticClass:"line-number"},[t._v("45")]),n("br"),n("span",{staticClass:"line-number"},[t._v("46")]),n("br"),n("span",{staticClass:"line-number"},[t._v("47")]),n("br"),n("span",{staticClass:"line-number"},[t._v("48")]),n("br"),n("span",{staticClass:"line-number"},[t._v("49")]),n("br"),n("span",{staticClass:"line-number"},[t._v("50")]),n("br"),n("span",{staticClass:"line-number"},[t._v("51")]),n("br"),n("span",{staticClass:"line-number"},[t._v("52")]),n("br"),n("span",{staticClass:"line-number"},[t._v("53")]),n("br"),n("span",{staticClass:"line-number"},[t._v("54")]),n("br"),n("span",{staticClass:"line-number"},[t._v("55")]),n("br"),n("span",{staticClass:"line-number"},[t._v("56")]),n("br"),n("span",{staticClass:"line-number"},[t._v("57")]),n("br"),n("span",{staticClass:"line-number"},[t._v("58")]),n("br"),n("span",{staticClass:"line-number"},[t._v("59")]),n("br"),n("span",{staticClass:"line-number"},[t._v("60")]),n("br"),n("span",{staticClass:"line-number"},[t._v("61")]),n("br"),n("span",{staticClass:"line-number"},[t._v("62")]),n("br"),n("span",{staticClass:"line-number"},[t._v("63")]),n("br"),n("span",{staticClass:"line-number"},[t._v("64")]),n("br")])]),n("h2",{attrs:{id:"createelement函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#createelement函数"}},[t._v("#")]),t._v(" createElement函数")]),t._v(" "),n("blockquote",[n("p",[t._v("createElement一共有六个参数, 前面四个参数都是调用"),n("code",[t._v("$createElement")]),t._v("时传递进来的")]),t._v(" "),n("p",[t._v("主要参数有:")]),t._v(" "),n("ul",[n("li",[t._v("第一个是 vue的实例")]),t._v(" "),n("li",[t._v("第二个是 节点的标签")]),t._v(" "),n("li",[t._v("第三个是 VNode的data")]),t._v(" "),n("li",[t._v("第四个是 子结点中的内容")])]),t._v(" "),n("p",[t._v("实际使用过程中, 一般只需要传递中间三个参数(2, 3, 4)即可")])]),t._v(" "),n("ol",[n("li",[t._v("在"),n("code",[t._v("createElement")]),t._v("函数中, 最终要返回"),n("code",[t._v("VNode")]),t._v(", 但是"),n("code",[t._v("VNode")]),t._v("并不是在当前函数中创建的")]),t._v(" "),n("li",[t._v("在这个函数中所做的事情, 只是在处理参数")]),t._v(" "),n("li",[t._v("主要是要处理调用"),n("code",[t._v("h")]),t._v("函数时的参数差异, 在使用"),n("code",[t._v("h")]),t._v("时, 可以传两个参数, 也可以传三个")]),t._v(" "),n("li",[t._v("所以一上来就判断"),n("code",[t._v("data")]),t._v("是否是数组, 或者是一个原始值, 这两种情况都意味着没有传入"),n("code",[t._v("children")]),t._v(", 而是将"),n("code",[t._v("h")]),t._v("函数的二号参数作为"),n("code",[t._v("children")]),t._v("使用")])]),t._v(" "),n("ul",[n("li",[t._v("数组说明VNode的儿子是子结点")]),t._v(" "),n("li",[t._v("原始值说明标签中直接就是内容")]),t._v(" "),n("li",[t._v("如果data是数组或原始值, 那么会把 "),n("code",[t._v("children")]),t._v("赋值给"),n("code",[t._v("normalizationType")]),t._v(", 然后将"),n("code",[t._v("data")]),t._v("赋值给"),n("code",[t._v("children")]),t._v(", 再把"),n("code",[t._v("data")]),t._v("设置为"),n("code",[t._v("undefined")])])]),t._v(" "),n("ol",{attrs:{start:"5"}},[n("li",[t._v("最后再来看"),n("code",[t._v("alwaysNormalize")]),t._v(", 在"),n("code",[t._v("_c")]),t._v("中默认为"),n("code",[t._v("false")]),t._v(", 但是在"),n("code",[t._v("$createElement")]),t._v("执行时, 默认为"),n("code",[t._v("true")]),t._v(", 也就是说使用用户传入的"),n("code",[t._v("render")]),t._v("方法时, 会将"),n("code",[t._v("alwaysNormalize")]),t._v("设置为"),n("code",[t._v("ALWAYS_NORMALIZE")]),t._v(", 他是一个常量, 值是2, 用于做标识, 他的作用是用于处理"),n("code",[t._v("children")]),t._v("参数")]),t._v(" "),n("li",[t._v("到这里其实就结束了, 后续的核心其实都在"),n("code",[t._v("_createElement")]),t._v("中, 前面的步骤都是处理参数")])]),t._v(" "),n("div",{staticClass:"language-ts line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SIMPLE_NORMALIZE")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ALWAYS_NORMALIZE")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  context"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Component"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// * vm实例")]),t._v("\n  tag"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// * 标签")]),t._v("\n  data"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// * VNode的data")]),t._v("\n  children"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// * 子节点")]),t._v("\n  normalizationType"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  alwaysNormalize"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" VNode "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Array")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("VNode"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// * 如果data是一个数组，这个意思是data没有传，而数组表示的是第四个参数children")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// * isPrimitive用于判断参数是否属于 string, number, symbol, boolean 这四个类型")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// * 当data不存在的时候，就会将参数往前移动")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// * 由于第一个参数vm和最后一个参数alwaysNormalize是固定肯定会传入的，只有中间四个参数会有出入，因此这里少了一个data，就会将children和normalizationType往前移动一个位置，在把data设置为空")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Array")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isArray")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isPrimitive")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    normalizationType "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" children\n    children "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data\n    data "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// * 这个isTrue只能用于判断Boolean，而不会把传入的值变成一个truely变量或者一个falsely变量进行判断")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isTrue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("alwaysNormalize"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// * true表示是自定义的render函数， false表示的是由template转换的render函数")]),t._v("\n    normalizationType "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ALWAYS_NORMALIZE")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// * 参数在createElement中进行处理，当参数都处理完毕之后，在调用_createElement方法进行真正的创建")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("_createElement")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tag"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" children"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" normalizationType"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);