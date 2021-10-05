(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{515:function(s,a,t){s.exports=t.p+"assets/img/eval.0de6db6c.png"},516:function(s,a,t){s.exports=t.p+"assets/img/evalSourceMap.2f67fb1f.png"},517:function(s,a,t){s.exports=t.p+"assets/img/evalCheapSourceMap.28f9b752.png"},518:function(s,a,t){s.exports=t.p+"assets/img/evalCheapModuleSourceMap.06ca1b08.png"},578:function(s,a,t){"use strict";t.r(a);var n=t(5),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"source-map"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#source-map"}},[s._v("#")]),s._v(" Source Map")]),s._v(" "),n("p",[s._v("通过构建编译之类的操作, 我们可以将开发阶段的原代码转换为能够在生产中运行的代码")]),s._v(" "),n("p",[s._v("当然, 这样也就造成了运行代码与源代码之前是完全不同的")]),s._v(" "),n("p",[s._v("如果需要调试应用, 或者是生产环境上出现错误无法定位(错误定位困难)")]),s._v(" "),n("p",[s._v("主要就是因为我们的"),n("code",[s._v("报错")]),s._v("和"),n("code",[s._v("调试")]),s._v("都是基于转换后的代码进行的")]),s._v(" "),n("p",[s._v("Source Map就是解决这类问题最好的办法, 这个名字翻译过来就很直接, 叫做"),n("code",[s._v("源代码地图")]),s._v(",  他的作用就是:")]),s._v(" "),n("p",[n("code",[s._v("映射源代码和转换后代码之间的一个关系")])]),s._v(" "),n("p",[s._v("一段转换后的代码, 通过转换过程中生成的Source Map文件就可以逆向得到源代码")]),s._v(" "),n("p",[s._v("目前很多第三方的库, 发布的文件中, 都有一个.map后缀的 Source Map文件, 内部记录的就是转换后的代码和源代码之间的映射关系")]),s._v(" "),n("p",[s._v("里面有几个属性:")]),s._v(" "),n("h2",{attrs:{id:"映射文件-map下的属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#映射文件-map下的属性"}},[s._v("#")]),s._v(" 映射文件.map下的属性")]),s._v(" "),n("h3",{attrs:{id:"version"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[s._v("#")]),s._v(" version")]),s._v(" "),n("p",[s._v("所使用的Source Map标准的版本")]),s._v(" "),n("h3",{attrs:{id:"sources"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sources"}},[s._v("#")]),s._v(" Sources")]),s._v(" "),n("p",[s._v("记录的是转换之前的源文件名称, 由于可能是多个文件, 转换成一个文件, 因此这个属性是一个数组")]),s._v(" "),n("h3",{attrs:{id:"names"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#names"}},[s._v("#")]),s._v(" names")]),s._v(" "),n("p",[s._v("指的是源代码中使用的一些成员名称")]),s._v(" "),n("p",[s._v("压缩代码时, 将开发阶段指定的有意义的变量名转换成简短的字符, 从而去压缩整体的体积, 这个属性中记录的就是原始对应的名称")]),s._v(" "),n("h3",{attrs:{id:"mappings"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mappings"}},[s._v("#")]),s._v(" mappings")]),s._v(" "),n("p",[s._v("这个就是整个Source Map的核心属性, 是一个Base64-VLQ编码的一个字符串, 记录的就是转换过后代码中的字符和源代码的映射关系")]),s._v(" "),n("p",[s._v("有了它过后, 我们就可以在转换后的代码中, 通过引入一行注释来引入Source Map这个文件")]),s._v(" "),n("h2",{attrs:{id:"sourcemap的意义"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sourcemap的意义"}},[s._v("#")]),s._v(" SourceMap的意义")]),s._v(" "),n("p",[s._v("它主要是为了调试错误的, 实际上对生产并没有太大的意义")]),s._v(" "),n("p",[s._v("通过添加注释的方式引入, 这个注释就是如下格式")]),s._v(" "),n("div",{staticClass:"language-javaScript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//# SourceMappingURL=xxx.map")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("只要浏览器加载的js文件最后有一行这个注释, 他就会自动的去请求这个SourceMap文件, 根据文件的内容, 逆向解析源代码, 便于调试")]),s._v(" "),n("p",[s._v("SourceMap作用如下:")]),s._v(" "),n("blockquote",[n("ul",[n("li",[s._v("如果出现了错误, 就很容易对应到源代码的位置了")]),s._v(" "),n("li",[s._v("可以断点调试源代码, 而不用去看生产代码了")]),s._v(" "),n("li",[s._v("解决了源代码与运行代码不一致产生的调试问题")])])]),s._v(" "),n("h2",{attrs:{id:"webpack配置-source-map"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#webpack配置-source-map"}},[s._v("#")]),s._v(" webpack配置 Source Map")]),s._v(" "),n("p",[s._v("webpack的打包过程同样支持为打包结果生成对应的Source Map文件, 用法上也非常简单, 提供了很多模式")]),s._v(" "),n("h3",{attrs:{id:"devtool"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#devtool"}},[s._v("#")]),s._v(" devtool")]),s._v(" "),n("p",[s._v("需要配置devtool, 这个属性就是配置开发过程中的辅助工具")]),s._v(" "),n("p",[s._v("可以直接将它设置为"),n("code",[s._v("source-map")])]),s._v(" "),n("p",[s._v("然后执行打包命令, 就会发现出现了一个bundle.js.map的文件, 并且在bundle.js最后引入了这个文件")]),s._v(" "),n("p",[s._v("当然, 这样简单的使用对实际效果还差的比较远, 截止到目前为止(webpack5.x), webpack支持26种不同的方式")]),s._v(" "),n("p",[s._v("每种方式生成的效果和速度都不一样(每种方式的效率和效果各不相同)")]),s._v(" "),n("p",[s._v("一般速度快的用处不是特别大, 要找一个适合的, 才是最重要的")]),s._v(" "),n("h3",{attrs:{id:"webpack的source-map下的各种模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#webpack的source-map下的各种模式"}},[s._v("#")]),s._v(" webpack的Source Map下的各种模式")]),s._v(" "),n("p",[s._v("在文档中有一个不同模式的对比表, 并且在"),n("code",[s._v("webpack5.x")]),s._v("只能按照这个表中devtool描述的顺序来设置devtool的值")]),s._v(" "),n("p",[s._v("这个表分别列出了"),n("code",[s._v("初次构建速度")]),s._v(", "),n("code",[s._v("更新后重新构建速度")]),s._v(", "),n("code",[s._v("是否能在生产中使用")]),s._v(", "),n("code",[s._v("质量")]),s._v("以及"),n("code",[s._v("webpack给出的评价")])]),s._v(" "),n("p",[s._v("去对比了他们的差异")]),s._v(" "),n("p",[s._v("当然, 其中的体验, 还是要自己去体悟才会明白个中区别")]),s._v(" "),n("h4",{attrs:{id:"eval模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#eval模式"}},[s._v("#")]),s._v(" eval模式")]),s._v(" "),n("p",[s._v("eval是js中的一个函数, 可以用来执行字符串的js代码, 这段代码会运行在一个临时的虚拟机环境中")]),s._v(" "),n("p",[s._v("可以通过sourceURL来声明这段代码, 就像是上面使用SourceMap的那段注释一样, 放在字符串的最后, 他就会运行在目标js文件中")]),s._v(" "),n("p",[s._v("比如")]),s._v(" "),n("div",{staticClass:"language-javaScript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("eval")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'console.info(123) // # sourceURL=./foo/bar.js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("这段代码运行位置就变成了"),n("code",[s._v("./foo.bar.js")])]),s._v(" "),n("p",[s._v("也就是说可以通过sourceURL改变运行的环境名称, 当然, 他还是运行在虚拟机中, 只是告诉了执行引擎这段js所属的路径, 只是个标识")]),s._v(" "),n("blockquote",[n("p",[s._v("!只是个标识!只是个标识!只是个标识")]),s._v(" "),n("p",[s._v("还是在虚拟机中")])]),s._v(" "),n("p",[s._v("接下来设置为eval, 执行打包操作, 发现打印的文件点击进去, 看到的是打包后的模块代码")]),s._v(" "),n("p",[s._v("因为"),n("code",[s._v("eval")]),s._v("模式并不会输出一个.map文件, 而是将所有的模块所转换出的代码都转换成了使用eval去执行, 并且在最后通过这种注释的方式去告诉浏览器这段代码所标识的路径在哪里")]),s._v(" "),n("p",[s._v("比如这样:")]),s._v(" "),n("div",{staticClass:"language-javaScript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 0 */")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("__unused_webpack_module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" __webpack_exports__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" __webpack_require__")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("eval")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"__webpack_require__.r(__webpack_exports__);\\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);\\n// import createHeading from './heading.js';\\n// // import conSomething from './testExport.js';\\n// import './main.css';\\n// import url from './github.png';\\n// const heading = createHeading();\\n// document.body.append(heading);\\n// const img = new Image();\\n// img.src = url;\\n// document.body.append(img);\\n// ! 部分loader加载的资源中一些方法也会触发资源模块加载\\n // import footerHtml from './footer.html';\\n// document.write(footerHtml);\\n\\n//# sourceURL=webpack://01/./src/main.js?\"")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("这第一个模块就是标识他在"),n("code",[s._v("./src/main.js")]),s._v("中")]),s._v(" "),n("p",[s._v("这样浏览器就知道这段代码所对应的源代码是哪个文件了, 从而去实现定位错误的文件")]),s._v(" "),n("blockquote",[n("p",[s._v("这种模式只能定位文件, 不能定位行列")]),s._v(" "),n("p",[s._v("他不会输出.map， 因此他的速度最快")])]),s._v(" "),n("h3",{attrs:{id:"不同devtool模式对比"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#不同devtool模式对比"}},[s._v("#")]),s._v(" 不同devtool模式对比")]),s._v(" "),n("h4",{attrs:{id:"第一步-输出文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第一步-输出文件"}},[s._v("#")]),s._v(" 第一步, 输出文件")]),s._v(" "),n("p",[s._v("webpack.config.js支持我们输出一个数组, 用于表示不同的配置, 因此可以一次编译这25种文件, 来做一次对比")]),s._v(" "),n("p",[s._v("webpack.config.js如下:")]),s._v(" "),n("div",{staticClass:"language-javaScript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" allModes "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'eval'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 'cheap-eval-source-map', // 这两个不能用了")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 'cheap-module-eval-source-map',")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'eval-source-map'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cheap-source-map'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cheap-module-source-map'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'inline-cheap-source-map'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'inline-cheap-module-source-map'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'source-map'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'inline-source-map'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hidden-source-map'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'nosources-source-map'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 往后版本新增")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'eval-nosources-cheap-source-map'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'eval-cheap-source-map'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'eval-cheap-module-source-map'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'eval-nosources-cheap-module-source-map'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'eval-nosources-source-map'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'inline-nosources-cheap-source-map'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'inline-nosources-cheap-module-source-map'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'inline-nosources-source-map'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'nosources-cheap-source-map'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'nosources-cheap-module-source-map'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hidden-nosources-cheap-source-map'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hidden-nosources-cheap-module-source-map'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hidden-nosources-source-map'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hidden-cheap-source-map'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hidden-cheap-module-source-map'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 数组中每一个成员就是devtool配置取值的一种")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" path "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"path"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" HtmlWebpackPlugin "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'html-webpack-plugin'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// * webpack的配置对象可以是一个数组, 数组中每一个元素就是一个单独的打包配置, 这样就可以在一次打包过程中, 同时执行多个打包任务")]),s._v("\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" allModes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("map")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("item")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        devtool"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),s._v("item"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        mode"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'none'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        entry"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./src/main.js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        output"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            filename"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("js/")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),s._v("item"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v(".js")]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        module"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            rules"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    test"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[n("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\.js$")]),n("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                    use"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                        loader"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"babel-loader"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                        options"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// * 主要为了辨别不同模式之间的差异")]),s._v("\n                            presets"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@babel/preset-env'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n                        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                    exclude"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'node_modules'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        plugins"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HtmlWebpackPlugin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                filename"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),s._v("item"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v(".html")]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br")])]),n("p",[s._v("配置babel主要是为了区别不同模式之间的差异")]),s._v(" "),n("p",[s._v("如果不输出到一个单独的目录下, 那么这里混合的文件就会非常的多, 对比极其不容易")]),s._v(" "),n("h4",{attrs:{id:"第二部-对比差异"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第二部-对比差异"}},[s._v("#")]),s._v(" 第二部, 对比差异")]),s._v(" "),n("p",[s._v("这里先看几个典型的模式")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("eval")])])]),s._v(" "),n("p",[s._v("就是上面所说的eval, 将模块代码放到"),n("code",[s._v("eval")]),s._v("函数中执行, 并且通过"),n("code",[s._v("sourceURL")]),s._v("标注文件路径, 他没有"),n("code",[s._v("Source Map")]),s._v(", 只是标注了是哪一个文件出错(行列信息是错误的)")]),s._v(" "),n("p",[n("img",{attrs:{src:t(515),alt:"eval"}})]),s._v(" "),n("ul",[n("li",[n("code",[s._v("eval-source-map")])])]),s._v(" "),n("p",[s._v("同样也是使用eval执行模块代码, 不过他处理定位错误出现的文件, 还可以定位具体的行和列的信息, 并且他生成了"),n("code",[s._v("Srouce Map")])]),s._v(" "),n("p",[n("img",{attrs:{src:t(516),alt:"eval-source-map"}})]),s._v(" "),n("ul",[n("li",[n("code",[s._v("eval-cheap-source-map")])])]),s._v(" "),n("p",[s._v("该模式就是在eval-source-map之上加了一个cheap, 也就是生成了一个阉割版的sourceMap, 只有行信息, 没有列信息, 少了点信息, 但是生成速度快了很多")]),s._v(" "),n("p",[n("img",{attrs:{src:t(517),alt:"eval-cheap-source-map"}})]),s._v(" "),n("ul",[n("li",[n("code",[s._v("eval-cheap-module-source-map")])])]),s._v(" "),n("p",[s._v("这个模式就是在eval-cheap-source-map的基础上多了一个module, 也只能定位到行, 但是他定位的文件没有被"),n("code",[s._v("babel")]),s._v("翻译过")]),s._v(" "),n("p",[n("img",{attrs:{src:t(518),alt:"eval-Cheap-Module-Source-Map"}})]),s._v(" "),n("blockquote",[n("p",[s._v("总结:")]),s._v(" "),n("p",[s._v("其实有了上面的模式, 其他的模式基本上就没有太大的区别了, 就是针对这几个基础模式做了排列组合, 但是从webpack5.x开始, 必须遵循官方给出的特定顺序, 不能自己乱排序")]),s._v(" "),n("ul",[n("li",[n("p",[n("code",[s._v("eval")]),s._v(": 是否使用eval执行模块代码")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("cheap")]),s._v(": Source Map是否包含行信息")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("module")]),s._v(": 是否能够找到Loader处理之前的源代码")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("inline")]),s._v(":  以dataUrl的方式嵌入Source Map文件, 而不是物理文件(和eval略像, eval是字符串, 个人觉得最不好用, 因为dataURL会导致源代码体积大很多)")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("hidden")]),s._v(": 开发工具中看不到Source Map的效果, 但是确实生成了Source Map文件, 但是代码中不引入(上线的包有用)")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("nosources")]),s._v(": 能看到错误出现的位置, 但是点击错误信息, 点进去看不到源代码, 只提供行列信息, 在生产中保护源代码不被暴露")])])])]),s._v(" "),n("p",[s._v("比如还有一个模式叫做"),n("code",[s._v("cheap-source-map")]),s._v(", 他就是没有用eval执行代码, 并且包含了行信息, 但是是编译过后的型号")]),s._v(" "),n("h2",{attrs:{id:"选择一个合适的source-map模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#选择一个合适的source-map模式"}},[s._v("#")]),s._v(" 选择一个合适的Source Map模式")]),s._v(" "),n("p",[s._v("一般开发的时候只用得上几种, 实际上不会有太多的选择, 这里推荐几种汪大佬的选择")]),s._v(" "),n("h3",{attrs:{id:"开发环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#开发环境"}},[s._v("#")]),s._v(" 开发环境")]),s._v(" "),n("p",[s._v("eval-cheap-module-source-map")]),s._v(" "),n("p",[s._v("原因如下:")]),s._v(" "),n("ul",[n("li",[s._v("代码每行不超过80个字符, 因此不需要定位到列")]),s._v(" "),n("li",[s._v("使用框架情况很多, 经过loader转换过后的差异较大, 肯定要使用转换前的源代码")]),s._v(" "),n("li",[s._v("虽然首次打包速度比较慢, 但是重新打包相对较快")])]),s._v(" "),n("h3",{attrs:{id:"生产环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#生产环境"}},[s._v("#")]),s._v(" 生产环境")]),s._v(" "),n("p",[s._v("none")]),s._v(" "),n("blockquote",[n("p",[s._v("主要就是Source Map会暴露源代码, 因此生产不能暴露任何源代码")]),s._v(" "),n("p",[s._v("调试是开发阶段的事情, 应该在开发阶段尽可能的找出来, 而不是全民测生产")]),s._v(" "),n("p",[s._v("如果对代码没有信心, 也应该尽量选择nosources-source-map")])]),s._v(" "),n("p",[s._v("不应该寻找通用法则, 而是要理解不同模式的差异, 适配不同的环境")])])}),[],!1,null,null,null);a.default=e.exports}}]);