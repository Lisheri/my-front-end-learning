(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{647:function(s,a,t){"use strict";t.r(a);var n=t(5),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"es-modules"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#es-modules"}},[s._v("#")]),s._v(" ES Modules")]),s._v(" "),t("p",[s._v("学习 "),t("code",[s._v("ES Module")]),s._v(" 主要通过两个方向, 一个是他约定了哪些特性或语法(基本特性), 另一个通过一些工具来解决他在环境中带来的兼容性问题")]),s._v(" "),t("h2",{attrs:{id:"基本特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本特性"}},[s._v("#")]),s._v(" 基本特性")]),s._v(" "),t("p",[s._v("现在大部分浏览器都直接支持"),t("code",[s._v("ES Module")]),s._v(", 因此可以直接通过如下方式使用:(为script标签添加"),t("code",[s._v('type="module"')]),s._v("即可)")]),s._v(" "),t("div",{staticClass:"language-html line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("script")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("tyle")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token script"}},[t("span",{pre:!0,attrs:{class:"token language-javascript"}},[s._v("\n    console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("info")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello esModule"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("script")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("发现他是正常执行的, 也就是说 "),t("code",[s._v("script标签")]),s._v("加上"),t("code",[s._v('type="module"')]),s._v(", 他也可以正常执行, 但是他相比于普通的script标签, 会有一些新的特性")]),s._v(" "),t("ol",[t("li",[t("p",[t("code",[s._v("ES Moudle")]),s._v("自动采用"),t("code",[s._v("严格模式")]),s._v(",  忽略'use strict'")]),s._v(" "),t("ul",[t("li",[s._v("内部打印"),t("code",[s._v("this")]),s._v(", 就会发现他是undefined")])])]),s._v(" "),t("li",[t("p",[s._v("每个 "),t("code",[s._v("ES Module")]),s._v("都是运行在单独的私有作用域下")]),s._v(" "),t("ul",[t("li",[s._v("会发现每一个ES Module之间的变量是不会互相影响, 这样就不会造成全局污染")])])]),s._v(" "),t("li",[t("p",[s._v("同时"),t("code",[s._v('type="module"')]),s._v(" 是通过CORS的方式请求外部JS模块的, 如果所在的服务端不支持CORS, 会报跨域错误")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("ES Module")]),s._v("不支持文件访问, 必须使用http server的方式让他工作")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("ES Module")]),s._v(" 的script标签会自动延迟执行脚本，等同于加了一个"),t("code",[s._v("defer")]),s._v("属性")]),s._v(" "),t("ul",[t("li",[s._v("普通的script标签在html中会采用立即执行的机制, 也就是包装一层立即执行函数(这个就形成了所谓的调用栈), 因此网页会等待script标签加载")]),s._v(" "),t("li",[s._v("可以做如下尝试")])]),s._v(" "),t("div",{staticClass:"language-html line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("script")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("src")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("a.js"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token script"}}),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("script")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("p")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("显示内容"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("p")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("div",{staticClass:"language-javaScript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// a.js")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("alert")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"我的天"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ul",[t("li",[s._v("会发现上述脚本弹出"),t("code",[s._v("我的天")]),s._v("时, p标签并没有渲染, 也就是说script本身是阻塞的, 但如果加上"),t("code",[s._v('type="module"')]),s._v(", 这个脚本会延迟执行, 和"),t("code",[s._v("defer")]),s._v("属性一样")])])])]),s._v(" "),t("h2",{attrs:{id:"es-module导入导出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#es-module导入导出"}},[s._v("#")]),s._v(" ES Module导入导出")]),s._v(" "),t("p",[t("code",[s._v("export")]),s._v("用于导出成员, "),t("code",[s._v("import")]),s._v("用于导入成员")]),s._v(" "),t("h3",{attrs:{id:"es-module导出语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#es-module导出语法"}},[s._v("#")]),s._v(" ES Module导出语法")]),s._v(" "),t("h4",{attrs:{id:"export-可以修饰变量-函数-类的导出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#export-可以修饰变量-函数-类的导出"}},[s._v("#")]),s._v(" export 可以修饰变量, 函数, 类的导出:")]),s._v(" "),t("div",{staticClass:"language-javaScript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"foo module"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("hello")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("info")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Person")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h4",{attrs:{id:"更为常见的导出方式是下面这种"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更为常见的导出方式是下面这种"}},[s._v("#")]),s._v(" 更为常见的导出方式是下面这种")]),s._v(" "),t("div",{staticClass:"language-javaScript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"foo module"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("hello")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("info")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Person")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 统一在最后导出")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    hello"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    Person\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h4",{attrs:{id:"还可以导出重命名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#还可以导出重命名"}},[s._v("#")]),s._v(" 还可以导出重命名")]),s._v(" "),t("div",{staticClass:"language-javaScript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将name重命名为fooName导出, 如果重命名为default, 导入的时候必须给他命名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" fooName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h4",{attrs:{id:"导出default"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导出default"}},[s._v("#")]),s._v(" 导出default")]),s._v(" "),t("p",[s._v("导出该模块的默认成员")]),s._v(" "),t("div",{staticClass:"language-javaScript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"导入导出注意事项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导入导出注意事项"}},[s._v("#")]),s._v(" 导入导出注意事项")]),s._v(" "),t("p",[s._v("如果不在意这些小问题可能会出错")]),s._v(" "),t("h4",{attrs:{id:"export-后接的-并不是对象字面量-引入的时候也不是对这个对象的解构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#export-后接的-并不是对象字面量-引入的时候也不是对这个对象的解构"}},[s._v("#")]),s._v(" export 后接的 "),t("code",[s._v("{}")]),s._v(" 并不是对象字面量, 引入的时候也不是对这个对象的解构")]),s._v(" "),t("div",{staticClass:"language-javaScript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"zs"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" age "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"18"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" age"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("很多人会认为 export 后接的 "),t("code",[s._v("{}")]),s._v("是一个对象字面量, 会联想到这是一个对象字面量的简写写法。")]),s._v(" "),t("p",[s._v("意思就是正常来写一个对象字面量是通过如下方式:")]),s._v(" "),t("div",{staticClass:"language-javaScript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" obj "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    age"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" age\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("ES6之后对象成员如何键名和键值的变量名一致可以省略"),t("code",[s._v(": 键值的变量名")]),s._v(", 变成下面这种方式")]),s._v(" "),t("div",{staticClass:"language-javaScript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" obj "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" age\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("然后他们会认为导入的时候是对这个字面量的解构")]),s._v(" "),t("p",[t("code",[s._v("实际上这两个说法是完全错误的。")])]),s._v(" "),t("p",[s._v("左右两个华括弧完全就是导入导出语法的一个固定用法, 如果真的要导出一个对象的话, 这个时候不能使用"),t("code",[s._v("export {}")]),s._v("这种方式导出一个全部的成员, 而是使用 "),t("code",[s._v("export default {name, age}")]),s._v(", 这样"),t("code",[s._v("export default")]),s._v("后面的华括弧就会被理解成一个对象了。")]),s._v(" "),t("p",[s._v("然后导入的时候如果理解成是"),t("code",[s._v("解构")]),s._v(", 就会报错说该模块并没有提供一个叫做"),t("code",[s._v("name")]),s._v("和"),t("code",[s._v("age")]),s._v("的成员, 因为"),t("code",[s._v("import")]),s._v(" 后面的"),t("code",[s._v("{}")]),s._v("他真的不是解构, 只是一种用法, 用于引用导出的成员。")]),s._v(" "),t("p",[s._v("并且也不能"),t("code",[s._v("export 123")]),s._v(", 后面必须加"),t("code",[s._v("{}")])]),s._v(" "),t("h4",{attrs:{id:"esmodule中导出成员时-导出的是模块的引用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#esmodule中导出成员时-导出的是模块的引用"}},[s._v("#")]),s._v(" ESModule中导出成员时, 导出的是模块的引用")]),s._v(" "),t("p",[s._v("比如模块一导出")]),s._v(" "),t("div",{staticClass:"language-javaScript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"zs"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("模块二引入")]),s._v(" "),t("div",{staticClass:"language-javaScript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./1.js'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这里的name, 在模块一中导出的时候, 实际上就是创建了一个引用, 他指向的地址, 就是模块一中name的地址, 模块二中, 访问的name, 始终指向的是模块一中定义name的内存空间")]),s._v(" "),t("h4",{attrs:{id:"对外暴露的成员是只读的-是一个常量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对外暴露的成员是只读的-是一个常量"}},[s._v("#")]),s._v(" 对外暴露的成员是只读的, 是一个常量")]),s._v(" "),t("h3",{attrs:{id:"es-module导入语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#es-module导入语法"}},[s._v("#")]),s._v(" ES Module导入语法")]),s._v(" "),t("h4",{attrs:{id:"import-部分问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#import-部分问题"}},[s._v("#")]),s._v(" import 部分问题")]),s._v(" "),t("ol",[t("li",[s._v("其他文件引入的时候必须加上.js的扩展名, 不能省略(原生ES Module)")])]),s._v(" "),t("div",{staticClass:"language-javaScript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" hello"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Person"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./xxx.js'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",[t("li",[s._v("index文件引入的时候必须加上.js的扩展名, 不能省略(原生ES Module)")])]),s._v(" "),t("div",{staticClass:"language-javaScript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./utils/index.js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("当然, 上述两个问题, 打包工具可以帮我们解决, 因此在使用的时候可以不添加扩展名, 也可以不要index.js")]),s._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[t("p",[s._v("引入的时候, 相对路径中的"),t("code",[s._v("./")]),s._v("也不能少, 省略了会认为是在引入第三方模块")])]),s._v(" "),t("li",[t("p",[s._v("也可以用 "),t("code",[s._v("/")]),s._v(" 表示根路径来引入")])])]),s._v(" "),t("div",{staticClass:"language-javaScript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" form "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/04/1.js'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"5"}},[t("li",[s._v("还可以引入完整的url(直接使用cdn)")])]),s._v(" "),t("div",{staticClass:"language-javaScript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://xxx'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"如果华括弧为空-或者不需要-from-那就是直接执行这个模块-不需要导入成员"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如果华括弧为空-或者不需要-from-那就是直接执行这个模块-不需要导入成员"}},[s._v("#")]),s._v(" 如果华括弧为空, 或者不需要 "),t("code",[s._v("{} from")]),s._v(", 那就是直接执行这个模块, 不需要导入成员")]),s._v(" "),t("div",{staticClass:"language-javaScript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" form "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./1.js'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 或者这样")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./1.js'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("上面两种方式会执行这个模块, 并不提取任何的成员")]),s._v(" "),t("h4",{attrs:{id:"如果导出的成员特别多-那么可以通过一个-as-对象名-的方式将所有导出的成员提取到一个对象中"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如果导出的成员特别多-那么可以通过一个-as-对象名-的方式将所有导出的成员提取到一个对象中"}},[s._v("#")]),s._v(" 如果导出的成员特别多, 那么可以通过一个 "),t("code",[s._v("* as 对象名")]),s._v(" 的方式将所有导出的成员提取到一个对象中")]),s._v(" "),t("div",{staticClass:"language-javaScript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" mod "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./1.js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"动态导入模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#动态导入模块"}},[s._v("#")]),s._v(" 动态导入模块")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("import 关键词不能from一个变量(比如说运行阶段才知道路径, 这样不行)")])]),s._v(" "),t("li",[t("p",[s._v("import 关键词只能出现在最顶层作用域")])])]),s._v(" "),t("p",[s._v("因此需要如下使用")]),s._v(" "),t("div",{staticClass:"language-javaScript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token template-string"}},[t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("模块路径")]),t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("then")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("module")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// import函数返回值是一个promise")]),s._v("\n    console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("info")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 返回的就是目标模块下所有成员组成的对象")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h4",{attrs:{id:"同时导入default和其他成员"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#同时导入default和其他成员"}},[s._v("#")]),s._v(" 同时导入default和其他成员")]),s._v(" "),t("div",{staticClass:"language-javaScript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" renameDefault"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("other1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" other2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./1.js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 或者")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("other1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" other2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" renameDefault"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./1.js'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"将导入结果作为导出成员"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#将导入结果作为导出成员"}},[s._v("#")]),s._v(" 将导入结果作为导出成员")]),s._v(" "),t("p",[s._v("直接就是将 "),t("code",[s._v("import")]),s._v(" 修改为 "),t("code",[s._v("export")])]),s._v(" "),t("div",{staticClass:"language-javaScript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" age"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./1.js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 当然在这个文件中, 也不能访问上述成员了, 因为没有导入进来")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("因此一个直接的应用就是创建一个"),t("code",[s._v("index.js")]),s._v(", 在这里面集中导出该类模块下所有需要导出的成员, 比如所有的component, 或者所有的action")]),s._v(" "),t("h3",{attrs:{id:"解决浏览器环境兼容性-polyfill兼容方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决浏览器环境兼容性-polyfill兼容方案"}},[s._v("#")]),s._v(" 解决浏览器环境兼容性(Polyfill兼容方案)")]),s._v(" "),t("p",[s._v("2014年提出 ES Module")]),s._v(" "),t("p",[s._v("截止到目前为止, 很多浏览器都还是不支持, 比如ie11, baidu Browser等")]),s._v(" "),t("p",[s._v("当然, 借助编译工具可以, 这里有一个叫做"),t("code",[s._v("Browser ES Module Loader")]),s._v("的东西, 只需要引入到html中, 就可以让浏览器支持ES Module了")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" browser-es-module-loader\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("然后通过文件引入到页面中, 或者直接去"),t("code",[s._v("unpkg.com")]),s._v("去找, 这个网站提供了cdn服务, 直接引入即可")]),s._v(" "),t("div",{staticClass:"language-html line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("body")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("script")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("src")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("https://unpkg.com/promise-polyfill@8.2.0/dist/polyfill.min.js"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("nomodule")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token script"}}),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("script")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("script")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("src")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("https://unpkg.com/browser-es-module-loader@0.4.1/dist/babel-browser-build.js"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("nomodule")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token script"}}),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("script")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("script")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("src")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("https://unpkg.com/browser-es-module-loader@0.4.1/dist/browser-es-module-loader.js"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("nomodule")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token script"}}),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("script")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("body")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("并且在ie中还需要引入 promise 的Polyfill")]),s._v(" "),t("p",[s._v("其实他的工作原理就是将不识别的语法交给babel去转换, 将不支持的文件通过请求拿过来在转换一次")]),s._v(" "),t("p",[s._v("当然, 在支持的浏览器中, 脚本会重复执行, 可以使用"),t("code",[s._v("nomodule")]),s._v("属性解决, 这个属性会让脚本只在不支持的"),t("code",[s._v("ES Module")]),s._v("的浏览器中工作")]),s._v(" "),t("p",[s._v("当然这种方式只能在开发阶段玩一玩, 不能在生产中使用, 因为他是动态解析脚本, 性能会非常差, 真正的生产环境还是要预先编译成ES5")])])}),[],!1,null,null,null);a.default=e.exports}}]);