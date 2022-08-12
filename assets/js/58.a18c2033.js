(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{605:function(s,t,a){"use strict";a.r(t);var n=a(5),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"模块热更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块热更新"}},[s._v("#")]),s._v(" 模块热更新")]),s._v(" "),a("h2",{attrs:{id:"自动刷新问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动刷新问题"}},[s._v("#")]),s._v(" 自动刷新问题")]),s._v(" "),a("p",[s._v("在此之前, 我们简单了解了webpack dev server简单的用法和基础的特性, 主要就是")]),s._v(" "),a("blockquote",[a("p",[s._v("提供对开发者友好的开发服务器")])]),s._v(" "),a("p",[s._v("他可以让我们专注于编码, 因为他可以监视到代码的变化, 自动进行打包, 并且同步刷新到浏览器中")]),s._v(" "),a("p",[s._v("但实际上使用这些特性进行开发的时候, 会发现还是会有一些不舒服的地方")]),s._v(" "),a("p",[s._v("比如有一个编写文本的样例, 我有一些测试文本, 但是当我修改完代码后, 就会发现, 我添加的测试文本, 在他重新同步后, 就消失了。这样就不得不再来一把")]),s._v(" "),a("p",[s._v("久而久之, 就会觉得自动刷新并非那么好用")]),s._v(" "),a("p",[s._v("但是也有一些小办法, 比如在代码中先写死编辑器的内容, 这样即便刷新也不会丢失")]),s._v(" "),a("p",[s._v("又或者说先保存起来, 刷新了再取回来")]),s._v(" "),a("p",[s._v("但是这些都不是根治, 而是以动治动")]),s._v(" "),a("ul",[a("li",[s._v("这个问题的核心在于: "),a("code",[s._v("自动刷新导致页面状态丢失")])])]),s._v(" "),a("p",[s._v("更好地办法在于页面不刷新的前提下, 模块也可以及时更新")]),s._v(" "),a("h2",{attrs:{id:"hmr模块简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hmr模块简介"}},[s._v("#")]),s._v(" HMR模块简介")]),s._v(" "),a("p",[a("code",[s._v("HMR")]),s._v("模块也就是我们常说的热更新模块(模块热替换), 全称是"),a("code",[s._v("Hot Module Replacement")])]),s._v(" "),a("p",[s._v("经常会听到一个叫做模块"),a("code",[s._v("热拔插")]),s._v("的名词, 在一个正在运行的机器上随时插拔设备, 并且极其不会受到设备拔插影响, 热替换, 就和这个是一个道理, 就是及时替换, 又不影响主要逻辑运行")]),s._v(" "),a("p",[s._v("要求就是在应用运行过程中实时替换某个模块, 应用运行状态不会受到影响")]),s._v(" "),a("p",[s._v("上面的应用整体刷新, 导致状态丢失, 就不属于热替换")]),s._v(" "),a("blockquote",[a("p",[s._v("热替换: 只将修改的模块实时替换到应用中")]),s._v(" "),a("p",[s._v("HMR是Webpack中最强大的功能之一, 同时也是最受欢迎的特性")]),s._v(" "),a("p",[s._v("极大程度的提高了开发者的工作效率")])]),s._v(" "),a("h2",{attrs:{id:"开启hmr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开启hmr"}},[s._v("#")]),s._v(" 开启HMR")]),s._v(" "),a("p",[s._v("对于热更新这种强大的功能而言, 他的使用并不算特别的复杂")]),s._v(" "),a("p",[a("code",[s._v("HMR")]),s._v("已经集成在了webpack-dev-server中, 不需要单独安装模块")]),s._v(" "),a("p",[s._v("方式:")]),s._v(" "),a("ul",[a("li",[s._v("可以在运行webpack-dev-server时, 通过"),a("code",[s._v("--hot")]),s._v("开启这个特性")]),s._v(" "),a("li",[s._v("可以通过配置文件, 并且配置插件"),a("code",[s._v("HotModuleReplacementPlugin")]),s._v("开启, 如下所示"),a("div",{staticClass:"language-javaScript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" webpack "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'webpack'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n        devServer"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            hot"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 除此之外, 还需要载入一个插件, 这个插件是webpack一个内置的模块, 叫做HotModuleReplacementPlugin")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("webpack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("HotModuleReplacementPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])])])]),s._v(" "),a("h2",{attrs:{id:"疑问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#疑问"}},[s._v("#")]),s._v(" 疑问")]),s._v(" "),a("ul",[a("li",[s._v("这种方式会发现, 样式文件已经有热更新了, 但是js文件, 似乎还有问题")]),s._v(" "),a("li",[s._v("这主要是因为HMR并不像其他特性一样, 可以"),a("code",[s._v("开箱即用")])]),s._v(" "),a("li",[s._v("HMR还需要做额外的操作, 才能正常工作")]),s._v(" "),a("li",[s._v("他需要我们手动处理模块热替换逻辑")])]),s._v(" "),a("p",[s._v("但是肯定有疑问")]),s._v(" "),a("h3",{attrs:{id:"q1-为什么样式文件的热更新开箱即用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q1-为什么样式文件的热更新开箱即用"}},[s._v("#")]),s._v(" Q1. 为什么样式文件的热更新开箱即用?")]),s._v(" "),a("p",[s._v("主要是因为, 样式文件在style-loader中自动处理了模块的热更新")]),s._v(" "),a("h3",{attrs:{id:"q2-凭什么样式可以自动处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q2-凭什么样式可以自动处理"}},[s._v("#")]),s._v(" Q2. 凭什么样式可以自动处理?")]),s._v(" "),a("p",[s._v("原因就是, 样式模块更新后, 样式只需要覆盖原来的就可以了, 但是js模块没有任何规律, 导出成员和导出成员的使用, 各不相同, webpack不知道如何处理, 也就没有办法去给我们一个通用方案")]),s._v(" "),a("h3",{attrs:{id:"q3-我的项目没有手动处理-js照样可以热替换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q3-我的项目没有手动处理-js照样可以热替换"}},[s._v("#")]),s._v(" Q3. 我的项目没有手动处理, JS照样可以热替换?")]),s._v(" "),a("p",[s._v("主要还是框架的cli文件, 对框架依赖的js(.jsx, .vue, .tsx)等做了处理, 因为框架中的文件是有规律的")]),s._v(" "),a("p",[s._v("同时脚手架内部还集成了"),a("code",[s._v("HMR")]),s._v("方案")]),s._v(" "),a("h3",{attrs:{id:"因此-我们还需要手动处理js模块更新后所要做的事情"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#因此-我们还需要手动处理js模块更新后所要做的事情"}},[s._v("#")]),s._v(" 因此, 我们还需要手动处理JS模块更新后所要做的事情")]),s._v(" "),a("h2",{attrs:{id:"使用hmr-apis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用hmr-apis"}},[s._v("#")]),s._v(" 使用HMR APIs")]),s._v(" "),a("p",[a("code",[s._v("HotModuleReplacementPlugin")]),s._v("为js代码提供了一套处理hmr的api, 我们需要在自己的代码中去使用这些api, 来处理当某一个模块更新后, 应该如何体现到我们的页面当中")]),s._v(" "),a("p",[s._v("比如我的例子中, main.js是入口, 一旦当这里的模块被更新后, 就需要重新处理")]),s._v(" "),a("p",[s._v("在这一套api当中, 为"),a("code",[s._v("module")]),s._v("对象提供了一个"),a("code",[s._v("hot")]),s._v("属性, 这个属性也是一个对象, 他就是hmr API的核心对象, 它提供了一个"),a("code",[s._v("accept")]),s._v("方法, 用于注册模块更新过后的处理函数")]),s._v(" "),a("p",[a("code",[s._v("accept")]),s._v("方法有两个参数, 第一个接收的是"),a("code",[s._v("依赖模块的路径")]),s._v(", 第二个是"),a("code",[s._v("依赖路径更新后的处理函数")])]),s._v(" "),a("p",[s._v("如下:")]),s._v(" "),a("div",{staticClass:"language-javaScript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" createHeading "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./heading.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" url "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./favicons/github.png'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" heading "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("createHeading")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("append")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("heading"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" img "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nimg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("src "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("append")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./main.css'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("accept")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./heading'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"heading模块更新了, 需要手动处理热更新逻辑"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[s._v("然后就会发现, 此时如果修改"),a("code",[s._v("heading")]),s._v("文件浏览器已经可以打印这个消息了, 并且也不会自动刷新了")]),s._v(" "),a("p",[s._v("也就是说如果我们没有对模块做这样的处理, 浏览器就会全部自动的刷新, 而不是热替换, 进而导致页面刷新")]),s._v(" "),a("h2",{attrs:{id:"处理js模块热替换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#处理js模块热替换"}},[s._v("#")]),s._v(" 处理JS模块热替换")]),s._v(" "),a("p",[s._v("这个就是通过上述module.hot.accept()这个方式去编写对应的热替换规则, 这个不可通用")]),s._v(" "),a("p",[s._v("这也是为什么webpack不可能给出一个通用的替换方案")]),s._v(" "),a("h2",{attrs:{id:"图片模块热替换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图片模块热替换"}},[s._v("#")]),s._v(" 图片模块热替换")]),s._v(" "),a("p",[s._v("相比于js模块的热替换, 图片模块会简单很多")]),s._v(" "),a("div",{staticClass:"language-javaScript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("accept")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./favicons/github.png'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("src "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这里可以直接拿到最新的url, 做替换即可")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("其实看起来会多很多额外的代码, 但个人感觉还是利大于弊, 就像是写单元测试一样, 对于一个长期开发的项目, 这点额外的工作并不算什么, 并且可以为自己的项目, 提供通用的替换方案")]),s._v(" "),a("p",[s._v("当然, 用框架的话很简单, cli就提供了HMR方案")]),s._v(" "),a("h2",{attrs:{id:"hmr注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hmr注意事项"}},[s._v("#")]),s._v(" HMR注意事项")]),s._v(" "),a("ol",[a("li",[s._v("处理HMR的代码报错会导致自动刷新(有错误会不容易发现, 因为错误信息已经刷新被清除了)\n"),a("ul",[a("li",[s._v("针对这个问题, 使用"),a("code",[s._v("hotOnly: true")]),s._v(" 替换 "),a("code",[s._v("hot: true")])])])]),s._v(" "),a("li",[s._v("没启用HMR的情况下, HMR API报错\n"),a("ul",[a("li",[s._v("原因就是module.hot是"),a("code",[s._v("HotModuleReplacementPlugin")]),s._v("提供的")])])]),s._v(" "),a("li",[s._v("处理热替换的代码, 在生产上已经被移除了, 不会对生成产生任何影响(只会留下一个空判断, 并且压缩代码的时候这种无用判断会被移除)")])])])}),[],!1,null,null,null);t.default=e.exports}}]);