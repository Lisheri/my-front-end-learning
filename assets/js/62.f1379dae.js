(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{609:function(t,a,s){"use strict";s.r(a);var _=s(5),e=Object(_.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"webpack快速上手"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack快速上手"}},[t._v("#")]),t._v(" webpack快速上手")]),t._v(" "),s("p",[t._v("作为最主流的前端打包器, 他不仅仅是对js的模块化, 可以轻松的对前端开发中所有资源进行模块化。目前webpack基本上覆盖了绝大多数web开发。")]),t._v(" "),s("h2",{attrs:{id:"快速上手"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速上手"}},[t._v("#")]),t._v(" 快速上手")]),t._v(" "),s("ol",[s("li",[t._v("首先初始化一个package.json")]),t._v(" "),s("li",[t._v("安装webpack核心模块 "),s("code",[t._v("yarn add webpack webpack-cli --dev")])]),t._v(" "),s("li",[s("code",[t._v("yarn webpack -v")]),t._v(" 查看当前webpack版本, 我的版本是"),s("code",[t._v("5.36.2")])]),t._v(" "),s("li",[t._v("默认使用方式就是直接通过"),s("code",[t._v("yarn webpack")]),t._v("这个命令去打包, 他会自动的从"),s("code",[t._v("src/index.js")]),t._v("开始打包")])]),t._v(" "),s("p",[t._v("最终就将"),s("code",[t._v("index.js")]),t._v("打包出来新增一个"),s("code",[t._v("dist")]),t._v("目录, 打包到该目录下的"),s("code",[t._v("main.js")]),t._v("中")]),t._v(" "),s("p",[t._v("当然, 可以把这个命令抽出来, 放到package.json中, 同时也可以不再使用"),s("code",[t._v("index.js")]),t._v("和"),s("code",[t._v('type="module"')]),t._v(", 仅使用"),s("code",[t._v("./dist/main.js")]),t._v("即可")]),t._v(" "),s("h2",{attrs:{id:"webpack配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack配置文件"}},[t._v("#")]),t._v(" webpack配置文件")]),t._v(" "),s("p",[t._v("webpack4.x以后的版本, 支持0配置直接启动打包, 按照约定直接从"),s("code",[t._v("src/index.js -> dist/main.js")])]),t._v(" "),s("p",[t._v("添加一个"),s("code",[t._v("webpack.config.js")]),t._v("文件, 该文件导出一个对象, 通过导出对象的属性添加选项。")]),t._v(" "),s("h3",{attrs:{id:"配置输入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置输入"}},[t._v("#")]),t._v(" 配置输入")]),t._v(" "),s("p",[s("code",[t._v("entry")]),t._v("用于配置文件输入相对路径(相对路径不能省略"),s("code",[t._v("./")]),t._v("), 接受一个字符串相对路径")]),t._v(" "),s("h3",{attrs:{id:"配置输出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置输出"}},[t._v("#")]),t._v(" 配置输出")]),t._v(" "),s("p",[s("code",[t._v("output")]),t._v("用于配置文件输出路径, 接受一个对象, 可以添加"),s("code",[t._v("path")]),t._v(", 使用绝对路径表示输出的位置, "),s("code",[t._v("filename")]),t._v("配置输出的文件名")]),t._v(" "),s("p",[t._v("大概如下所示:")]),t._v(" "),s("div",{staticClass:"language-javaScript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// webpack.config.js")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    entry"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/main.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 入口文件, 如果是一个相对路径, 前面的./是不能省略的")]),t._v("\n    output"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// output设置输出文件的配置, 该属性是一个对象")]),t._v("\n         filename"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bundle.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置输出文件名称")]),t._v("\n         path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dist'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// path执行文件输出所在的目录, 他必须使用绝对路径, 默认就是dist")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("h2",{attrs:{id:"webpack工作模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack工作模式"}},[t._v("#")]),t._v(" webpack工作模式")]),t._v(" "),s("p",[t._v("webpack4.x新增"),s("code",[t._v("工作模式")]),t._v("的用法, 这种用法大大简化了webpack复杂程度, 可以理解为针对不同环境的几种预设配置")]),t._v(" "),s("p",[t._v("执行"),s("code",[t._v("yarn webpack")]),t._v("打包会有一个警告, 说没有预设一个"),s("code",[t._v("mode")]),t._v("的属性, "),s("code",[t._v("The 'mode' option has not been set")]),t._v(", 然后webpack默认使用"),s("code",[t._v("production")]),t._v("模式工作")]),t._v(" "),s("p",[t._v("在"),s("code",[t._v("production")]),t._v("模式下, webpack会自动的去启用一些优化插件, 比如自动压缩代码。这对实际生产环境非常舒适, 但是在开发环境, 却不好阅读, 也不好调试")]),t._v(" "),s("p",[s("code",[t._v("yarn webpack --mode development")]),t._v("就是使用开发模式, 他会自动优化打包速度, 并且不会压缩代码, 还会添加一些调试过程中的辅助到代码中")]),t._v(" "),s("p",[s("code",[t._v("yarn webpack --mode none")]),t._v(", "),s("code",[t._v("none")]),t._v("模式下webpack运行最原始的打包, 不会做任何额外的处理")]),t._v(" "),s("p",[t._v("目前只有这三种工作模式, 也可以直接在webpack的配置文件中设置, 添加一个mode属性")]),t._v(" "),s("h2",{attrs:{id:"webpack打包结果运行原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack打包结果运行原理"}},[t._v("#")]),t._v(" webpack打包结果运行原理")]),t._v(" "),s("p",[t._v("为了更好地理解打包后的代码, 先将工作模式设置为"),s("code",[t._v("none")])]),t._v(" "),s("p",[t._v("使用快捷键"),s("code",[t._v("command + K + command + 0(数字零)")]),t._v("折叠代码, 以便于了解代码结构, 发现他整体生成的代码是一个立即执行函数, 这个函数就是webpack工作入口, 接收一个"),s("code",[t._v("modules")]),t._v("作为参数")]),t._v(" "),s("p",[t._v("调用的时候传入一个数组, 数组中每个元素是一个参数列表相同的函数, 函数就是对应地模块, 实现一个私有作用域")]),t._v(" "),s("p",[t._v("但是webpack5.x做了修改, 首先立即执行函数没有"),s("code",[t._v("modules")]),t._v("这个形参, 同时也没有传入任何参数")]),t._v(" "),s("p",[t._v("进入立即执行函数")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("首先定义的是"),s("code",[t._v("__webpack_modules")]),t._v(", 这个表示所有"),s("code",[t._v("export")]),t._v("过, 并且有引入的文件(不管是入口文件直接引入, 还是通过文件引入的引入的引入的引入最终反正头部一个头部文件被入口文件引入了都算)(只是定义(导出)并没有被导入的不会被打进去)")]),t._v(" "),s("ul",[s("li",[t._v("这个"),s("code",[t._v("__webpack_modules")]),t._v("是个数组, 内部表示的是导出并且被导入的模块, 模块使用函数表示, 接收三个参数, 依次是"),s("code",[t._v("__unused_webpack_module")]),t._v("、"),s("code",[t._v("__webpack_exports__")]),t._v("、"),s("code",[t._v("__webpack_require__")]),t._v(", 其实就和4.x中传入的参数"),s("code",[t._v("modules")]),t._v("一致, 不同的是这里并没有入口函数的模块, 这里实际上就是实现了一个模块的私有作用域。")])])]),t._v(" "),s("li",[s("p",[t._v("接下来是函数主题逻辑, 首先是定义了一个对象"),s("code",[t._v("__webpack_module_cache__")]),t._v(", 用于缓存(存放)加载过的模块, 然后定义了一个"),s("code",[t._v("__webpack_require__")]),t._v("函数, 这个函数专用于加载模块(注释上有)")])]),t._v(" "),s("li",[s("p",[t._v("接下来通过几个立即执行函数, 往"),s("code",[t._v("__webpack_require")]),t._v("这个函数上挂载方法")])]),t._v(" "),s("li",[s("p",[t._v("到最后, 还是包装一个立即执行函数, 首先执行"),s("code",[t._v("__webpack_require__.r(__webpack_exports__)")]),t._v(", 这个"),s("code",[t._v("__webpack_exports__是一个{}")]),t._v(", 然后调用"),s("code",[t._v("__webpack_require__(1)")]),t._v(", 并且赋值给新定义的"),s("code",[t._v("_heading_js__WEBPACK_IMPORTED_MODULE_0__")]),t._v(", 这里相当于就是执行mian.js中的导入"),s("code",[t._v("heading.js")]),t._v("这个文件, 然后执行heading, 将结果"),s("code",[t._v("heading")]),t._v("添加到"),s("code",[t._v("document.body")]),t._v("中")])])]),t._v(" "),s("p",[t._v("整个打包后文件的工作流程如下(webpack5.x):")]),t._v(" "),s("blockquote",[s("p",[t._v("首先定义被使用的模块(主要是被其他模块导入过), 用变量"),s("code",[t._v("__webpack_modules")]),t._v("存储，是一个数组, 数组中包含了两个函数, 参数都是一样的。")]),t._v(" "),s("p",[t._v("定义一个"),s("code",[t._v("__webpack_module_cache__")]),t._v("为"),s("code",[t._v("{}")]),t._v(", 用于缓存加载过的模块")]),t._v(" "),s("p",[t._v("定义一个"),s("code",[t._v("__webpack_require__")]),t._v("函数用于加载模块, 并且为模块设置缓存。")]),t._v(" "),s("p",[t._v("通过三个立即执行函数定义了三个函数, 并且挂载到"),s("code",[t._v("__webpack_require__")]),t._v("上, 分别是：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("__webpack_require__.d")]),t._v(", 用于将第二个参数(definition)上的属性绑定到第一个参数(exports)上, 此法在加载模块内部函数中使用, 实际上就是定义了模块的导出属性")]),t._v(" "),s("li",[s("code",[t._v("__webpack_require__.o")]),t._v(", 用于判断一号参数(obj)自身属性中是否具有二号参数(prop)这个属性")]),t._v(" "),s("li",[s("code",[t._v("__webpack_require__.r")]),t._v("主要用于初始化导出对象, 添加一个"),s("code",[t._v("__esModule")]),t._v("这个标记, 表示他是"),s("code",[t._v("esModule")])])]),t._v(" "),s("p",[t._v("定义一个"),s("code",[t._v("__webpack_exports__")]),t._v("为"),s("code",[t._v("{}")]),t._v(", 表示导出的成员")]),t._v(" "),s("p",[t._v("进入一个新的立即执行函数, 内部首先执行"),s("code",[t._v("__webpack_require__.r")]),t._v("初始化上面定义的"),s("code",[t._v("__webpack_exports__")])]),t._v(" "),s("p",[t._v("这个立即执行函数实际上就是入口文件了, 遇到import语句, 就转换为加载语句, 使用"),s("code",[t._v("__webpack_require__")]),t._v(", 加载入口文件中导入的模块, 这里是模块1")]),t._v(" "),s("p",[t._v("执行模块1的加载, 就会先查看是否有缓存, 如果有缓存, 就直接返回缓存目标的导出文件")]),t._v(" "),s("p",[t._v("没有缓存, 则定义一个"),s("code",[t._v("{exports: {}}")]),t._v("并且赋值给缓存和"),s("code",[t._v("module")]),t._v("变量")]),t._v(" "),s("p",[t._v("然后开始执行"),s("code",[t._v("__webpack_modules__")]),t._v("中相应的模块id的方法, 也就是最上面定义的模块方法, 这里其实就是使用一个函数来表示模块, 达到模块私有作用域的目的, 传入的三个参数就是"),s("code",[t._v("module")]),t._v(", "),s("code",[t._v("module.exports")]),t._v(", 和"),s("code",[t._v("__webpack_require__")]),t._v("方法, 因此上面说"),s("code",[t._v("module.exports")]),t._v("代表的就是每一个模块的导出成员, 就是这样来的")]),t._v(" "),s("p",[t._v("加载模块首先会将模块的导出成员初始化一次, 也就是执行"),s("code",[t._v("__webpack_require__.r(__webpack_exports__)")])]),t._v(" "),s("p",[t._v("然后该模块下的所有导出描述, 都添加到"),s("code",[t._v("__webpack_exports__")]),t._v("中, 就是通过"),s("code",[t._v("__webpack_require__.d")]),t._v("这个方法")]),t._v(" "),s("p",[t._v("如果模块内有引入的模块, 就继续执行"),s("code",[t._v("__webpack_require__")]),t._v("方法引入模块")]),t._v(" "),s("p",[t._v("然后开始执行模块内的所有逻辑, 将默认导出逻辑赋值给"),s("code",[t._v("__WEBPACK_DEFAULT_EXPORT__")])]),t._v(" "),s("p",[t._v("最后执行主函数(入口函数)下的内容")])]),t._v(" "),s("h3",{attrs:{id:"疑问"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#疑问"}},[t._v("#")]),t._v(" 疑问?")]),t._v(" "),s("div",{staticClass:"language-javaScript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("__webpack_require__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("r")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__webpack_exports__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* harmony export */")]),t._v(" __webpack_require__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("d")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__webpack_exports__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* harmony export */")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"default"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__WEBPACK_DEFAULT_EXPORT__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* harmony export */")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* harmony import */")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" _testExport_js__WEBPACK_IMPORTED_MODULE_0__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__webpack_require__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* harmony default export */")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" __WEBPACK_DEFAULT_EXPORT__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" element "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"h2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textContent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello world"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello webpack"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br")])]),s("p",[t._v("这一块为什么可以执行, 主要是挂载到"),s("code",[t._v("__webpack_exports__")]),t._v("上的只是一个字符串"),s("code",[t._v("default")]),t._v(", 后面使用的时候才会去执行"),s("code",[t._v("const")]),t._v("定义的"),s("code",[t._v("__WEBPACK_DEFAULT_EXPORT__")]),t._v(", 所以并不在死区中")]),t._v(" "),s("p",[t._v("对于引入其他模块的函数使用时, 都会编译为"),s("code",[t._v("(0 + 逗号操作符+返回的函数)()")])]),t._v(" "),s("p",[s("code",[t._v("有什么特殊意义吗???")]),t._v("(目前还没搞懂, 既不是代表引入模块id, 也不是代表当前模块id), 如下")]),t._v(" "),s("div",{staticClass:"language-javaScript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" heading "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("_heading_js__WEBPACK_IMPORTED_MODULE_0__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("default"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("_testExport_js__WEBPACK_IMPORTED_MODULE_0__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("default"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);