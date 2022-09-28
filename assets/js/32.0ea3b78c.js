(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{516:function(t,_,v){t.exports=v.p+"assets/img/clientRender.2d1096ba.png"},621:function(t,_,v){"use strict";v.r(_);var a=v(5),s=Object(a.a)({},(function(){var t=this,_=t.$createElement,a=t._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"客户端渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#客户端渲染"}},[t._v("#")]),t._v(" 客户端渲染")]),t._v(" "),a("p",[t._v("之前了解到, 传统的服务端渲染存在这样那样的问题, 比如前后端代码混合在一起, 服务端压力大, 体验不够友好等")]),t._v(" "),a("p",[t._v("但是这些问题随着客户端Ajax技术的诞生和普及, 得到了有效的解决")]),t._v(" "),a("p",[t._v("Ajax使得客户端动态获取数据成为了可能")]),t._v(" "),a("p",[t._v("也就是说之前只能在服务端进行渲染的工作, 现在可以放到客户端来解决")]),t._v(" "),a("h2",{attrs:{id:"为什么要放到客户端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么要放到客户端"}},[t._v("#")]),t._v(" 为什么要放到客户端?")]),t._v(" "),a("p",[t._v("其实又回到刚才说的问题了")]),t._v(" "),a("p",[t._v("传统的SSR, 将前后端代码混合在一起")]),t._v(" "),a("h3",{attrs:{id:"_1-职责划分更加清晰-提高开发效率和可维护性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-职责划分更加清晰-提高开发效率和可维护性"}},[t._v("#")]),t._v(" 1. 职责划分更加清晰, 提高开发效率和可维护性")]),t._v(" "),a("p",[t._v("而页面渲染放到客户端进行, 那么人员的职责划分会变得更加清晰")]),t._v(" "),a("p",[t._v("后端的人员就只需要负责数据的处理, 将接口提供给前端")]),t._v(" "),a("p",[t._v("而前端则专注于处理视图的渲染, 可以极大的提高开发的效率和可维护性")]),t._v(" "),a("h3",{attrs:{id:"_2-减轻服务端压力"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-减轻服务端压力"}},[t._v("#")]),t._v(" 2. 减轻服务端压力")]),t._v(" "),a("p",[t._v("渲染工作抽离服务端, 极大的降低服务端的压力")]),t._v(" "),a("h3",{attrs:{id:"_3-体验问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-体验问题"}},[t._v("#")]),t._v(" 3. 体验问题")]),t._v(" "),a("p",[t._v("传统SSR加载不同页面需要不停地重新创建document文档, 会不停地刷新, 而SPA应用, 没有页面刷新, 体验极佳")]),t._v(" "),a("h2",{attrs:{id:"客户端渲染基本流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#客户端渲染基本流程"}},[t._v("#")]),t._v(" 客户端渲染基本流程")]),t._v(" "),a("p",[a("img",{attrs:{src:v(516),alt:"clientRender"}})]),t._v(" "),a("ol",[a("li",[t._v("首先在客户端发起请求, 服务端接收到请求后返回一个空白的html页面(无实质内容, 但是有挂载点)")]),t._v(" "),a("li",[t._v("获取到空页面后, 加载执行js代码, 如果有动态数据, 会发起ajax请求, 获取数据")]),t._v(" "),a("li",[t._v("服务端收到请求后, 开始查库操作, 然后将查询到的数据进一步返回到客户端")]),t._v(" "),a("li",[t._v("客户端拿到数据后, 对数据进行处理以及渲染动态页面内容")]),t._v(" "),a("li",[t._v("最终呈现完整的页面内容")])]),t._v(" "),a("blockquote",[a("p",[t._v("上述环节中, 服务端仅负责数据的处理, 而页面渲染的工作, 都移动到了客户端")]),t._v(" "),a("p",[t._v("分离前后端, 极大减轻服务端消耗")]),t._v(" "),a("p",[t._v("通过这种方式, 前端也变得更加独立, 不在受限于后端")])]),t._v(" "),a("h2",{attrs:{id:"缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),a("p",[t._v("但是SPA也有一些明显的不足")]),t._v(" "),a("ol",[a("li",[t._v("首屏渲染慢")]),t._v(" "),a("li",[t._v("不利于SEO")])])])}),[],!1,null,null,null);_.default=s.exports}}]);