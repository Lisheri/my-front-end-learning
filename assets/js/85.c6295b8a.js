(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{618:function(t,s,a){"use strict";a.r(s);var r=a(5),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ts原始类型和部分问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ts原始类型和部分问题"}},[t._v("#")]),t._v(" ts原始类型和部分问题")]),t._v(" "),a("h2",{attrs:{id:"原始类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原始类型"}},[t._v("#")]),t._v(" 原始类型")]),t._v(" "),a("p",[t._v("和JS一样，依次是 Symbol()有报错(有报错也是编译版本低于ES2015), number, string, boolean, null, undefined(void), bigInt(编译目标需要高于ES2020, 否则会报错)")]),t._v(" "),a("h2",{attrs:{id:"标准库声明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标准库声明"}},[t._v("#")]),t._v(" 标准库声明")]),t._v(" "),a("p",[t._v("标准库就是内置对象所对应的声明文件, 我们要使用对应地类型, 就需要在标准库中添加对应地类型, 否则就会报错")]),t._v(" "),a("p",[t._v("编译目标在编辑器中报错主要是因为TS的包下面有一个lib开头+版本号+d.ts的一个声明文件，主要包含了那个版本下的所有类型")]),t._v(" "),a("p",[t._v("同时上面两个新版本的报错, 也可以打开lib这个配置, 在其中添加ES2015, ESNext, 就不用修改编译的目标版本了")]),t._v(" "),a("p",[t._v("(但是在lib中添加ES2020后 bigInt依然报错？还是要修改目标源)")]),t._v(" "),a("h2",{attrs:{id:"中文错误消息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#中文错误消息"}},[t._v("#")]),t._v(" 中文错误消息")]),t._v(" "),a("p",[t._v("可以让TS产生中文错误消息")]),t._v(" "),a("blockquote",[a("p",[t._v("使用 yarn tsc --locale zh-CN可以显示中文错误\n当然如果VsCode如果是中文, 看到的错误提示就是中文的")])]),t._v(" "),a("h2",{attrs:{id:"作用域问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用域问题"}},[t._v("#")]),t._v(" 作用域问题")]),t._v(" "),a("p",[t._v("两个ts文件， 拥有同一个变量名的变量, ts编译时会将所有的ts文件合并为一个作用域，因此他们就在同一个全局作用域下了，也就重复了.")]),t._v(" "),a("p",[t._v("可以使用 立即执行函数, 或者最后使用导出, 文件就变成模块了, 每个模块是独立的")])])}),[],!1,null,null,null);s.default=e.exports}}]);