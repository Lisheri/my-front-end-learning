(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{570:function(t,s,a){t.exports=a.p+"assets/img/ast1.654a87ff.jpg"},756:function(t,s,a){"use strict";a.r(s);var n=a(5),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"basecompile-ast"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basecompile-ast"}},[t._v("#")]),t._v(" baseCompile-AST")]),t._v(" "),n("p",[t._v("在compile函数中合并完选项后, 接下来调用baseCompile开始编译模板")]),t._v(" "),n("p",[t._v("baseCompile是模板编译的核心函数, 内部做了三件事, 这个"),n("RouterLink",{attrs:{to:"/blogs/vue-resource/templateCompile/2.html#createcompiler"}},[t._v("之前")]),t._v("看过")],1),t._v(" "),n("ul",[n("li",[t._v("在"),n("code",[t._v("createCompilerCreator")]),t._v("函数调用时, 传递的参数, 就是baseCompile")]),t._v(" "),n("li",[t._v("bseCompile其实非常清晰, 但是没意见事情内部都比较复杂\n"),n("ul",[n("li",[t._v("这种形式值得学习, 将不同功能的代码, 拆分到不同的函数中进行分别处理, 让代码结果更清晰")])])])]),t._v(" "),n("h2",{attrs:{id:"主流程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#主流程"}},[t._v("#")]),t._v(" 主流程")]),t._v(" "),n("h3",{attrs:{id:"basecompile"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basecompile"}},[t._v("#")]),t._v(" baseCompile")]),t._v(" "),n("ol",[n("li",[t._v("调用parse函数将模板字符串转换为 ast 抽象语法树")])]),t._v(" "),n("ul",[n("li",[t._v("抽象语法树, 用来以树形的方式描述代码结构")])]),t._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[t._v("调用optimize优化抽象语法树")]),t._v(" "),n("li",[t._v("最后调用gererate将抽象语法树转换成字符串形式的JS代码")]),t._v(" "),n("li",[t._v("baseCompile返回值包含了ast, render以及staticRenderFns")])]),t._v(" "),n("ul",[n("li",[t._v("注意, 这里的render不是最终调用的render函数, 这个render是字符串形式的, 最终还要通过 toFunction转换为函数的形式")])]),t._v(" "),n("ol",{attrs:{start:"5"}},[n("li",[t._v("在分析之前, 首先要解决两个问题:")])]),t._v(" "),n("ul",[n("li",[t._v("什么是 "),n("RouterLink",{attrs:{to:"/blogs/vue-resource/templateCompile/2.html#ast"}},[t._v("抽象语法树AST")]),t._v(", 因为第一步parse函数返回的就是抽象语法树")],1),t._v(" "),n("li",[t._v("为什么要使用AST")])]),t._v(" "),n("div",{staticClass:"language-ts line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("baseCompile")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  template"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  options"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" CompilerOptions\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" CompiledResult "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 把模板转换成 ast 抽象语法树")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 抽象语法树, 用来以树形的方式描述代码结构")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ast "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("template"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("trim")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("optimize "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 优化抽象语法树")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("optimize")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ast"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 把抽象语法数生成字符串形式的js代码")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" code "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("generate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ast"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ast"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 渲染函数")]),t._v("\n    render"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("render"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 静态渲染函数, 生成静态 VNode 树")]),t._v("\n    staticRenderFns"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("staticRenderFns\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br")])]),n("h2",{attrs:{id:"ast"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ast"}},[t._v("#")]),t._v(" AST")]),t._v(" "),n("h3",{attrs:{id:"什么是ast"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是ast"}},[t._v("#")]),t._v(" 什么是AST")]),t._v(" "),n("ul",[n("li",[t._v("抽象语法树简称AST(Abstract Syntax Tree)")]),t._v(" "),n("li",[t._v("使用对象的形式描述树形的代码结构(对象中记录父子节点, 形成树形结构)")]),t._v(" "),n("li",[t._v("此处的抽象语法树是用来描述树形结构的HTML字符串(先把HTML字符串, 解析为AST, 记录标签中的一些必要属性, 以及解析Vue中的一些指令, 将解析后的指令记录到AST, 也就是抽象语法树, 他是一个对象)")])]),t._v(" "),n("h3",{attrs:{id:"为什么要使用ast"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#为什么要使用ast"}},[t._v("#")]),t._v(" 为什么要使用AST")]),t._v(" "),n("ul",[n("li",[t._v("模板字符串转换为AST后, 可以通过AST对模板做优化处理(标记模板中的静态部分, 也就是标签中的纯文本内容, 可以视作静态内容)")]),t._v(" "),n("li",[t._v("标记模板中的静态内容, 在patch的时候直接跳过静态内容(称之为静态子树)")]),t._v(" "),n("li",[t._v("在patch的过程中静态内容不需要对比和重新渲染")]),t._v(" "),n("li",[t._v("在使用babel对代码进行降级处理的时候, 也是会先把代码转换为AST, 再把AST转换成降级之后的js代码")])]),t._v(" "),n("h3",{attrs:{id:"vue中将模板解析后的ast样子"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue中将模板解析后的ast样子"}},[t._v("#")]),t._v(" vue中将模板解析后的AST样子")]),t._v(" "),n("p",[t._v("查看AST对象的方式有很多, 比如说打印, 或者通过调试查看")]),t._v(" "),n("p",[t._v("这里使用一个和"),n("code",[t._v("Vue Template Explorer")]),t._v("类似的工具, 他也是一个网站, 他可以查看各种解析器生成的AST")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://astexplorer.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("AST Explorer"),n("OutboundLink")],1)])]),t._v(" "),n("h3",{attrs:{id:"案例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#案例"}},[t._v("#")]),t._v(" 案例")]),t._v(" "),n("h4",{attrs:{id:"template"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#template"}},[t._v("#")]),t._v(" template")]),t._v(" "),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Vue"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("模板编译结果"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ msg }}"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("comp")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@myclick")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("handler"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("comp")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])]),n("h4",{attrs:{id:"ast-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ast-2"}},[t._v("#")]),t._v(" AST")]),t._v(" "),n("p",[n("img",{attrs:{src:a(570),alt:"AST"}})]),t._v(" "),n("ul",[n("li",[t._v("上面的type用于记录节点的类型, type为1记录的是标签, type为3记录的是文本")]),t._v(" "),n("li",[t._v("attrsXXX用于记录标签中的属性")]),t._v(" "),n("li",[t._v("children记录子节点\n"),n("ul",[n("li",[t._v("div中的第一个标签h1, 对应的就是children中的第一个子节点\n"),n("ul",[n("li",[t._v("h1中还有子节点")]),t._v(" "),n("li",[t._v("第一个子节点的type是3, 是一个文本节点, text记录的是文本的内容, 还有一个"),n("code",[t._v("static")]),t._v("属性, 用于标记当前节点是静态的")])])]),t._v(" "),n("li",[t._v("在h1和下一个div之前, 有一个换行, 对应的AST也有一个节点来记录, 也就是children中的第二个节点\n"),n("ul",[n("li",[t._v("会通过一个空白的文本节点来记录")]),t._v(" "),n("li",[t._v("其实编译生成的render函数中, 标签之间的空白, 也会对应一个内容是空格的VNode节点, 这个是一致的, 因为render就是通过ast生成的")])])])])]),t._v(" "),n("li",[t._v("其实还有个parent, 记录的爹,但是这里没有显示")])])])}),[],!1,null,null,null);s.default=e.exports}}]);