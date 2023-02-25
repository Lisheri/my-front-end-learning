(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{671:function(s,t,a){"use strict";a.r(t);var r=a(5),e=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"自动化构建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动化构建"}},[s._v("#")]),s._v(" 自动化构建")]),s._v(" "),a("h2",{attrs:{id:"自动化构建工作流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动化构建工作流"}},[s._v("#")]),s._v(" 自动化构建工作流")]),s._v(" "),a("p",[s._v("脱离运行环境兼容带来的问题, 在开发阶段使用提高效率的语法、规范和标准")]),s._v(" "),a("p",[s._v("最典型的工作常见是开发web应用时:")]),s._v(" "),a("ul",[a("li",[s._v("使用ECMAScript Next 提高效率")]),s._v(" "),a("li",[s._v("Scss增强css")]),s._v(" "),a("li",[s._v("使用模板引擎")])]),s._v(" "),a("p",[s._v("直接使用的情况下, 浏览器是没办法直接识别的")]),s._v(" "),a("p",[s._v("通过自动化构建的的工具, 将那些不被支持的特性, 转换成能够识别的代码")]),s._v(" "),a("h2",{attrs:{id:"体验一波"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#体验一波"}},[s._v("#")]),s._v(" 体验一波")]),s._v(" "),a("p",[s._v("比如要使用scss提高css可编程性, 这就需要在构建阶段, 通过工具将scss构建为css")]),s._v(" "),a("p",[s._v("此处需要使用scss官方提供的一个scss模块: "),a("code",[s._v("yarn add scss --dev")])]),s._v(" "),a("p",[s._v("之后就可以使用scss去构建scss文件, 但是这样来说就会重复的去使用这些命令, 极其麻烦")]),s._v(" "),a("h3",{attrs:{id:"使用npm-scripts去包装使用的命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用npm-scripts去包装使用的命令"}},[s._v("#")]),s._v(" 使用npm scripts去包装使用的命令")]),s._v(" "),a("p",[s._v("具体来说就是在package.json中添加一个scripts字段, 是一个对象, 下面的键名就是使用的命令名字, 内容就是目标命令内容")]),s._v(" "),a("p",[s._v("同时 npm scripts也是实现自动化构建最简单的方式")]),s._v(" "),a("p",[s._v("\b可以使用一个叫做 browser-sync的模块去快速搞一个开发服务器测试命令")]),s._v(" "),a("p",[s._v("但是这样并没有一个样式可以搞, 所以可以在serve命令执行前, 利用scripts的钩子机制搞一个preserve, 他会自动在serve执行前执行")]),s._v(" "),a("p",[s._v("同时可以在build中添加一个 --watch, 可以监听文件的改变, 然后自动重新执行build命令, 但是这样会卡在这里, 这个时候需要一个"),a("code",[s._v("npm-run-all")]),s._v(", 通过内部的"),a("code",[s._v("run-p build serve")])]),s._v(" "),a("p",[s._v("browser-sync 下可以添加一个--files的命令, 可以监听后面设置的修改文件, 当文件发生变化后, 自动同步到浏览器中: "),a("code",[s._v('browser-sync . --files \\"css/*.css"\\"')]),s._v(", 避免了手动刷新浏览器的工作。")]),s._v(" "),a("p",[s._v("命令配置如下:")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scss scss/main.scss css/style.css --watch"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"serve"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"browser-sync . --files \\"css/*.css\\""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"start"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"run-p build serve"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"常用的自动化构建工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用的自动化构建工具"}},[s._v("#")]),s._v(" 常用的自动化构建工具")]),s._v(" "),a("ul",[a("li",[s._v("Grunt: 插件生态非常完善, 基于临时文件实现, 构建速度较慢, 每一步都有磁盘读写操作, 处理环节越多, 文件读写次数越多")]),s._v(" "),a("li",[s._v("Gulp: 很好的解决了上述构建速度慢的问题, 基于内存构建, 相比于磁盘读写, 速度快了很多, 默认支持同时处理多个任务, 使用方式简单, 插件生态完善")]),s._v(" "),a("li",[s._v("FIS: 更像是捆绑套餐, 将需求尽可能继承在内部, 可以轻松处理资源加载,  模块化开发和代码部署, 甚至性能优化, 大而全。")])]),s._v(" "),a("p",[s._v("上面两个更灵活, 下面的更全面, 也重。")])])}),[],!1,null,null,null);t.default=e.exports}}]);