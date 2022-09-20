(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{549:function(s,t,a){s.exports=a.p+"assets/img/arrayMethods.42c8b934.png"},718:function(s,t,a){"use strict";a.r(t);var n=a(5),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"数组的响应式原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数组的响应式原理"}},[s._v("#")]),s._v(" 数组的响应式原理")]),s._v(" "),n("p",[s._v("数组响应式的核心代码, 在"),n("code",[s._v("Observer")]),s._v("类的构造函数中")]),s._v(" "),n("h2",{attrs:{id:"过程分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#过程分析"}},[s._v("#")]),s._v(" 过程分析")]),s._v(" "),n("ol",[n("li",[s._v("首先看一下"),n("code",[s._v("Observer")]),s._v("类的构造器, 先初始化三个变量"),n("code",[s._v("value(观测对象), dep(依赖对象), vmCount(实例计数器)")]),s._v(", 通过"),n("code",[s._v("observe")]),s._v("观察数组时, 初始化"),n("code",[s._v("ob")]),s._v("时创建"),n("code",[s._v("Observer")]),s._v("对象, 并赋值给"),n("code",[s._v("ob")])]),s._v(" "),n("li",[s._v("所以构造器参数, "),n("code",[s._v("value")]),s._v("表示当前数组, 然后初始化"),n("code",[s._v("dep")]),s._v("实例, 将实例计数器设置为0")]),s._v(" "),n("li",[s._v("接着将"),n("code",[s._v("__ob__")]),s._v("挂到当前value上, 也就是当前数组上, 设置为"),n("code",[s._v("不可枚举")]),s._v(", 防止数组遍历时找到该属性, 进而对"),n("code",[s._v("__ob__")]),s._v("设置响应式")]),s._v(" "),n("li",[s._v("通过"),n("code",[s._v("Array.isArray(value)")]),s._v("的判断后, 开始处理数组, 通过"),n("code",[s._v("hasProto")]),s._v("判断浏览器环境是否支持"),n("code",[s._v("__proto__")]),s._v(", 用于处理浏览器兼容性, 原理很简单: "),n("code",[s._v("const hasProto = '__proto__' in {}")]),s._v(", 浏览器环境的对象上存在"),n("code",[s._v("__proto__")]),s._v("属性")]),s._v(" "),n("li",[s._v("通过"),n("code",[s._v("hasProto")]),s._v("判断, 执行 "),n("code",[s._v("protoAugment(value, arrayMethods)")]),s._v("方法\n"),n("ol",[n("li",[s._v("函数有两个参数, 一个是"),n("code",[s._v("value")]),s._v("表示当前数组, 一个是"),n("code",[s._v("arrayMethods")]),s._v(", "),n("code",[s._v("arrayMethods")]),s._v("是一个经过响应式改造的和数组相关的7个方法的合集")]),s._v(" "),n("li",[n("code",[s._v("protoAugment")]),s._v("方法很简单, 就是重新设置当前数组的原型属性, 让他重新指向传入的第二个参数"),n("code",[s._v("arrayMethods")]),s._v(", 也就是改造后的数组原型方法(7个, 同时这7个方法又继承了最初的所有数组原型方法, 由于原型链查找特性, 是不断的通过实例往"),n("code",[s._v("__proto__")]),s._v("上层层查找, 优先查找爹, 所以优先调用最近的一级, 也就是重写后的方法)")]),s._v(" "),n("li",[s._v("其实这里的核心就在于"),n("code",[s._v("arrayMethods")]),s._v(" "),n("ol",[n("li",[s._v("首先使用数组的原型创建一个新对象 "),n("code",[s._v("const arrayMethods = Object.create(Array.prototype)")])]),s._v(" "),n("li",[s._v("然后声明一个数组, 用于存放需要修改的数组方法的名称(string), 也就是"),n("code",[s._v("methodsToPatch")]),s._v(", 意思是要修补的方法")]),s._v(" "),n("li",[s._v("这七个方法为: "),n("code",[s._v("push, pop, shift, unshift, splice, sort, reverse")]),s._v(", 这些方法都有一个共同的特点, 就是他们都会修改原数组, 而当数组的元素发生变化后, 需要调用"),n("code",[s._v("dep.notify")]),s._v("去发送通知, 派发更新, 通知watcher需要更新视图")]),s._v(" "),n("li",[s._v("但是原始的数组方法, 并不知道"),n("code",[s._v("dep")]),s._v("的存在, 也就不会调用"),n("code",[s._v("dep.notify")]),s._v("发送通知")]),s._v(" "),n("li",[s._v("重写的核心在于下面的源码中所描述的forEach循环")]),s._v(" "),n("li",[s._v("遍历上述的"),n("code",[s._v("methodsToPatch")])]),s._v(" "),n("li",[s._v("首先保存元素组方法"),n("code",[s._v("const original = arrayProto[method]")]),s._v(", 也就是"),n("code",[s._v("original")])]),s._v(" "),n("li",[s._v("然后调用Object.defineProperty 重新定义数组的方法, 如下\n"),n("ol",[n("li",[s._v("执行原始数组方法, 通过apply改变原有的this指向, 指向新的调用者(也就是当前数组, 比如组件"),n("code",[s._v("data")]),s._v("中的"),n("code",[s._v("arrayTst")]),s._v("), "),n("code",[s._v("args")]),s._v("获取调用时入参, 直接传入方法中调用, 并将结果存储到"),n("code",[s._v("result")]),s._v("中")]),s._v(" "),n("li",[s._v("获取当前数组的"),n("code",[s._v("ob")]),s._v("对象(这个this代表当前处理的数组, 这个数组在"),n("code",[s._v("observe")]),s._v("调用后添加了"),n("code",[s._v("__ob__")]),s._v(")")]),s._v(" "),n("li",[n("code",[s._v("inserted")]),s._v("用于暂存数组方法调用后新增的元素, 比如"),n("code",[s._v("push, unshift, splice")])]),s._v(" "),n("li",[s._v("如果是"),n("code",[s._v("push")]),s._v("或"),n("code",[s._v("unshift")]),s._v(", 参数就是新增的元素, 如果是"),n("code",[s._v("splice")]),s._v(", 那么新增的元素是参数的第三个元素开始的后续元素(前两个是需要删除元素的开始位置和数量)")]),s._v(" "),n("li",[s._v("如果有新增的元素, 则调用"),n("code",[s._v("ob.observeArray(inserted)")]),s._v(", 该方法作用是遍历入参, 执行"),n("code",[s._v("observe")]),s._v("方法, 如果新元素是对象, 那么将为其修改为响应式对象")]),s._v(" "),n("li",[s._v("最终通过"),n("code",[s._v("ob.dep.notify()")]),s._v("发送通知, 将对应的结果返回")]),s._v(" "),n("li",[s._v("返回当前数组方法的调用结果")])])])])])])]),s._v(" "),n("li",[s._v("若没有通过"),n("code",[s._v("hasProto")]),s._v("判断, 说明当前环境不支持"),n("code",[s._v("__proto__")]),s._v(", 则调用"),n("code",[s._v("copyAugment(value, arrayMethods, arrayKeys)")]),s._v(" "),n("ol",[n("li",[s._v("前两个参数和之前的"),n("code",[s._v("protoAugment")]),s._v("一样, 但是多了"),n("code",[s._v("arrayKeys")])]),s._v(" "),n("li",[n("code",[s._v("arrayKeys")]),s._v("定义如下: "),n("code",[s._v("const arrayKeys = Object.getOwnPropertyNames(arrayMethods)")])]),s._v(" "),n("li",[s._v("其实就是获取了"),n("code",[s._v("arrayMethods")]),s._v("中特有的成员的键名, 也就是获取在"),n("code",[s._v("arrayMethods")]),s._v("中新增的修补原数组的那7个方法的名称, 返回的是一个数组")]),s._v(" "),n("li",[s._v("然后在"),n("code",[s._v("copyAugment")]),s._v("内部遍历这七个元素, 使用"),n("code",[s._v("def")]),s._v("方法将上面重写后的"),n("code",[s._v("arrayMethods")]),s._v("中对应的方法直接附加在当前数组上, 并设置为不可枚举类型, 防止被遍历到(因为没有原型属性, 所以不能使用原型链, 直接挂载当前数组对象上, 设置为不可枚举即可, 方法的重写在"),n("code",[s._v("arrayMethods")]),s._v("初始化时已经完成呢)")])])]),s._v(" "),n("li",[s._v("上述5和6两个步骤, 核心作用就是修补会改变原数组数据的那7个方法, 当这些方法被调用时, 调用"),n("code",[s._v("dep.notify")]),s._v(", 通知watcher去更新视图")]),s._v(" "),n("li",[s._v("然后调用"),n("code",[s._v("observerArray(value)")]),s._v(", 传入数组, 遍历数组中所有可被遍历的成员, 将其中的对象成员转换为响应式对象")])]),s._v(" "),n("h2",{attrs:{id:"核心源码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#核心源码"}},[s._v("#")]),s._v(" 核心源码")]),s._v(" "),n("h3",{attrs:{id:"observer构造器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#observer构造器"}},[s._v("#")]),s._v(" Observer构造器")]),s._v(" "),n("div",{staticClass:"language-ts line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("constructor")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("any")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("value "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" value\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dep "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Dep")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vmCount "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// def 基于 Object.defineProperty封装, 将value.__ob__设置为不可枚举, 防止后续设置getter和setter时, __ob__ 被遍历")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ? 不可枚举属性主要作用就是遍历隐身")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("def")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'__ob__'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Array")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("isArray")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("hasProto"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 服务端渲染或部分浏览器环境下, 对象上没有 __proto__属性, 以此来区分是否服务端渲染")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("protoAugment")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" arrayMethods"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("copyAugment")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" arrayMethods"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" arrayKeys"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// * 遍历数组中的每一个对象, 创建一个 observer 实例")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("observeArray")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// * 遍历对象中的每一个属性, 添加getter/setter")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("walk")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])]),n("h3",{attrs:{id:"arraymethods初始化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#arraymethods初始化"}},[s._v("#")]),s._v(" arrayMethods初始化")]),s._v(" "),n("div",{staticClass:"language-ts line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" arrayProto "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Array")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用数组的原型创建一个新的对象, 对象的__proto__就是数组的原型")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" arrayMethods "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Object"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("create")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("arrayProto"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 修改数组元素的方法")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" methodsToPatch "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'push'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'pop'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'shift'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'unshift'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'splice'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sort'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'reverse'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * Intercept mutating methods and emit events\n */")]),s._v("\nmethodsToPatch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("forEach")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("method"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// cache original method")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 保存数组原方法")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" original "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" arrayProto"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("method"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 调用Object.defineProperty 重新定义数组的方法")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("def")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("arrayMethods"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" method"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mutator")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 执行数组的原始方法")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" result "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("original")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apply")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取数组对象的 ob 对象")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" ob "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("__ob__\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 暂存新增的元素")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" inserted\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("switch")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("method"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'push'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'unshift'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// * 如果是 push 或者 unshift 就是往数组最后或者最前面插入值的方法, 就把 inserted 的值置为 数组方法参数值")]),s._v("\n        inserted "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" args\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'splice'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// * 如果是 splice 那么这个inserted 就是 参数数组的第三个值, 也就是插入或者改变的值")]),s._v("\n        inserted "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("slice")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("inserted"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ob"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("observeArray")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("inserted"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// * 对参数数组中的每一项添加一次响应式(当然, 这一项首先得是 Object)")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// notify change")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// * 通知订阅者更新")]),s._v("\n    ob"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dep"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("notify")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" result\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br")])]),n("h4",{attrs:{id:"修补过程简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#修补过程简介"}},[s._v("#")]),s._v(" 修补过程简介")]),s._v(" "),n("blockquote",[n("p",[s._v("首先调用数组原有的方法")]),s._v(" "),n("p",[s._v("接着找到可能给数组新增元素的方法, 并取出新增的元素")]),s._v(" "),n("p",[s._v("如果新增了元素, 则通过"),n("code",[s._v("ob.observeArray")]),s._v("方法, 将新增元素中的对象数据类型转换为响应式对象")]),s._v(" "),n("p",[s._v("调用数组的ob对象的"),n("code",[s._v("notify")]),s._v("方法发送通知")]),s._v(" "),n("p",[s._v("最后返回当前数组方法的调用结果")])]),s._v(" "),n("h4",{attrs:{id:"最终结果如下所示"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#最终结果如下所示"}},[s._v("#")]),s._v(" 最终结果如下所示:")]),s._v(" "),n("p",[n("img",{attrs:{src:a(549),alt:"修改后的数组方法"}})]),s._v(" "),n("h3",{attrs:{id:"protoaugment函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#protoaugment函数"}},[s._v("#")]),s._v(" protoAugment函数")]),s._v(" "),n("div",{staticClass:"language-ts line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("protoAugment")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" src"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Object"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* eslint-disable no-proto */")]),s._v("\n  target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("__proto__ "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" src\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* eslint-enable no-proto */")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h3",{attrs:{id:"copyaugment"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#copyaugment"}},[s._v("#")]),s._v(" copyAugment")]),s._v(" "),n("div",{staticClass:"language-ts line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" arrayKeys "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Object"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getOwnPropertyNames")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("arrayMethods"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * Augment a target Object or Array by defining\n * hidden properties.\n */")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* istanbul ignore next */")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("copyAugment")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("target"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Object"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" src"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Object"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" keys"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Array")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" l "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" keys"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" l"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" key "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" keys"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("def")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" src"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("h3",{attrs:{id:"observer-中的-observearray实例方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#observer-中的-observearray实例方法"}},[s._v("#")]),s._v(" Observer 中的 observeArray实例方法")]),s._v(" "),n("div",{staticClass:"language-ts line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("observeArray")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("items"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Array")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("any")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" l "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" items"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" l"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// * 也就是说数组添加响应式，只针对数组下面是一个对象的条目，如果数组的成员是值类型就不会添加响应式")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("observe")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("items"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),n("blockquote",[n("p",[s._v("数组响应式的核心就在于将会改变原有数组元素的方法, 进行重新修补, 当这些方法被调用时, 调用"),n("code",[s._v("dep.notify")]),s._v("进行派发更新")]),s._v(" "),n("p",[s._v("调用"),n("code",[s._v("observerArray")]),s._v("去遍历所有数组中可遍历的成员, 如果该成员是对象, 则设置为响应式对象")]),s._v(" "),n("p",[s._v("可以发现上述代码中并没有处理数组对象的属性, 因为数组中的元素可能会非常多(上E的量级), 如果去处理数组对象的属性, 将会导致严重的性能问题")]),s._v(" "),n("p",[s._v("如果一定要处理数组中某个元素, 最好的方式是通过splice来实现, 比如说"),n("code",[s._v("arr = [1,2,3]")]),s._v(", 此时要改变第三个元素, "),n("code",[s._v("arr.splice(2, 1, 100)")])]),s._v(" "),n("p",[s._v("删除元素: "),n("code",[s._v("arr.splice(0)")]),s._v(", 不需要传个数, 代表从0开始全部删除")])])])}),[],!1,null,null,null);t.default=e.exports}}]);