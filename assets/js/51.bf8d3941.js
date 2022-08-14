(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{594:function(v,_,e){"use strict";e.r(_);var t=e(5),a=Object(t.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"模块化开发概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模块化开发概述"}},[v._v("#")]),v._v(" 模块化开发概述")]),v._v(" "),e("p",[v._v("模块化可以说是当下最重要的前端开发范式之一, 随着前端应用的日益复杂, 我们的项目代码已经逐渐膨胀到了不得不花大量时间去管理的程度，而模块化就是最主流的代码组织方式, 他通过将复杂代码按照功能的不同去划分不同的模块这样的组织方式, 去提高开发效率, 降低维护成本。")]),v._v(" "),e("p",[e("code",[v._v("模块化")]),v._v("只是一个思想, 一种开发的理论, 并不是一个具体的实现方式。")]),v._v(" "),e("h2",{attrs:{id:"模块化演变过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模块化演变过程"}},[v._v("#")]),v._v(" 模块化演变过程")]),v._v(" "),e("p",[v._v("早期的前端标准, 根本没有预料到前端行业会有今天的规模， 所以很多设计上的遗留问题, 就导致了实现前端模块化会有一些问题, 虽说这些问题都已经被一些标准或者工具解决, 但是解决这些问题, 也是需要一些过程。")]),v._v(" "),e("ul",[e("li",[v._v("最早期的js模块化是"),e("code",[v._v("基于文件划分的方式")]),v._v("去实现的, 这也是web中最原始的模块系统。\n"),e("ul",[e("li",[v._v("就是约定一个js文件就是一个模块, 然后通过script标签引入到html中, 一个script就对应一个模块。")]),v._v(" "),e("li",[v._v("然后在代码中直接调用模块中的全局成员, 这个成员可能是一个变量, 也可能是一个函数")]),v._v(" "),e("li",[v._v("这就造成了下面的缺陷:\n"),e("ul",[e("li",[v._v("所有的模块都在全局范围内工作, 没有一个独立的私有空间, 也就造成了————"),e("code",[v._v("全局作用域污染")]),v._v("(并且模块内部所有的成员都可以在外部任意访问)")]),v._v(" "),e("li",[v._v("同时模块多了之后, 很容易产生"),e("code",[v._v("命名冲突")])]),v._v(" "),e("li",[e("code",[v._v("无法管理各个模块间的依赖关系")])])])]),v._v(" "),e("li",[v._v("总的来说这种方式完全依靠约定，项目体量一旦大起来, 就不太行了")])])]),v._v(" "),e("li",[v._v("在上面的基础上, 进一步加强了模块化, 采用"),e("code",[v._v("命名空间方式")]),v._v(" "),e("ul",[e("li",[v._v("约定所有的模块都只暴露一个全局对象, 所有的模块成员, 都挂载在这个全局对象下")]),v._v(" "),e("li",[v._v("这样的方式优点是: 减少了"),e("code",[v._v("命名冲突")]),v._v("的可能性, 缺点是: 依然没有私有空间, 也没有解决依赖关系")])])]),v._v(" "),e("li",[v._v("使用"),e("code",[v._v("IIFE(立即执行函数)")]),v._v(", 去为模块提供私有空间\n"),e("ul",[e("li",[v._v("具体做法就是将模块中每一个成员, 都放在一个函数中, 对于需要暴露给外部的成员, 可以通过"),e("code",[v._v("window.xxx")]),v._v("挂载到全局对象上")]),v._v(" "),e("li",[v._v("这种方式的优点:\n"),e("ul",[e("li",[v._v("实现了私有成员, 确保了私有变量的安全")]),v._v(" "),e("li",[v._v("还可以利用自执行函数的参数, 作为依赖声明去使用, 比如要使用JQ, 就可以通过函数传参的方式, 传递一个jq作为参数在iife中使用")])])])])])]),v._v(" "),e("p",[v._v("上述方案就是早期前端开发者在没有工具和规范的情况下对模块化的落地实现方式")]),v._v(" "),e("p",[v._v("确实解决了各种各样的问题, 但是还是存在一些没有解决的问题, 针对这些问题, 下面单独细说。")]),v._v(" "),e("h2",{attrs:{id:"模块化规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模块化规范"}},[v._v("#")]),v._v(" 模块化规范")]),v._v(" "),e("p",[v._v("上面的方式都是以"),e("code",[v._v("原始的模块系统")]),v._v("为基础, 通过约定的方式去实现模块化的代码组织, 这些方式在不同的开发者去实施的时候会有一些细微的差别, 为了统一不同开发者和不同项目之间的差异，就需要一些标准, 去规范模块化的实现方式, 另外, 在模块化当中针对模块加载的问题, 都是通过script标签, 手动的去引入需要使用的模块, 也就说模块的加载并不受代码的控制。")]),v._v(" "),e("p",[v._v("比如说项目中依赖一个模块, 但是在html中忘记引用该模块, 就要出问题，又或者说我们移除了一个模块, 但是在html中又忘了删除，也要出问题。")]),v._v(" "),e("p",[v._v("因此，我们需要一个基础的代码, 去实现通过代码自动的加载模块, 也就是需要: "),e("code",[v._v("模块化标准")]),v._v(" + "),e("code",[v._v("模块加载器")])]),v._v(" "),e("h3",{attrs:{id:"commonjs规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#commonjs规范"}},[v._v("#")]),v._v(" CommonJS规范")]),v._v(" "),e("p",[v._v("首先想到的就是CommonJS规范, 他是Node提出的一个模块化标准, Node中的所有模块代码, 都必须遵循CommonJS规范。")]),v._v(" "),e("p",[v._v("这个规范约定如下:")]),v._v(" "),e("ul",[e("li",[v._v("一个文件就是一个模块")]),v._v(" "),e("li",[v._v("每个模块都有单独的作用域")]),v._v(" "),e("li",[v._v("通过module.exports导出成员")]),v._v(" "),e("li",[v._v("通过require函数载入模块")])]),v._v(" "),e("p",[v._v("但如果说我们在浏览器端也是用CommonJS, 就会出一些问题")]),v._v(" "),e("p",[v._v("CommonJS约定的是以同步的方式去加载模块, 因为Node的机制就是在启动的时候加载模块, 执行过程中是不需要加载的, 只会去使用。所以这样的方式在node中没有问题, 但是在浏览器端, 在浏览器端使用CommonJS规范, 每一次页面加载都会导致大量的同步请求出现")]),v._v(" "),e("p",[v._v("所以在早期的浏览器前端模块化中并没有选择CommonJS规范, 而是在CommonJS的基础上, 重新设计了一个规范, 叫做"),e("code",[v._v("AMD(Asynchronous Module Definition)")]),v._v(", 也就是异步的模块定义规范.")]),v._v(" "),e("h3",{attrs:{id:"amd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#amd"}},[v._v("#")]),v._v(" AMD")]),v._v(" "),e("h3",{attrs:{id:"require-js"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#require-js"}},[v._v("#")]),v._v(" Require.js")]),v._v(" "),e("p",[v._v("AMD规范出现后, 为他设计的一个库, 它实现了AMD规范, 另外, 它本身也是一个非常强大的模块加载器。")]),v._v(" "),e("h4",{attrs:{id:"define"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#define"}},[v._v("#")]),v._v(" define")]),v._v(" "),e("p",[v._v("AMD当中约定, 每一个模块都必须通过"),e("code",[v._v("define")]),v._v("这个函数去定义, 默认接收两个参数。")]),v._v(" "),e("p",[v._v("如果是三个参数, 第一个参数时模块名, 第二个参数是数组, 用于声明模块依赖项, 第三个参数是一个回调函数, 参数对应依赖项导出的成员, 就是为当前模块提供私有空间, 如果要向外部导出成员, 需要return需要导出的成员")]),v._v(" "),e("h4",{attrs:{id:"require"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#require"}},[v._v("#")]),v._v(" require")]),v._v(" "),e("p",[v._v("除此之外, 还提供了一个require函数, 用于自动加载模块, 用法和define类似, 但是"),e("code",[v._v("require")]),v._v("只是用来加载模块, 一旦他需要加载模块, 内部就会自动创建一个script标签, 去发送对应地脚本文件的请求, 并且执行相应的模块代码。")]),v._v(" "),e("h4",{attrs:{id:"amd缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#amd缺点"}},[v._v("#")]),v._v(" AMD缺点")]),v._v(" "),e("p",[v._v("目前大多数第三方库都支持AMD规范, 他的生态比较好, 但是他也有较多缺点:")]),v._v(" "),e("ul",[e("li",[v._v("AMD使用起来相对复杂")]),v._v(" "),e("li",[v._v("模块如果划分过细, 那么在同一个文件中对JS的请求就会很多(模块JS文件请求频繁)")])]),v._v(" "),e("p",[v._v("因此, 他只能算是一种妥协的方式, 并不能算是一种很好的实现方案, 但是在当时的环境下, 他还是非常有意义的, 他毕竟给前端模块化提供了标准。")]),v._v(" "),e("h3",{attrs:{id:"其他模块化规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他模块化规范"}},[v._v("#")]),v._v(" 其他模块化规范")]),v._v(" "),e("p",[v._v("除了CommonJS和AMD之外, 还有淘宝给出的Sea.js, 以及他提出的"),e("code",[v._v("CMD")]),v._v("规范, 有点类似CommonJS, 用法也和AMD差不多")]),v._v(" "),e("p",[v._v("当然上面的我都没有接触过, 我接触前端的时候已经是所谓的『和平时期』了, 但是了解他们, 也是相对重要的")]),v._v(" "),e("h2",{attrs:{id:"模块化标准规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模块化标准规范"}},[v._v("#")]),v._v(" 模块化标准规范")]),v._v(" "),e("p",[v._v("随着技术的发展, 模块化的标准也逐渐完善, 现在的前端模块化已经非常成熟了, 并且针对前端模块化也已经非常的统一, 就是在Node.js环境中, 使用"),e("code",[v._v("CommonJS")]),v._v("规范, 在浏览器中使用"),e("code",[v._v("ES Module")]),v._v(".")]),v._v(" "),e("p",[e("code",[v._v("ES Modules")]),v._v("是ES2015提出来的新标准, 也就是说他比较新, 并且可能有一些环境兼容问题, 最早在这个标准刚出的时候, 最早的主流浏览器都不支持, 但是随着webpack这些打包器的流行, 他也被各大浏览器厂商逐渐接受, 并且他比起社区规范更为完善, 因为他在"),e("code",[v._v("语言层面")]),v._v("实现了模块化, 同时现如今的大部分浏览器都是原生就支持"),e("code",[v._v("ES Module")]),v._v(", 意味着以后也许可以直接使用这个特性开发网页应用。")])])}),[],!1,null,null,null);_.default=a.exports}}]);