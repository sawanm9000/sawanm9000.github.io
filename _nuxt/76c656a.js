(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(t,r,e){"use strict";e.r(r);var o={props:{navBarLight:{type:Boolean,default:!0}},data:function(){return{drawer:!1}},watch:{$route:function(){this.drawer=!1}}},n=(e(217),e(29)),component=Object(n.a)(o,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("header",{staticClass:"h-16 absolute top-0 w-full sm:w-auto sm:inset-x-10 md:inset-x-28 lg:inset-x-40 flex flex-col sm:flex-row justify-center sm:justify-between items-center max-w-screen-lg sm:px-5 z-10 mx-auto",class:t.navBarLight?"text-white":"text-black"},[e("NuxtLink",{class:t.drawer?"fixed z-10":"static",attrs:{to:"/"}},[e("img",{staticClass:"filter",class:t.drawer?"":t.navBarLight?"invert-0":"invert",staticStyle:{height:"32px"},attrs:{src:"/logo.png",alt:"Logo"}})]),t._v(" "),e("div",{staticClass:"hidden sm:flex gap-x-4 text-md uppercase tracking-wider"},[e("NuxtLink",{staticClass:"border px-3 py-1.5 rounded-sm border-opacity-0 hover:border-opacity-100 w-max",class:t.navBarLight?"border-white":"border-black",attrs:{to:"/"}},[t._v("Home")]),t._v(" "),e("NuxtLink",{staticClass:"border px-3 py-1.5 rounded-sm border-opacity-0 hover:border-opacity-100 w-max",class:t.navBarLight?"border-white":"border-black",attrs:{to:"/blog"}},[t._v("Blog")]),t._v(" "),e("NuxtLink",{staticClass:"border px-3 py-1.5 rounded-sm border-opacity-0 hover:border-opacity-100 w-max",class:t.navBarLight?"border-white":"border-black",attrs:{to:"/contact"}},[t._v("Contact")])],1),t._v(" "),t.drawer?e("div",{staticClass:"fixed top-0 h-screen bg-gray-900 w-full flex flex-col gap-y-4 justify-center items-center text-md font-light tracking-wider uppercase z-0"},[e("NuxtLink",{staticClass:"border px-3 py-1.5 text-white border-white rounded-sm border-opacity-0 hover:border-opacity-100 w-max",class:t.navBarLight?"border-black":"border-white",attrs:{to:"/"}},[t._v("Home")]),t._v(" "),e("NuxtLink",{staticClass:"border px-3 py-1.5 text-white border-white rounded-sm border-opacity-0 hover:border-opacity-100 w-max",class:t.navBarLight?"border-black":"border-white",attrs:{to:"/blog"}},[t._v("Blog")]),t._v(" "),e("NuxtLink",{staticClass:"border px-3 py-1.5 text-white border-white rounded-sm border-opacity-0 hover:border-opacity-100 w-max",class:t.navBarLight?"border-black":"border-white",attrs:{to:"/contact"}},[t._v("Contact")])],1):t._e(),t._v(" "),e("div",{staticClass:"absolute right-4 top-3 flex sm:hidden"},[e("button",{staticClass:"flex flex-col gap-y-2 w-10 h-10 p-2 relative",on:{click:function(r){t.drawer=!t.drawer}}},[e("div",{staticClass:"w-full h-px",class:t.drawer?"hidden":t.navBarLight?"bg-white":"bg-black"}),t._v(" "),e("div",{staticClass:"w-full h-px",class:t.drawer?"hidden":t.navBarLight?"bg-white":"bg-black"}),t._v(" "),e("div",{staticClass:"w-full h-px",class:t.drawer?"hidden":t.navBarLight?"bg-white":"bg-black"}),t._v(" "),e("div",{staticClass:"w-8 h-px transform rotate-45 bg-white absolute origin-center top-5 left-1",class:t.drawer?"block":"hidden"}),t._v(" "),e("div",{staticClass:"w-8 h-px transform -rotate-45 bg-white absolute origin-center top-5 left-1",class:t.drawer?"block":"hidden"})])])],1)}),[],!1,null,"1f631ea0",null);r.default=component.exports;installComponents(component,{Header:e(122).default})},159:function(t,r,e){var content=e(216);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(66).default)("438e1f7c",content,!0,{sourceMap:!1})},160:function(t,r,e){var content=e(218);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(66).default)("7452b26b",content,!0,{sourceMap:!1})},167:function(t,r,e){"use strict";e(26);var o={data:function(){return{navBar:!0,navBarColor:"light"}},head:function(){return{title:"SaM - Frontend Developer"}},watch:{$route:function(){this.setNavBarVisibility()}},created:function(){this.setNavBarVisibility()},methods:{setNavBarVisibility:function(){console.log(this.$route.name),"index"===this.$route.name?(this.navBar=!1,this.navBarColor="light"):(this.navBar=!0,this.navBarColor="dark")}}},n=(e(215),e(29)),component=Object(n.a)(o,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"relative min-h-screen pt-20 bg-gray-100"},[t.navBar?e("Header",{attrs:{"nav-bar-light":"light"===t.navBarColor}}):t._e(),t._v(" "),e("Nuxt")],1)}),[],!1,null,null,null);r.a=component.exports;installComponents(component,{Header:e(122).default})},171:function(t,r,e){e(172),t.exports=e(173)},215:function(t,r,e){"use strict";e(159)},216:function(t,r,e){var o=e(65)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\n::-webkit-scrollbar{\n  width:8px\n}\n::-webkit-scrollbar-track{\n  background-color:#f3f4f6;\n  background-color:var(--scrollbar-bg-color-dark)\n}\n::-webkit-scrollbar-thumb{\n  --tw-bg-opacity:1;\n  background-color:rgba(107, 114, 128, var(--tw-bg-opacity))\n}\n:root{\n  --scrollbar-bg-color-dark:#f3f4f6;\n  --scrollbar-color:grey\n}\n::-webkit-scrollbar-thumb:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(156, 163, 175, var(--tw-bg-opacity))\n}\n*{\n  scrollbar-width:thin;\n  scrollbar-color:grey #f3f4f6;\n  scrollbar-color:var(--scrollbar-color) var(--scrollbar-bg-color-dark)\n}\nbody{\n  height:100vh;\n  overflow-x:hidden\n}\n#__layout, #__nuxt{\n  height:100vh;\n  overflow-x:hidden\n}\n#__layout{\n  overflow-y:auto\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},217:function(t,r,e){"use strict";e(160)},218:function(t,r,e){var o=e(65)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\nheader>div>a[data-v-1f631ea0]{\n  opacity:.85\n}\n.nuxt-link-exact-active[data-v-1f631ea0]{\n  opacity:1;\n  --tw-border-opacity:0.4\n}\n.nuxt-link-exact-active[data-v-1f631ea0]:hover{\n  --tw-border-opacity:1\n}\n.nuxt-link-exact-active[data-v-1f631ea0]{\n  --tw-text-opacity:1\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},34:function(t,r,e){"use strict";var o={props:["error"]},n=e(29),component=Object(n.a)(o,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"container"},[404===t.error.statusCode?e("h1",[t._v("Page not found")]):e("h1",[t._v("An error occurred")]),t._v(" "),e("NuxtLink",{attrs:{to:"/"}},[t._v("Home page")])],1)}),[],!1,null,null,null);r.a=component.exports}},[[171,8,1,9]]]);