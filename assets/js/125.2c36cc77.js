(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{684:function(s,t,a){"use strict";a.r(t);var n=a(5),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"泛型和类型声明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#泛型和类型声明"}},[s._v("#")]),s._v(" 泛型和类型声明")]),s._v(" "),a("h2",{attrs:{id:"泛型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#泛型"}},[s._v("#")]),s._v(" 泛型")]),s._v(" "),a("p",[s._v("在声明函数时不指定具体类型, 调用的时候再去指定")]),s._v(" "),a("blockquote",[a("p",[s._v("由于很多时候需要通用函数, 但是限制死参数过后, 函数就不够通用了, 因此我们需要将类型也变成一个统一的参数")])]),s._v(" "),a("p",[s._v("如下:")]),s._v(" "),a("div",{staticClass:"language-typeScript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 但是这个函数只能创建数字类型的数组, 不能创建string类型的数组, 这一就不太行了")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("createNumArr")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("lenght"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" vlaue"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token generic-function"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Array")]),a("span",{pre:!0,attrs:{class:"token generic class-name"}},[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("number")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fill")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 因此更合理的办法就是使用泛型, 就是将类型也变成参数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 泛型就是使用一个尖括号, 一般使用T代表不明确的名称")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token generic-function"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("createArr")]),a("span",{pre:!0,attrs:{class:"token generic class-name"}},[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("T")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")])])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("length"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" value"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Array是一个泛型类, 因此可以传递泛型参数, 调用时再去传递具体类型, 不指定泛型就是一个any类型的数组")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" arr "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token generic-function"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Array")]),a("span",{pre:!0,attrs:{class:"token generic class-name"}},[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("T")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fill")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token generic-function"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("createArr")]),a("span",{pre:!0,attrs:{class:"token generic class-name"}},[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" numArr "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token generic-function"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("createArr")]),a("span",{pre:!0,attrs:{class:"token generic class-name"}},[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("number")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h2",{attrs:{id:"类型声明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型声明"}},[s._v("#")]),s._v(" 类型声明")]),s._v(" "),a("p",[s._v("实际开发过程中, 使用的第三方模块, 不一定使用ts写的, 因此他们可能没有类型校验。就会出现找不到类型声明的文件。")]),s._v(" "),a("p",[s._v("使用的时候也不会有任何的类型提示")]),s._v(" "),a("p",[s._v("因此需要使用类型声明")]),s._v(" "),a("div",{staticClass:"language-typeScript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("camelCase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'lodash'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 一般鼠标放上去, 就会告诉我们需要去安装对应地类型声明模块,  .d.ts结尾, 专用于做类型声明")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("declare")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" camelCase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("camelCase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello android'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);