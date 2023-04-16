(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{730:function(t,v,_){"use strict";_.r(v);var e=_(5),l=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"封装自动化构建工作流"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#封装自动化构建工作流"}},[t._v("#")]),t._v(" 封装自动化构建工作流")]),t._v(" "),_("p",[t._v("如果涉及到开发多个同类型的项目, 那么自动化的工作流应该是一样的, 这时就涉及到要在多个项目中重复使用构建任务。")]),t._v(" "),_("p",[t._v("这个时候就面临到需要不停的复用相同的gulpfile的问题。")]),t._v(" "),_("p",[t._v("针对这个问题可以通过代码段的方式, 将它保存起来, 去不同的项目使用, 但是这样如果遇到包升级或者bug, 就要对所有项目都进行修改。不利于整体维护。")]),t._v(" "),_("p",[t._v("这时候就需要提取一个可复用的自动化工作流。")]),t._v(" "),_("p",[t._v("解决方式其实也很简单: 就是通过创建一个新的模块, 包装一下gulp, 然后将这个自动化的构建工作流包装进去。")]),t._v(" "),_("p",[t._v("简单的说就是: "),_("code",[t._v("Gulpfile + GulpCLI => 工作流")])]),t._v(" "),_("p",[t._v("以后所有的项目直接使用这个模块去提供自动化的工作流就好了")]),t._v(" "),_("h2",{attrs:{id:"准备工作"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[t._v("#")]),t._v(" 准备工作")]),t._v(" "),_("p",[t._v("具体的做法就是先创建一个模块, 然后把这个模块发布到npm上, 最后在仓库中使用它就可以了")]),t._v(" "),_("ol",[_("li",[t._v("先在github上创建一个仓库, 然后初始化一个工作流项目, 将工作流传入其中")]),t._v(" "),_("li",[t._v("首先在本地生成一个工作流初始文件, 工作流模块的入口就是"),_("code",[t._v("lib/index.js")])]),t._v(" "),_("li",[t._v("上传到之前创建的仓库")])]),t._v(" "),_("p",[t._v("通过上述三个步骤, 准备工作就完成了")])])}),[],!1,null,null,null);v.default=l.exports}}]);