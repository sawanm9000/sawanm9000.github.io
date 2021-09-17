(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{158:function(t,e,r){var content=r(214);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(90).default)("438e1f7c",content,!0,{sourceMap:!1})},165:function(t,e,r){"use strict";var o={data:function(){return{navBarLight:!1,drawer:!1}},head:function(){return{title:"SaM - Frontend Developer"}},watch:{$route:function(){this.setNavBarColor(),this.drawer=!1}},created:function(){this.setNavBarColor()},methods:{setNavBarColor:function(){"/"===this.$route.path?this.navBarLight=!1:this.navBarLight=!0}}},n=(r(213),r(38)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"relative min-h-screen pt-20 bg-gray-100"},[r("header",{staticClass:"h-16 absolute top-0 w-full sm:w-auto sm:inset-x-10 md:inset-x-28 lg:inset-x-40 flex flex-col sm:flex-row justify-center sm:justify-between items-center max-w-screen-lg sm:px-5 z-10 mx-auto",class:t.navBarLight?"text-black":"text-white"},[r("NuxtLink",{attrs:{to:"/"}},[r("img",{staticClass:"filter",class:t.navBarLight?"invert":"invert-0",staticStyle:{height:"32px"},attrs:{src:"/logo.png",alt:"Logo"}})]),t._v(" "),r("div",{staticClass:"hidden sm:flex gap-x-4 text-lg"},[r("NuxtLink",{staticClass:"border px-3 py-1.5 rounded-sm border-opacity-0 hover:border-opacity-100 w-max",class:t.navBarLight?"border-black":"border-white",attrs:{to:"/"}},[t._v("Home")]),t._v(" "),r("NuxtLink",{staticClass:"border px-3 py-1.5 rounded-sm border-opacity-0 hover:border-opacity-100 w-max",class:t.navBarLight?"border-black":"border-white",attrs:{to:"/blog"}},[t._v("Blog")]),t._v(" "),r("NuxtLink",{staticClass:"border px-3 py-1.5 rounded-sm border-opacity-0 hover:border-opacity-100 w-max",class:t.navBarLight?"border-black":"border-white",attrs:{to:"/contact"}},[t._v("Contact")])],1),t._v(" "),t.drawer?r("div",{staticClass:"fixed top-0 h-screen bg-gray-900 w-full flex flex-col gap-y-4 justify-center items-center text-xl font-thin tracking-wider"},[r("NuxtLink",{staticClass:"border px-3 py-1.5 text-white border-white rounded-sm border-opacity-0 hover:border-opacity-100 w-max",class:t.navBarLight?"border-black":"border-white",attrs:{to:"/"}},[t._v("Home")]),t._v(" "),r("NuxtLink",{staticClass:"border px-3 py-1.5 text-white border-white rounded-sm border-opacity-0 hover:border-opacity-100 w-max",class:t.navBarLight?"border-black":"border-white",attrs:{to:"/blog"}},[t._v("Blog")]),t._v(" "),r("NuxtLink",{staticClass:"border px-3 py-1.5 text-white border-white rounded-sm border-opacity-0 hover:border-opacity-100 w-max",class:t.navBarLight?"border-black":"border-white",attrs:{to:"/contact"}},[t._v("Contact")])],1):t._e(),t._v(" "),r("div",{staticClass:"absolute right-4 top-3 flex sm:hidden"},[r("button",{staticClass:"flex flex-col gap-y-2 w-10 p-2",on:{click:function(e){t.drawer=!t.drawer}}},[r("div",{staticClass:"w-full h-px",class:t.drawer?"bg-white":t.navBarLight?"bg-black":"bg-white"}),t._v(" "),r("div",{staticClass:"w-full h-px",class:t.drawer?"bg-white":t.navBarLight?"bg-black":"bg-white"}),t._v(" "),r("div",{staticClass:"w-full h-px",class:t.drawer?"bg-white":t.navBarLight?"bg-black":"bg-white"})])])],1),t._v(" "),r("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports},169:function(t,e,r){r(170),t.exports=r(171)},213:function(t,e,r){"use strict";r(158)},214:function(t,e,r){var o=r(89)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\nbody{\n  height:100vh;\n  overflow-x:hidden\n}\n#__layout, #__nuxt{\n  height:100vh;\n  overflow-x:hidden\n}\nheader>div>a{\n  opacity:.85\n}\n.nuxt-link-exact-active{\n  opacity:1;\n  --tw-border-opacity:0.4;\n  --tw-text-opacity:1\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},33:function(t,e,r){"use strict";var o={props:["error"]},n=r(38),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[404===t.error.statusCode?r("h1",[t._v("Page not found")]):r("h1",[t._v("An error occurred")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v("Home page")])],1)}),[],!1,null,null,null);e.a=component.exports}},[[169,8,1,9]]]);