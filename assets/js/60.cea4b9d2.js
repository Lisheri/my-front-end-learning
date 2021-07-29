(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{586:function(s,a,t){"use strict";t.r(a);var n=t(5),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"懒加载源码分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#懒加载源码分析"}},[s._v("#")]),s._v(" 懒加载源码分析")]),s._v(" "),t("h2",{attrs:{id:"过程分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#过程分析"}},[s._v("#")]),s._v(" 过程分析")]),s._v(" "),t("blockquote",[t("ol",[t("li",[t("p",[s._v("首先从上到下定义一系列的函数及其静态成员")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("__webpack_modules__")]),s._v("webpack5.x主要bundle内部定义的模块")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("__webpack_module_cache__")]),s._v("模块缓存")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("__webpack_require__")]),s._v("模块加载方法")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("__webpack_require__.m = __webpack_modules__;")]),s._v("静态成员m, 指向主要bundle下的模块定义对象(生产环境下是数组)")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("__webpack_require__.d")]),s._v(", 通过一个IIFE生成一个函数作用域(做私有作用域), 包裹生成新的静态成员d, 用于为exports导出成员添加getter")])]),s._v(" "),t("li",[t("p",[s._v("利用一个新的IIFE, 定义两个静态成员, "),t("code",[s._v("__webpack_require__.f = {};")]),s._v(", 用于保存一些加载模块的Promise方法, 但是此时, 他还是一个空数组")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("__webpack_require__.e")]),s._v(", 也就是按需加载核心所在, 替换了我们的"),t("code",[s._v("import('xxx')")]),s._v("方法, 内部就是使用Promise.all去执行"),t("code",[s._v("__webpack_require__.f")]),s._v("这个函数下面一系列的函数, 用于扩充一个参数 "),t("code",[s._v("promises")]),s._v("数组, 最终这个Promise.all执行的就是这个"),t("code",[s._v("promises")]),s._v("数组下的一系列promise, 返回的就是按需加载的模块内容")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("__webpack_require__.u")]),s._v(", 静态成员u, 作用是获取 魔法注释在webpack打包后单独生成的bundle")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("__webpack_require__.o")]),s._v(", 定义静态成员o, 用于判断一号参数自身属性中是否存在二号参数这个属性")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("__webpack_require__.l")]),s._v("静态成员l, 是一个通过模块id生成script标签的 script加载函数, 在静态成员f中的j方法中触发")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("__webpack_require__.r")]),s._v(", 静态成员r, 为所有的导出成员打上ES Module标记")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("__webpack_require__.p")]),s._v(", 定义静态成员p, 代表publicPath, 注意, 按需加载时, 5.x也不会去推导publicPath, 必须存在一个非按需的模块加载")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("__webpack_require__.f.j")]),s._v(", j方法, 主要用于扩充promises, 这个在o方法的Promise.all中执行的主要promise数组")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("webpackJsonpCallback")]),s._v(", 在模块按需加载时, 用于添加Script标签的回调函数(JSONP就是利用script标签的src属性)")])]),s._v(" "),t("li",[t("p",[s._v("下面的这里主要是扩展了chunkLoadingGlobal.push方法, 结合到了webpackJsonpCallback上, 并且将webpackJsonpCallback的第一个参数修改为了最初的push")])])])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" chunkLoadingGlobal "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"webpackChunk_01_clean_webpack"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"webpackChunk_01_clean_webpack"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// * 首次走到这里的时候, 这个chunkLoadingGlobal是一个空数组, 因此并不会进去")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// * 当然, 如果存在一个直接加载但是又单独拆分的模块, 他是会进去的")]),s._v("\n \t\tchunkLoadingGlobal"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("forEach")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("webpackJsonpCallback")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// * 主要是为了扩充push操作, 将chunkLoadingGlobal.push方法指向webpackJsonpCallback")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// * 并且在webpackJsonpCallback入参时, 拿到的parentChunkLoadingFunction是最初的push方法")]),s._v("\n \t\tchunkLoadingGlobal"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("push "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("webpackJsonpCallback")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" chunkLoadingGlobal"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("push")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("chunkLoadingGlobal"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("blockquote",[t("ol",{attrs:{start:"17"}},[t("li",[s._v("单独打包成bundle的模块如下所示\n这一段push在按需加载的时候才会执行, 初始化时, 并不会执行\n因此这里执行push的时候, 由于chunkLoadingGlobal是直接拷贝的"),t("code",[s._v('self["webpackChunk_01_clean_webpack"]')]),s._v("\n因此此处执行push的时候就是执行的扩充后的push函数, 也就是webpackJsonpCallback\n因此这里push的入参, 就成了webpackJsonpCallback的第二个参数, "),t("code",[s._v("data")]),s._v("\n也就是说上述的webpackJsonpCallback, 定义过后在没有直接加载单独分包模块的情况下, 首次执行, 就是在此处")])])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"webpackChunk_01_clean_webpack"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"webpackChunk_01_clean_webpack"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("push")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fuck"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./src/a.js"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*!******************!*\\\n  !*** ./src/a.js ***!\n  \\******************/")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("__unused_webpack_module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" __webpack_exports__"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" __webpack_require__")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"use strict"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n__webpack_require__"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("r")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__webpack_exports__"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* harmony export */")]),s._v(" __webpack_require__"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("d")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__webpack_exports__"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* harmony export */")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* binding */")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* harmony export */")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fuck"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* binding */")]),s._v(" fuck"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* harmony export */")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// module.exports = {")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('//   name: "name",')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//   fuck: 'cao'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// }")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'name'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" fuck "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cao'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("blockquote",[t("ol",{attrs:{start:"18"}},[t("li",[t("p",[s._v("而上述模块的加载, 依赖于"),t("code",[s._v("__webpack_require__.e")]),s._v("去触发静态成员f下面的j, 再来触发这个push, 拿到单独打包的模块")])]),s._v(" "),t("li",[t("p",[s._v("而e方法的也就是我们在源代码中所定义的模块按需加载中的import, 一切, 回到了最开始, 将上面的所有链接。")])]),s._v(" "),t("li",[t("p",[s._v("额外说一下对魔法注释的处理, webpack会集成一个"),t("code",[s._v("模块对象数组")]),s._v(", 他的集成方式就是在单独的"),t("code",[s._v("bundle")]),s._v("和"),t("code",[s._v("主要bundle")]),s._v("中都定义一个"),t("code",[s._v('self["webpackChunk_项目名"]')]),s._v("这样的一个数组, 如果不存在, 那么初始化为空数组, 而在单独拆分出来的"),t("code",[s._v("bundle")]),s._v("中这么一句, 就是将单独拆分的模块push到这个数组中, "),t("code",[s._v("self")]),s._v("代表的就是全局对象, 一般就是"),t("code",[s._v("window")]),s._v("。")])])]),s._v(" "),t("p",[s._v("注: 这是一个二维数组, 二维数组中第二维的第一个成员也是一个数组, 内部是一个模块的名字, 是一个字符串")]),s._v(" "),t("p",[s._v("第二个成员才是当前模块")]),s._v(" "),t("p",[s._v("模块定义的方式和以往一样, 主要的bundle中就是"),t("code",[s._v("__webpack_modules__")]),s._v(", 然后其他的模块就在"),t("code",[s._v('self["webpackChunk_项目名"]')]),s._v("中")]),s._v(" "),t("ul",[t("li",[s._v("如果是ES Module, 那么就是"),t("code",[s._v("__webpack_require__")]),s._v("方法")]),s._v(" "),t("li",[s._v("如果是CommonJS, 那么就是"),t("code",[s._v("__webpack_require__.t")]),s._v("方法")])]),s._v(" "),t("p",[s._v("使用上述方法加载模块后将会得到一个包含模块导出内容的对象, 作为当前then中第一个回调函数的返回结果")]),s._v(" "),t("p",[s._v("也就是模拟了"),t("code",[s._v("import('xxx').then(res => {...})")]),s._v(", 这个res就是上面回调函数的返回结果")])]),s._v(" "),t("h3",{attrs:{id:"到此为止-webpack5-x的模块按需加载-懒加载-梳理完成-后续在继续分析-f-j方法-和-l方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#到此为止-webpack5-x的模块按需加载-懒加载-梳理完成-后续在继续分析-f-j方法-和-l方法"}},[s._v("#")]),s._v(" 到此为止, webpack5.x的模块按需加载(懒加载)梳理完成, 后续在继续分析 f.j方法 和 l方法")])])}),[],!1,null,null,null);a.default=e.exports}}]);