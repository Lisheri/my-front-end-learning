(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{514:function(s,t,a){s.exports=a.p+"assets/img/WeChata13ca4603b6e99d18ca38b8878347deb.a13ca460.png"},603:function(s,t,a){"use strict";a.r(t);var n=a(5),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"插件机制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#插件机制"}},[s._v("#")]),s._v(" 插件机制")]),s._v(" "),n("h2",{attrs:{id:"插件机制介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#插件机制介绍"}},[s._v("#")]),s._v(" 插件机制介绍")]),s._v(" "),n("p",[n("code",[s._v("plugin————插件")]),s._v(", 是webpack中另一个核心特性, 主要目的就是增强webpack在项目中的自动化能力")]),s._v(" "),n("p",[n("code",[s._v("loader专注于实现资源模块的加载, 从而实现整体项目的打包")])]),s._v(" "),n("p",[n("code",[s._v("plugins用于解决除了资源模块加载之外的其他自动化工作")])]),s._v(" "),n("p",[s._v("比如plugin可以用于")]),s._v(" "),n("ul",[n("li",[s._v("打包之前自动清除dist目录")]),s._v(" "),n("li",[s._v("拷贝静态文件到输出目录")]),s._v(" "),n("li",[s._v("压缩输出代码")])]),s._v(" "),n("p",[s._v("正是有了plugin, webpack才可以实现大多数前端工程化的工作(这也是为什么会让人觉得webpack就是前端工程化的原因, 实际上他并不是前端工程化)")]),s._v(" "),n("h2",{attrs:{id:"webpack常用插件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#webpack常用插件"}},[s._v("#")]),s._v(" webpack常用插件")]),s._v(" "),n("h3",{attrs:{id:"clean-webpack-plugin"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#clean-webpack-plugin"}},[s._v("#")]),s._v(" clean-webpack-plugin")]),s._v(" "),n("p",[s._v("自动清除输出目录的插件")]),s._v(" "),n("p",[s._v("在没有任何配置的默认情况下, webpack每一次打包, 都只会覆盖同名文件, 并不会移除已经不需要的资源文件, 他会一直积累, 非常不合理")]),s._v(" "),n("p",[s._v("因此, 合理的情况是在每一次打包之前, 都自动清除一下dist目录, dist中就只会存在我们需要的文件, "),n("code",[s._v("clean-webpack-plugin")]),s._v("就很好的实现了这个需求")]),s._v(" "),n("p",[s._v("使用如下:")]),s._v(" "),n("div",{staticClass:"language-javaScript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" CleanWebpackPlugin "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"clean-webpack-plugin"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这个模块解构出来一个CleanWebpackPlugin, 就是用于清除dist目录的插件")]),s._v("\n\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n    plugins"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 配置插件的数组")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// * 大部分webpack插件模块导出的都是一个类, 所以使用它, 是通过这个类去创建一个实例, 将实例放入plugins数组中")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CleanWebpackPlugin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("一般的插件解构出来的都是他的类, 但是在plugins中使时, 需要创建实例")]),s._v(" "),n("h3",{attrs:{id:"html-webpack-plugin"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#html-webpack-plugin"}},[s._v("#")]),s._v(" html-webpack-plugin")]),s._v(" "),n("p",[s._v("除了清理dist之外, 还有一个常见的需求就是自动去生成打包结果的html")]),s._v(" "),n("p",[s._v("如果没有这个插件, 那么我们的html代码, 每一次打包过后, 都要确保路径和引用是最新的打包结果, 这样容易造成错误")]),s._v(" "),n("p",[s._v("如果打包结果的变化, html代码中script的src也需要手动修改")]),s._v(" "),n("blockquote",[n("ul",[n("li",[s._v("因此, 引入这个插件, 就是让webpack自动的输出"),n("code",[s._v("HTML")]),s._v("文件, 让html也参与webpack的构建过程")]),s._v(" "),n("li",[s._v("在构建过程中, webpack知道自己生成了多少个bundle, 并且将这些bundle添加到页面中")]),s._v(" "),n("li",[s._v("一来html也输出到了dist目录")]),s._v(" "),n("li",[s._v("二来html中对于bundle的引用是动态注入的, 确保路径的引用是正确的")])])]),s._v(" "),n("p",[s._v("这里使用的插件就是"),n("code",[s._v("html-webpack-plugin")])]),s._v(" "),n("p",[s._v("插件使用如下:")]),s._v(" "),n("div",{staticClass:"language-javaScript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" HtmlWebpackPlugin "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'html-webpack-plugin'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n    modules"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        rules"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                test"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[n("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v(".js$")]),n("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                use"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    loader"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"babel-loader"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                    options"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                        presets"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@babel/preset-env'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n                    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                exclude"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'node_modules'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 忽略node_modules下的包, 否则打包报错, 会识别出其他的模板导致报错")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    plugins"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HtmlWebpackPlugin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            title"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'webpack学习'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置标题")]),s._v("\n            filename"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'index.html'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            inject"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'body'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 生成的script放在body最下面")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br")])]),n("p",[s._v("然后删除index.html, html的生成直接从这里走就可以了")]),s._v(" "),n("p",[n("code",[s._v("html-webpack-plugin")]),s._v("插件的初步使用就是这样")]),s._v(" "),n("h4",{attrs:{id:"html-webpack-plugin选项"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#html-webpack-plugin选项"}},[s._v("#")]),s._v(" html-webpack-plugin选项")]),s._v(" "),n("p",[s._v("有了他就可以动态生成应用所需要的html文件了, 但是依然有需要改进的地方")]),s._v(" "),n("p",[s._v("首先就是提供一个title, 然后要自定义一些元数据标签和一些基础的dom解构, 对于简单的自定义可以通过修改"),n("code",[s._v("html-webpack-plugin")]),s._v("的配置选项来实现, 方法就是如同上面那样传参")]),s._v(" "),n("div",{staticClass:"language-javaScript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n    plugins"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HtmlWebpackPlugin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            title"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'webpack学习'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置标题")]),s._v("\n            filename"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'index.html'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            inject"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'body'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 生成的script放在body最下面")]),s._v("\n            meta"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                viewport"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'width=device-width'")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("blockquote",[n("ul",[n("li",[s._v("title: 设置标题")]),s._v(" "),n("li",[s._v("meta: 以对象形式设置页面中的额元数据标签")]),s._v(" "),n("li",[s._v("当然, 如果要大量生成的话, 我们还是需要添加一个生成html的模板, 然后让插件根据模板生成文件")]),s._v(" "),n("li",[s._v("对于需要动态输出的内容, 可以通过lodash模板语法的方式去输出, 如"),n("code",[s._v("<h1><%= htmlWebpackPlugin.options.title %></h1>")]),s._v(", 通过"),n("code",[s._v("htmlWebpackPlugin.options")]),s._v("访问到配置数据")]),s._v(" "),n("li",[s._v("当然, "),n("code",[s._v("htmlWebpackPlugin")]),s._v("是内部提供的变量, 也可以添加自定义变量")]),s._v(" "),n("li",[s._v("注意: html-loader需要排除模板文件, 否则模板引擎不识别, 因为被解析成了字符串")])])]),s._v(" "),n("h4",{attrs:{id:"同时输出多个页面文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#同时输出多个页面文件"}},[s._v("#")]),s._v(" 同时输出多个页面文件")]),s._v(" "),n("p",[s._v("除非应用是一个单一页面应用, 否则的话我们就需要输出多个html, 这样的话, 直接创建多个HtmlWebpackPlugin实例就可以了, 这样每一个实例对象都负责生成一个页面")]),s._v(" "),n("h3",{attrs:{id:"copy-webpack-plugin"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#copy-webpack-plugin"}},[s._v("#")]),s._v(" copy-webpack-plugin")]),s._v(" "),n("p",[s._v("在项目中一般还有一些不需要参与项目构建的静态资源文件, 他们最终也需要发布, 比如页面的favicon.icon")]),s._v(" "),n("p",[s._v("这种需求, 借助"),n("code",[s._v("copy-webpack-plugin")]),s._v("实")]),s._v(" "),n("p",[s._v("这个构造函数需要传入配置项, 用于拷贝指定的文件路径, 如下:")]),s._v(" "),n("div",{staticClass:"language-javaScript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CopyWebpackPlugin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    patterns"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 可以是文件路径, 可以是通配符, 可以是文件的相对路径")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这里表示将src下的favicons这个文件, 拷贝到生成目录下的dest中")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"src/favicons"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" to"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dest"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h3",{attrs:{id:"插件使用总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#插件使用总结"}},[s._v("#")]),s._v(" 插件使用总结")]),s._v(" "),n("p",[s._v("到此为止, 我们基本了解了三个非常常用的插件")]),s._v(" "),n("ul",[n("li",[s._v("clean-webpack-plugin")]),s._v(" "),n("li",[s._v("html-webpack-plugin")]),s._v(" "),n("li",[s._v("copy-webpack-plugin")])]),s._v(" "),n("p",[s._v("这些插件一般都适用于任何类型的项目, 不管是项目中是否使用框架, 他们都会被用到")]),s._v(" "),n("p",[s._v("当然, 还需要翻看文档, 详细了解, 毕竟版本变动, 使用方式也需要跟随变动")]),s._v(" "),n("p",[s._v("社区中还有大量的插件, 这些并不需要全部了解, 但是当有特殊需求的时候, 再去提炼需求中的关键词, 再去提炼他们, 比如压缩图片, 可以找imagemin-webpack-plugin")]),s._v(" "),n("h2",{attrs:{id:"webpack插件机制的工作原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#webpack插件机制的工作原理"}},[s._v("#")]),s._v(" webpack插件机制的工作原理")]),s._v(" "),n("p",[s._v("对比loader, plugin拥有更宽广的能力范围, 因为loader只是在加载模块环节工作, 但是插件, 基本上在每一个环节都要用到")]),s._v(" "),n("p",[s._v("plugin的机制, 其实就是通过在软件开发中常用的钩子机制来完成的")]),s._v(" "),n("p",[s._v("也就是webpack工作的事件(其实就是埋点回调函数), 为了便于webpack的工作, webpack几乎为每一个环节都埋下了钩子")]),s._v(" "),n("p",[s._v("这样的话, 开发插件的时候, 就可以在不同的环节去挂载不同的任务, 很轻松的扩展webpack的能力")]),s._v(" "),n("p",[n("img",{attrs:{src:a(514),alt:"钩子"}})]),s._v(" "),n("p",[s._v("具体通过编写一个plugin来看看, 他究竟有哪些钩子")]),s._v(" "),n("p",[s._v("webpack要求编写的插件必须是一个函数, 或者是一个包含apply方法的对象")]),s._v(" "),n("p",[s._v("一般都会将插件定义为一个类, 然后再这个类中定义apply方法, 使用的时候就new一个实例来使用")]),s._v(" "),n("p",[s._v("如下所示开发一个移除bundle.js注释的一个插件")]),s._v(" "),n("div",{staticClass:"language-javaScript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("myPlugin")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 定义一个类, 然后定义一个apply方法")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apply")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("compiler")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// apply方法会在webpack启用时, 自动被调用")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 接收一个compiler对象参数, 这个对象就是webpack工作过程中的核心对象, 包含了此次构建的所有配置信息, 也是通过这个对象去注册钩子函数")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这里编写一个插件用于去除打包过程后bundle.js下所有的注释, 因此, 这个过程应该是在bundle.js出现后实施")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// emit在 输出 asset 到 output 目录之前执行(就是即将往输出目录输出文件)")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ! 通过compiler.hooks.emit去访问到这个钩子, 通过tap方法去注册函数")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ! tap方法接收两个参数, 第一个是插件名称, 第二个就是挂载到这个钩子上的函数了")]),s._v("\n        compiler"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hooks"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("emit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tap")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"myPlugin"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("compilation")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// * compilation这个对象可以理解成此次打包过程中的上下文, 打包结果都会放到这个对象中")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// assets是即将写入目录中的资源文件信息, 是一个对象, 键名是文件的名称")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" name "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" compilation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("assets"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 通过source方法可以拿到对应地内容")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 需求是做一个去除bundle.js注释的插件, 因此要判断文件名")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("match")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token regex"}},[n("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v(".js$")]),n("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// console.info(compilation.assets[name].source())")]),s._v("\n                    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 然后进行处理")]),s._v("\n                    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" contents "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" compilation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("assets"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("source")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" withoutComments "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" contents"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("replace")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token regex"}},[n("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\/\\*\\*+\\*\\/")]),n("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("g")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 处理完成后, 需要去替换compilation.assets下的对应地内容")]),s._v("\n                    compilation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("assets"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                        "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("source")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" withoutComments"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 依然使用一个source方法去暴露")]),s._v("\n                        "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("size")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" withoutComments"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 还需要一个size方法, 去返回一个内容的大小, 这个是webpack要求的所必须的方法")]),s._v("\n                    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br")])]),n("h2",{attrs:{id:"插件机制总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#插件机制总结"}},[s._v("#")]),s._v(" 插件机制总结")]),s._v(" "),n("p",[s._v("插件其实就是通过在生命周期的钩子中挂载函数来实现扩展")]),s._v(" "),n("p",[s._v("当然, 如果还需要深入了解, 那么可能需要去理解webpack底层的实现原理了, 毕竟文档中, 是没有介绍的, 需要阅读源代码")])])}),[],!1,null,null,null);t.default=e.exports}}]);