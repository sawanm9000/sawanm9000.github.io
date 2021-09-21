(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(t,r,e){"use strict";e.r(r);var o={},n=e(21),component=Object(n.a)(o,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("footer",{staticClass:"bg-gray-300 w-screen"},[e("div",{staticClass:"h-16 flex justify-between items-center gap-x-9 w-full max-w-screen-lg px-4 lg:px-0 mx-auto"},[e("div",{staticClass:"text-sm text-gray-700"},[t._v("© Sawan Mungroo 2021, unless otherwise noted. All rights reserved.")]),t._v(" "),e("div",{staticClass:"flex items-center gap-x-4"},[e("NuxtLink",{attrs:{to:"/contact"}},[e("svg",{staticClass:"h-6 w-6 opacity-90",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[e("path",{attrs:{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}}),t._v(" "),e("path",{attrs:{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"}})])]),t._v(" "),t._m(0)],1)])])}),[function(){var t=this.$createElement,r=this._self._c||t;return r("a",{attrs:{href:"https://github.com/utopianknight"}},[r("img",{staticStyle:{width:"24px",height:"24px"},attrs:{src:"GitHub-Mark-32px.png",alt:"Github"}})])}],!1,null,null,null);r.default=component.exports;installComponents(component,{Footer:e(126).default})},127:function(t,r,e){"use strict";e.r(r);var o={props:{navBarLight:{type:Boolean,default:!0}},data:function(){return{drawer:!1}},watch:{$route:function(){this.drawer=!1}}},n=(e(224),e(21)),component=Object(n.a)(o,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("header",{staticClass:"h-16 absolute top-0 w-full sm:w-auto sm:inset-x-10 md:inset-x-28 lg:inset-x-40 flex flex-col sm:flex-row justify-center sm:justify-between items-center max-w-screen-lg sm:px-5 z-10 mx-auto",class:t.navBarLight?"text-white":"text-black"},[e("NuxtLink",{class:t.drawer?"fixed z-10":"static",attrs:{to:"/"}},[e("img",{staticClass:"filter h-8 -mt-2",attrs:{src:"/logo.png",alt:"Logo"}})]),t._v(" "),e("div",{staticClass:"hidden sm:flex gap-x-4 text-sm tracking-wide"},[e("NuxtLink",{staticClass:"border px-3 py-1.5 rounded-sm border-opacity-0 hover:border-opacity-100 w-max",class:t.navBarLight?"border-white":"border-black",attrs:{to:"/"}},[t._v("Home")]),t._v(" "),e("NuxtLink",{staticClass:"border px-3 py-1.5 rounded-sm border-opacity-0 hover:border-opacity-100 w-max",class:t.navBarLight?"border-white":"border-black",attrs:{to:"/blog"}},[t._v("Blog")]),t._v(" "),e("NuxtLink",{staticClass:"border px-3 py-1.5 rounded-sm border-opacity-0 hover:border-opacity-100 w-max",class:t.navBarLight?"border-white":"border-black",attrs:{to:"/contact"}},[t._v("Contact")])],1),t._v(" "),t.drawer?e("div",{staticClass:"fixed top-0 h-screen bg-gray-900 w-full flex flex-col gap-y-4 justify-center items-center text-md font-light tracking-wide z-0"},[e("NuxtLink",{staticClass:"border px-3 py-1.5 text-white border-white rounded-sm border-opacity-0 hover:border-opacity-100 w-max",class:t.navBarLight?"border-black":"border-white",attrs:{to:"/"}},[t._v("Home")]),t._v(" "),e("NuxtLink",{staticClass:"border px-3 py-1.5 text-white border-white rounded-sm border-opacity-0 hover:border-opacity-100 w-max",class:t.navBarLight?"border-black":"border-white",attrs:{to:"/blog"}},[t._v("Blog")]),t._v(" "),e("NuxtLink",{staticClass:"border px-3 py-1.5 text-white border-white rounded-sm border-opacity-0 hover:border-opacity-100 w-max",class:t.navBarLight?"border-black":"border-white",attrs:{to:"/contact"}},[t._v("Contact")])],1):t._e(),t._v(" "),e("div",{staticClass:"absolute right-4 top-3 flex sm:hidden"},[e("button",{staticClass:"flex flex-col gap-y-2 w-10 h-10 p-2 relative",on:{click:function(r){t.drawer=!t.drawer}}},[e("div",{staticClass:"w-full h-px",class:t.drawer?"hidden":t.navBarLight?"bg-white":"bg-black"}),t._v(" "),e("div",{staticClass:"w-full h-px",class:t.drawer?"hidden":t.navBarLight?"bg-white":"bg-black"}),t._v(" "),e("div",{staticClass:"w-full h-px",class:t.drawer?"hidden":t.navBarLight?"bg-white":"bg-black"}),t._v(" "),e("div",{staticClass:"w-8 h-px transform rotate-45 bg-white absolute origin-center top-5 left-1",class:t.drawer?"block":"hidden"}),t._v(" "),e("div",{staticClass:"w-8 h-px transform -rotate-45 bg-white absolute origin-center top-5 left-1",class:t.drawer?"block":"hidden"})])])],1)}),[],!1,null,"bba99d7e",null);r.default=component.exports;installComponents(component,{Header:e(127).default})},165:function(t,r,e){var content=e(223);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(70).default)("438e1f7c",content,!0,{sourceMap:!1})},166:function(t,r,e){var content=e(225);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(70).default)("4d4bfd2f",content,!0,{sourceMap:!1})},173:function(t,r,e){"use strict";e(27);var o={data:function(){return{navBar:!0,navBarColor:"light"}},head:function(){return{title:"Sawan Mungroo - Frontend Developer"}},watch:{$route:function(){this.setNavBarVisibility()}},created:function(){this.setNavBarVisibility()},methods:{setNavBarVisibility:function(){"index"===this.$route.name?(this.navBar=!1,this.navBarColor="light"):(this.navBar=!0,this.navBarColor="dark")}}},n=(e(222),e(21)),component=Object(n.a)(o,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"relative min-h-screen pt-20 bg-gray-100"},[t.navBar?e("Header",{attrs:{"nav-bar-light":"light"===t.navBarColor}}):t._e(),t._v(" "),e("Nuxt")],1)}),[],!1,null,null,null);r.a=component.exports;installComponents(component,{Header:e(127).default})},177:function(t,r,e){e(178),t.exports=e(179)},222:function(t,r,e){"use strict";e(165)},223:function(t,r,e){var o=e(69)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\n::-webkit-scrollbar{\n  width:8px\n}\n::-webkit-scrollbar-track{\n  background-color:#f3f4f6;\n  background-color:var(--scrollbar-bg-color-dark)\n}\n::-webkit-scrollbar-thumb{\n  --tw-bg-opacity:1;\n  background-color:rgba(107, 114, 128, var(--tw-bg-opacity))\n}\n:root{\n  --scrollbar-bg-color-dark:#f3f4f6;\n  --scrollbar-color:grey\n}\n::-webkit-scrollbar-thumb:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(156, 163, 175, var(--tw-bg-opacity))\n}\n*{\n  scrollbar-width:thin;\n  scrollbar-color:grey #f3f4f6;\n  scrollbar-color:var(--scrollbar-color) var(--scrollbar-bg-color-dark)\n}\nbody{\n  height:100vh;\n  overflow-x:hidden\n}\n#__layout, #__nuxt{\n  height:100vh;\n  overflow-x:hidden\n}\n#__layout{\n  overflow-y:auto\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},224:function(t,r,e){"use strict";e(166)},225:function(t,r,e){var o=e(69)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\nheader>div>a[data-v-bba99d7e]{\n  opacity:.85\n}\n.nuxt-link-exact-active[data-v-bba99d7e]{\n  opacity:1;\n  --tw-border-opacity:1;\n  border-color:rgba(245, 158, 11, var(--tw-border-opacity));\n  --tw-border-opacity:0.4\n}\n.nuxt-link-exact-active[data-v-bba99d7e]:hover{\n  --tw-border-opacity:1\n}\n.nuxt-link-exact-active[data-v-bba99d7e]{\n  --tw-text-opacity:1;\n  color:rgba(245, 158, 11, var(--tw-text-opacity));\n  --tw-text-opacity:1\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},35:function(t,r,e){"use strict";var o={props:["error"]},n=e(21),component=Object(n.a)(o,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"flex flex-col justify-center items-center h-screen absolute top-0 left-0 w-full"},[404===t.error.statusCode?e("h1",{staticClass:"text-4xl font-bold mb-8"},[t._v("Page not found")]):e("h1",[t._v("An error occurred")]),t._v(" "),e("NuxtLink",{staticClass:"text-base text-blue-500",attrs:{to:"/"}},[t._v("← Home page")]),t._v(" "),e("Footer",{staticClass:"fixed bottom-0 w-full"})],1)}),[],!1,null,null,null);r.a=component.exports;installComponents(component,{Footer:e(126).default})}},[[177,7,1,8]]]);