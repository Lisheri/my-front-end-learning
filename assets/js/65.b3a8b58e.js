(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{592:function(t,a,s){"use strict";s.r(a);var n=s(5),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"make-触发前流程回顾"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#make-触发前流程回顾"}},[t._v("#")]),t._v(" make 触发前流程回顾")]),t._v(" "),s("p",[t._v("主要总结一下make钩子在触发之前的一些执行流程, 有两个目的:")]),t._v(" "),s("ol",[s("li",[t._v("梳理一下某个模块在被执行编译之前具体完成了那些事情")]),t._v(" "),s("li",[t._v("说明并在编译的时候可以将compile交给compilation, 而compilation就是完成本次具体编译打包的操作")])]),t._v(" "),s("h2",{attrs:{id:"run-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-js"}},[t._v("#")]),t._v(" run.js")]),t._v(" "),s("p",[t._v("webpack用户自己所编写的打包入口, run.js, 其实只有两个步骤")]),t._v(" "),s("ol",[s("li",[t._v("实例化compiler对象, compiler贯穿了整个webpack工作的流程, 因此他整个比compilation就大了很多")]),t._v(" "),s("li",[t._v("由compiler调用run方法")])]),t._v(" "),s("h2",{attrs:{id:"compiler实例化操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compiler实例化操作"}},[t._v("#")]),t._v(" compiler实例化操作")]),t._v(" "),s("ol",[s("li",[t._v("compiler的constructor中第一个步骤, 就是定义了所有需要使用的钩子, 而这些所有的钩子, 都是直接使用的tapable的钩子。所以他才具备了钩子的操作能力(监听和触发监听), 而这些钩子, 组成了webpack最重要的部分。所以说, webpack是一个"),s("code",[t._v("事件流")])]),t._v(" "),s("li",[t._v("在实例化了 compiler 对象之后, 就往它的身上挂载很多属性, 其中 "),s("code",[t._v("NodeEnvironmentPlugin")]),t._v(" 这个操作, 就让"),s("code",[t._v("compiler")]),t._v("具备了文件读写的能力。在自己手写的时候, 使用的是Node的fs模块, 源码要复杂很多, 但是底层也是这个")]),t._v(" "),s("li",[t._v("具备了 fs 操作能力之后又将 plugins 中的插件都挂载到了 compiler 对象身上")]),t._v(" "),s("li",[t._v("在 "),s("code",[t._v("WebpackOptionsApply")]),t._v("中, 将内部默认的插件与 "),s("code",[t._v("compiler")]),t._v(" 建立关系, 其中 "),s("code",[t._v("EntryOptionPlugin")]),t._v(" 处理了入口模块")]),t._v(" "),s("li",[t._v("在实例化 compiler 的时候, 只是监听了 make 钩子("),s("code",[t._v("EntryPlugin")]),t._v("中, 4.x使用"),s("code",[t._v("SingleEntryPlugin")]),t._v(")\n"),s("ul",[s("li",[t._v("5-1 在 "),s("code",[t._v("EntryPlugin")]),t._v(" 模块的 apply方法中, 有两个钩子监听")]),t._v(" "),s("li",[t._v("5-2 其中 "),s("code",[t._v("compilation")]),t._v(" 钩子, 就是让 "),s("code",[t._v("compilation")]),t._v(" 具备了利用 "),s("code",[t._v("normalModuleFactory")]),t._v(" 工厂创建一个普通模块的能力")]),t._v(" "),s("li",[t._v("5-3 因为它就是利用一个子集创建的模块来加载需要被打包的模块")]),t._v(" "),s("li",[t._v("5-4 其中 "),s("code",[t._v("make")]),t._v(" 钩子在 "),s("code",[t._v("compiler.run")]),t._v(" 会被触发, 走到这里, 就意味着某个模块执行打包之前的所有准备工作就完成了")]),t._v(" "),s("li",[t._v("5-5 "),s("code",[t._v("addEntry")]),t._v(" 方法调用")])])])]),t._v(" "),s("h3",{attrs:{id:"compilation-钩子的监听"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compilation-钩子的监听"}},[t._v("#")]),t._v(" compilation 钩子的监听")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// EntryPlugin.js")]),t._v("\ncompiler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hooks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("compilation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"EntryPlugin"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("compilation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" normalModuleFactory "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tcompilation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dependencyFactories"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t\t\tEntryDependency"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\tnormalModuleFactory\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("p",[t._v("关于 "),s("code",[t._v("normalModuleFactory")]),t._v(":")]),t._v(" "),s("p",[t._v("这个 "),s("code",[t._v("compilation.dependencyFactories")]),t._v("很明显是一个map数据类型, 调用set方法, 存储了键值对, 键就是 "),s("code",[t._v("EntryDependency")]),t._v("这个类, 键值就是 "),s("code",[t._v("normalModuleFactory")])]),t._v(" "),s("p",[t._v("关于 "),s("code",[t._v("normalModuleFactory")]),t._v(" 的用处, 之前说过 compiler 贯穿整个流程, 这个流程从上往下, 会有一些 "),s("code",[t._v('"工作人员"')]),t._v(" 在某个特定的时间去工作, 其中像 "),s("code",[t._v("compilation")]),t._v(" 就是其中一个专用于 "),s("code",[t._v("打包编译")]),t._v("操作的 "),s("code",[t._v('"工作人员"')])]),t._v(" "),s("p",[t._v("而这个 "),s("code",[t._v("compilation")]),t._v(" 如果要打包一个模块, 比如说入口模块"),s("code",[t._v("index.js")]),t._v(", 他需要自己先创建一个模块, 然后再去打包当前的index.js这个模块, 这就是为什么, 在webpack4.x中所有的模块在打包后的文件中都是以IIFE的参数引入, 而webpack5.x可以直接将它定义在IIFE内部, 其实都是一样的, 他们都是 "),s("code",[t._v("compilation")]),t._v("生成的, 只是换了个位置罢了。")]),t._v(" "),s("p",[t._v("而这个 "),s("code",[t._v("compilation")]),t._v(" 就利用了 "),s("code",[t._v("normalModuleFactory")]),t._v(" 完成了模块的创建")]),t._v(" "),s("h3",{attrs:{id:"addentry"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#addentry"}},[t._v("#")]),t._v(" addEntry")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// EntryPlugin.js")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" entry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" dep "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" EntryPlugin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createDependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("entry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\ncompiler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hooks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("make"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tapAsync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"EntryPlugin"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("compilation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tcompilation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEntry")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dep"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("p",[t._v("会发现这里有一个entry, 这个entry就是入口文件的模块id(开发环境是一个相对路径, 生产环境会变成一个数字, 代表的是模块数组的index)")]),t._v(" "),s("p",[t._v("dep 用于处理模块依赖关系, 因为在入口文件中, 还会有其他的模块")]),t._v(" "),s("p",[t._v("而走到 "),s("code",[t._v("addEntry")]),t._v(" 中, 就意味着要开始编译模块了")]),t._v(" "),s("h2",{attrs:{id:"run-方法执行-主要是确认什么时候触发的-make-钩子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-方法执行-主要是确认什么时候触发的-make-钩子"}},[t._v("#")]),t._v(" run 方法执行 (主要是确认什么时候触发的 make 钩子)")]),t._v(" "),s("ol",[s("li",[t._v("run 方法中就是 之前埋点的一堆钩子 按顺序在触发(beforeRun, run...), 最终调用 "),s("code",[t._v("compile")]),t._v(" 方法")]),t._v(" "),s("li",[s("code",[t._v("compile")]),t._v(" 方法执行")])]),t._v(" "),s("ul",[s("li",[t._v("2-1 准备参数(参数里面就有 "),s("code",[t._v("normalModuleFactory")]),t._v(", 就是上面提到的用于创建普通模块的工厂)")]),t._v(" "),s("li",[t._v("2-2 触发 "),s("code",[t._v("beforeCompile")])]),t._v(" "),s("li",[t._v("2-3 将第一步的参数传给一个函数, 开始创建 "),s("code",[t._v("compilation")]),t._v(" (调用 newCompilation方法)")]),t._v(" "),s("li",[t._v("2-4 在调用 "),s("code",[t._v("newCompilation")]),t._v(" 的内部\n"),s("ul",[s("li",[t._v("调用了 "),s("code",[t._v("createCompilation")])]),t._v(" "),s("li",[t._v("触发了 "),s("code",[t._v("thisCompilation")]),t._v(" 钩子 和 "),s("code",[t._v("compilation")]),t._v(" 的监听")])])])]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("创建了 "),s("code",[t._v("compilation")]),t._v(" 对象之后, 就出发了 make 钩子")]),t._v(" "),s("li",[t._v("当我们触发 "),s("code",[t._v("make")]),t._v(" 钩子监听的时候, 就将 "),s("code",[t._v("compilation")]),t._v(" 对象传过去了, 其实在实例化 "),s("code",[t._v("compilation")]),t._v(" 的时候, 我们直接将 "),s("code",[t._v("compiler")]),t._v(" 实例也传了进去, 所以 "),s("code",[t._v("compilation")]),t._v(" 完美的可以获取到 "),s("code",[t._v("compiler")]),t._v(" 中的信息")])]),t._v(" "),s("h3",{attrs:{id:"newcompilation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#newcompilation"}},[t._v("#")]),t._v(" newCompilation")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("newCompilation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" compilation "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createCompilation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  compilation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  compilation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("records "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("records"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 触发两个钩子")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hooks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("thisCompilation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("compilation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hooks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("compilation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("compilation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" compilation\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("ol",[s("li",[t._v("实例化 "),s("code",[t._v("compiler")])]),t._v(" "),s("li",[t._v("调用 "),s("code",[t._v("compiler")]),t._v(" 方法")]),t._v(" "),s("li",[s("code",[t._v("newCompilation")]),t._v("调用")]),t._v(" "),s("li",[t._v("实例化一个 "),s("code",[t._v("compilation")]),t._v("对象(它和 "),s("code",[t._v("compiler")]),t._v(" 关系很深)")]),t._v(" "),s("li",[t._v("触发 "),s("code",[t._v("make")]),t._v(" 监听")]),t._v(" "),s("li",[t._v("addEntry 方法 (这个时候就带着 context option(4.x 是"),s("code",[t._v("name")]),t._v(") entry 一堆的东西) 接下来就开始编译了")])])])}),[],!1,null,null,null);a.default=e.exports}}]);