(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{569:function(_,e,v){_.exports=v.p+"assets/img/virtualDOM.8c20771a.png"},736:function(_,e,v){"use strict";v.r(e);var t=v(5),o=Object(t.a)({},(function(){var _=this,e=_.$createElement,t=_._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"整体过程分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#整体过程分析"}},[_._v("#")]),_._v(" 整体过程分析")]),_._v(" "),t("p",[_._v("主要分为两个部分:")]),_._v(" "),t("ol",[t("li",[_._v("第一部分是之前的首次渲染的过程")]),_._v(" "),t("li",[_._v("第二部分是和virtualDOM相关的更新和渲染部分")])]),_._v(" "),t("h2",{attrs:{id:"整体流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#整体流程"}},[_._v("#")]),_._v(" 整体流程")]),_._v(" "),t("ol",[t("li",[_._v("首先调用"),t("code",[_._v("vm._init")]),_._v(", 进行Vue的初始化, 开始初始化Vue的实例成员")]),_._v(" "),t("li",[_._v("在"),t("code",[_._v("vm._init")]),_._v("中最终调用了"),t("code",[_._v("vm.$mount")]),_._v(", 在$mount中调用了"),t("code",[_._v("mountComponent")]),_._v("开始挂载组件")]),_._v(" "),t("li",[_._v("在"),t("code",[_._v("mountComponent")]),_._v("中创建"),t("code",[_._v("renderWatcher")]),_._v("对象和定义了"),t("code",[_._v("updateComponent")])]),_._v(" "),t("li",[_._v("在"),t("code",[_._v("watcher")]),_._v("对象的get方法中调用了"),t("code",[_._v("getter")]),_._v("也就是"),t("code",[_._v("updateComponent")]),_._v(", 最终调用了"),t("code",[_._v("vm._update(vm._render(), hydrating)")])]),_._v(" "),t("li",[_._v("首先调用"),t("code",[_._v("vm._render")]),_._v("方法")])]),_._v(" "),t("ul",[t("li",[_._v("在_render中实际上就是调用开发人员自己传入的"),t("code",[_._v("render")]),_._v("函数或者编译生成的"),t("code",[_._v("render")]),_._v("函数: "),t("code",[_._v("vnode = render.call(vm.renderProxy, vm.$createElement)")])]),_._v(" "),t("li",[_._v("上述render函数在调用的时候, 是通过call来调用的, 保证内部this指向当前实例, 传递的第二个参数就是"),t("code",[_._v("h")]),_._v("函数, 也就是"),t("code",[_._v("vm.$createElement")]),_._v("的简写, 最终返回了一个vnode")])]),_._v(" "),t("ol",{attrs:{start:"6"}},[t("li",[_._v("当获取到vnode之后, 会将虚拟节点传递给"),t("code",[_._v("_update")]),_._v("方法, 在"),t("code",[_._v("_update")]),_._v("方法中调用"),t("code",[_._v("__patch__")]),_._v(", 负责将虚拟DOM转换为真实DOM并渲染到页面上")]),_._v(" "),t("li",[_._v("在"),t("code",[_._v("_update")]),_._v("中最终调用"),t("code",[_._v("__patch__")]),_._v("函数, 在"),t("code",[_._v("__patch__")]),_._v("函数中最终调用了"),t("code",[_._v("patchVnode")])]),_._v(" "),t("li",[_._v("在"),t("code",[_._v("patchVnode")]),_._v("中最终调用"),t("code",[_._v("updateChildren")])]),_._v(" "),t("li",[_._v("从"),t("code",[_._v("vm.__patch__")]),_._v("开始, 几乎和"),t("code",[_._v("snabbdom")]),_._v("中的内容差不多, 只是在vue中处理了组件等")])]),_._v(" "),t("p",[t("img",{attrs:{src:v(569),alt:"整体流程"}})])])}),[],!1,null,null,null);e.default=o.exports}}]);