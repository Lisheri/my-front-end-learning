(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{691:function(s,a,t){"use strict";t.r(a);var e=t(5),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"fis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fis"}},[s._v("#")]),s._v(" FIS")]),s._v(" "),t("h2",{attrs:{id:"fis快速上手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fis快速上手"}},[s._v("#")]),s._v(" FIS快速上手")]),s._v(" "),t("p",[s._v("FIS是百度的前端团队推出的一款构建系统, 最早在内部使用, 后来流行了一段时间, 但是后面还是越来越少了(之前没听过), 官方也很久没有更新过了。")]),s._v(" "),t("p",[s._v("FIS完全属于另外一个种类的构建系统了, 相比于Gulp和Grunt, 他的核心特点就是高度集成, 他把常见的构建任务和调试任务都集成在了内部, 开发者可以通过简单的配置文件就可以完成构建工作, 不需要像gulp或者grunt一样自己去定义一些任务, FIS中有些内置任务, 他会根据开发者的配置自动完成整个构建过程, 除此之外内部还配置了一款自动调试的web server, 可以很方便的调试构建结果")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# fis3做了较大的修改, 因此换了一个包名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" global "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" fis3\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"release任务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#release任务"}},[s._v("#")]),s._v(" release任务")]),s._v(" "),t("blockquote",[t("p",[s._v("release是FIS中提供的一个默认构建任务")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入一个项目后, 直接使用一个release这个任务")]),s._v("\nfis3 release\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("这个任务会将一个项目自动构建到一个临时目录中, 一般在用户文件夹。")]),s._v(" "),t("p",[s._v("但是我们可以使用一个-d去指定文件夹")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("fis3 release -d output\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这样就会多出一个output文件夹，但是FIS并没有对资源做转换, 而是直接输出到文件夹中, 并且将相对路径转换成了绝对路径，实现"),t("code",[s._v("资源定位")])]),s._v(" "),t("p",[t("code",[s._v("资源定位")]),s._v("是FIS的一个核心特性, 作用就是将开发阶段的路径彻底和生产路径分离开")]),s._v(" "),t("p",[s._v("在以往的前后端统一的项目中, 经常会出现"),t("code",[s._v("生产环境下的路径并不是后端所需要的路径")]),s._v("这种情况, 上线之前后端开发人员还需要手动修改路径，使用FIS过后, 只需要在开发阶段使用相对路径开发即可, 打出生产包后会自动的将相对路径修改为绝对路径。")]),s._v(" "),t("h3",{attrs:{id:"快速上手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快速上手"}},[s._v("#")]),s._v(" 快速上手")]),s._v(" "),t("ol",[t("li",[s._v("根路径下新建一个"),t("code",[s._v("fis-conf.js")]),s._v(", 在这个文件下有一个特有的全局对象, 就是"),t("code",[s._v("fis")])]),s._v(" "),t("li",[s._v("可以通过"),t("code",[s._v("fis.match")]),s._v("方法为开发过程中匹配到的文件添加配置, 此处匹配到的就是"),t("code",[s._v("scss, js, png")]),s._v("等文件")])]),s._v(" "),t("div",{staticClass:"language-javaScript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// fis-conf.js")]),s._v("\nfis"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("match")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token template-string"}},[t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("*.{js, scss, png}")]),t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这个表示将js, scss, png的输出路径修改到 release路径下的assets下的`$0(这个$0表示原始的结构, 是什么样就是什么样)`")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这样输出的资源文件都会放在assets这个路径下")]),s._v("\n    release"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/assets/$0'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);