(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{685:function(t,a,s){"use strict";s.r(a);var n=s(5),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"虚拟dom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#虚拟dom"}},[t._v("#")]),t._v(" 虚拟DOM")]),t._v(" "),s("h2",{attrs:{id:"什么是虚拟dom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是虚拟dom"}},[t._v("#")]),t._v(" 什么是虚拟DOM?")]),t._v(" "),s("p",[t._v("virtualDOM(虚拟DOM), 是由普通的JS对象来描述DOM对象")]),t._v(" "),s("h3",{attrs:{id:"为什么要用虚拟dom来描述真实的dom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么要用虚拟dom来描述真实的dom"}},[t._v("#")]),t._v(" 为什么要用虚拟DOM来描述真实的DOM")]),t._v(" "),s("p",[t._v("主要还是真实的DOM成员, 打印出来的结果, 非常的长, 如下所示:")]),t._v(" "),s("p",[s("code",[t._v("__vue__,align,title,lang,translate,dir,hidden,accessKey,draggable,spellcheck,autocapitalize,contentEditable,isContentEditable,inputMode,offsetParent,offsetTop,offsetLeft,offsetWidth,offsetHeight,style,innerText,outerText,onbeforexrselect,onabort,onblur,oncancel,oncanplay,oncanplaythrough,onchange,onclick,onclose,oncontextmenu,oncuechange,ondblclick,ondrag,ondragend,ondragenter,ondragleave,ondragover,ondragstart,ondrop,ondurationchange,onemptied,onended,onerror,onfocus,onformdata,oninput,oninvalid,onkeydown,onkeypress,onkeyup,onload,onloadeddata,onloadedmetadata,onloadstart,onmousedown,onmouseenter,onmouseleave,onmousemove,onmouseout,onmouseover,onmouseup,onmousewheel,onpause,onplay,onplaying,onprogress,onratechange,onreset,onresize,onscroll,onseeked,onseeking,onselect,onstalled,onsubmit,onsuspend,ontimeupdate,ontoggle,onvolumechange,onwaiting,onwebkitanimationend,onwebkitanimationiteration,onwebkitanimationstart,onwebkittransitionend,onwheel,onauxclick,ongotpointercapture,onlostpointercapture,onpointerdown,onpointermove,onpointerup,onpointercancel,onpointerover,onpointerout,onpointerenter,onpointerleave,onselectstart,onselectionchange,onanimationend,onanimationiteration,onanimationstart,ontransitionrun,ontransitionstart,ontransitionend,ontransitioncancel,oncopy,oncut,onpaste,dataset,nonce,autofocus,tabIndex,attachInternals,blur,click,focus,enterKeyHint,virtualKeyboardPolicy,onpointerrawupdate,namespaceURI,prefix,localName,tagName,id,className,classList,slot,attributes,shadowRoot,part,assignedSlot,innerHTML,outerHTML,scrollTop,scrollLeft,scrollWidth,scrollHeight,clientTop,clientLeft,clientWidth,clientHeight,attributeStyleMap,onbeforecopy,onbeforecut,onbeforepaste,onsearch,elementTiming,onfullscreenchange,onfullscreenerror,onwebkitfullscreenchange,onwebkitfullscreenerror,children,firstElementChild,lastElementChild,childElementCount,previousElementSibling,nextElementSibling,after,animate,append,attachShadow,before,closest,computedStyleMap,getAttribute,getAttributeNS,getAttributeNames,getAttributeNode,getAttributeNodeNS,getBoundingClientRect,getClientRects,getElementsByClassName,getElementsByTagName,getElementsByTagNameNS,hasAttribute,hasAttributeNS,hasAttributes,hasPointerCapture,insertAdjacentElement,insertAdjacentHTML,insertAdjacentText,matches,prepend,querySelector,querySelectorAll,releasePointerCapture,remove,removeAttribute,removeAttributeNS,removeAttributeNode,replaceChildren,replaceWith,requestFullscreen,requestPointerLock,scroll,scrollBy,scrollIntoView,scrollIntoViewIfNeeded,scrollTo,setAttribute,setAttributeNS,setAttributeNode,setAttributeNodeNS,setPointerCapture,toggleAttribute,webkitMatchesSelector,webkitRequestFullScreen,webkitRequestFullscreen,ariaAtomic,ariaAutoComplete,ariaBusy,ariaChecked,ariaColCount,ariaColIndex,ariaColSpan,ariaCurrent,ariaDescription,ariaDisabled,ariaExpanded,ariaHasPopup,ariaHidden,ariaKeyShortcuts,ariaLabel,ariaLevel,ariaLive,ariaModal,ariaMultiLine,ariaMultiSelectable,ariaOrientation,ariaPlaceholder,ariaPosInSet,ariaPressed,ariaReadOnly,ariaRelevant,ariaRequired,ariaRoleDescription,ariaRowCount,ariaRowIndex,ariaRowSpan,ariaSelected,ariaSetSize,ariaSort,ariaValueMax,ariaValueMin,ariaValueNow,ariaValueText,getAnimations,getInnerHTML,nodeType,nodeName,baseURI,isConnected,ownerDocument,parentNode,parentElement,childNodes,firstChild,lastChild,previousSibling,nextSibling,nodeValue,textContent,ELEMENT_NODE,ATTRIBUTE_NODE,TEXT_NODE,CDATA_SECTION_NODE,ENTITY_REFERENCE_NODE,ENTITY_NODE,PROCESSING_INSTRUCTION_NODE,COMMENT_NODE,DOCUMENT_NODE,DOCUMENT_TYPE_NODE,DOCUMENT_FRAGMENT_NODE,NOTATION_NODE,DOCUMENT_POSITION_DISCONNECTED,DOCUMENT_POSITION_PRECEDING,DOCUMENT_POSITION_FOLLOWING,DOCUMENT_POSITION_CONTAINS,DOCUMENT_POSITION_CONTAINED_BY,DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC,appendChild,cloneNode,compareDocumentPosition,contains,getRootNode,hasChildNodes,insertBefore,isDefaultNamespace,isEqualNode,isSameNode,lookupNamespaceURI,lookupPrefix,normalize,removeChild,replaceChild,addEventListener,dispatchEvent,removeEventListener,")])]),t._v(" "),s("p",[t._v("可以发现, 一个dom对象的成员非常多, 因此, 在创建和删除一个DOM对象时, 所需要的成本就非常的大, 而如果要一次操作更多的DOM对象, 那就大的没边了。")]),t._v(" "),s("p",[t._v("而一段基础的virtualDOM如下所示:")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" virtualDOM "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  sel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  children"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello, Virtual DOM'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  elm"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  key"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[t._v("他就是一个普通的js对象, 通过"),s("code",[t._v("sel")]),t._v("描述选择器, 通过"),s("code",[t._v("text")]),t._v("来描述标签中的文本")]),t._v(" "),s("p",[t._v("因此, 一个virtualDOM的成员比真实的DOM会少很多, 因此我们创建一个virtualDOM的开销比真实DOM会小很多。")]),t._v(" "),s("h3",{attrs:{id:"为什么要使用-virtual-dom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么要使用-virtual-dom"}},[t._v("#")]),t._v(" 为什么要使用 Virtual DOM")]),t._v(" "),s("ul",[s("li",[t._v("前端开发刀耕火种的时代(真实DOM操作不方便, 成本高)")])]),t._v(" "),s("p",[t._v("那时候开发web应用时, 需要手动操作DOM, 还需要考虑浏览器兼容性问题非常麻烦。后来有了jq, 方便了dom操作, 也解决了很大一定程度的兼容性问题。")]),t._v(" "),s("p",[t._v("但是随着前端项目越来越复杂, DOM操作也越来越复杂, 同时又需要考虑操作数据。")]),t._v(" "),s("p",[t._v("直到后来推出了各种各样的MVVM框架")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("MVVM框架解决了视图和状态同步的问题(也就是数据驱动视图, 视图变化也会自动同步数据)")])]),t._v(" "),s("li",[s("p",[t._v("模板引擎可以简化视图的操作, 但是模板引擎没有办法跟踪数据变化(也就是数据变化后, 无法获取上一次的数据状态, 就只能删除元素后重新创建, 性能比较低)")])]),t._v(" "),s("li",[s("p",[t._v("虚拟DOM跟踪状态变化")])])]),t._v(" "),s("p",[t._v("在状态改变时, 不需要立即更新DOM, 只需要创建一个虚拟DOM树, 来描述真实的DOM树, 虚拟DOM内部实现了有效的更新真实的DOM")]),t._v(" "),s("p",[t._v("内部集成了一套DIFF机制, 用于比对状态的差异, 只更新变化的部分。")]),t._v(" "),s("p",[t._v("不像真实DOM, 不用全部删除然后重新创建, 只需要创建/删除/改变变化的那一个就可以了")]),t._v(" "),s("p",[t._v("在添加和排序时, 比真实DOM体验更好。")]),t._v(" "),s("ul",[s("li",[t._v("github上关于virtual-dom的描述\n"),s("ul",[s("li",[t._v("虚拟DOM可以维护程序的状态, 跟踪上一次的状态")]),t._v(" "),s("li",[t._v("通过比较前后两次状态差异更新真实DOM")])])])]),t._v(" "),s("h3",{attrs:{id:"虚拟dom的作用和虚拟dom库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#虚拟dom的作用和虚拟dom库"}},[t._v("#")]),t._v(" 虚拟DOM的作用和虚拟DOM库")]),t._v(" "),s("p",[t._v("在极其简单的情况下, 如果我们可以明确的知道需要更新的DOM和DOM对应的位置, 那么直接使用真实DOM更新比使用虚拟DOM, 性能更好。所以并不是所有的时候使用虚拟DOM, 都可以提高性能。")]),t._v(" "),s("p",[t._v("虚拟DOM的作用:")]),t._v(" "),s("ul",[s("li",[t._v("维护视图和状态的关系")]),t._v(" "),s("li",[t._v("复杂视图情况下提升渲染性能")]),t._v(" "),s("li",[t._v("跨平台(最大的好处)\n"),s("ul",[s("li",[t._v("浏览器平台渲染DOM")]),t._v(" "),s("li",[t._v("服务端渲染SSR(Nuxt.js/Next.js), 所谓的SSR, 就是将virtual-dom转换为普通的html字符串")]),t._v(" "),s("li",[t._v("原生应用(Weex/Reactive Native等)")]),t._v(" "),s("li",[t._v("小程序(mpvue/uni-app/taro)等")])])])]),t._v(" "),s("h3",{attrs:{id:"虚拟dom库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#虚拟dom库"}},[t._v("#")]),t._v(" 虚拟DOM库")]),t._v(" "),s("ul",[s("li",[t._v("Snabbdom\n"),s("ul",[s("li",[t._v("vue.js2.x内部使用的虚拟DOM就是改造的snabbdom")]),t._v(" "),s("li",[t._v("大约 200 SLOC(single line of code), 比直接看vue的源码轻松很多")]),t._v(" "),s("li",[t._v("通过模块可扩展")]),t._v(" "),s("li",[t._v("源码使用TS开发")]),t._v(" "),s("li",[t._v("最快的 virtual-dom 之一")])])]),t._v(" "),s("li",[t._v("virtual-dom(最早的虚拟DOM开源库)")])]),t._v(" "),s("h2",{attrs:{id:"snabbdom的基本使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#snabbdom的基本使用"}},[t._v("#")]),t._v(" Snabbdom的基本使用")]),t._v(" "),s("ol",[s("li",[t._v("创建一个新项目")]),t._v(" "),s("li",[t._v("安装parcel(打包工具这里使用parcel, 因为他配置简单)")]),t._v(" "),s("li",[t._v("配置scripts, 打包以及启动项目")]),t._v(" "),s("li",[t._v("配置目录结构")])]),t._v(" "),s("p",[t._v("Snabbdom: "),s("code",[t._v("A virtual DOM library with focus on simplicity, modularity, powerful features and performance.")])]),t._v(" "),s("blockquote",[s("p",[t._v("Snabbdom有两个核心函数, 一个是 "),s("code",[t._v("init")]),t._v("函数, 一个是 "),s("code",[t._v("h")]),t._v("函数")])]),t._v(" "),s("h3",{attrs:{id:"核心函数之一-init"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#核心函数之一-init"}},[t._v("#")]),t._v(" 核心函数之一 -- init")]),t._v(" "),s("p",[t._v("init是一个高阶函数, 接收一个数组作为参数, 数组内部加载的是snabbdom的模块")]),t._v(" "),s("p",[t._v("init函数返回了一个patch函数, 核心是把虚拟dom转换为真实dom渲染到界面上")]),t._v(" "),s("h3",{attrs:{id:"核心函数之一-h"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#核心函数之一-h"}},[t._v("#")]),t._v(" 核心函数之一 -- h")]),t._v(" "),s("p",[t._v("在创建vue实例时, render选项中的参数, 就是h函数, render中的h和snabbdom中的h作用是一样的, 都是用于创建virtual DOM")]),t._v(" "),s("h3",{attrs:{id:"小提示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小提示"}},[t._v("#")]),t._v(" 小提示")]),t._v(" "),s("p",[t._v("在snabbdom的package.json中, 有一个"),s("code",[t._v("exports")]),t._v("字段, 用于做文件的路径映射, 但是该字段在node12.x以上版本才支持, 同时webpack5.x正式开始支持, 之前都无法识别, 因此在此处使用parcel是不能识别该字段的, 也就不能像github实例中一样引入snabbdom库, 需要使用全路径")]),t._v(" "),s("h3",{attrs:{id:"基本使用-案例1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本使用-案例1"}},[t._v("#")]),t._v(" 基本使用 -- 案例1")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在snabbdom的package.json中, 有一个exports字段, 可以非常方便的设置子路径")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 因此, 通过snabbdom/可以方便的加载后面的路径")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 但是这个字段是nodeJS12.x以上才开始支持的, 我们用的parcel打包工具以及webpack4.x之前的打包工具, 都还不支持这个字段")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// webpack5才真正开始支持该字段")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" init "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'snabbdom/build/package/init'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" h "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'snabbdom/build/package/h'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" patch "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * h函数, 有两个参数\n * @param {string} selector 标签 + 选择器\n * @param {string | Array<VNode>} text 如果是字符串就代表标签中的文本内容\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" vNode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("h")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div#container.cls'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello World'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// #app这个div和vue一样, 都是用于占位, 而上面的vNode, 就需要渲染到这个app中")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" app "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// patch 用于对比两个VNode, 将两个VNode的差异, 渲染到页面中")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// patch 的第一个参数, 可以传入真实DOM")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * patch 内部会对比这两个VNode的差异, 并且将差异更新到真实DOM, 同时将新的VNode保存起来, 作为下一次的VNode\n * @param {VNode | Element} oldNode 旧的VNode, 也可以是DOM元素\n * @param {VNode} newVNode 新的VNode\n * @return {VNode} node 返回新的VNode\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" oldVNode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("patch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" newVNode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("h")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div#container.xxx'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello Snabbdom'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("patch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oldVNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newVNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br")])]),s("h3",{attrs:{id:"案例二"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#案例二"}},[t._v("#")]),t._v(" 案例二")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" init "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'snabbdom/build/package/init'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" h "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'snabbdom/build/package/h'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" patch "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" vNode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("h")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div#container'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("h")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'h1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello Snabbdom'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("h")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'p'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'这是一个p标签'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oldVNode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("patch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vNode = h('div#container', [")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   h('h1', 'Hello World'),")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   h('p', 'Hello P')")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ])")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// patch(oldVNode, vNode);")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 清除div的内容")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// h('!')代表生成空的注释节点")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("patch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oldVNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("h")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'!'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);