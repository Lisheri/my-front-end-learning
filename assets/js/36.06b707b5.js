(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{563:function(e,_,v){e.exports=v.p+"assets/img/VirtualDOMAll.e2c259d3.png"},725:function(e,_,v){"use strict";v.r(_);var t=v(5),o=Object(t.a)({},(function(){var e=this,_=e.$createElement,t=e._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"vue的虚拟dom总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue的虚拟dom总结"}},[e._v("#")]),e._v(" Vue的虚拟DOM总结")]),e._v(" "),t("blockquote",[t("ol",[t("li",[e._v("从入口到updateComponent都和前面Vue的初始化过程一样, 从vm._render开始说起")])]),e._v(" "),t("ul",[t("li",[e._v("在render方法中, 调用了用户传入的render函数或者模板编译的render函数")]),e._v(" "),t("li",[e._v("如果是用户传入的render函数, 那么调用的是"),t("code",[e._v("vm.$createElement")]),e._v("方法")]),e._v(" "),t("li",[e._v("而如果是模板编译的render函数, 则使用"),t("code",[e._v("vm._c()")])]),e._v(" "),t("li",[e._v("无论哪一个方法, 最终都会调用createElement")]),e._v(" "),t("li",[e._v("在createElement函数中, 处理了参数的差异, 最终调用_createElement")]),e._v(" "),t("li",[e._v("在_createElement中最终调用了new VNode去创建vnode对象, 里面属性非常多, 只需要掌握关键的属性就可以了")]),e._v(" "),t("li",[e._v("最终将创建好的vnode返回, 所以_render中得到的就是创建的vnode对象")])]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[e._v("将返回的vnode对象交给_update方法去处理")])]),e._v(" "),t("ul",[t("li",[e._v("update方法主要负责把虚拟DOM渲染成真实DOM")]),e._v(" "),t("li",[e._v("在update中最终会调用"),t("code",[e._v("vm.__patch__")]),e._v("方法")]),e._v(" "),t("li",[e._v("如果是首次执行, 则调用"),t("code",[e._v("vm.__patch__(vm.$el, vnode, hydrating, false)")]),e._v(", 第一个参数传递的是一个真实DOM")]),e._v(" "),t("li",[e._v("如果是数据更新, 则调用"),t("code",[e._v("vm.__patch__(preVnode, vnode)")]),e._v(", 传递的是两个vnode")])]),e._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[t("code",[e._v("vm.__patch__()")])])]),e._v(" "),t("ul",[t("li",[e._v("是在"),t("code",[e._v("runtime/index")]),e._v("中去初始化的, 初始化时, 给Vue.prototype上挂载的"),t("code",[e._v("__patch__")]),e._v("方法, 所有的vue实例都可以访问")]),e._v(" "),t("li",[e._v("上面的patch方法, 其实就是"),t("code",[e._v("runtime/patch.js")]),e._v("中导出的"),t("code",[e._v("patch")]),e._v("函数")]),e._v(" "),t("li",[e._v("在"),t("code",[e._v("patch")]),e._v("函数中, 主要设置了两个对象, 一个是 modules(与平台无关的模块), 另一个是 nodeOps(操作DOM)")]),e._v(" "),t("li",[e._v("在设置好上面的对象后, 调用"),t("code",[e._v("createPatchFunction")]),e._v(", 传入上面的两个对象, 利用闭包存储起来, 最终返回我们所需要的"),t("code",[e._v("patch")]),e._v("函数")])]),e._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[t("code",[e._v("patch")])])]),e._v(" "),t("ul",[t("li",[e._v("在"),t("code",[e._v("vdom/patch")]),e._v("模块中定义, 调用createPatchFunction返回patch函数")]),e._v(" "),t("li",[e._v("在createPatchFunction中做了特别多的辅助操作, 其中有一个cbs数组, 里面定义了特别多的辅助函数, 并且初始化了cbs对象")]),e._v(" "),t("li",[e._v("在cbs对象中存储了所有模块中定义的那些钩子函数(vnode的钩子), 主要用于处理节点的属性/时间/样式操作/指令/ref/transition等")]),e._v(" "),t("li",[e._v("在cbs中, 还会判断第一个参数是否真实DOM, 首次加载第一个参数就是真实DOM, 会将真实DOM转换成VNode, 并调用createElm将newVnode转换成真实DOM并挂载到DOM树上")]),e._v(" "),t("li",[e._v("如果是数据更新的时候, 此时新旧节点都是vnode, 根据sameVnode判断新旧节点是否相同节点, 如果是相同节点, 则执行 patchVnode, 也就是Diff算法")]),e._v(" "),t("li",[e._v("当patch执行结束后, 最终会删除旧的节点")]),e._v(" "),t("li",[e._v("在patch函数中有两个核心函数, 一个是createElm, 一个是patchVnode")])]),e._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[t("code",[e._v("createElm(vnode, insertedVnodeQueue)")])])]),e._v(" "),t("ul",[t("li",[e._v("createElm函数的作用是, 将虚拟节点转换为真实DOM, 并插入到DOM树上")]),e._v(" "),t("li",[e._v("同时如果存在儿子节点, 会将儿子节点也转换成真实DOM, 并插入到DOM树上")]),e._v(" "),t("li",[e._v("并且儿子节点的插入是先于父节点的, 因为执行"),t("code",[e._v("invokeCreateHooks")]),e._v("时, 会将所有的insert钩子存储到"),t("code",[e._v("insertedVnodeQueue")]),e._v("中")]),e._v(" "),t("li",[e._v("在patch的最后通过"),t("code",[e._v("invokeInsertHook")]),e._v("执行insert钩子, 但是子结点的insert先入队, 所以先执行")])]),e._v(" "),t("ol",{attrs:{start:"6"}},[t("li",[t("code",[e._v("patchVnode")])])]),e._v(" "),t("ul",[t("li",[e._v("对比新旧VNode, 以及新旧VNode的子结点, 然后更新他们的差异")]),e._v(" "),t("li",[e._v("如果新旧VNode都有子节点, 并且子节点不同, 会调用updateChildren对比子节点的差异")])]),e._v(" "),t("ol",{attrs:{start:"7"}},[t("li",[t("code",[e._v("updateChildren")]),e._v("会处理新旧子节点, 在处理过程中优化了一定的操作")])]),e._v(" "),t("ul",[t("li",[e._v("在处理过程中, 会将两个数组的头尾节点取出来比较, 新旧两个数组一共有四种方式(头头, 尾尾, 头尾, 尾头)")]),e._v(" "),t("li",[e._v("在比较过程中, 还会对sameVnode调用patchVnode进行差异性更新, 以及深度操作")]),e._v(" "),t("li",[e._v("如果这四种方式都不满足, 则在老节点的子结点中查找newStartVnode, 也就是寻找新节点是否存在于老节点数组中, 并进行相应的处理")]),e._v(" "),t("li",[e._v("循环结束后如果新节点比老节点多, 则将新节点插入到dom中(位置在新节点数组对应newEndIdx + 1的位置)")]),e._v(" "),t("li",[e._v("如果老节点比新节点多, 删除多余的老节点")])]),e._v(" "),t("p",[e._v("以上就是整个虚拟DOM的处理过程, 同时设置了key之后, 更新的次数会比没有key少很多, 所以key其实可以优化dom的操作, 提高性能")])]),e._v(" "),t("p",[t("img",{attrs:{src:v(563),alt:"整体流程"}})])])}),[],!1,null,null,null);_.default=o.exports}}]);