(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{623:function(a,v,_){"use strict";_.r(v);var t=_(5),e=Object(t.a)({},(function(){var a=this,v=a.$createElement,_=a._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[_("h1",{attrs:{id:"小程序基础"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#小程序基础"}},[a._v("#")]),a._v(" 小程序基础")]),a._v(" "),_("p",[a._v("以下所有的小程序都代表微信小程序")]),a._v(" "),_("h2",{attrs:{id:"简介"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[a._v("#")]),a._v(" 简介")]),a._v(" "),_("h3",{attrs:{id:"出现的契机"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#出现的契机"}},[a._v("#")]),a._v(" 出现的契机")]),a._v(" "),_("ol",[_("li",[a._v("传统的android/ios开发成本和运营成本很高")])]),a._v(" "),_("p",[a._v("第一是人力成本高, 第二是发版审核成本高, 第三是广告成本高")]),a._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[a._v("相对于原生app而言, 小程序无需单独下载")]),a._v(" "),_("li",[a._v("小程序寄存于原生app中, app自带流量, 小程序营销成本低(比如说一些小游戏, 在群里分享, 来的很快)")]),a._v(" "),_("li",[a._v("比起原生Android/Ios, 小程序的技术栈, 仅仅只有js")])]),a._v(" "),_("h3",{attrs:{id:"小程序和网页开发的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#小程序和网页开发的区别"}},[a._v("#")]),a._v(" 小程序和网页开发的区别")]),a._v(" "),_("ol",[_("li",[a._v("小程序中不能使用html")]),a._v(" "),_("li",[a._v("可以使用css")]),a._v(" "),_("li",[a._v("主要开发语言是JavaScript, 但是不包含dom和bom的API")]),a._v(" "),_("li",[a._v("网页开发的运行环境是浏览器, 而微信小程序的运行环境是Android/Ios上的微信客户端")])]),a._v(" "),_("h3",{attrs:{id:"运行环境"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#运行环境"}},[a._v("#")]),a._v(" 运行环境")]),a._v(" "),_("ol",[_("li",[a._v("渲染层: 主要是渲染内容和样式\n"),_("ul",[_("li",[a._v("IOS: WKWebView")]),a._v(" "),_("li",[a._v("Android: Chromium定制内核")])])]),a._v(" "),_("li",[a._v("逻辑层: 主要用于处理js\n"),_("ul",[_("li",[a._v("IOS: JSCore")]),a._v(" "),_("li",[a._v("Android: V8")])])])]),a._v(" "),_("h2",{attrs:{id:"小程序目录结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#小程序目录结构"}},[a._v("#")]),a._v(" 小程序目录结构")]),a._v(" "),_("h3",{attrs:{id:"全局文件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#全局文件"}},[a._v("#")]),a._v(" 全局文件")]),a._v(" "),_("ol",[_("li",[a._v("app.js  "),_("code",[a._v("小程序入口文件")])]),a._v(" "),_("li",[a._v("app.json "),_("code",[a._v("小程序全局配置")])]),a._v(" "),_("li",[a._v("app.wxss "),_("code",[a._v("小程序全局样式")])])]),a._v(" "),_("h3",{attrs:{id:"页面文件-pages"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#页面文件-pages"}},[a._v("#")]),a._v(" 页面文件(pages)")]),a._v(" "),_("ol",[_("li",[a._v("index.js "),_("code",[a._v("页面入口")])]),a._v(" "),_("li",[a._v("index.json "),_("code",[a._v("页面配置")])]),a._v(" "),_("li",[a._v("index.wxml "),_("code",[a._v("页面内容")])]),a._v(" "),_("li",[a._v("index.wxss "),_("code",[a._v("页面样式")]),a._v("(这个只针对当前页面起作用)")])]),a._v(" "),_("p",[a._v("小程序当中, 每个页面都必须由这四个文件组成, 同时这四个文件的名称必须一致, 比如说index")]),a._v(" "),_("p",[a._v("与网页开发不同, 小程序开发的页面文件, 不是由工程师手动创建的, 而是由小程序自动生成的")]),a._v(" "),_("p",[a._v("只需要在全局app.json的pages中, 指定一下, 然后保存, 就可以生成")]),a._v(" "),_("h3",{attrs:{id:"tabbar"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tabbar"}},[a._v("#")]),a._v(" tabBar")]),a._v(" "),_("p",[a._v("在app.json的pages中, 可以配置tabBar, 同时也有api可以控制tabBar的显示和隐藏")]),a._v(" "),_("h2",{attrs:{id:"生命周期"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[a._v("#")]),a._v(" 生命周期")]),a._v(" "),_("ul",[_("li",[_("code",[a._v("小程序的生命周期(也是全局生命周期)")]),a._v(": app.js")]),a._v(" "),_("li",[_("code",[a._v("页面的生命周期(每一个页面单独的)")]),a._v(": pagename.js(每个页面的js文件下)")])]),a._v(" "),_("h3",{attrs:{id:"小程序的生命周期"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#小程序的生命周期"}},[a._v("#")]),a._v(" 小程序的生命周期")]),a._v(" "),_("ol",[_("li",[a._v("onLaunch: 小程序启动, 全局只会调用一次")]),a._v(" "),_("li",[a._v("onShow: 初始化完成, 以及从后台切换到前台")]),a._v(" "),_("li",[a._v("onHide: 从前台切换到后台")])]),a._v(" "),_("h3",{attrs:{id:"页面的生命周期"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#页面的生命周期"}},[a._v("#")]),a._v(" 页面的生命周期")]),a._v(" "),_("ol",[_("li",[a._v("onLoad: 页面加载(只执行一次)")]),a._v(" "),_("li",[a._v("onShow: 页面展示(切前台, 路由切回来也会)")]),a._v(" "),_("li",[a._v("onReady: 页面就绪，所有的渲染都完成了(仅一次)")]),a._v(" "),_("li",[a._v("onHide: 页面隐藏(切后台)")]),a._v(" "),_("li",[a._v("onUnload: 页面卸载(只执行一次)")])]),a._v(" "),_("h3",{attrs:{id:"云api"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#云api"}},[a._v("#")]),a._v(" 云API")]),a._v(" "),_("p",[a._v("官方推出的, 提供小程序调用的接口, 因为这些接口都在云端, 因此叫云API")]),a._v(" "),_("ol",[_("li",[a._v("这些接口不需要我们开发")]),a._v(" "),_("li",[a._v("这些接口不需要我们部署")])]),a._v(" "),_("p",[_("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/",target:"_blank",rel:"noopener noreferrer"}},[a._v("云API"),_("OutboundLink")],1)]),a._v(" "),_("blockquote",[_("p",[a._v("一般来说云api都放在了"),_("code",[a._v("wx")]),a._v("这个对象中")]),a._v(" "),_("p",[_("code",[a._v("wx.xxx")]),a._v("就是一个云API的调用语法")])]),a._v(" "),_("h3",{attrs:{id:"常用云api"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常用云api"}},[a._v("#")]),a._v(" 常用云API")]),a._v(" "),_("ol",[_("li",[_("code",[a._v("wx.getStorageSync")]),a._v(", 同步获取缓存中的数据")]),a._v(" "),_("li",[_("code",[a._v("wx.setStorageSync(key, val)")]),a._v(", 同步设置缓存中的数据")])]),a._v(" "),_("blockquote",[_("p",[a._v("上面两个如果不带sync后缀就是异步API了")])]),a._v(" "),_("ol",{attrs:{start:"3"}},[_("li",[_("code",[a._v("wx.login")]),a._v(", 登录, 调用接口获取登录凭证（code）, 一般要在success回调中, 将res发给后端, 获取对应的用户信息, openId, session等")])]),a._v(" "),_("blockquote",[_("p",[a._v("这里调取wx.login之后, 会弹出一个让用户点击确定的授权登录窗口")])]),a._v(" "),_("ol",{attrs:{start:"4"}},[_("li",[_("code",[a._v("wx.getSetting")]),a._v(" 获取用户的信息, 里面会返回一个字段叫做"),_("code",[a._v("authSetting")]),a._v(", 这里是用户的授权结果")]),a._v(" "),_("li",[_("code",[a._v("wx.getUserInfo")]),a._v(", 上述api中查询到 authSetting中显示用户已授权, 才能通过该api获取到用户的头像昵称等信息(包含签名等)")])]),a._v(" "),_("blockquote",[_("p",[a._v("上述操作完成后, 获取授权之后, 再次进入小程序, 将不会弹出授权窗口(杀死小程序除外)")]),a._v(" "),_("p",[a._v("一般获取到用户信息后, 会将其存储到globalData中, 也就是全局数据")]),a._v(" "),_("p",[a._v("具体信息可以到上述的api文档中查询(内部还有一些关于api的问题答疑)")])]),a._v(" "),_("p",[a._v("当然, 目前小程序(原生微信小程序)初始化后, 已经不在生成上述的信息了。")]),a._v(" "),_("h3",{attrs:{id:"全局数据"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#全局数据"}},[a._v("#")]),a._v(" 全局数据")]),a._v(" "),_("p",[a._v("在app.js中有一个"),_("code",[a._v("globalData")]),a._v(", 其实就是全局数据")]),a._v(" "),_("h3",{attrs:{id:"index-页面"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#index-页面"}},[a._v("#")]),a._v(" index 页面")]),a._v(" "),_("p",[a._v("原生小程序中, 上述有写到过一共包含四个文件, 其中"),_("code",[a._v("index.js")]),a._v("中, 包含数据绑定,")]),a._v(" "),_("p",[_("code",[a._v("index.json")]),a._v("中包含一些页面的配置,")]),a._v(" "),_("p",[a._v("而"),_("code",[a._v("index.wxml")]),a._v("就是组件+条件渲染, 和vue的"),_("code",[a._v("template")]),a._v("差不多")]),a._v(" "),_("p",[_("code",[a._v("index.wxss")]),a._v("就是样式文件")]),a._v(" "),_("p",[_("code",[a._v("wxml")]),a._v("是微信专门开发的一套框架设计的标签语言, 展示内容的具体标签称为"),_("code",[a._v("组件")])]),a._v(" "),_("h3",{attrs:{id:"获取应用实例"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#获取应用实例"}},[a._v("#")]),a._v(" 获取应用实例")]),a._v(" "),_("p",[a._v("可以使用"),_("code",[a._v("getApp()")]),a._v(", 直接获取小程序的应用实例")]),a._v(" "),_("h3",{attrs:{id:"模块化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#模块化"}},[a._v("#")]),a._v(" 模块化")]),a._v(" "),_("p",[a._v("小程序中的模块化遵循CommonJS规范")]),a._v(" "),_("h2",{attrs:{id:"接口调试"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#接口调试"}},[a._v("#")]),a._v(" 接口调试")]),a._v(" "),_("h3",{attrs:{id:"数据接口调试工具-insomnia"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据接口调试工具-insomnia"}},[a._v("#")]),a._v(" 数据接口调试工具 -- insomnia")]),a._v(" "),_("p",[a._v("安装(macos):")]),a._v(" "),_("p",[_("code",[a._v("windows直接去官网下安装包~")])]),a._v(" "),_("div",{staticClass:"language-shell line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-shell"}},[_("code",[a._v("brew "),_("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" --cask insomnia\n")])]),a._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[a._v("1")]),_("br")])]),_("p",[a._v("具体使用见文档~, 很轻量~")]),a._v(" "),_("h3",{attrs:{id:"调用接口"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#调用接口"}},[a._v("#")]),a._v(" 调用接口")]),a._v(" "),_("p",[a._v("微信小程序调用接口必须走 "),_("code",[a._v("wx.request")]),a._v(" 这个方法~(其他的第三方库, 如小程序版本的axios都是基于此方法封装的~)")]),a._v(" "),_("p",[_("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("直接过去"),_("OutboundLink")],1)]),a._v(" "),_("h3",{attrs:{id:"接口调用报错-xxx不在以下request合法域名的列表中"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#接口调用报错-xxx不在以下request合法域名的列表中"}},[a._v("#")]),a._v(" 接口调用报错 -- "),_("code",[a._v("xxx不在以下request合法域名的列表中")])]),a._v(" "),_("blockquote",[_("p",[a._v("解决方案")]),a._v(" "),_("ul",[_("li",[_("p",[a._v("开发阶段解决方案: 在开发者工具中勾选, 不校验合法域名")])]),a._v(" "),_("li",[_("p",[a._v("生产环境解决方案: 绑定请求接口域名(在小程序的管理后台中, 在开发中找到开发设置, 找到服务器域名, 在request合法域名当中, 配置上请求的第三方api域名)")])])])])])}),[],!1,null,null,null);v.default=e.exports}}]);