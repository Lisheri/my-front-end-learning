(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{571:function(e,t,i){e.exports=i.p+"assets/img/compile.a7471a8a.png"},762:function(e,t,i){"use strict";i.r(t);var l=i(5),n=Object(l.a)({},(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[l("h1",{attrs:{id:"模板编译总结"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#模板编译总结"}},[e._v("#")]),e._v(" 模板编译总结")]),e._v(" "),l("p",[e._v("整体过下如下所示")]),e._v(" "),l("ol",[l("li",[e._v("首先执行compileToFunctions(template, ...)\n"),l("ul",[l("li",[e._v("先从缓存加载编译好的render函数")]),e._v(" "),l("li",[e._v("缓存中没有调用compile(template, options)")])])]),e._v(" "),l("li",[e._v("然后是执行compile(template, options)\n"),l("ul",[l("li",[e._v("首先去合并options")]),e._v(" "),l("li",[e._v("然后调用baseCompile(template.trim(), finalOptions)编译模板")]),e._v(" "),l("li",[e._v("compile函数的核心是合并选项, 真正处理模板编译的工作, 实在baseCompile中完成的")])])]),e._v(" "),l("li",[e._v("baseCompile(template.trim(), finalOptions), 传递模板和合并好的选项\n"),l("ul",[l("li",[e._v("parse() 把template转换成AST对象(抽象语法树)")]),e._v(" "),l("li",[e._v("optimize() 对AST进行优化\n"),l("ul",[l("li",[e._v("标记AST tree中的静态sub trees(静态根节点)")]),e._v(" "),l("li",[e._v("检测到静态子树, 设置为静态, 不需要再每次重新渲染的时候重新生成节点")]),e._v(" "),l("li",[e._v("patch阶段跳过静态子树")])])]),e._v(" "),l("li",[e._v("generate() 将AST tree生成js的创建代码(字符串)")])])]),e._v(" "),l("li",[e._v("compileToFunctions(template, ...)\n"),l("ul",[l("li",[e._v("当compile执行完毕后, 会继续回到compileToFunctions")]),e._v(" "),l("li",[e._v("继续把上一步中生成的字符串形式的js代码转换为函数")]),e._v(" "),l("li",[e._v("createFunction()")]),e._v(" "),l("li",[e._v("render和staticRenderFns初始化完毕, 挂载到Vue实例的options对应的属性中")])])])]),e._v(" "),l("p",[l("img",{attrs:{src:i(571),alt:"编译"}})]),e._v(" "),l("p",[e._v("通过编译的源码可以知道模板编译的过程中会标记静态根节点, 对静态根节点会进行处理, 在重新渲染时不会渲染静态根节点, 因为内容不会发生改变")]),e._v(" "),l("p",[e._v("另外, 再模板中不要写过多的空白和换行, 否则生成的AST对象会保留这些空白和换行, 会被存储到内存中, 对浏览器渲染没有任何意义, 代码规范中其实有相应的约定")])])}),[],!1,null,null,null);t.default=n.exports}}]);