(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{679:function(s,t,a){"use strict";a.r(t);var n=a(5),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"vue-js-的入口文件-上"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-js-的入口文件-上"}},[s._v("#")]),s._v(" Vue.js 的入口文件(上)")]),s._v(" "),a("h2",{attrs:{id:"源码目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#源码目录结构"}},[s._v("#")]),s._v(" 源码目录结构")]),s._v(" "),a("blockquote",[a("p",[s._v("src/compiler 编译相关(将模板转换为 render 函数)")]),s._v(" "),a("p",[s._v("src/core Vue 核心库")]),s._v(" "),a("p",[s._v("src/platforms 平台相关代码")]),s._v(" "),a("p",[s._v("src/server SSR 相关")]),s._v(" "),a("p",[s._v("src/sfc (单文件组件 sfc).vue 文件编译为 js 对象")]),s._v(" "),a("p",[s._v("src/shared 公共代码库")])]),s._v(" "),a("h2",{attrs:{id:"调试设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调试设置"}},[s._v("#")]),s._v(" 调试设置")]),s._v(" "),a("h3",{attrs:{id:"打包工具-rollup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打包工具-rollup"}},[s._v("#")]),s._v(" 打包工具 ———— rollup")]),s._v(" "),a("ul",[a("li",[s._v("Vue.js 源码打包工具使用的是 Rollup, 相比 webpack 更轻量")]),s._v(" "),a("li",[s._v("webpack 将所有文件当做模块, Rollup 仅处理 js 文件, 更适合在 js 库中打包使用")]),s._v(" "),a("li",[s._v("Rollup 打包不会生成冗余代码")]),s._v(" "),a("li",[s._v("-w 表示 watch, 监听代码变化")]),s._v(" "),a("li",[s._v("-c 表示设置打包文件")]),s._v(" "),a("li",[s._v("TARGET 表示设置环境变量")])]),s._v(" "),a("h3",{attrs:{id:"使用-example-下的内容进行调试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-example-下的内容进行调试"}},[s._v("#")]),s._v(" 使用 example 下的内容进行调试")]),s._v(" "),a("p",[s._v("可以使用"),a("code",[s._v("http-server")]),s._v("这个包开启本地开发服务器, 同时在运行 dev 命令时, 扩展一个"),a("code",[s._v("--sourcemap")]),s._v("来开启 sourceMap, 以便于直接定位到源码而非打包后的"),a("code",[s._v("vue.js")]),s._v("中")]),s._v(" "),a("h3",{attrs:{id:"不同构建版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不同构建版本"}},[s._v("#")]),s._v(" 不同构建版本")]),s._v(" "),a("p",[s._v("build 命令会打包所有版本的 vue")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th"),s._v(" "),a("th",[s._v("UMD")]),s._v(" "),a("th",[s._v("CommonJS")]),s._v(" "),a("th",[s._v("ES Module")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("带编译环境的开发版")]),s._v(" "),a("td",[s._v("vue.js")]),s._v(" "),a("td",[s._v("vue.common.js")]),s._v(" "),a("td",[s._v("vue.esm.js")])]),s._v(" "),a("tr",[a("td",[s._v("仅运行时的开发版")]),s._v(" "),a("td",[s._v("vue.runtime.js")]),s._v(" "),a("td",[s._v("vue.runtime.common.js")]),s._v(" "),a("td",[s._v("vue.runtime.esm.js")])]),s._v(" "),a("tr",[a("td",[s._v("带编译环节的生产版")]),s._v(" "),a("td",[s._v("vue.min.js")]),s._v(" "),a("td"),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[s._v("仅运行的生产版")]),s._v(" "),a("td",[s._v("vue.runtime.min.js")]),s._v(" "),a("td"),s._v(" "),a("td")])])]),s._v(" "),a("ul",[a("li",[s._v("完整版: 同时包含"),a("code",[s._v("编译器")]),s._v("和"),a("code",[s._v("运行时")]),s._v("的版本")]),s._v(" "),a("li",[s._v("编译器: 用于将模板转换为"),a("code",[s._v("render函数")]),s._v(", 体积大、效率低")]),s._v(" "),a("li",[s._v("运行时: 用于创建 Vue 实例、渲染并处理虚拟 DOM 等的代码, 体积小、效率高。基本上就是出去编译器的代码")]),s._v(" "),a("li",[s._v("UMD: UMD 版本通用的模块版本, 会支持多种模块方式。vue.js 默认文件就是运行时+编译器的 UMD 版本(可以在浏览器中运行的版本)")]),s._v(" "),a("li",[s._v("CommonJS: CommonJS 版本用来配合老的打包工具比如"),a("code",[s._v("Browserify")]),s._v("或者"),a("code",[s._v("webpack1.x")])]),s._v(" "),a("li",[s._v("ES Module: 从 2.6 开始 Vue 会提供两个 ESM 构建文件, 为现代打包工具提供支持\n"),a("ul",[a("li",[s._v('ESM 格式被设计为可以被静态分析, 所以打包工具可以利用这一点来进行"tree-shaking"并将用不到的代码排除出最终的包(webpack 中其实就写到了, tree-shaking 是只支持 ESM 的)')])])])]),s._v(" "),a("h3",{attrs:{id:"compiler-与-runtime-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compiler-与-runtime-的区别"}},[s._v("#")]),s._v(" compiler 与 runtime 的区别")]),s._v(" "),a("ol",[a("li",[s._v("runtime 版本不能直接运行 template, 需要预编译为 render 函数(这一过程实际上在项目构建中完成了), 或者直接使用 render 函数")]),s._v(" "),a("li",[s._v("runtime 版不会执行编译过程, 因此执行效率相比 compiler 版本高很多(正常项目最终都会使用 runtime 版本)")])]),s._v(" "),a("p",[s._v("在一个 vue-cli 初始化的项目中, 可以使用"),a("code",[s._v("vue inspect")]),s._v("来查看当前项目的 webpack 配置, 但是这样是打印出来的, 不方便查看")]),s._v(" "),a("p",[s._v("可以使用 "),a("code",[s._v("vue inspect > output.js")]),s._v(" 将内容输出到"),a("code",[s._v("output.js")]),s._v("中")]),s._v(" "),a("p",[s._v("查看"),a("code",[s._v("resolve.alias.vue$")]),s._v("就可以知道当前项目运行的是哪一个版本, 同时这里也是将"),a("code",[s._v("import xxx from 'vue'")]),s._v("中这个 vue 所在的位置, 做了一个映射。")]),s._v(" "),a("h3",{attrs:{id:"现代-vue-项目基本上都是使用的vue-dist-vue-runtime-esm-js运行时版本。比起-compiler-版来说-他的效率更高-体积更小-适合生产使用。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#现代-vue-项目基本上都是使用的vue-dist-vue-runtime-esm-js运行时版本。比起-compiler-版来说-他的效率更高-体积更小-适合生产使用。"}},[s._v("#")]),s._v(" 现代 vue 项目基本上都是使用的"),a("code",[s._v("vue/dist/vue.runtime.esm.js")]),s._v("运行时版本。比起 compiler 版来说, 他的效率更高, 体积更小, 适合生产使用。")]),s._v(" "),a("h2",{attrs:{id:"从vue-js构建寻找入口文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从vue-js构建寻找入口文件"}},[s._v("#")]),s._v(" 从vue.js构建寻找入口文件")]),s._v(" "),a("p",[s._v("由于 src 目录下的文件非常多, 因此要定义 vue 的入口文件, 需要查看"),a("code",[s._v("dist/vue.js")]),s._v("的构建过程, 来找入口文件")]),s._v(" "),a("h3",{attrs:{id:"执行构建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行构建"}},[s._v("#")]),s._v(" 执行构建")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行该命令来构建vue.js")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" dev\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# dev命令")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rollup -w -c scripts/config.js --sourcemap --environment TARGET:web-full-dev"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置环境变量TARGET")]),s._v("\n--environment TARGET:web-full-dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("这里可以看出, 整个打包的过程, 都是从"),a("code",[s._v("scripts/config.js")]),s._v("开始的")]),s._v(" "),a("p",[s._v("config.js:")]),s._v(" "),a("ul",[a("li",[s._v("作用: 生成 rollup 构建的配置文件")]),s._v(" "),a("li",[s._v("使用环境变量 TARGET = 'web-full-dev'")])]),s._v(" "),a("h4",{attrs:{id:"核心代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心代码"}},[s._v("#")]),s._v(" 核心代码")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// * 判断是否可以获取到node环境配置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TARGET")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("genConfig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TARGET")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    exports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("getBuild "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" genConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// * 将所有的builds进行转换成rollup所需要的配置数组，然后添加到一个getAllBuilds的这样一个get方法下面去")]),s._v("\n    exports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("getAllBuilds")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("keys")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("builds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("genConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// * 定义成一个新的rollup打包对象，比如说input才是rollup需要的格式")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// * 这里就是rollup最终需要的打包配置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("genConfig")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这里的builds就是一系列的配置, 下面包含了各个版本的特定配置")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" opts "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" builds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    input"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" opts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("entry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 入口")]),s._v("\n    external"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" opts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("external"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用的插件")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("flow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("alias")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("assign")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" aliases"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" opts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("alias"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("concat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("opts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("plugins "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    output"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" opts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 生成文件")]),s._v("\n      format"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" opts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("format"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 打包的模块类型")]),s._v("\n      banner"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" opts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("banner"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 头部注释")]),s._v("\n      name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" opts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("moduleName "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Vue'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 模块名称")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("onwarn")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" warn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("Circular")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("warn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" config\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// aliases提供了一个键名到他真实文件路径的一个映射关系，通过简单的key值去获取")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" aliases "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./alias'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("resolve")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// * 通过一个参数，使用斜线分割，拿到第一个值，也就是区分是web、dist、packages、weex还是server, 然后通过aliases去映射到真正的路径下")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" base "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("split")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// * 如果直接在aliases里面有映射关系，则在目标所在的文件路径下去寻找第一个 / 后续的文件")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// * 若没有，则直接去外层目录下直接去寻找")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("aliases"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("base"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 生成绝对路径")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("aliases"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("base"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("slice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("base"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 拿不到直接使用根路径")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br")])]),a("h4",{attrs:{id:"实现过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现过程"}},[s._v("#")]),s._v(" 实现过程")]),s._v(" "),a("ol",[a("li",[s._v("首先判断 env 中是否存在"),a("code",[s._v("TARGET")]),s._v("这个成员(这个肯定有的, 通过"),a("code",[s._v("--environment")]),s._v("传入的)")]),s._v(" "),a("li",[s._v("如果存在, 也就是现在的情况, 会执行"),a("code",[s._v("genConfig")]),s._v(", 也就是生成配置对象的函数")]),s._v(" "),a("li",[s._v("如果不存在, 全部打包")]),s._v(" "),a("li",[s._v("执行 genConfig 这个方法, 入参就是 TARGET 对应的值, 打包开发版本时使用的就是"),a("code",[s._v("web-full-dev")]),s._v("这个配置")]),s._v(" "),a("li",[s._v("通过"),a("code",[s._v("builds[TARGET]")]),s._v("去寻找特定的配置, 也就是打包时使用的一些基础信息, 如下所示")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'web-full-dev'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  entry"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'web/entry-runtime-with-compiler.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 入口")]),s._v("\n  dest"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dist/vue.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 打包目标文件")]),s._v("\n  format"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'umd'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 模块化方式")]),s._v("\n  env"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'development'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 开发或生产模式")]),s._v("\n  alias"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" he"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./entity-decoder'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ")]),s._v("\n  banner "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 需要生成的文件头, 也就是Vue.js最顶上那一部分注释")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("ol",{attrs:{start:"6"}},[a("li",[s._v("上面的resolve中使用的路径, 并非是最外层的路径, 内部实现了一个路径的映射, 生成绝对路径以提供使用")]),s._v(" "),a("li",[s._v("拿到配置后组合出config, 处理后返回得到最终使用的打包配置")])])])}),[],!1,null,null,null);t.default=e.exports}}]);