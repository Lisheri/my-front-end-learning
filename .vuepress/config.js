module.exports = {
  "title": "小莫的博客",
  "description": "冲",
  "dest": "public",
  "base": "/my-front-end-learning/",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "mode": 'light', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
    "modePicker": true, // 默认 true，false 不显示模式调节按钮，true 则显示
    "subSidebar": "auto",
    "valineConfig": {
      "appId": 'IitoRlYOaTEqCmJddwQ4lHGT-gzGzoHsz',// your appId
      "appKey": 'GfAYiCQelHwHdrrxUeXIK3gN', // your appKey
    },
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      // {
      //   "text": "Docs",
      //   "icon": "reco-message",
      //   "items": [
      //     {
      //       "text": "vuepress-reco",
      //       "link": "/docs/theme-reco/"
      //     }
      //   ]
      // },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/recoluan",
            "icon": "reco-github"
          },
          {
            "text": "myGitHub",
            "link": "https://github.com/Lisheri",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/blogs/ECMA2015/": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
      ],
      "/blogs/FunctionalProgramming/": [
        "FunctionalProgrammingParadigm/121501",
        "PureFunction/1",
        "FunctionCombination/1",
        "Functor/1"
      ],
      "/blogs/JSAsyncProgramming/": [
        "async/092101",
        "promise/121501"
      ],
      "/blogs/performance/": [
        "1", "2", "3", "4", "5", "6", "7"
      ],
      "/blogs/typeEnhancement/": [
        {
          title: "JS类型系统",
          collapsable: false,
          children: [
            "1",
            "2",
            "3",
            "4",
            {
              title: "TypeScript",
              collapsable: true,
              children: [
                "ts/1",
                "ts/2",
                "ts/3",
                "ts/4",
                "ts/5",
                "ts/6",
                "ts/7"
              ]
            }
          ]
        }
      ],
      "/blogs/part6/": [
        {
          title: "前端工程化",
          collapsable: true,
          children: [
            "first/1", 
            "first/2", 
            "first/3"
          ]
        },
        {
          title: "脚手架工具",
          collapsable: true,
          children: [
            "second/1", 
            "second/2", 
            "second/3", 
            "second/4"
          ]
        },
        {
          title: "自动化构建",
          collapsable: true,
          children: [
            "third/1", 
            "third/2", 
            {
              title: "gulp",
              collapsable: true,
              children: [
                "third/gulp/1",
                "third/gulp/2",
                "third/gulp/3",
                "third/gulp/4",
                "third/gulp/5",
              ]
            },
            {
              title: "封装自动化构建工作流",
              collapsable: true,
              children: [
                "third/gulp/6",
                "third/gulp/7"
              ]
            },
            {
              title: "FIS上手",
              collapsable: true,
              children: [
                "third/FIS/1",
                "third/FIS/2"
              ]
            }
          ]
        }
      ],
      "/blogs/ModularDevelopment/": [
        {
          title: "模块化开发",
          collapsable: true,
          children: [
            "1", 
            "2", 
            "3"
          ]
        },
        {
          title: "webpack打包",
          collapsable: true,
          children: [
            "WebpackStudy/1",
            "WebpackStudy/2",
            "WebpackStudy/3",
            "WebpackStudy/4",
            "WebpackStudy/5",
            "WebpackStudy/6",
            "WebpackStudy/7",
            "WebpackStudy/8",
            "WebpackStudy/9",
            "WebpackStudy/10",
          ]
        },
        {
          title: "Rollup上手",
          collapsable: true,
          children: [
            "Rollup/1",
          ]
        },
        {
          title: "Parcel上手",
          collapsable: true,
          children: [
            "parcel/1"
          ]
        },
        {
          title: "规范化标准",
          collapsable: true,
          children: [
            "eslint/1"
          ]
        },
        {
          title: "webpack源码阅读",
          collapsable: true,
          children: [
            "webpackSource/1",
            "webpackSource/2"
          ]
        }
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "目录"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      // {
      //   "title": "午后南杂",
      //   "desc": "Enjoy when you can, and endure when you must.",
      //   "email": "1156743527@qq.com",
      //   "link": "https://www.recoluan.com"
      // },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      },
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "Lisher",
    "authorAvatar": "/Lisher.jpeg",
    "record": "xxxx",
    "startYear": "2021"
  },
  "markdown": {
    "lineNumbers": true
  }
}