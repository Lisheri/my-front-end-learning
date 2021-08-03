(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{528:function(t,s,a){t.exports=a.p+"assets/img/5201619147006_.pic.50d94656.jpg"},529:function(t,s,a){t.exports=a.p+"assets/img/5211619147017_.pic.e4327d3a.jpg"},614:function(t,s,a){"use strict";a.r(s);var n=a(5),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"js性能"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#js性能"}},[t._v("#")]),t._v(" JS性能")]),t._v(" "),n("h2",{attrs:{id:"为什么要使用performace"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#为什么要使用performace"}},[t._v("#")]),t._v(" 为什么要使用Performace")]),t._v(" "),n("ul",[n("li",[t._v("GC的目的是为了实现内存空间的良性循环")]),t._v(" "),n("li",[t._v("良性循环的基石是合理使用(但是js并没有提供操作内存空间的api, 因此我们也不知道是否合理)")]),t._v(" "),n("li",[t._v("必须要时刻关注到内存变化才能确定是否合理")]),t._v(" "),n("li",[t._v("Performance就是监视内存的一个工具")])]),t._v(" "),n("p",[t._v("通过Performance实时监控内存")]),t._v(" "),n("h3",{attrs:{id:"使用步骤"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用步骤"}},[t._v("#")]),t._v(" 使用步骤")]),t._v(" "),n("ul",[n("li",[t._v("打开浏览器输入目标网址")]),t._v(" "),n("li",[t._v("进入开发人员工具面板， 选择性能")]),t._v(" "),n("li",[t._v("开启录制功能，访问具体界面")]),t._v(" "),n("li",[t._v("执行用户行为， 一段时间后停止录制")]),t._v(" "),n("li",[t._v("分析界面中记录的内存信息")])]),t._v(" "),n("h2",{attrs:{id:"内存问题的体现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#内存问题的体现"}},[t._v("#")]),t._v(" 内存问题的体现")]),t._v(" "),n("h3",{attrs:{id:"外在表现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#外在表现"}},[t._v("#")]),t._v(" 外在表现")]),t._v(" "),n("ul",[n("li",[t._v("页面出现延迟加载或经常性暂停(可能会有频繁的垃圾回收, 说明有代码瞬间让程序内存飙升)")]),t._v(" "),n("li",[t._v("页面持续性出现糟糕的性能(可能底层有内存膨胀, 就是说明底层可能申请了更多的内存，并且内存超过了本机的承载)")]),t._v(" "),n("li",[t._v("页面的性能随时间延长越来越差(可能有内存泄漏, 就是代码执行过程中, 回收的空间越来越少, 越来越多的空间无法回收)")])]),t._v(" "),n("h2",{attrs:{id:"监控内存的集中方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#监控内存的集中方式"}},[t._v("#")]),t._v(" 监控内存的集中方式")]),t._v(" "),n("h3",{attrs:{id:"界定内存问题的标准"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#界定内存问题的标准"}},[t._v("#")]),t._v(" 界定内存问题的标准")]),t._v(" "),n("ul",[n("li",[t._v("内存泄漏: 内存使用持续升高")]),t._v(" "),n("li",[t._v("内存膨胀: 在多数设备上都存在性能问题。(我们在多种设备上, 都存在性能问题, 那说明就是程序本身的问题了)")]),t._v(" "),n("li",[t._v("频繁垃圾回收: 通过内存变化图进行分析(毕竟通过界面无法感知)")])]),t._v(" "),n("h3",{attrs:{id:"方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#方式"}},[t._v("#")]),t._v(" 方式")]),t._v(" "),n("ol",[n("li",[t._v("浏览器任务管理器")]),t._v(" "),n("li",[t._v("Timeline时序图记录")]),t._v(" "),n("li",[t._v("堆快照查找分离DOM(分离DOM也就是一种内存上的泄漏)")]),t._v(" "),n("li",[t._v("判断是否存在频繁的垃圾回收")])]),t._v(" "),n("h2",{attrs:{id:"任务管理器监控内存"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#任务管理器监控内存"}},[t._v("#")]),t._v(" 任务管理器监控内存")]),t._v(" "),n("p",[t._v("可以在右上角通过头像边上的更多操作选择更多工具打开任务管理器")]),t._v(" "),n("p",[t._v("然后再上面的tab栏上右键将js内存展示出来， 我们主要关注内存和js内存")]),t._v(" "),n("p",[t._v("内存表示的原生内存, 也就是DOM节点展示的内存, 如果不断增大, 说明不停在创建DOM")]),t._v(" "),n("p",[t._v("js内存表示js堆, 小括号中表现的是可达引用使用的内存, 如果没有变化， 说明堆内存没有增长")]),t._v(" "),n("p",[t._v("js内存没有增长就没有问题, 如果不停增长, 说明问题很大。")]),t._v(" "),n("p",[t._v("但是他只能告诉我们有没有问题，不能定位问题")]),t._v(" "),n("h2",{attrs:{id:"timeline记录内存"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#timeline记录内存"}},[t._v("#")]),t._v(" Timeline记录内存")]),t._v(" "),n("p",[t._v("由于任务管理器只能帮助我们判断是否出问题，但是不能定位问题。")]),t._v(" "),n("p",[t._v("这里通过时间线记录内存变化的方式，让我们更精确的定位在什么时间节点发生，和什么代码相关。")]),t._v(" "),n("div",{staticClass:"language-HTML line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("btn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("add"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token script"}},[n("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" arrList "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通过一个循环大量创建节点")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n            arrList"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"x"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"btn"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"click"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" test"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    ")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br")])]),n("p",[t._v("在HTML中搞一段这个命令, 然后再performance中记录一段时间内存的变化, 就会发现内存在点击add开始就开始飙升, 但是运行一段时间后就非常平稳，同时会开始滑落, 然后再涨上去, 在落下来。基本保持一个稳定状态, 略微有一点上升，这就说明v8在脚本运行稳定后就开始对非活动对象进行回收了。 涨就是申请内存，落就是回收内存。")]),t._v(" "),n("p",[t._v("但是后面有一段时间, 他就会只上升不滑落了，说明这里有了内存泄漏")]),t._v(" "),n("h2",{attrs:{id:"堆快照查找分离dom"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#堆快照查找分离dom"}},[t._v("#")]),t._v(" 堆快照查找分离DOM")]),t._v(" "),n("p",[t._v("使用浏览器的堆快照功能监控运行时的js内存")]),t._v(" "),n("p",[t._v("相当于找到一个js堆, 然后进行一个拍照, 并且照片会存储起来, 就可以通过这个照片看到所有的信息，就可以看到他们的由来")]),t._v(" "),n("p",[t._v("堆快照更像是针对于分离DOM的查找行为")]),t._v(" "),n("h3",{attrs:{id:"什么是分离dom"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是分离dom"}},[t._v("#")]),t._v(" 什么是分离DOM")]),t._v(" "),n("ul",[n("li",[t._v("界面元素存活在DOM树上")]),t._v(" "),n("li",[t._v("垃圾对象时的DOM节点(节点脱离了DOM树, 并且js没有引用这个节点)")]),t._v(" "),n("li",[t._v("分离状态的DOM节点(仅仅是从DOM树上脱离, 但是js还在引用。因此在DOM树上看不到了，但是js还在用，这就造成了内存泄漏)")])]),t._v(" "),n("blockquote",[n("p",[t._v("可以通过以下例子演示分离DOM的存在")])]),t._v(" "),n("div",{staticClass:"language-HTML line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("btn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("add"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token script"}},[n("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" tmpEle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" ul "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ul"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" li "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"li"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                ul"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("li"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            tmpEle "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ul"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此处只是将ul挂到了tmpEle上面, 但是又没有挂载到页面上, 这里的11个节点就是分离DOM")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"btn"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"click"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    ")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br")])]),n("p",[t._v("然后在点击事件执行前后获取堆快照如下 图2-1 和 图2-2")]),t._v(" "),n("p",[n("img",{attrs:{src:a(528),alt:"图2-1"}}),t._v("图2-1")]),t._v(" "),n("p",[n("img",{attrs:{src:a(529),alt:"图2-2"}}),t._v("图2-2")]),t._v(" "),n("p",[t._v("就可以发现在图2-2中比图2-1多了10个li节点和一个ul节点，但是页面上又没有挂上来，这11个节点就是分离DOM")]),t._v(" "),n("p",[t._v("解决这个问题很简单, 直接将"),n("code",[t._v("tmpEle = null;")]),t._v("即可, 这样这个引用就没有了, 他也会被回收")]),t._v(" "),n("p",[t._v("堆快照专门用于查找分离DOM, 主要是页面中不存在, 但是内存中却在引用, 它就是一种内存浪费，因此我们利用堆快照找到分离DOM并且可以定位到节点，这样就可以处理这样的内存浪费。")]),t._v(" "),n("h2",{attrs:{id:"频繁的垃圾回收"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#频繁的垃圾回收"}},[t._v("#")]),t._v(" 频繁的垃圾回收")]),t._v(" "),n("h3",{attrs:{id:"为什么要确定频繁的垃圾回收"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#为什么要确定频繁的垃圾回收"}},[t._v("#")]),t._v(" 为什么要确定频繁的垃圾回收")]),t._v(" "),n("ul",[n("li",[t._v("GC工作时应用程序是停止的")]),t._v(" "),n("li",[t._v("频繁且过长的GC会导致应用假死")]),t._v(" "),n("li",[t._v("用户使用中会感知应用卡顿")])]),t._v(" "),n("h3",{attrs:{id:"确定频繁的垃圾回收的方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#确定频繁的垃圾回收的方式"}},[t._v("#")]),t._v(" 确定频繁的垃圾回收的方式")]),t._v(" "),n("ul",[n("li",[t._v("timeline中频繁上升下降")]),t._v(" "),n("li",[t._v("任务管理器中数据频繁的增加减小")])]),t._v(" "),n("h2",{attrs:{id:"performance总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#performance总结"}},[t._v("#")]),t._v(" Performance总结")]),t._v(" "),n("ul",[n("li",[t._v("使用流程")]),t._v(" "),n("li",[t._v("内存问题的相关分析(内存泄漏，内存膨胀，频繁GC)")]),t._v(" "),n("li",[t._v("时序图记录程序执行时内存变化")]),t._v(" "),n("li",[t._v("任务管理器监控内存变化")]),t._v(" "),n("li",[t._v("堆快照查找分离DOM")])])])}),[],!1,null,null,null);s.default=e.exports}}]);