(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{541:function(t,a,s){t.exports=s.p+"assets/img/OSNS.141e3a5b.png"},542:function(t,a,s){t.exports=s.p+"assets/img/Diff1.f3f407ac.png"},543:function(t,a,s){t.exports=s.p+"assets/img/Diff2.174905ef.png"},544:function(t,a,s){t.exports=s.p+"assets/img/Diff3.0a60afef.png"},545:function(t,a,s){t.exports=s.p+"assets/img/Diff4.a457f205.png"},546:function(t,a,s){t.exports=s.p+"assets/img/Diff5.b03990d5.png"},547:function(t,a,s){t.exports=s.p+"assets/img/Diff6.08a5d6ef.png"},548:function(t,a,s){t.exports=s.p+"assets/img/Diff7.cccf3dde.png"},668:function(t,a,s){"use strict";s.r(a);var e=s(5),d=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"snabbdom库中diff过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#snabbdom库中diff过程"}},[t._v("#")]),t._v(" Snabbdom库中Diff过程")]),t._v(" "),e("h2",{attrs:{id:"虚拟dom中的diff算法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#虚拟dom中的diff算法"}},[t._v("#")]),t._v(" 虚拟DOM中的Diff算法")]),t._v(" "),e("h3",{attrs:{id:"为什么要使用diff"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么要使用diff"}},[t._v("#")]),t._v(" 为什么要使用Diff?")]),t._v(" "),e("p",[t._v("渲染真实DOM的开销很大, DOM操作会引起浏览器的重排和重绘, 也就是浏览器的重新渲染, 浏览器重新渲染页面是非常耗性能的, 因为要重新渲染整个页面, 当大量数据变化后, 比如列表数据变化, 如果直接操作dom, 会让浏览器重新渲染整个列表")]),t._v(" "),e("p",[t._v("虚拟DOM中Diff的核心, 就是当数据变化后, 不直接操作DOM, 而是用JS对象来描述真实DOM, 当数据变化后, 会先对比的是描述DOM节点的JS对象是否发生变化, 找到所有发生变化的位置, 最后只去最小化的更新变化后的位置, 从而提高性能")]),t._v(" "),e("p",[t._v("Diff是一种算法, 类似于排序算法, 只不过, 排序算法是对一组数进行排序。而Diff算法是用于查找两棵树上虚拟节点的差异, 实现的方式有很多")]),t._v(" "),e("blockquote",[e("ol",[e("li",[e("p",[t._v("最麻烦的方式: 将新旧两棵树上每个节点对比一次, 如果有n个节点, 将对比n^2次, 找到差异后, 在循环遍历所有差异的部分, 去更新。")])]),t._v(" "),e("li",[e("p",[t._v("Snabbdom根据DOM的特点对传统的Diff算法做了优化")])])]),t._v(" "),e("ul",[e("li",[t._v("第一是DOM操作时很少会跨级别操作节点, 比如将父子节点换位")]),t._v(" "),e("li",[t._v("因此Snabbdom中只比较同级别的节点, 同级别不相同则直接删除重新创建, 而同级别的节点, 仅比较了一次, 减少了比较次数, 如果有n个节点, 也就只比较了n次, 大大降低了比较次数")])])]),t._v(" "),e("h2",{attrs:{id:"snabbdom中diff过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#snabbdom中diff过程"}},[t._v("#")]),t._v(" Snabbdom中Diff过程")]),t._v(" "),e("h3",{attrs:{id:"在对开始和结束节点比较时-一共分为四种情况"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在对开始和结束节点比较时-一共分为四种情况"}},[t._v("#")]),t._v(" 在对开始和结束节点比较时, 一共分为四种情况:")]),t._v(" "),e("ol",[e("li",[t._v("oldStartVnode / newStartVnode(旧头/新头)")]),t._v(" "),e("li",[t._v("oldEndVnode / newEndVnode(旧尾/新尾)")]),t._v(" "),e("li",[t._v("oldStartVnode / newEndVnode(旧头/新尾)")]),t._v(" "),e("li",[t._v("oldEndVnode / newStartVnode(旧尾/新头)")])]),t._v(" "),e("p",[e("img",{attrs:{src:s(541),alt:"节点对比"}})]),t._v(" "),e("h3",{attrs:{id:"开始和结束节点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开始和结束节点"}},[t._v("#")]),t._v(" 开始和结束节点")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("如果新旧开始节点是sameVnode(key, sel以及data?.is均相同)")]),t._v(" "),e("ul",[e("li",[t._v("调用"),e("code",[t._v("patchVnode()")]),t._v("对比和更新节点")]),t._v(" "),e("li",[t._v("索引均后移一位 => oldStartIdx++ / newStartIdx++")]),t._v(" "),e("li",[t._v("继续对比\n"),e("img",{attrs:{src:s(542),alt:"1"}}),t._v(";")])])]),t._v(" "),e("li",[e("p",[t._v("如果新旧节点的尾部是sameVnode")]),t._v(" "),e("ul",[e("li",[t._v("调用"),e("code",[t._v("patchVnode()")]),t._v("对比和更新节点")]),t._v(" "),e("li",[t._v("索引均前移一位 => oldEndIdx-- / newEndIdx--")]),t._v(" "),e("li",[t._v("继续对比")])])])]),t._v(" "),e("p",[e("img",{attrs:{src:s(543),alt:"4"}}),t._v(";")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("注: 在sameVnode的情况下, 新节点不会重新创建dom元素, 而是复用老节点上的dom元素, 也就是patchVnode方法进来缓存的那个elm对象")])])]),t._v(" "),e("h3",{attrs:{id:"旧头-新尾"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#旧头-新尾"}},[t._v("#")]),t._v(" 旧头/新尾")]),t._v(" "),e("ul",[e("li",[t._v("如果两个节点是sameVnode, 则调用patchVnode对比和更新节点")]),t._v(" "),e("li",[t._v("将oldStartVnode对应的DOM元素, 移动到右边, 更新索引\n"),e("ul",[e("li",[t._v("说明旧节点的开始元素实际上已经成了新节点的尾部元素, 由于最终完成diff后, 要保持新旧节点数组的相同, 因此要旧节点的开始节点移动到尾部去")]),t._v(" "),e("li",[t._v("同时oldStartIdx++, newEndIdx-- 然后继续对比")])])])]),t._v(" "),e("p",[e("img",{attrs:{src:s(544),alt:"3"}})]),t._v(" "),e("h3",{attrs:{id:"旧尾-新头"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#旧尾-新头"}},[t._v("#")]),t._v(" 旧尾/新头")]),t._v(" "),e("ul",[e("li",[t._v("如果旧节点的尾部节点和新节点的头部节点是sameVnode, 则调用patchVnode对比更新两个节点的差异")]),t._v(" "),e("li",[t._v("将oldEndVnode对应的DOM元素移动到开头")]),t._v(" "),e("li",[t._v("oldEndIdx--, 同时newStartIdx++, 继续对比")])]),t._v(" "),e("p",[e("img",{attrs:{src:s(545),alt:"4"}})]),t._v(" "),e("h3",{attrs:{id:"非上述四种情况"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#非上述四种情况"}},[t._v("#")]),t._v(" 非上述四种情况")]),t._v(" "),e("p",[t._v("说明开始和结束节点均互相不相同, 此时要去旧节点数组中依次查找是否存在相同的新节点")]),t._v(" "),e("ol",[e("li",[t._v("遍历新的开始节点, 在旧节点数组中查找是否存在相同的key值的节点\n"),e("ol",[e("li",[t._v("如果没有找到, 说明此时的开始节点是新节点, 需要创建新的dom元素, 并且将其插入到旧节点的最前面")]),t._v(" "),e("li",[t._v("如果找到了, 并且需要判断节点的sel属性和老节点的sel属性是否相同, 如果sel不相同, 说明不是same节点, 则还是要创建dom元素, 并插入到最前方")]),t._v(" "),e("li",[t._v("如果是same节点, 则会将找出来的旧节点赋值给"),e("code",[t._v("elmToMove")]),t._v("变量, 然后调用patchVnode对比和更新两者差异, 然后将elmToMove节点对应的dom元素移动到最前面")])])])]),t._v(" "),e("p",[e("img",{attrs:{src:s(546),alt:"5"}})]),t._v(" "),e("h3",{attrs:{id:"循环结束"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#循环结束"}},[t._v("#")]),t._v(" 循环结束")]),t._v(" "),e("p",[t._v("还有一些收尾工作")]),t._v(" "),e("ul",[e("li",[t._v("当老节点的所有子结点先遍历完(oldStartIdx > oldEndIdx), 循环结束(老节点先遍历完, 新节点还有剩余, 剩下的直接调用addVnodes批量插入)")])]),t._v(" "),e("p",[e("img",{attrs:{src:s(547),alt:"6"}})]),t._v(" "),e("ul",[e("li",[t._v("当新节点的所有子结点先遍历完(newStartIdx > newEndIdx), 循环结束(新节点先遍历完, 老节点还有剩余, 直接删除)")])]),t._v(" "),e("p",[e("img",{attrs:{src:s(548),alt:"7"}})])])}),[],!1,null,null,null);a.default=d.exports}}]);