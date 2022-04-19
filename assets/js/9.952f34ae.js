(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{523:function(s,t,a){s.exports=a.p+"assets/img/5031619016405_.pic_hd.05ace2fb.jpg"},524:function(s,t,a){s.exports=a.p+"assets/img/5041619016841_.pic_hd.ef3371b2.jpg"},525:function(s,t,a){s.exports=a.p+"assets/img/5051619020420_.pic_hd.33cabf5a.jpg"},526:function(s,t,a){s.exports=a.p+"assets/img/5061619020840_.pic_hd.10488e39.jpg"},633:function(s,t,a){"use strict";a.r(t);var n=a(5),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"垃圾回收"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收"}},[s._v("#")]),s._v(" 垃圾回收")]),s._v(" "),n("h2",{attrs:{id:"js中的垃圾回收"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#js中的垃圾回收"}},[s._v("#")]),s._v(" js中的垃圾回收")]),s._v(" "),n("blockquote",[n("p",[s._v("JS中内存管理是自动的, 每当创建数组、对象或者函数时, 就会开辟堆内存空间\n对象不在被引用时就是垃圾\n对象不能从根上访问到时就是垃圾")])]),s._v(" "),n("h2",{attrs:{id:"js的可达对象"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#js的可达对象"}},[s._v("#")]),s._v(" js的可达对象")]),s._v(" "),n("blockquote",[n("p",[s._v("可以访问到的对象就是可达对象 (对象、作用域链)\n可达的标准就是从根触发是否能够被找到\njs中的根可以理解为是全局变量对象")])]),s._v(" "),n("h3",{attrs:{id:"js中的引用和可达"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#js中的引用和可达"}},[s._v("#")]),s._v(" js中的引用和可达")]),s._v(" "),n("p",[s._v("引用示例如下:")]),s._v(" "),n("div",{staticClass:"language-javaScript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" obj "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("name"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'zs'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 当前空间就是张三的空间, 就像相当于当前空间被obj引用。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在全局来说, 当前的obj可以在全局被找到, 对全局来说, 他就是可达的")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" lis "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 可以认为张三的空间又多了一次引用, 有一个引用数值变化。后续引入数值算法中会用到")]),s._v("\n\nobj "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 本身来说张三这个空间是有两个引用的，但是到这里, 就断掉了。")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 但实际上, 他还是可达的, 因为lis还在引用obj")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("可达示例如下:")]),s._v(" "),n("div",{staticClass:"language-javaScript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("objGroup")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("obj1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" obj2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 函数接收两个变量, 然后让他们互相指引一下, 再返回")]),s._v("\n    obj1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" obj2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    obj2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prev "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" obj1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        o1"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" obj1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        o2"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" obj2\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" obj "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("objGroup")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("name"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'obj1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("name"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'obj2'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 当发生下面的事情后, obj通过o1指向o1空间的路就断了, 同时obj2通过prev指向o1的路, 也断了")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v(" obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("o1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("info")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("p",[s._v("上述引用关系过于复杂, 使用几张张图来帮助理解")]),s._v(" "),n("blockquote",[n("p",[s._v("通过"),n("code",[s._v("let obj = objGroup({name: 'obj1'}, {name: 'obj2'});")]),s._v("在全局定义了一个obj, 通过o1和o2两个属性，指向了o1的空间和o2的空间,\n同时o1通过next指向了o2的空间, 相当于通过next.prev指向了自己\no2 通过prev指向了o1的空间, 相当于通过prev.next指向了自己\n其实就是o1和o2做了一个互相的引用\n这样一来, 代码里面的所有对象, 都可以通过根(global variable)去查找, 如图一所示")])]),s._v(" "),n("p",[n("img",{attrs:{src:a(523),alt:"可达"}}),s._v("图一")]),s._v(" "),n("blockquote",[n("p",[s._v("当发生"),n("code",[s._v("delete obj.o1")]),s._v("之后, obj通过o1指向o1空间的路就没有了, 同时obj2通过prev指向o1的路也断了。\n但是o1空间并没有立即清除, 在gc开启之前, o1空间就成了垃圾(孤儿), 谁也访问不了他了, 如图二所示")])]),s._v(" "),n("p",[n("img",{attrs:{src:a(524),alt:"孤儿o1"}}),s._v("图二")]),s._v(" "),n("p",[s._v("从根出来, 没有任何一个可达路径抵达一个空间之后, 这个空间就成了垃圾, 等待gc回收。")]),s._v(" "),n("h2",{attrs:{id:"gc算法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gc算法"}},[s._v("#")]),s._v(" GC算法")]),s._v(" "),n("h3",{attrs:{id:"gc定义与作用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gc定义与作用"}},[s._v("#")]),s._v(" GC定义与作用")]),s._v(" "),n("ul",[n("li",[s._v("GC就是垃圾回收机制的简写")]),s._v(" "),n("li",[s._v("GC可以找到内存中的垃圾、并释放和回收空间")])]),s._v(" "),n("h3",{attrs:{id:"什么是gc中的垃圾"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是gc中的垃圾"}},[s._v("#")]),s._v(" 什么是GC中的垃圾")]),s._v(" "),n("blockquote",[n("p",[s._v("程序中不在需要使用的对象")])]),s._v(" "),n("div",{staticClass:"language-javaScript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("func")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    name "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lg"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),s._v("name"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v(" is a coder")]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("func")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("当函数调用完成后, 就不再需要使用name了, name就成了垃圾")]),s._v(" "),n("blockquote",[n("p",[s._v("程序中不能在访问到的对象")])]),s._v(" "),n("div",{staticClass:"language-javaScript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("func")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" name "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lg"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),s._v("name"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v(" is a coder")]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("func")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("const内部定义的name, 函数使用完后, 就找不到了, 也是垃圾")]),s._v(" "),n("h3",{attrs:{id:"gc算法是什么"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gc算法是什么"}},[s._v("#")]),s._v(" GC算法是什么")]),s._v(" "),n("ul",[n("li",[s._v("GC是一种机制, 垃圾回收器完成具体的工作")]),s._v(" "),n("li",[s._v("工作的内容就是查找垃圾释放空间、回收空间")]),s._v(" "),n("li",[s._v("算法就是工作时查找和回收所遵守的规则")])]),s._v(" "),n("h3",{attrs:{id:"常见gc算法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常见gc算法"}},[s._v("#")]),s._v(" 常见GC算法")]),s._v(" "),n("ul",[n("li",[s._v("引用计数")]),s._v(" "),n("li",[s._v("标记清除")]),s._v(" "),n("li",[s._v("标记整理")]),s._v(" "),n("li",[s._v("分代回收")])]),s._v(" "),n("h3",{attrs:{id:"引用计数算法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#引用计数算法"}},[s._v("#")]),s._v(" 引用计数算法")]),s._v(" "),n("ul",[n("li",[s._v("核心思想: 设置引用数, 判断当前引用数是否为0来决定是不是一个垃圾对象")])]),s._v(" "),n("p",[s._v("当计数变为0, gc就开始回收该应用类型, 清理堆内存")]),s._v(" "),n("h4",{attrs:{id:"内部依赖一个引用计数器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#内部依赖一个引用计数器"}},[s._v("#")]),s._v(" 内部依赖一个引用计数器")]),s._v(" "),n("p",[s._v("引用关系改变时引用计数器就会修改引用数值")]),s._v(" "),n("p",[s._v("比如代码中有一个对象, 只要有一个值指向他, 引用数就加一,")]),s._v(" "),n("h4",{attrs:{id:"当引用数字为0时-就开始回收垃圾"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#当引用数字为0时-就开始回收垃圾"}},[s._v("#")]),s._v(" 当引用数字为0时, 就开始回收垃圾")]),s._v(" "),n("p",[s._v("如下例子:")]),s._v(" "),n("div",{staticClass:"language-javaScript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" user1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("age"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" user2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("age"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" user3 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("age"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("33")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" nameList "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("use1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("age"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" user2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("age"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" use3"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("age"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("fn")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    num1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    num2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// * 全局下有五个变量, user1, user2, user3, nameList, num1, num2")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// * 所以这个时候对于这些引用来说他们的引用计数肯定都不是0")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 下面对fn做修改")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("fn")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" num1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" num2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这个时候num1和num2全局就找不到了, 当函数执行完后, 就会被回收")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 但是当脚本执行完后, 就发现user1, user2, user3, 空间都还在被引用着, 就在nameList中, 所以他们就不会被回收")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("fn")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br")])]),n("p",[s._v("其实就是依靠对象的引用数值是不是0来判断数值是不是一个垃圾对象, 因此缺陷挺大的。")]),s._v(" "),n("h3",{attrs:{id:"引用技术算法优缺点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#引用技术算法优缺点"}},[s._v("#")]),s._v(" 引用技术算法优缺点")]),s._v(" "),n("h4",{attrs:{id:"优点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[s._v("#")]),s._v(" 优点")]),s._v(" "),n("ul",[n("li",[s._v("发现垃圾时立即回收")]),s._v(" "),n("li",[s._v("最大限度减少程序暂停: 由于堆内存是有限制的， 比如chrome限制是1.4G(默认)(但是chrome堆内存是基于标记清除法回收堆内存), 应用程序在执行过程中必然要消耗内存, 但是引用计数算法实时监控引用对象, 当引用对象的引用计数为0, 就会立即展开回收, 降低堆内存沾满的风险。这就是减少程序暂停。")])]),s._v(" "),n("h4",{attrs:{id:"缺点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[s._v("#")]),s._v(" 缺点")]),s._v(" "),n("ul",[n("li",[s._v("无法回收循环引用对象")]),s._v(" "),n("li",[s._v("时间开销大: 时刻监控当前对象的引用数值是否需要修改, 本身数值修改就要消耗时间, 当很多对象很快的先后修改了引用数, 那么时间开销就更大了")])]),s._v(" "),n("blockquote",[n("p",[s._v("演示对象循环引用")])]),s._v(" "),n("div",{staticClass:"language-javaScript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("fn")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" obj1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" obj2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    obj1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" obj2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    obj2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" obj1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("fn")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 函数执行结束后, 内部所在的空间就需要回收, 比如obj1和obj2, 因为在全局就不在使用了, 但是这个时候, 就发现obj1的引用计数是1, obj2的引用计数还是1, 因为他们在函数作用域内互相引用, 因此在这种情况下, 引用计数算法下的gc, 就不会回收他们了, 这就是一种空间浪费。")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h3",{attrs:{id:"标记清除算法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#标记清除算法"}},[s._v("#")]),s._v(" 标记清除算法")]),s._v(" "),n("h4",{attrs:{id:"实现原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实现原理"}},[s._v("#")]),s._v(" 实现原理")]),s._v(" "),n("ul",[n("li",[s._v("核心思想: 分为标记阶段和清除阶段")]),s._v(" "),n("li",[s._v("遍历所有对象找标记活动对象")]),s._v(" "),n("li",[s._v("遍历所有对象, 清除所有没有标记的对象, 清除后, 抹掉标记")]),s._v(" "),n("li",[s._v("回收相应空间")])]),s._v(" "),n("p",[n("img",{attrs:{src:a(525),alt:"标记清除"}})]),s._v(" "),n("p",[s._v("他会找到所有的可达对象, 同时如果可达对象下面还有儿子, 他会递归的去找他们的儿子, 并且添加标记")]),s._v(" "),n("p",[s._v("但是对于a1和b1直接不是可达对象, 就不会做标记, gc回收直接清除")]),s._v(" "),n("h4",{attrs:{id:"标记清除算法优缺点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#标记清除算法优缺点"}},[s._v("#")]),s._v(" 标记清除算法优缺点")]),s._v(" "),n("blockquote",[n("p",[s._v("优点")]),s._v(" "),n("blockquote",[n("p",[s._v("最大的优点就是可以解决对象循环引用的回收\n缺点\n如下图所示, 从根开始查找有一个直接的可达区域, 就是红色标注的区域, 这是a对象, 但是他左右两侧有两个无法直接可达的区域, 一个叫B一个叫C, 这一在清除的时候, BC就会被直接回收, 再把这部分空间添加到空闲链表上, 后续程序可以直接进来从空闲链表上申请空间使用。\n这样问题就出来了, 比如任何一个空间都有两个部分, 一个是头, 一个是域, 头用于存储源信息(大小, 地址), 域用于存放数据。这样左右两侧的空间释放后, 中间有一段还在使用的空间, 他们的空间就不连续, 如果下一次要使用1.5个域, 这个时候如果用B, 就多了, 但是用C又不够。\n就是缺点————空间碎片化(需要碎片整理)")])])]),s._v(" "),n("p",[n("img",{attrs:{src:a(526),alt:"缺点"}})]),s._v(" "),n("h3",{attrs:{id:"标记整理算法实现原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#标记整理算法实现原理"}},[s._v("#")]),s._v(" 标记整理算法实现原理")]),s._v(" "),n("ul",[n("li",[s._v("标记整理可以看做是标记清除的增强")]),s._v(" "),n("li",[s._v("标记阶段的操作和标记清除一致")]),s._v(" "),n("li",[s._v("清除阶段先执行整理，移动对象位置, 然后清除没有标记的对象(碎片整理)")])]),s._v(" "),n("p",[s._v("碎片整理后, 分散的小空间就不存在了, 所有的空闲空间都紧密的联系在一起")]),s._v(" "),n("h3",{attrs:{id:"常见gc算法总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常见gc算法总结"}},[s._v("#")]),s._v(" 常见GC算法总结")]),s._v(" "),n("ul",[n("li",[s._v("引用计数: 通过一个对象的引用数值是否归零来决定是否清除\n"),n("ul",[n("li",[s._v("优点: 可以及时回收垃圾对象, 减少程序卡顿时间")]),s._v(" "),n("li",[s._v("缺点: 无法回收循环引用对象, 资源消耗大(引用计数器频繁修改引用数导致的)")])])]),s._v(" "),n("li",[s._v("标记清除: 分为标记阶段和清除阶段, 遍历对象标记活动对象, 清除不代标记的对象并取消所有标记\n"),n("ul",[n("li",[s._v("优点: 可以回收循环引用的空间")]),s._v(" "),n("li",[s._v("缺点: 产生碎片, 无法最大化利用空间, 也不能立即回收垃圾")])])]),s._v(" "),n("li",[s._v("标记整理: 在清除阶段后进行碎片整理\n"),n("ul",[n("li",[s._v("优点: 解决碎片问题")]),s._v(" "),n("li",[s._v("缺点: 不能立即回收垃圾对象")])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);