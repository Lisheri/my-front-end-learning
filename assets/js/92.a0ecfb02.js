(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{627:function(a,s,n){"use strict";n.r(s);var e=n(5),t=Object(e.a)({},(function(){var a=this,s=a.$createElement,n=a._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"yeoman"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#yeoman"}},[a._v("#")]),a._v(" Yeoman")]),a._v(" "),n("p",[a._v("老牌强大通用的脚手架工具")]),a._v(" "),n("p",[a._v("他更像一个脚手架运行平台, 可以通过Yeoman创建自己的generator来创建自己的前端脚手架")]),a._v(" "),n("p",[a._v("他过于通用不够专注, 因此大家都更愿意使用专注的脚手架")]),a._v(" "),n("h2",{attrs:{id:"基本使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[a._v("#")]),a._v(" 基本使用")]),a._v(" "),n("ol",[n("li",[a._v("全局安装Yeoman")])]),a._v(" "),n("div",{staticClass:"language-Shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 全局范围内安装yo")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" global "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" yo\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 全局范围安装对应地generator, 因为不同的generator就用于生成不同的项目")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" global "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" generator-node\n\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br")])]),n("ol",{attrs:{start:"2"}},[n("li",[a._v("使用Yeoman")])]),a._v(" "),n("div",{staticClass:"language-Shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 通过yo 运行 generator, yo <generator名>")]),a._v("\nyo node\n\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br")])]),n("p",[a._v("macOS上可能会存在command not found yo的错误, 这个时候需要在zshrc下添加: "),n("code",[a._v('export PATH="$PATH:`yarn global bin`:$HOME/.config/yarn/global/node_modules/.bin"')])]),a._v(" "),n("p",[a._v("然后执行 "),n("code",[a._v("source ~/.zshrc")])]),a._v(" "),n("p",[a._v("前提是使用zshrc")]),a._v(" "),n("h2",{attrs:{id:"sub-generator"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sub-generator"}},[a._v("#")]),a._v(" Sub Generator")]),a._v(" "),n("p",[a._v("用于实现在已有项目之上去创建一些特定类型的文件, 比如es-lint, README, babel的配置文件, 这个生成器可以用于自动生成这些文件, 可以使用yeoman提供的sub generator")]),a._v(" "),n("p",[a._v("在这里可以使用generator-node提供的一个子集生成器, 去生成一个cli应用所需要的文件, 可以让模块变成一个cli应用")]),a._v(" "),n("p",[a._v("使用命令 "),n("code",[a._v("yo node:cli")])]),a._v(" "),n("p",[a._v("会提示是否需要更新package.json")]),a._v(" "),n("p",[a._v("然后他会在package.json中添加如下内容")]),a._v(" "),n("div",{staticClass:"language-javaScript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"bin"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"lib/cli.js"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"dependencies"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"meow"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"^3.7.0"')]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br")])]),n("p",[a._v("这就是cli应用中所需要的, 除此之外, 在lib目录下的cli.js中有一个cli应用的基础代码解构")]),a._v(" "),n("p",[a._v("这样以后就可以将这个模块作为一个全局的命令行模块使用了")]),a._v(" "),n("p",[a._v("执行 "),n("code",[a._v("yarn link")]),a._v(", 将它link到全局范围")]),a._v(" "),n("p",[a._v("接下来就可以使用之前创建时使用的名字全局使用cli来工作了, 这是generator提供的子集生成器这个特性提供的, 但是并不是每一个generator都提供子集的生成器, 所以在使用之前, 要查看使用的generator的文档来看是否提供了子集生成器")]),a._v(" "),n("h2",{attrs:{id:"yeoman常规使用步骤总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#yeoman常规使用步骤总结"}},[a._v("#")]),a._v(" Yeoman常规使用步骤总结")]),a._v(" "),n("ol",[n("li",[a._v("明确需求")]),a._v(" "),n("li",[a._v("找到合适的generator并安装")]),a._v(" "),n("li",[a._v("通过yo运行对应地generator")]),a._v(" "),n("li",[a._v("通过命令行交互填写选项")]),a._v(" "),n("li",[a._v("生成你所需要的项目结构")])])])}),[],!1,null,null,null);s.default=t.exports}}]);