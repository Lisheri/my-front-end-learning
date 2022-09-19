(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{726:function(t,s,e){"use strict";e.r(s);var a=e(5),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"依赖收集"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#依赖收集"}},[t._v("#")]),t._v(" 依赖收集")]),t._v(" "),e("blockquote",[e("p",[t._v("在defineReactive函数中, 给属性(重新)定义了"),e("code",[t._v("getter")]),t._v("和"),e("code",[t._v("setter")]),t._v("两个方法")]),t._v(" "),e("p",[t._v("在getter方法中进行依赖收集")]),t._v(" "),e("p",[t._v("依赖收集其实就是把依赖该属性的"),e("code",[t._v("watcher")]),t._v("对象, 添加到"),e("code",[t._v("dep")]),t._v("对象的"),e("code",[t._v("subs")]),t._v("数组中, 将来数据变化的时候去通知所有的"),e("code",[t._v("watcher")]),t._v("执行更新操作")])]),t._v(" "),e("h2",{attrs:{id:"过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#过程"}},[t._v("#")]),t._v(" 过程")]),t._v(" "),e("ol",[e("li",[t._v("首先判断"),e("code",[t._v("Dep")]),t._v("中是否存在"),e("code",[t._v("target")]),t._v("属性, 而"),e("code",[t._v("target")]),t._v("属性中存储的就是"),e("code",[t._v("watcher")]),t._v("对象\n"),e("ol",[e("li",[e("code",[t._v("Dep.target")]),t._v("属性, 是在 "),e("code",[t._v("Watcher")]),t._v("对象的构造函数中对"),e("code",[t._v("Dep.target")]),t._v("赋值的")]),t._v(" "),e("li",[t._v("之前在说到Vue的首次渲染时, 说到在"),e("code",[t._v("src/core/instance/lifecycle")]),t._v("中有一个"),e("code",[t._v("mountComponent")]),t._v("函数, 在这个函数中, 创建了"),e("code",[t._v("Watcher")]),t._v("对象")]),t._v(" "),e("li",[t._v("而在 "),e("code",[t._v("Watcher")]),t._v("的构造函数中, 定义了很多属性, 还把当前的"),e("code",[t._v("Watcher")]),t._v("实例存储到了 "),e("code",[t._v("vm._watchers")]),t._v("数组中(vm是vue实例, 通过"),e("code",[t._v("vm._watchers.push(this)")]),t._v(")")]),t._v(" "),e("li",[t._v("最最后调用get方法, 而在get方法中, 调用了 "),e("code",[t._v("pushTarget(this)")]),t._v("方法, 其中"),e("code",[t._v("this")]),t._v("代表当前"),e("code",[t._v("Watcher")]),t._v("实例")]),t._v(" "),e("li",[t._v("在"),e("code",[t._v("pushTarget")]),t._v("中给"),e("code",[t._v("Dep.target")]),t._v("赋值, 指向的就是当前传入的"),e("code",[t._v("target")]),t._v(", 也就是当前"),e("code",[t._v("Watcher")]),t._v("实例")]),t._v(" "),e("li",[e("code",[t._v("Dep.target")]),t._v("是用于存储当前正在执行的目标"),e("code",[t._v("watcher")]),t._v("对象, 并且他是全局唯一的, 同一时间, 只有一个Watcher正在被使用")]),t._v(" "),e("li",[t._v("并且在赋值之前, 首先将"),e("code",[t._v("watcher")]),t._v("对象存储到了 "),e("code",[t._v("targetStack")]),t._v(" 栈中。\n"),e("ol",[e("li",[t._v("在Vue2后, 每一个组件会对应一个watcher对象, 刚刚看过"),e("code",[t._v("mountComponent")]),t._v("函数, 而每一个组件都有一个"),e("code",[t._v("mountComponent")]),t._v("函数, 所以每一个组件就对应一个"),e("code",[t._v("watcher")]),t._v("对象")]),t._v(" "),e("li",[t._v("如果组件有嵌套, 比如说A组件嵌套了B组件, 在渲染A的过程中, A发现自己有儿子, 于是要先渲染儿子, 此时A渲染的过程就被暂时"),e("code",[t._v("挂起")]),t._v("(pending)了, 所以A对应的"),e("code",[t._v("watcher")]),t._v("也要被存储起来, 也就是这个"),e("code",[t._v("targetStack")])]),t._v(" "),e("li",[t._v("当B渲染完了, B的"),e("code",[t._v("watcher")]),t._v("就会从栈顶弹出, 然后继续执行爹(A)的渲染, 此时就可以方便的拿到A的"),e("code",[t._v("renderWatcher")])])])]),t._v(" "),e("li",[t._v("以上就是"),e("code",[t._v("Dep.target")]),t._v("的来源, 具体代码见下方")])])]),t._v(" "),e("li",[t._v("如果有的话, 则调用"),e("code",[t._v("dep.depend()")]),t._v("进行依赖收集, 也就是将"),e("code",[t._v("watcher")]),t._v("对象添加到"),e("code",[t._v("dep")]),t._v("的"),e("code",[t._v("subs数组")]),t._v("中\n"),e("ol",[e("li",[e("code",[t._v("depend")]),t._v("是依赖的意思, 所以"),e("code",[t._v("dep.depend()")]),t._v("就是收集依赖")]),t._v(" "),e("li",[e("code",[t._v("在dep.depend()")]),t._v("中, 首先判断是否存在当前的"),e("code",[t._v("Dep.target")]),t._v(", 如果存在, 则执行"),e("code",[t._v("Dep.target.addDep(this)")]),t._v(", 这个"),e("code",[t._v("target")]),t._v("前面说了是"),e("code",[t._v("Watcher")]),t._v(", 而"),e("code",[t._v("this")]),t._v("表示的是当前dep实例, 也就是"),e("code",[t._v("defineReactive")]),t._v("中定义的"),e("code",[t._v("dep")]),t._v(", 用于当前属性值的依赖收集和派发更新(区别于子对象的成员增删时使用的dep)")]),t._v(" "),e("li",[e("code",[t._v("addDep")]),t._v("只接收一个参数, 就是"),e("code",[t._v("dep")]),t._v("对象")]),t._v(" "),e("li",[t._v("接下来获取"),e("code",[t._v("dep.id")]),t._v(", 每一个"),e("code",[t._v("dep")]),t._v("都有一个id属性, 主要用于计数, 所有"),e("code",[t._v("dep")]),t._v("共用一个初始值, 每创建一个"),e("code",[t._v("dep")]),t._v(", 则"),e("code",[t._v("id")]),t._v("自增一次, 用于唯一标识")]),t._v(" "),e("li",[t._v("首先判断 "),e("code",[t._v("newDepIds")]),t._v("中是否存在当前id, 这个 "),e("code",[t._v("newDepIds")]),t._v(" 是一个set数据结构, 内部存储的是唯一的值")]),t._v(" "),e("li",[t._v("如果没有的话, 就将当前"),e("code",[t._v("id")]),t._v("和当前"),e("code",[t._v("dep")]),t._v("实例, 存储到当前"),e("code",[t._v("watcher")]),t._v("实例的 "),e("code",[t._v("newDepIds")]),t._v("以及"),e("code",[t._v("newDeps")]),t._v("这两个集合中")]),t._v(" "),e("li",[t._v("然后判断在"),e("code",[t._v("depIds")]),t._v("这个set数据结构中, 是否存在当前id, 如果没有, 则调用"),e("code",[t._v("dep.addSub(this)")])]),t._v(" "),e("li",[e("code",[t._v("addSub")]),t._v("这个方法其实很简单, 只有一句话"),e("code",[t._v("this.subs.push(sub)")]),t._v(", 这个"),e("code",[t._v("sub")]),t._v("就是上面的"),e("code",[t._v("watcher")]),t._v("实例, 所以"),e("code",[t._v("addSub")]),t._v("的主要目的就是将当前"),e("code",[t._v("watcher")]),t._v("实例添加到当前"),e("code",[t._v("dep")]),t._v("实例的"),e("code",[t._v("subs")]),t._v("数组中, 收集起来")])])])]),t._v(" "),e("blockquote",[e("p",[t._v("看下方的"),e("code",[t._v("addDep")]),t._v("源码, 其实就是依赖收集的核心位置")]),t._v(" "),e("p",[t._v("和之前不一样的是, "),e("code",[t._v("watcher")]),t._v("对象其实也添加了"),e("code",[t._v("dep")]),t._v(", "),e("code",[t._v("watcher")]),t._v("中添加"),e("code",[t._v("dep")]),t._v("主要是为了处理一个细节, 后续会看到")]),t._v(" "),e("p",[t._v("这里的核心还是将"),e("code",[t._v("watcher")]),t._v("对象添加到"),e("code",[t._v("dep.subs")]),t._v("数组中")]),t._v(" "),e("p",[t._v("dep.depend方法, "),e("code",[t._v("depend")]),t._v("首先会将当前"),e("code",[t._v("dep")]),t._v("对象添加到"),e("code",[t._v("watcher")]),t._v("对象的集合中("),e("code",[t._v("Dep.target")]),t._v("), 并且最终会将"),e("code",[t._v("watcher")]),t._v("对象添加到"),e("code",[t._v("dep")]),t._v("实例的"),e("code",[t._v("subs")]),t._v("数组中, 这就是整个收集依赖的过程")])]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[t._v("如果"),e("code",[t._v("childOb")]),t._v("存在, 就说明他的儿子也是一个响应式对象。"),e("code",[t._v("childOb")]),t._v("定义于开始对当前属性添加getter和setter之前: "),e("code",[t._v("let childOb = !shallow && observe(val)")]),t._v("。如果当前属性值是一个对象, 那么就会基于当前对象创建Observer()对象, 并返回(也就是"),e("code",[t._v("observe的逻辑")]),t._v("), 不是对象则返回undefined, 也就没有"),e("code",[t._v("childOb")])]),t._v(" "),e("li",[t._v("如果说"),e("code",[t._v("childOb")]),t._v("判断通过, 那么就会调用"),e("code",[t._v("childOb.dep.depend")]),t._v("(每一个"),e("code",[t._v("Observer")]),t._v("的实例都有"),e("code",[t._v("dep")]),t._v("属性, 在"),e("code",[t._v("Observer")]),t._v("类的构造器中初始化: "),e("code",[t._v("this.dep = new Dep()")]),t._v(")让子对象来收集依赖")]),t._v(" "),e("li",[t._v("如果当前值是一个数组, 则执行"),e("code",[t._v("dependArray")]),t._v("去收集数组的依赖, "),e("code",[t._v("dependArray")]),t._v("的逻辑就是遍历数组, 判断当前成员是否添加过监听, 如果添加过, 则执行"),e("code",[t._v("target.__ob__.dep.depend()")]),t._v("进行依赖收集, 当前成员还是一个数组, 则递归调用"),e("code",[t._v("dependArray")]),t._v("继续为儿子们添加依赖")])]),t._v(" "),e("blockquote",[e("p",[t._v("这里要注意, 在 "),e("code",[t._v("defineReactive")]),t._v(" 函数中, 也创建了一个dep, 而"),e("code",[t._v("childOb.dep")]),t._v("是创建 "),e("code",[t._v("Observer")]),t._v("实例时, 在构造函数中初始化的")]),t._v(" "),e("p",[e("code",[t._v("defineReactive")]),t._v("中定义的"),e("code",[t._v("dep")]),t._v("对象是负责收集每一个属性的依赖")]),t._v(" "),e("p",[t._v("而"),e("code",[t._v("Observer")]),t._v("中初始化的"),e("code",[t._v("dep")]),t._v("对象是为当前子对象收集依赖")]),t._v(" "),e("p",[t._v("为子对象收集依赖的主要原因在于: 当子对象中添加成员或删除成员时, 也需要发送通知去更新视图。所以执行"),e("code",[t._v("childOb.dep.depend()")]),t._v("的主要目的就是当子对象的成员被添加或删除操作时, 发送通知进行派发更新, 后续讲解到"),e("code",[t._v("$set")]),t._v("和"),e("code",[t._v("$delete")]),t._v("时, 在进行解释")])]),t._v(" "),e("h2",{attrs:{id:"核心源码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#核心源码"}},[t._v("#")]),t._v(" 核心源码")]),t._v(" "),e("div",{staticClass:"language-ts line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果存在当前依赖目标, 即 watcher 对象, 则建立依赖")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Dep"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// * Dep的target就是Dep类的一个全局watcher, 是一个可选的静态属性")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// * Dep这个类主要是为了让数据和watcher之间建立一座桥梁")]),t._v("\n  dep"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("depend")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果子观察目标存在, 建立子对象的依赖关系")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("childOb"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// * 如果子value是一个对象, 就会进来")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ! 执行dep.depend() 去收集依赖")]),t._v("\n    childOb"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dep"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("depend")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("isArray")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("dependArray")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br")])]),e("h3",{attrs:{id:"pushtarget"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pushtarget"}},[t._v("#")]),t._v(" pushTarget")]),t._v(" "),e("div",{staticClass:"language-ts line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[t._v("Dep"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// * watcher栈")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" targetStack "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// * 在pushTarget执行的时候将target这个watcher push到栈中")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("pushTarget")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("Watcher"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// * 将target(watcher) push到这个targetStack中")]),t._v("\n  targetStack"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// * 将这个target给Dep.target")]),t._v("\n  Dep"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" target\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br")])]),e("h3",{attrs:{id:"dep的构造器、depend和addsub方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dep的构造器、depend和addsub方法"}},[t._v("#")]),t._v(" Dep的构造器、depend和addSub方法")]),t._v(" "),e("div",{staticClass:"language-ts line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Dep")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// * dep类主要的目的就是建立数据和watcher之间的桥梁")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" target"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("Watcher"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  id"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  subs"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Array")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Watcher"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// * subs是一个订阅数据变化的watcher集合")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constructor")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" uid"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("subs "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("depend")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Dep"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// * 如果存在target, 这个target就是watcher, 那么就会使用watcher.addDep(this)")]),t._v("\n      Dep"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addDep")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addSub")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sub"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Watcher"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("subs"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sub"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br"),e("span",{staticClass:"line-number"},[t._v("21")]),e("br"),e("span",{staticClass:"line-number"},[t._v("22")]),e("br")])]),e("h3",{attrs:{id:"watcher的adddep方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#watcher的adddep方法"}},[t._v("#")]),t._v(" Watcher的addDep方法")]),t._v(" "),e("div",{staticClass:"language-ts line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addDep")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dep"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Dep"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" id "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dep"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// newDepIds 是一个set对象")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("newDepIds"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("has")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("newDepIds"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("newDeps"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dep"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("depIds"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("has")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      dep"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addSub")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br")])]),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),e("blockquote",[e("p",[t._v("进入依赖收集和前面所说的Vue首次渲染的入口一致, 一直走到Watcher.get中, 然后执行"),e("code",[t._v("value = this.getter.call(vm, vm)")])]),t._v(" "),e("p",[t._v("而这个"),e("code",[t._v("getter")]),t._v("其实就是"),e("code",[t._v("updateComponent")]),t._v(", 最终执行内部的"),e("code",[t._v("vm._update(vm._render(), hydrating)")])]),t._v(" "),e("p",[t._v("而执行"),e("code",[t._v("vm._render")]),t._v("时, 就需要通过"),e("code",[t._v("this")]),t._v("访问"),e("code",[t._v("data")]),t._v("中的成员, 访问"),e("code",[t._v("data")]),t._v("中的成员, 首先就会进入前面的二级代理proxy方法, 触发"),e("code",[t._v("this[sourceKey][key]")]),t._v(", 接着访问就会触发我们上面所定义的"),e("code",[t._v("getter")]),t._v(", 开始进行依赖收集")]),t._v(" "),e("p",[t._v("收集依赖的过程, 主要就是通过访问属性时, 让属性对应的"),e("code",[t._v("dep")]),t._v(", 来收集组件(或Vue实例)对应的"),e("code",[t._v("Watcher")]),t._v(", 将对应的"),e("code",[t._v("Watcher")]),t._v("添加到"),e("code",[t._v("dep")]),t._v("的"),e("code",[t._v("subs")]),t._v("数组中来")]),t._v(" "),e("p",[t._v("一个相同"),e("code",[t._v("Watcher")]),t._v("只会被收集一次, 主要就是在depend中调用"),e("code",[t._v("Dep.target.addDep(this)")]),t._v(", 在"),e("code",[t._v("addDep")]),t._v("内部那个"),e("code",[t._v("newDepIds")]),t._v("对"),e("code",[t._v("dep.id")]),t._v("进行了校验, 添加过的"),e("code",[t._v("dep")]),t._v("就被标记了, 如有重复, 到第一个判断就退出了, 也就不会执行"),e("code",[t._v("dep.addSub")]),t._v("重复收集"),e("code",[t._v("watcher")]),t._v("了")]),t._v(" "),e("p",[t._v("当然, 派发更新后, 会对应的进行清除")])]),t._v(" "),e("ol",[e("li",[t._v("首先在"),e("code",[t._v("watcher")]),t._v("的"),e("code",[t._v("get")]),t._v("方法中, 会通过"),e("code",[t._v("pushTarget")]),t._v("给"),e("code",[t._v("Dep.target")]),t._v("赋值, 每次访问属性时或首次渲染时(初始化"),e("code",[t._v("Watcher")]),t._v(")会执行"),e("code",[t._v("get")]),t._v("方法, 而当数据变化之后, 也会执行"),e("code",[t._v("get")]),t._v("方法")]),t._v(" "),e("li",[t._v("也就是我们访问属性时, 会进行依赖收集")]),t._v(" "),e("li",[t._v("如果"),e("code",[t._v("Dep.target")]),t._v("存在, 也就是"),e("code",[t._v("watcher")]),t._v("实例存在, 接着调用"),e("code",[t._v("dep.depend()")]),t._v("方法, 在其中最终是要将"),e("code",[t._v("watcher")]),t._v("实例添加到"),e("code",[t._v("dep.subs")]),t._v("数组中")]),t._v(" "),e("li",[t._v("到此, 实际上一次依赖收集就已经完成了, 后续都是处理引用数据类型时进行深层次的依赖收集")])])])}),[],!1,null,null,null);s.default=n.exports}}]);