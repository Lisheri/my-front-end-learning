(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{728:function(s,t,n){"use strict";n.r(t);var a=n(5),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"compile"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#compile"}},[s._v("#")]),s._v(" compile")]),s._v(" "),n("blockquote",[n("p",[s._v("在模板编译的入口中, 可以看到, 最终是调用compile函数进行的编译")]),s._v(" "),n("p",[s._v("下面来看一下compile中做了什么")])]),s._v(" "),n("h2",{attrs:{id:"主要过程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#主要过程"}},[s._v("#")]),s._v(" 主要过程")]),s._v(" "),n("ol",[n("li",[s._v("compile函数依然定义于入口函数"),n("code",[s._v("createCompiler")])]),s._v(" "),n("li",[s._v("compile函数接收两个参数, 一个是模板template, 一个是options选项")])]),s._v(" "),n("ul",[n("li",[s._v("关于这个选项, 他是调用compileToFunctions传入的, 可以认为是用户传入的(虽然用户完全不参与, 但是Vue可以看作是编译器的用户)")])]),s._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[s._v("如果options存在, 则开始合并baseOptions和options")])]),s._v(" "),n("ul",[n("li",[s._v("首先开发环境重写warn函数")]),s._v(" "),n("li",[s._v("合并模块(浅拷贝直接合并到一个数组中): "),n("code",[s._v("finalOptions.modules = (baseOptions.modules || []).concat(options.modules)")])]),s._v(" "),n("li",[s._v("合并指令(baseOptions中的指令位于options.directives的原型上)")]),s._v(" "),n("li",[s._v("其余成员: 除模块和指令以外的成员直接拷贝"),n("code",[s._v("finalOptions.directives = extend(Object.create(baseOptions.directives || null), options.directives)")])])]),s._v(" "),n("ol",{attrs:{start:"4"}},[n("li",[s._v("接下来是模板编译的核心函数(baseCompile), 具体实现后续来看")]),s._v(" "),n("li",[s._v("通过baseCompile将模板编译成render函数, 返回的是一个对象, 这个对象有两个成员, 分别是render函数和staticRenderFns")]),s._v(" "),n("li",[s._v("此时的render中, 存储是字符串形式的js代码(上一节说过), 在入口函数 compileToFunctions中, 将字符串形式的js代码转换为了render函数")]),s._v(" "),n("li",[s._v("在baseCompile中, 还会把编译的错误信息记录下来(通过调用finalOptions的warn方法, 将错误和信息记录到errors和tips数组中)")]),s._v(" "),n("li",[s._v("然后将这两个数组记录到compiled的对象中")]),s._v(" "),n("li",[s._v("最后返回该对象")])]),s._v(" "),n("blockquote",[n("p",[s._v("至此, compile函数就结束了")]),s._v(" "),n("p",[s._v("他的核心作用是合并选项, 调用baseCompile进行编译, 最后记录错误, 然后返回编译完的对象")])]),s._v(" "),n("h2",{attrs:{id:"主要代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#主要代码"}},[s._v("#")]),s._v(" 主要代码")]),s._v(" "),n("div",{staticClass:"language-ts line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("compile")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 模板")]),s._v("\ntemplate"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 选项, 调用compileToFunctions传入的选项(可以认为是用户传入的, Vue也是编译器的用户)")]),s._v("\noptions"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" CompilerOptions\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" CompiledResult "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 创建了一个 finalOptions, 原型指向了 baseOptions, 作用是用于合并 compile传入的options和baseOptions")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" finalOptions "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Object"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("create")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("baseOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 定义了两个数组")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 存储编译过程中产生的错误")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" errors "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 存储编译过程中产生的信息")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" tips "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将消息放入对应的数组中")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("warn")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("msg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" range"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" tip"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tip "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" tips "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" errors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("msg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果options存在, 则开始合并baseOptions和options")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 开发环境重写warn函数")]),s._v("\n     "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("process"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("env"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NODE_ENV")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'production'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("outputSourceRange"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n       "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// $flow-disable-line")]),s._v("\n       "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" leadingSpaceLength "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" template"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("match")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token regex"}},[n("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("^\\s*")]),n("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length\n\n       "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("warn")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("msg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" range"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" tip"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n         "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" data"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" WarningMessage "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" msg "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n         "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("range"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n           "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("range"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("start "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n             data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("start "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" range"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("start "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" leadingSpaceLength\n           "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n           "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("range"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("end "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n             data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("end "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" range"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("end "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" leadingSpaceLength\n           "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n         "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n         "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tip "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" tips "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" errors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n       "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n     "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n     "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// merge custom modules")]),s._v("\n     "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("modules"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n       "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 合并模块(浅拷贝直接合并到一个数组中)")]),s._v("\n       finalOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("modules "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n         "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("baseOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("modules "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("concat")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("modules"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n     "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n     "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// merge custom directives")]),s._v("\n     "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("directives"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n       "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 合并指令(baseOptions中的指令位于options.directives的原型上)")]),s._v("\n       finalOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("directives "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("extend")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n         Object"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("create")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("baseOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("directives "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n         options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("directives\n       "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n     "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n     "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// copy other options")]),s._v("\n     "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 直接拷贝除 模块 和 指令以外的成员")]),s._v("\n     "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" key "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n       "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'modules'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" key "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'directives'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n         finalOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n       "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n     "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n   finalOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("warn "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" warn\n\n   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 模板编译的核心函数, 后续在看")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 通过baseCompile将模板编译成render函数, 返回的是一个对象, 这个对象有两个成员, 分别是render函数和staticRenderFns")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 此时的render中, 存储是字符串形式的js代码(上一节说过), 在入口函数 compileToFunctions中, 将字符串形式的js代码转换为了render函数")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" compiled "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("baseCompile")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("template"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("trim")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" finalOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("process"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("env"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NODE_ENV")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'production'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("detectErrors")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("compiled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ast"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" warn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在baseCompile中, 还会把编译的错误信息记录下来(通过调用finalOptions的warn方法, 将错误和信息记录到errors和tips数组中)")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 然后将这两个数组记录到compiled的对象中")]),s._v("\n   compiled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("errors "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" errors\n   compiled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tips "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" tips\n   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 最后返回该对象")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" compiled\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);