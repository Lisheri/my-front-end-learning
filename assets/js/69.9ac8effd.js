(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{595:function(s,t,a){"use strict";a.r(t);var n=a(5),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"模块化打包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块化打包"}},[s._v("#")]),s._v(" 模块化打包")]),s._v(" "),a("h2",{attrs:{id:"commonjs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commonjs"}},[s._v("#")]),s._v(" CommonJS")]),s._v(" "),a("p",[s._v("就像是上一节所说过对于CommonJS模块的处理, 还是将所有的模块定义在"),a("code",[s._v("__webpack_modules__")]),s._v("中, 采用数组或者对象的形式, "),a("code",[s._v("数组")]),s._v("或者"),a("code",[s._v("对象")]),s._v("的选择依据环境而定")]),s._v(" "),a("p",[s._v("对于CommonJS, 直接就是下面这样:")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("module")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// export ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" x1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"B"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" x1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("加载的时候, 还是使用"),a("code",[s._v("__webpack_require__")]),s._v("函数, 但是对于模块加载函数的参数来说, 只需要一个module即可, 因为这里加载函数执行后, 就会添加一个exports对象, 同时加入缓存中。")]),s._v(" "),a("p",[s._v("但是CommonJS模块规范导出的模块, 不会调用 "),a("code",[s._v("__webpack_require__.r")]),s._v("方法, 也就不会标记为"),a("code",[s._v("esModule")])]),s._v(" "),a("p",[s._v("webpack5.x, 简单粗暴, 缓存也不用做修改, 直接封装在了"),a("code",[s._v("__webpack_require__")]),s._v("函数内部。")]),s._v(" "),a("h2",{attrs:{id:"es-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es-module"}},[s._v("#")]),s._v(" ES Module")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("__unused_webpack_module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" __webpack_exports__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" __webpack_require__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n__webpack_require__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("r")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__webpack_exports__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* harmony export */")]),s._v(" __webpack_require__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("d")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__webpack_exports__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* harmony export */")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"default"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__WEBPACK_DEFAULT_EXPORT__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* harmony export */")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"x1"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* binding */")]),s._v(" x1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* harmony export */")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// export")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// module.exports = 'es module';")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* harmony default export */")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" __WEBPACK_DEFAULT_EXPORT__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'es module'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" x1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"B"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("和上面唯一不同的是, 定义的模块导入函数, 其中会使用\b\b"),a("code",[s._v("__webpack_require__.r")]),s._v("标记为"),a("code",[s._v("es module")]),s._v(", 也会使用 "),a("code",[s._v("__webpack_require__.d")]),s._v("标记模块所有的导出成员。")]),s._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("p",[s._v("无论是"),a("code",[s._v("require")]),s._v(" 还是 "),a("code",[s._v("import")]),s._v(" 在webpack处理后, 都会替换为 "),a("code",[s._v("__webpack_require__")]),s._v("导入模块成员, 但是 CommonJS规范导出的模块, 不会调用 "),a("code",[s._v("r")]),s._v("和"),a("code",[s._v("d")]),s._v("方法, 标记为"),a("code",[s._v("ES Module")]),s._v("以及"),a("code",[s._v("标记导出成员")]),s._v("。")])])}),[],!1,null,null,null);t.default=e.exports}}]);