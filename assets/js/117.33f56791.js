(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{653:function(s,t,a){"use strict";a.r(t);var n=a(5),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"vue-router基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-router基础"}},[s._v("#")]),s._v(" vue-router基础")]),s._v(" "),a("h2",{attrs:{id:"基本使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[s._v("#")]),s._v(" 基本使用")]),s._v(" "),a("ol",[a("li",[s._v("添加 vue-router "),a("code",[s._v("yarn add vue-router --dev")])]),s._v(" "),a("li",[s._v("初始化vue-router\n"),a("ul",[a("li",[s._v("创建一个"),a("code",[s._v("router.js")])]),s._v(" "),a("li",[s._v("导入vue, vue-router")]),s._v(" "),a("li",[a("code",[s._v("Vue.use(vue-router)")])]),s._v(" "),a("li",[s._v("创建路由规则")]),s._v(" "),a("li",[s._v("使用路由规则创建router实例")]),s._v(" "),a("li",[s._v("导出router实例")])])]),s._v(" "),a("li",[s._v("在创建Vue实例时, 添加router, 键值就是刚刚创建的router实例, 用以注册路由对象")]),s._v(" "),a("li",[s._v("最后添加路由占位 "),a("code",[s._v("<router-view></router-view>")]),s._v(", 接下来所有的路由组件, 都会渲染到这个占位中")])]),s._v(" "),a("blockquote",[a("p",[s._v("vue.use, 传入的如果是一个函数的话, 会直接调用这个函数来注册组件")]),s._v(" "),a("p",[s._v("如果传入的是一个对象的话, 会调用传入对象的 install 方法注册组件")]),s._v(" "),a("p",[s._v("主要是让Vue的prototype上添加 $route 和 $router")])]),s._v(" "),a("h2",{attrs:{id:"实例化vue时-添加路由实例的作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例化vue时-添加路由实例的作用"}},[s._v("#")]),s._v(" 实例化Vue时, 添加路由实例的作用")]),s._v(" "),a("p",[s._v("如果注释掉实例化时候的router, 会发现, 打印出来的vue实例, 没有 "),a("code",[s._v("$route")]),s._v(", "),a("code",[s._v("$router")]),s._v(", "),a("code",[s._v("_route")]),s._v(" , "),a("code",[s._v("_router")]),s._v(" 和 "),a("code",[s._v("_routerRoot")])]),s._v(" "),a("p",[s._v("因此, 这里主要就是为vue实例添加 "),a("code",[s._v("$route")]),s._v(" 以及 "),a("code",[s._v("$router")])]),s._v(" "),a("h3",{attrs:{id:"route"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#route"}},[s._v("#")]),s._v(" $route")]),s._v(" "),a("p",[s._v("$route下主要存储的是理由规则, 包含:")]),s._v(" "),a("ul",[a("li",[s._v("路径")]),s._v(" "),a("li",[s._v("hash")]),s._v(" "),a("li",[s._v("路由的Name")]),s._v(" "),a("li",[s._v("query(路径参数)")]),s._v(" "),a("li",[s._v("params(非路径参数)")]),s._v(" "),a("li",[s._v("等")])]),s._v(" "),a("h3",{attrs:{id:"router"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#router"}},[s._v("#")]),s._v(" $router")]),s._v(" "),a("p",[s._v("$router 代表的是 vue-router的一个实例, 是一个路由对象")]),s._v(" "),a("p",[s._v("他的原型链上游一些路由相关的方法, 比如 push, go, replace, resolve, forward, back等")]),s._v(" "),a("p",[s._v("同时他还包含路由的模式(mode), "),a("code",[s._v("hash")]),s._v(" 或者 "),a("code",[s._v("history")])]),s._v(" "),a("p",[a("code",[s._v("hash")]),s._v("模式以"),a("code",[s._v("#")]),s._v("开头代表路由的路径")]),s._v(" "),a("p",[s._v("而 "),a("code",[s._v("history")]),s._v("模式没有这个区别")]),s._v(" "),a("blockquote",[a("p",[s._v("这里有一个 "),a("code",[s._v("currentRoute")])]),s._v(" "),a("p",[s._v("代表的是当前的路由规则, 有时候没有办法拿到 "),a("code",[s._v("$route")]),s._v("(比如在一个插件中), 但是可以想办法拿到 "),a("code",[s._v("$router")]),s._v(", 只要拿到了 "),a("code",[s._v("$router")]),s._v(", 就可以通过 currentRoute 获取当前的路由规则")])]),s._v(" "),a("h3",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("p",[s._v("初始化时, 传入router对象, 最主要的事情, 就是为 vue 实例添加 "),a("code",[s._v("$route")]),s._v(" 和 "),a("code",[s._v("$router")])]),s._v(" "),a("p",[s._v("当然, 这个router的导出文件中, 必须包含 "),a("code",[s._v("Vue.use(VueRouter)")]),s._v(", 这个, 才是关键")]),s._v(" "),a("h2",{attrs:{id:"动态路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态路由"}},[s._v("#")]),s._v(" 动态路由")]),s._v(" "),a("h3",{attrs:{id:"路由懒加载-动态导入路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由懒加载-动态导入路由"}},[s._v("#")]),s._v(" 路由懒加载(动态导入路由)")]),s._v(" "),a("p",[s._v("当路由加载时, 再加载组件, 提高首屏速度, 如下:")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/photo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Photo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("component")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/* webpackChunkName: "photo"  */')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../views/Photo.vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("主要就是利用 ES Module的动态导入, 提高首屏速度")]),s._v(" "),a("h3",{attrs:{id:"props-接收路由参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#props-接收路由参数"}},[s._v("#")]),s._v(" props 接收路由参数")]),s._v(" "),a("p",[s._v("在传递 params的时候, 组件有两种接收params的方式")]),s._v(" "),a("ul",[a("li",[s._v("this.$router.params")]),s._v(" "),a("li",[a("code",[s._v("this['paramsName']")])])]),s._v(" "),a("p",[s._v("第二种方式需要在路由规则处, 添加"),a("code",[s._v("props: true")]),s._v(", 表示使用 props 接收路由参数")]),s._v(" "),a("p",[s._v("同时, 还需要在组件内部注册props")]),s._v(" "),a("p",[s._v("并且params传参, 依赖路由的name, 而不是路由的path")]),s._v(" "),a("h4",{attrs:{id:"因此-推荐使用-query-传参"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#因此-推荐使用-query-传参"}},[s._v("#")]),s._v(" 因此, 推荐使用 query 传参")]),s._v(" "),a("p",[s._v("接收方式为 "),a("code",[s._v("this.$router.query")]),s._v(", 参数以"),a("code",[s._v("?")]),s._v("开头拼接到路由路径后")]),s._v(" "),a("h3",{attrs:{id:"嵌套路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#嵌套路由"}},[s._v("#")]),s._v(" 嵌套路由")]),s._v(" "),a("p",[s._v("提取相同部分抽离成一个公共组件, 放在需要复用的页面中, 在需要变化的地方使用"),a("code",[s._v("router-view")]),s._v("埋坑")]),s._v(" "),a("h4",{attrs:{id:"嵌套路由的路由规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#嵌套路由的路由规则"}},[s._v("#")]),s._v(" 嵌套路由的路由规则")]),s._v(" "),a("p",[s._v("首先需要配置一个根路径, 将公共组件放在根路由下做跟路由的组件使用, 配置跟路由的"),a("code",[s._v("children")]),s._v("项, 然后和设置普通路由一样, 配置"),a("code",[s._v("name")]),s._v(", "),a("code",[s._v("path")]),s._v(", "),a("code",[s._v("component")]),s._v("等就可以了")]),s._v(" "),a("p",[s._v("嵌套路由会将子路由的path与跟路由的path进行合并, 使用的编程式导航时, 需要使用合并后的路由路径进行跳转(当然, 子路由配置时也可以使用绝对路径)")]),s._v(" "),a("p",[s._v("而子路由的组件会渲染到父级(根)路由组件的"),a("code",[s._v("router-view")]),s._v("中")]),s._v(" "),a("h3",{attrs:{id:"编程式导航"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编程式导航"}},[s._v("#")]),s._v(" 编程式导航")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("this.$router.push()")])])]),s._v(" "),a("ul",[a("li",[s._v("方式有两种:\n"),a("ul",[a("li",[a("ol",[a("li",[s._v("直接传入path字符串")])])]),s._v(" "),a("li",[a("ol",{attrs:{start:"2"}},[a("li",[s._v("使用对象(对象中可以设置name, path, params, query等)")])])])])])]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("code",[s._v("this.$router.replace()")]),s._v(" "),a("ul",[a("li",[s._v("使用上和"),a("code",[s._v("push")]),s._v("方法一致")]),s._v(" "),a("li",[s._v("但是"),a("code",[s._v("replace")]),s._v("方法不会记录本次历史记录, 而是将当前历史记录改变成本次的历史记录")])])]),s._v(" "),a("li",[a("code",[s._v("this.$router.go")]),s._v(" "),a("ul",[a("li",[s._v("go可以快速访问历史中的某一次")]),s._v(" "),a("li",[a("code",[s._v("go(-1)")]),s._v("和"),a("code",[s._v("back")]),s._v("是一致的(若是记录栈被清除, 则无法跳转)")])])]),s._v(" "),a("li",[a("code",[s._v("this.$router.back")]),s._v(" "),a("ul",[a("li",[s._v("和第三条描述一致")])])])]),s._v(" "),a("h3",{attrs:{id:"hash模式和history模式的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hash模式和history模式的区别"}},[s._v("#")]),s._v(" "),a("code",[s._v("Hash模式")]),s._v("和"),a("code",[s._v("History模式")]),s._v("的区别")]),s._v(" "),a("blockquote",[a("p",[s._v("注: 无论是哪一种路由模式, 都是"),a("code",[s._v("客户端路由")]),s._v("的实现方式")]),s._v(" "),a("p",[s._v("路径发生变化后, 不会像服务器发送请求, 而是使用js监听路径的变化, 根据不同的地址渲染不同的内容")]),s._v(" "),a("p",[s._v("如果需要服务器内容, 会发送ajax请求来获取相关的内容")])]),s._v(" "),a("h4",{attrs:{id:"表现形式的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表现形式的区别"}},[s._v("#")]),s._v(" 表现形式的区别")]),s._v(" "),a("ul",[a("li",[s._v("Hash 模式\n"),a("ul",[a("li",[s._v("带有 "),a("code",[s._v("#")]),s._v(", 以其后的内容作为路由地址, 以"),a("code",[s._v("?")]),s._v("开头, "),a("code",[s._v("&")]),s._v("为分隔, 作为url参数拼接")]),s._v(" "),a("li",[s._v("官方文档上说这种模式很丑, 路径中带着一些和url无关的符号, 比如"),a("code",[s._v("#")])])])]),s._v(" "),a("li",[s._v("History 模式\n"),a("ul",[a("li",[s._v("History模式就是一串正常的url, 如果要用好History模式, 还需要服务端配置支持")])])])]),s._v(" "),a("h4",{attrs:{id:"原理的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理的区别"}},[s._v("#")]),s._v(" 原理的区别")]),s._v(" "),a("ul",[a("li",[s._v("Hash 模式是基于锚点, 以及 onhashchange 事件, 通过锚点的值作为路由地址, 当地址发生变化后, 触发 onhashchange事件, 处理不同的页面内容")]),s._v(" "),a("li",[s._v("History 模式, 基于 HTML5 中的 History API\n"),a("ul",[a("li",[s._v("history.pushState() 方法 (IE10 以后才支持)")]),s._v(" "),a("li",[s._v("history.replaceState() 方法")])])])]),s._v(" "),a("p",[s._v("pushState 和 push方法的区别:")]),s._v(" "),a("ul",[a("li",[s._v("push 方法, 调用时, 路径会发生变化, 此时要向服务器发送请求")]),s._v(" "),a("li",[s._v("pushState 方法, 不会向服务器发送请求, 只会记录路径改变后的地址, 并且保留进历史记录栈中, 所以通过 "),a("code",[s._v("pushState")]),s._v("可以实现"),a("code",[s._v("客户端路由")])]),s._v(" "),a("li",[s._v("但是 pushState 有兼容性问题, 如果要兼容IE9以前的浏览器, 需要使用 hash模式")])]),s._v(" "),a("h3",{attrs:{id:"history模式使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#history模式使用"}},[s._v("#")]),s._v(" History模式使用")]),s._v(" "),a("ul",[a("li",[s._v("History需要服务器的支持\n"),a("ul",[a("li",[s._v("单页应用中, 服务端不存在, 服务端不存在 http://www.testurl.com/login 这样的地址, 也就会返回找不到该页面")]),s._v(" "),a("li",[s._v("一般来说直接打开单页应用没有这样的问题, 但如果我们刷新浏览器, 客户端会向服务器发送请求, 去请求/login这个页面, 而服务器上并不存在该页面, 那么就会返回404")]),s._v(" "),a("li",[s._v("所以在服务器端, 应该除了静态资源外的所有路径都返回单页应用的 index.html")])])])]),s._v(" "),a("h4",{attrs:{id:"配置history模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置history模式"}},[s._v("#")]),s._v(" 配置history模式")]),s._v(" "),a("p",[s._v("只需要在实例化router时, 添加一个"),a("code",[s._v("mode: 'history'")]),s._v("的选项就可以, 因为vue-router默认的路由模式是 hash 模式, 因此这里需要手动修改mode")]),s._v(" "),a("blockquote",[a("p",[s._v("注: vue-cli 自带的 web服务器 中, 本身就有对 history 模式的支持, 所以无法演示执行所出的问题, 这个问题需要在node服务器 或者 nginx服务器上部署静态页面")])]),s._v(" "),a("p",[s._v("配置好之后, 刷新一次浏览器, 会发现浏览器会向服务器发送请求, 去请求当前url对应的页面, 如果服务器上不存在, 则会返回404, vue-cli启动的vue项目, 之所以不存在, 就是因为本身就已经将除了静态资源之外的所有资源都已经重定向到了index.html上, 因此不会产生问题")]),s._v(" "),a("h3",{attrs:{id:"node-js服务器配置-history模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-js服务器配置-history模式"}},[s._v("#")]),s._v(" Node.js服务器配置 History模式")]),s._v(" "),a("p",[s._v("快速启动一个node.js服务器")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" path "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"path"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 导入处理 history 模式的模板")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" history "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'connect-history-api-fallback'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 导入 express")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" express "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"express"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" app "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("express")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 注册处理 history 模式的中间件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// app.use(history());")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 处理静态资源的中间件, 网站根目录 ../web")]),s._v("\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("express"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("static")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../web'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 开启服务器, 端口是3000")]),s._v("\n\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'服务器开启, 端口: 30000'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("p",[s._v("同时在router规则配置中新增一条:")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'404'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("component")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'404组件所在路径'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("这个时候, 当访问不存在的路由时, 就会展示404组件的内容")]),s._v(" "),a("h4",{attrs:{id:"刷新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#刷新"}},[s._v("#")]),s._v(" 刷新")]),s._v(" "),a("p",[s._v("但是, 此时的nodejs服务器, 并没有解决刷新的问题, 一旦刷新, 就会出现 "),a("code",[s._v("Connot GET/about")]),s._v(" 这样的错误内容(这是默认的404页面)")]),s._v(" "),a("p",[s._v("是因为 history模式下, 刷新时会向服务器发送一个Get请求, url就是当前路径的url")]),s._v(" "),a("p",[s._v("而当前NodeJs服务器, 没有对History模式的支持")]),s._v(" "),a("p",[s._v("其实只需要打开上面的那一条注释即可, 增加一个 history的中间件")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("history")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"工作方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工作方式"}},[s._v("#")]),s._v(" 工作方式")]),s._v(" "),a("p",[s._v("刷新后, 会向服务器发送一个当前路径的get请求, 服务器收到请求后, 会判断请求的页面, 如果服务器上没有, 会将默认的index页面返回给浏览器, 而浏览器在接收到页面后, 会根据当前的路由去判断需要当前的路由地址, 从而根据路由地址, 去决定需要渲染的组件")]),s._v(" "),a("h3",{attrs:{id:"nginx服务器中配置-history模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx服务器中配置-history模式"}},[s._v("#")]),s._v(" Nginx服务器中配置 History模式")]),s._v(" "),a("h4",{attrs:{id:"nginx服务器配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx服务器配置"}},[s._v("#")]),s._v(" Nginx服务器配置")]),s._v(" "),a("ul",[a("li",[s._v("从官网下载nginx的压缩包")]),s._v(" "),a("li",[s._v("把压缩包解压出来")]),s._v(" "),a("li",[s._v("使用命令行工具进行配置")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动")]),s._v("\nstart nginx\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启")]),s._v("\nnginx -s reload\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止")]),s._v("\nnginx -s stop\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("ul",[a("li",[s._v("修改配置文件 "),a("code",[s._v("vim /usr/local/etc/nginx/nginx.conf")])])]),s._v(" "),a("div",{staticClass:"language-conf line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("server {\n        listen       8888;\n        server_name  localhost;\n\n        #charset koi8-r;\n\n        #access_log  logs/host.access.log  main;\n\n        # 此处配置的是入口文件和静态资源路径\n        # 默认路径就是 /usr/local/var/www\n        location / {\n            root   html;\n            index  index.html index.htm;\n        }\n        error_page   500 502 503 504  /50x.html;\n        location = /50x.html {\n            root   html;\n        }\n    }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("ul",[a("li",[s._v("替换/usr/local/var/www 下的 index.html文件, 将打包后的文件复制进去")])]),s._v(" "),a("h4",{attrs:{id:"测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[s._v("#")]),s._v(" 测试")]),s._v(" "),a("p",[s._v("启动Nginx后, 访问localhost:8888, 会进入刚才的页面中, 但是刷新后, 就会产nginx的404报错, 要解决这个问题, 需要修改一下配置文件")]),s._v(" "),a("div",{staticClass:"language-conf line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("location / {\n  # 表示默认访问的资源\n  root   html;\n  index  index.html index.htm;\n  # 尝试访问的文件, 主要是配置history模式\n  # $uri表示当前请求的路径, 会去找这个路径对应的文件, 如果找到了, 会将这个路径返回(也就是$uri/), 如果没有找到, 会接着往后找\n  # 这里表示如果请求路径不存在, 则直接返回单页应用的首页(也就是/index.html), 然后首页会根据当前url的路由规则去匹配需要加载的路由组件\n  try_files $uri $uri/ /index.html;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("修改后重启nginx, 发现已经可以支持history模式了")])])}),[],!1,null,null,null);t.default=e.exports}}]);