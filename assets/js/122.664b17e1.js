(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{703:function(s,t,a){"use strict";a.r(t);var n=a(5),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"restful风格设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#restful风格设计"}},[s._v("#")]),s._v(" RESTful风格设计")]),s._v(" "),a("p",[a("code",[s._v("RESTful")]),s._v("是一种风格, 在"),a("code",[s._v("RESTful")]),s._v("中, 一切都被认为是资源, 每个资源有对应的"),a("code",[s._v("URL标识")])]),s._v(" "),a("blockquote",[a("p",[s._v("不是标准, 也不是协议, 只是一种风格, 当然, 也可以完全忽视这个风格去写(但是大概率必被喷)")])]),s._v(" "),a("h2",{attrs:{id:"接口url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接口url"}},[s._v("#")]),s._v(" 接口url")]),s._v(" "),a("h3",{attrs:{id:"传统接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#传统接口"}},[s._v("#")]),s._v(" 传统接口")]),s._v(" "),a("blockquote",[a("p",[s._v("传统 "),a("code",[s._v("query string")]),s._v(" 的传参模式")])]),s._v(" "),a("ul",[a("li",[s._v("http:localhost:8080/api/get_list?id=1")]),s._v(" "),a("li",[s._v("http:localhost:8080/api/delete_list?id=1")]),s._v(" "),a("li",[s._v("http:localhost:8080/api/update_list?id=1")])]),s._v(" "),a("h3",{attrs:{id:"restful-接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#restful-接口"}},[s._v("#")]),s._v(" RESTful 接口")]),s._v(" "),a("blockquote",[a("p",[s._v("参数直接拼接到url上, 一个接口根据不同的类型完成 "),a("code",[s._v("CURD")]),s._v("逻辑")]),s._v(" "),a("p",[s._v("通过不同的"),a("code",[s._v("请求类型")]),s._v("做区分")])]),s._v(" "),a("p",[a("code",[s._v("http://localhost:8080/api/get_list/1")]),s._v(" 查询, 删除, 更新")]),s._v(" "),a("h2",{attrs:{id:"restful版本控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#restful版本控制"}},[s._v("#")]),s._v(" RESTful版本控制")]),s._v(" "),a("blockquote",[a("p",[s._v("一共有三种, 一般用第一种, 更加语义化")])]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("说明")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("URI Versioning")]),s._v(" "),a("td",[s._v("版本将在请求的URI中传递(默认)")])]),s._v(" "),a("tr",[a("td",[s._v("Header Version")]),s._v(" "),a("td",[s._v("自定义请求头来指定版本")])]),s._v(" "),a("tr",[a("td",[s._v("Media Type Versioning")]),s._v(" "),a("td",[s._v("请求的Accept头指定特定版本")])])])]),s._v(" "),a("p",[s._v("比如说 "),a("code",[s._v("/v1/user/123")]),s._v(", 代表的就是第一个版本, 查询用户123")]),s._v(" "),a("h3",{attrs:{id:"开启版本控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开启版本控制"}},[s._v("#")]),s._v(" 开启版本控制")]),s._v(" "),a("blockquote",[a("p",[s._v("主要利用 "),a("code",[s._v("app.enableVersioning")]),s._v(", 传入 "),a("code",[s._v("@nestjs/common")]),s._v("下的"),a("code",[s._v("VersioningType")])]),s._v(" "),a("p",[a("code",[s._v("VersioningType")]),s._v("是一个枚举, 第一个表示在URI中传递, 后面两个是请求头, 最后一个自定义")])]),s._v(" "),a("div",{staticClass:"language-ts line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ---------- main.ts")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" NestFactory "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@nestjs/core'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" AppModule "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./app.module'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" VersioningType "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@nestjs/common'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bootstrap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" app "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("await")]),s._v(" NestFactory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("AppModule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("enableVersioning")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置RESTful版本类型")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" VersioningType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("URI")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 表示版本添加到请求头中")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("await")]),s._v(" app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bootstrap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h4",{attrs:{id:"在controller中配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在controller中配置"}},[s._v("#")]),s._v(" 在Controller中配置")]),s._v(" "),a("div",{staticClass:"language-ts line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[s._v("@"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Controller")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'user'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  version"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserController")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("此时用单纯的"),a("code",[s._v("user")]),s._v("就已经匹配不到了, 必须带上版本号"),a("code",[s._v("v1")]),s._v("才行, 也就是需要"),a("code",[s._v("v1/user/123")]),s._v("查询用户")]),s._v(" "),a("blockquote",[a("p",[s._v("注: 这里的"),a("code",[s._v("1")]),s._v("版本, 默认以缩写"),a("code",[s._v("v")]),s._v("开头")])]),s._v(" "),a("h4",{attrs:{id:"利用version装饰器控制单个版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#利用version装饰器控制单个版本"}},[s._v("#")]),s._v(" 利用Version装饰器控制单个版本")]),s._v(" "),a("div",{staticClass:"language-ts line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[s._v("@"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Controller")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'user'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  version"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserController")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n  @"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  @"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("findAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("userService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("findAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("利用方法装饰器可以单独将某个接口的版本进行升级, "),a("code",[s._v("Version")]),s._v("的优先级高于"),a("code",[s._v("Controller.version")])]),s._v(" "),a("h2",{attrs:{id:"code码规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code码规范"}},[s._v("#")]),s._v(" code码规范")]),s._v(" "),a("ul",[a("li",[s._v("200 "),a("code",[s._v("Ok")])]),s._v(" "),a("li",[s._v("304 "),a("code",[s._v("Not Modified")]),s._v(" 协商缓存")]),s._v(" "),a("li",[s._v("400 "),a("code",[s._v("Bad Request")]),s._v(" 参数错误")]),s._v(" "),a("li",[s._v("401 "),a("code",[s._v("Unauthorized")]),s._v(" token错误")]),s._v(" "),a("li",[s._v("403 "),a("code",[s._v("Forbidden referer origin")]),s._v("验证失败 (防止CSRF的, 主要校验请求头的 "),a("code",[s._v("referer")]),s._v(" 和 "),a("code",[s._v("origin")]),s._v(")")]),s._v(" "),a("li",[s._v("404 "),a("code",[s._v("Not Found")]),s._v("接口不存在")]),s._v(" "),a("li",[s._v("500 "),a("code",[s._v("Internal Server Error")]),s._v(" 服务端错误")]),s._v(" "),a("li",[s._v("502 "),a("code",[s._v("Bad Geteway")]),s._v(" 上游接口有问题或者服务器问题")])])])}),[],!1,null,null,null);t.default=e.exports}}]);