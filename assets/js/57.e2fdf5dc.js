(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{584:function(a,t,s){"use strict";s.r(t);var e=s(5),v=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"parcl-零配置的前端应用打包器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parcl-零配置的前端应用打包器"}},[a._v("#")]),a._v(" Parcl(零配置的前端应用打包器)")]),a._v(" "),s("p",[a._v("提供了近乎傻瓜式的使用体验, 只需要使用他提供的几个简单的命令, 就可以构建前端程序")]),a._v(" "),s("h2",{attrs:{id:"快速上手"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速上手"}},[a._v("#")]),a._v(" 快速上手")]),a._v(" "),s("p",[a._v("老规矩, 直接建一个新项目， 然后"),s("code",[a._v("yarn init")])]),a._v(" "),s("p",[a._v("然后需要安装parcel, parcel的模块叫做"),s("code",[a._v("parcel-bundler")])]),a._v(" "),s("p",[a._v("安装完过后, 在node_modules中的bin目录下就有了parcel的cli程序")]),a._v(" "),s("p",[a._v("我们需要一个打包入口, 虽然他什么文件都可以作为打包入口, 不过parcel的官方目录还是推荐我们使用html文件作为入口")]),a._v(" "),s("p",[a._v("官方给的理由是: "),s("code",[a._v("html是运行在浏览器端的入口, 所以应该使用html文件")])]),a._v(" "),s("p",[a._v("在html中引入的资源, 最终都会被parcel打包到一起, 最终放到输出目录中")]),a._v(" "),s("p",[a._v("同时他也支持"),s("code",[a._v("ES Module")])]),a._v(" "),s("p",[a._v("执行命令"),s("code",[a._v("yarn parcel src/index.html")])]),a._v(" "),s("p",[a._v("就会发现, 它不仅仅打包了应用, 还开启了开发服务器, 并且自己打开了"),s("code",[a._v("Source Map")])]),a._v(" "),s("p",[a._v("这个开发服务器, 还支持自动刷新")]),a._v(" "),s("h2",{attrs:{id:"模块热替换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模块热替换"}},[a._v("#")]),a._v(" 模块热替换")]),a._v(" "),s("p",[a._v("如果需要模块热更新(替换), 他同样支持, 需要判断是否存在"),s("code",[a._v("module.hot")])]),a._v(" "),s("div",{staticClass:"language-javaScript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("hot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("hot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("accept")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 这里就可以处理模块热替换的逻辑了")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("p",[a._v("这里的accept和webpack中的有一点不同, webpack提供了两个参数(模块路径, 处理回调函数), 用于去处理指定模块更新后的逻辑, 但是parcel提供的函数, 只提供了一个参数, 用于处理当当前模块更新或者当前模块所依赖的模块更新过后, 他会自动执行")]),a._v(" "),s("h2",{attrs:{id:"自动安装依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动安装依赖"}},[a._v("#")]),a._v(" 自动安装依赖")]),a._v(" "),s("p",[a._v("除了热替换, 他还支持自动安装依赖, 比如正在开发过程中, 如果你需要第三方依赖, 那么就要先停止, 然后安装， 在启动")]),a._v(" "),s("p",[a._v("但是他可以自动安装依赖")]),a._v(" "),s("p",[a._v("只需要自动导入就可以了, 然后在正常使用, 然后他重新打包后, 就会自动下载依赖")]),a._v(" "),s("h2",{attrs:{id:"加载其他类型资源模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加载其他类型资源模块"}},[a._v("#")]),a._v(" 加载其他类型资源模块")]),a._v(" "),s("p",[a._v("在parcel中加载任意类型的模块, 都是零配置的, 比如"),s("code",[a._v("css文件, 图片等")])]),a._v(" "),s("p",[a._v("直接用就可以了, 不需要停下来做任何事情")]),a._v(" "),s("h2",{attrs:{id:"拆分代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拆分代码"}},[a._v("#")]),a._v(" 拆分代码")]),a._v(" "),s("p",[a._v("parcel给开发者的体验, 就是你想做什么, 就去做")]),a._v(" "),s("p",[a._v("同时他也支持动态导入, 并且同样会自动拆分代码")]),a._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),s("p",[a._v("使用上没有任何难度， 从命令开启后, 所有的一切， parcel都帮我们完成了")]),a._v(" "),s("p",[a._v("生产打包只需要这样: "),s("code",[a._v("yarn parcel build src/index.html")]),a._v("就可以生产打包了")]),a._v(" "),s("p",[a._v("对于相同体量的项目打包, 他比webpack快很多, 因为它内部自动使用的是多进程同时工作, 充分发挥了多核cpu性能")]),a._v(" "),s("p",[a._v("当然webpack中可以使用一个叫做"),s("code",[a._v("happypack")]),a._v("的工具开启多进程打包")]),a._v(" "),s("h2",{attrs:{id:"生产包文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生产包文件"}},[a._v("#")]),a._v(" 生产包文件")]),a._v(" "),s("p",[a._v("对于生产包的文件, 代码都会被压缩, 同时样式文件也都被单独提取出来了")]),a._v(" "),s("h2",{attrs:{id:"parcel体验总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parcel体验总结"}},[a._v("#")]),a._v(" parcel体验总结")]),a._v(" "),s("p",[a._v("整体体验的感觉————及其舒适，使用上真的太简单了")]),a._v(" "),s("p",[a._v("parcel中其实也有插件， 但是他自己给我们安装了，所以给人一种很爽的感觉")]),a._v(" "),s("p",[a._v("他是2017年发的， 主要就是webpack配置太过繁琐")]),a._v(" "),s("p",[a._v("核心特点："),s("code",[a._v("完全零配置, 构建速度快，对项目零侵入")])]),a._v(" "),s("h2",{attrs:{id:"但实际上目前大多数打包还是会使用webpack-有两点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#但实际上目前大多数打包还是会使用webpack-有两点"}},[a._v("#")]),a._v(" 但实际上目前大多数打包还是会使用webpack，有两点:")]),a._v(" "),s("ul",[s("li",[a._v("webpack生态好，扩展丰富")]),a._v(" "),s("li",[a._v("随着这几年的发展，也越来越好用, 同时越用越熟练")])]),a._v(" "),s("p",[a._v("了解parcel主要是为了扩展自己对技术的敏感度")])])}),[],!1,null,null,null);t.default=v.exports}}]);