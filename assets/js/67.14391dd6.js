(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{594:function(s,t,a){"use strict";a.r(t);var n=a(5),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"fis编译与压缩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fis编译与压缩"}},[s._v("#")]),s._v(" FIS编译与压缩")]),s._v(" "),a("h2",{attrs:{id:"编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译"}},[s._v("#")]),s._v(" 编译")]),s._v(" "),a("p",[s._v("同样需要使用配置文件的方式去配置如何对文件进行编译")]),s._v(" "),a("p",[s._v("这里尝试对scss文件进行编译")]),s._v(" "),a("p",[s._v("还是通过match方法去指定一个选择器, 这个选择器就是为了选择我们需要匹配的文件")]),s._v(" "),a("p",[s._v("此处还需要一个fis-parser, 转换scss是"),a("code",[s._v("fis-parser-node-sass")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" fis-parser-node-sass\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" fis-parser-babel-6.x\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("blockquote",[a("p",[s._v("当然, 这里实际上还是推荐安装在本地")])]),s._v(" "),a("div",{staticClass:"language-javaScript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用的就是通配符")]),s._v("\nfis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'**/*.scss'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 有了上述依赖过后, 就可以配置parser了")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 可以通过fis.plugin()去自动载入插件, 插件的前缀是不需要的")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如下所示, 就可以命中上面安装的插件了")]),s._v("\n    parser"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" fis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("plugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node-sass"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 修改扩展名, renameExt的简写")]),s._v("\n    rExt"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.css'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 压缩插件是内置的, 不需要添加第三方包")]),s._v("\n    optimizer"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" fis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("plugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"clean-css"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 编译js")]),s._v("\nfis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"**/*.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 6.x的原因是fis3还是基于6.x版本的babel")]),s._v("\n    parser"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" fis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("plugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"babel-6.x"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 压缩js")]),s._v("\n    optimizer"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" fis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("plugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"uglify-js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("p",[s._v("从上面babel依然停留在6.x还是发现实际上在使用中需要抽出cli, 还是要使用gulp等方式去抽出一类项目的公用cli")]),s._v(" "),a("p",[s._v("并且截止到2019年, 都还有四百多个issue没有被处理")]),s._v(" "),a("p",[s._v("当然, 学习fis主要是他的思想, 并非fis本身")]),s._v(" "),a("blockquote",[a("p",[s._v("tips: 自调用函数为什么需要传递"),a("code",[s._v("window")]),s._v("和"),a("code",[s._v("document")]),s._v(", 主要是方便内部变量查找"),a("code",[s._v("window")]),s._v("和"),a("code",[s._v("document")]),s._v("属性, 避免树的层级往上遍历")]),s._v(" "),a("p",[s._v("同时这样的方式压缩比例更大")])])])}),[],!1,null,null,null);t.default=e.exports}}]);