(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{549:function(v,_,e){v.exports=e.p+"assets/img/watcher.03c04dfd.png"},749:function(v,_,e){"use strict";e.r(_);var t=e(5),c=Object(t.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"数据响应式原理-总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据响应式原理-总结"}},[v._v("#")]),v._v(" 数据响应式原理-总结")]),v._v(" "),t("h2",{attrs:{id:"图示总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#图示总结"}},[v._v("#")]),v._v(" 图示总结")]),v._v(" "),t("p",[t("img",{attrs:{src:e(549),alt:"总结"}})]),v._v(" "),t("h2",{attrs:{id:"过程总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#过程总结"}},[v._v("#")]),v._v(" 过程总结")]),v._v(" "),t("ol",[t("li",[v._v("整个响应式是从"),t("code",[v._v("Vue实例的_init")]),v._v("方法开始的")])]),v._v(" "),t("ul",[t("li",[v._v("通过"),t("code",[v._v("initState")]),v._v("初始化"),t("code",[v._v("Vue")]),v._v("实例的状态")]),v._v(" "),t("li",[v._v("在"),t("code",[v._v("initState")]),v._v("中调用"),t("code",[v._v("initData")])]),v._v(" "),t("li",[t("code",[v._v("initData")]),v._v("通过"),t("code",[v._v("proxy")]),v._v("方法将"),t("code",[v._v("data")]),v._v("属性注入到"),t("code",[v._v("Vue实例")]),v._v("上")]),v._v(" "),t("li",[v._v("调用"),t("code",[v._v("observe()")]),v._v("方法将"),t("code",[v._v("data")]),v._v("对象转换为响应式对象")])]),v._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[t("code",[v._v("observe")]),v._v("方法就是响应式的入口")])]),v._v(" "),t("ul",[t("li",[v._v("接收的参数是响应式要处理的对象")]),v._v(" "),t("li",[v._v("判断参数"),t("code",[v._v("value")]),v._v("是否为对象, 或者是否为VNode实例, 如果不是对象或者为VNode实例, 直接返回")]),v._v(" "),t("li",[v._v("判断"),t("code",[v._v("value")]),v._v("对象上是否存在"),t("code",[v._v("__ob__")]),v._v(", 如果有直接返回")]),v._v(" "),t("li",[v._v("核心: 如果没有, 创建 "),t("code",[v._v("observer")]),v._v(" 实例对象")]),v._v(" "),t("li",[v._v("返回 上面创建的 "),t("code",[v._v("observer")]),v._v(" 实例对象")])]),v._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[v._v("创建 "),t("code",[v._v("Observer")]),v._v("实例对象 ("),t("code",[v._v("new Observer(value)")]),v._v(")")])]),v._v(" "),t("ul",[t("li",[t("code",[v._v("def(value, '__ob__', this)")]),v._v(", 为当前的value对象, 定义一个不可枚举的 "),t("code",[v._v("__ob__")]),v._v("属性, 这个属性指向当前的"),t("code",[v._v("observer")]),v._v("实例")]),v._v(" "),t("li",[v._v("进行数组的响应式处理, 也就是设置"),t("code",[v._v("arrayMethods")]),v._v(", 然后调用"),t("code",[v._v("protoAugment 或 copyAugment")]),v._v(", 将重写的那7个方法挂载到数组原型上(支持原型)或者当前属性上(不支持原型), 最后调用"),t("code",[v._v("observeArray")]),v._v(", 为数组中的对象添加响应式\n"),t("ul",[t("li",[v._v("数组调用上面拦截的7个方法"),t("code",[v._v("pop, push, splice, unshift, shift, sort, reverse")]),v._v("会触发当前数组身上的"),t("code",[v._v("dep")]),v._v("实例的"),t("code",[v._v("notify")]),v._v("去派发更新")]),v._v(" "),t("li",[v._v("更改完上面的7个方法后, 遍历数组中的每个成员, 对每个成员调用"),t("code",[v._v("observe")]),v._v(", 如果该成员是对象, 则会转换为"),t("code",[v._v("响应式对象")]),v._v(", 不是对象则不会, 所以下标直接更新数组的值是不会引起组件更新的")]),v._v(" "),t("li",[v._v("不为对象下所有属性添加响应式的原因: 数组没有固定的键名, 也许会有非常庞大的数组, 容易引起性能问题")])])]),v._v(" "),t("li",[v._v("对象的响应式处理, 调用 "),t("code",[v._v("walk")]),v._v(" 方法\n"),t("ul",[t("li",[v._v("深度遍历 对象的所有属性, 对每一个属性调用 "),t("code",[v._v("defineReactive")])])])])]),v._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[v._v("defineReactive")])]),v._v(" "),t("ul",[t("li",[v._v("为每一个属性创建 "),t("code",[v._v("dep")]),v._v(" 对象, 让"),t("code",[v._v("dep")]),v._v("去收集依赖")]),v._v(" "),t("li",[v._v("如果当前属性的值是对象, 则调用 "),t("code",[v._v("observe")]),v._v("继续添加响应式处理, 转换为响应式对象")]),v._v(" "),t("li",[v._v("定义"),t("code",[v._v("getter")]),v._v(" "),t("ul",[t("li",[v._v("收集依赖, 如果属性的值是对象, 则需要为子对象的值收集依赖")]),v._v(" "),t("li",[v._v("返回属性的值")])])]),v._v(" "),t("li",[v._v("定义"),t("code",[v._v("setter")]),v._v(" "),t("ul",[t("li",[v._v("保存新值")]),v._v(" "),t("li",[v._v("如果新的值是对象, 则调用 "),t("code",[v._v("observe")]),v._v(" 将新设置的对象转换为响应式对象")]),v._v(" "),t("li",[v._v("最后要发送通知, 派发更新, 也就是调用 "),t("code",[v._v("dep.notify()")])])])])]),v._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[v._v("收集依赖")])]),v._v(" "),t("ul",[t("li",[v._v("在 "),t("code",[v._v("Watcher")]),v._v(" 对象的 "),t("code",[v._v("get")]),v._v(" 方法中调用 "),t("code",[v._v("pushTarget")]),v._v(" , 将当前的"),t("code",[v._v("watcher")]),v._v("实例记录 到"),t("code",[v._v("Dep.target")]),v._v(" 属性中")]),v._v(" "),t("li",[v._v("访问 data 中的成员时就会触发收集依赖, 也就是触发"),t("code",[v._v("defineReactive")]),v._v(" 的 "),t("code",[v._v("getter")]),v._v(", 在"),t("code",[v._v("getter")]),v._v("中收集依赖")]),v._v(" "),t("li",[v._v("把属性对应的 "),t("code",[v._v("watcher")]),v._v(" 对象添加到 "),t("code",[v._v("dep")]),v._v(" 的"),t("code",[v._v("subs")]),v._v("数组中")]),v._v(" "),t("li",[v._v("如果这个属性的值是一个对象, 此时要创建一个 childOb 对象, 为子对象收集依赖, 目的是将来子对象添加和删除成员时(发生变化)也会发送通知")]),v._v(" "),t("li",[v._v("数组中成员发生变化其实就用到了这个 "),t("code",[v._v("childOb")])])]),v._v(" "),t("ol",{attrs:{start:"6"}},[t("li",[v._v("Watcher")])]),v._v(" "),t("ul",[t("li",[v._v("之前演示了数据发生变化时, Watcher 的执行过程")]),v._v(" "),t("li",[v._v("当数据发生变化时, 会调用 "),t("code",[v._v("dep.notify()")]),v._v("发送通知, 内部会调用 "),t("code",[v._v("watcher")]),v._v(" 实例的 "),t("code",[v._v("update")]),v._v(" 方法")]),v._v(" "),t("li",[v._v("在"),t("code",[v._v("update")]),v._v("方法中, 调用 "),t("code",[v._v("queueWatcher")]),v._v("函数, 在内部首先判断 "),t("code",[v._v("watcher")]),v._v(" 是否被处理, 如果没有, 则添加到 "),t("code",[v._v("queue")]),v._v("队列中, 并通过 "),t("code",[v._v("nextTick(flushSchedulerQueue)")]),v._v(" 最终调用"),t("code",[v._v("flushSchedulerQueue")]),v._v("方法刷新任务队列函数")]),v._v(" "),t("li",[t("code",[v._v("flushSchedulerQueue")]),v._v(" "),t("ul",[t("li",[v._v("首先触发 "),t("code",[v._v("beforeUpdate")]),v._v("钩子函数("),t("code",[v._v("renderWatcher")]),v._v(")")]),v._v(" "),t("li",[v._v("调用 "),t("code",[v._v("watcher.run")]),v._v(" "),t("ul",[t("li",[v._v("在"),t("code",[v._v("watcher.run")]),v._v("方法中, 调用 "),t("code",[v._v("watcher.get")])]),v._v(" "),t("li",[v._v("然后调用 "),t("code",[v._v("watcher.getter")]),v._v("方法")]),v._v(" "),t("li",[t("code",[v._v("watcher.getter")]),v._v("对于"),t("code",[v._v("renderWatcher")]),v._v("就是"),t("code",[v._v("updateComponent")]),v._v(", "),t("code",[v._v("computedWatcher")]),v._v("就是获取属性的函数(用户设置的)")]),v._v(" "),t("li",[t("code",[v._v("userWatcher")]),v._v("会继续触发 "),t("code",[v._v("cb")]),v._v(" 方法, 也就是用户设置的 "),t("code",[v._v("watch")]),v._v("属性侦听器")])])]),v._v(" "),t("li",[v._v("运行完成 "),t("code",[v._v("watcher.run")]),v._v("之后, 会清空上一次的依赖， 重置 "),t("code",[v._v("watcher")]),v._v("中的一些状态")]),v._v(" "),t("li",[v._v("触发 "),t("code",[v._v("activated")]),v._v("钩子")]),v._v(" "),t("li",[v._v("触发 "),t("code",[v._v("updated")]),v._v(" 钩子")])])])])])}),[],!1,null,null,null);_.default=c.exports}}]);