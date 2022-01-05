(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{579:function(s,a,t){"use strict";t.r(a);var e=t(5),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"webpack-开发体验"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack-开发体验"}},[s._v("#")]),s._v(" webpack 开发体验")]),s._v(" "),t("p",[s._v("对于前面所说的配置, 对于实际开发来说, 还远远不够")]),s._v(" "),t("p",[s._v("毕竟周而复始的去操作 "),t("code",[s._v("编写源代码 => webpack打包 => 运行应用 => 刷新浏览器")]),s._v(", 这样的过程, 过于原始, 实际上这样用, 会大大降低开发效率")]),s._v(" "),t("p",[s._v("一个完整的webpack工程, 必须达到如下的要求:")]),s._v(" "),t("ol",[t("li",[s._v("必须以完整的http服务去运行(一来是更接近生产环境的状态, 二来"),t("code",[s._v("ajax")]),s._v(", "),t("code",[s._v("websocket")]),s._v("这类api以文件形式是不被支持的)")]),s._v(" "),t("li",[s._v("自动编译+自动刷新(热更新)")]),s._v(" "),t("li",[s._v("提供Source Map支持")])]),s._v(" "),t("h2",{attrs:{id:"实现自动编译"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现自动编译"}},[s._v("#")]),s._v(" 实现自动编译")]),s._v(" "),t("p",[s._v("可以使用webpack-cli提供的一种 "),t("code",[s._v("watch 工作模式")]),s._v("解决这个问题")]),s._v(" "),t("h3",{attrs:{id:"watch工作模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#watch工作模式"}},[s._v("#")]),s._v(" watch工作模式")]),s._v(" "),t("p",[s._v("这种模式和gulp的watch模式一样, 监听文件变化, 自动重新打包")]),s._v(" "),t("p",[s._v("添加一个 "),t("code",[s._v("--watch")]),s._v("即可, 也就是"),t("code",[s._v("yarn webapck --watch")])]),s._v(" "),t("p",[s._v("这样的话, 就会监视文件变化, 然后不停的打包, 直到手动结束这个cli")]),s._v(" "),t("p",[s._v("当然, 这样的话, 页面不会自动刷新, 并且需要自己启动一个服务, 然后编写完后, 等待打包完成后手动刷新查看结果")]),s._v(" "),t("h2",{attrs:{id:"实现自动刷新浏览器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现自动刷新浏览器"}},[s._v("#")]),s._v(" 实现自动刷新浏览器")]),s._v(" "),t("p",[s._v("就是需要修改源代码过后, webpack自动执行编译, 并且自动刷新浏览器, 这与开发体验会更好")]),s._v(" "),t("p",[s._v("BrowserSync这个工具, 就可以帮我们实现自动刷新的功能")]),s._v(" "),t("p",[s._v("安装之后使用"),t("code",[s._v('browser-sync dist --files "**/*"')]),s._v(", 用以监听dist下的文件变化自动刷新浏览器")]),s._v(" "),t("p",[s._v("然后保持"),t("code",[s._v("yarn webpack --watch")])]),s._v(" "),t("p",[s._v("这个原理就是webpack自动打包到dist, 然后通过browser-sync去监听dist下文件变化去实现自动刷新")]),s._v(" "),t("p",[s._v("不过这种方式有很多弊端, 第一个就是操作麻烦, 因为同时使用了两个工具, 然后效率低, 因为webpack要不停写入磁盘, 然后browser-sync再从磁盘中读出来, 一次就是两个磁盘读写操作(vite直接走内存, 快很多)")]),s._v(" "),t("h2",{attrs:{id:"webpack-dev-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack-dev-server"}},[s._v("#")]),s._v(" Webpack Dev Server")]),s._v(" "),t("p",[t("code",[s._v("webpack dev server")]),s._v("是webpack官方推出的一个开发工具, 根据他的名字, 我们就明白")]),s._v(" "),t("ul",[t("li",[s._v("它提供了一个开发服务器")]),s._v(" "),t("li",[s._v("集成"),t("code",[s._v("自动编译")]),s._v("和"),t("code",[s._v("自动刷新浏览器")]),s._v("等功能")])]),s._v(" "),t("p",[s._v("可以使用这个工具直接解决之前的两个问题")]),s._v(" "),t("p",[s._v("由于他是一个高度集成的工具, 因此使用起来非常的简单")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# webpack-dev-serve 3.x")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" webpack serve"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("他并不会出现dist目录, 因为他将打包结果暂时存放在内存中, 而内部的http server也是从内存中读取出来, 发送给浏览器, 减少很多不必要的磁盘读写操作, 大大提高构建效率")]),s._v(" "),t("h3",{attrs:{id:"webpack-dev-server-静态资源访问"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack-dev-server-静态资源访问"}},[s._v("#")]),s._v(" webpack dev server 静态资源访问")]),s._v(" "),t("p",[t("code",[s._v("webpack dev server")]),s._v("会将构建结果输出的问题，全部作为开发服务器的输出文件")]),s._v(" "),t("p",[s._v("也就是说")]),s._v(" "),t("ul",[t("li",[s._v("Webpack Dev Server默认只会serve打包输出文件")]),s._v(" "),t("li",[s._v("只要是webpack输出的文件, 都可以直接被访问")]),s._v(" "),t("li",[s._v("其他静态资源不会， 需要额外的告诉"),t("code",[s._v("Webpack Dev Server")])])]),s._v(" "),t("p",[s._v("需要添加一个devServer属性, 专门为"),t("code",[s._v("Webpack Dev Server")]),s._v("提供配置选项")]),s._v(" "),t("p",[s._v("可以通过这个对象下的"),t("code",[s._v("contentBase")]),s._v("指定额外的静态资源路径")]),s._v(" "),t("p",[s._v("并且这样也就不用在开发环境下将静态资源路径copy到dist目录下了")]),s._v(" "),t("h4",{attrs:{id:"contentbase额外为开发服务器指定查找资源目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#contentbase额外为开发服务器指定查找资源目录"}},[s._v("#")]),s._v(" contentBase额外为开发服务器指定查找资源目录")]),s._v(" "),t("h3",{attrs:{id:"webpack-dev-server代理api服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack-dev-server代理api服务"}},[s._v("#")]),s._v(" Webpack Dev Server代理API服务")]),s._v(" "),t("p",[s._v("由于开发服务器的缘故, 我们会将应用运行在localhost的一个端口上, 但是上线之后, 应用一般会和api一起部署在同原地址下")]),s._v(" "),t("p",[s._v("因此这里就会在开发环境出现"),t("code",[s._v("跨域请求")]),s._v(", 但是生产中, 却不会")]),s._v(" "),t("p",[s._v("我们可以使用"),t("code",[s._v("跨院资源共享(CORS)")]),s._v("去解决这个问题")]),s._v(" "),t("p",[s._v("如果API支持CORS, 那就没有问题, 但是并不是任何情况下API都应该支持CORS")]),s._v(" "),t("p",[s._v("如果前后端同源部署, 这种情况下根本没有必要开启CORS")]),s._v(" "),t("p",[s._v("因此解决这个问题最好的办法就是使用代理服务, 通过代理请求, 将请求直接代理到开发服务器上面")]),s._v(" "),t("p",[s._v("webpackDevServer支持配置代理服务")]),s._v(" "),t("p",[s._v("添加一个"),t("code",[s._v("proxy")]),s._v("属性, 添加代理服务配置")]),s._v(" "),t("p",[s._v("是一个对象, 其中, 键名就是需要被代理的请求路劲前缀, 也就是说以api开头的都会代理到接口中")]),s._v(" "),t("p",[s._v("值就是代理规则配置")]),s._v(" "),t("p",[s._v("其中的"),t("code",[s._v("target")]),s._v("表示代理目标")]),s._v(" "),t("p",[s._v("如下配置:")]),s._v(" "),t("div",{staticClass:"language-javaScript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n    devServer"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        http2"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// https: true,")]),s._v("\n        contentBase"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n            path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'src/favicons'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 可以是字符串, 也可以是数组")]),s._v("\n        proxy"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/api'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 也就是说请求 localhost:3000/api/users -> https://api.github.com/api/users")]),s._v("\n                target"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://api.github.com'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 但是在https://api.github.com的接口中并没有/api, 因此需要添加一层代理路径的重写")]),s._v("\n                pathRewrite"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^/api'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这个属性最终会生成一个正则去匹配上面的路径")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                ws"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                timeout"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9999999999")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 不能使用localhost:3000作为请求 github 的主机名")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 主机名由于服务端判断请求应该走哪一个网站, 设置changeOrigin为true, 就会将代理请求作为实际的主机名去请求")]),s._v("\n                changeOrigin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br")])]),t("p",[s._v("主机名是HTTP协议中的相关概念")])])}),[],!1,null,null,null);a.default=n.exports}}]);