(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{161:function(t,e,n){var content=n(234);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("48c2f6d8",content,!0,{sourceMap:!1})},162:function(t,e,n){var content=n(236);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("c50c7b26",content,!0,{sourceMap:!1})},163:function(t,e,n){var content=n(238);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("438e1f7c",content,!0,{sourceMap:!1})},170:function(t,e,n){"use strict";var r={},o=(n(233),n(17)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative min-h-screen pt-20 bg-gray-100"},[n("Header",{attrs:{"nav-bar-light":!1}}),t._v(" "),n("Nuxt"),t._v(" "),n("Footer")],1)}),[],!1,null,"0c18471c",null);e.a=component.exports;installComponents(component,{Header:n(99).default,Footer:n(96).default})},171:function(t,e,n){"use strict";n(26);var r={data:function(){return{navBar:!0,navBarColor:"light"}},head:function(){return{title:"Sawan Mungroo - Frontend Developer"}},watch:{$route:function(){this.setNavBarVisibility()}},created:function(){this.setNavBarVisibility()},methods:{setNavBarVisibility:function(){"index"===this.$route.name?(this.navBar=!1,this.navBarColor="light"):(this.navBar=!0,this.navBarColor="dark")}}},o=(n(237),n(17)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative min-h-screen pt-20 bg-gray-100"},[t.navBar?n("Header",{attrs:{"nav-bar-light":"light"===t.navBarColor}}):t._e(),t._v(" "),n("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Header:n(99).default})},175:function(t,e,n){n(176),t.exports=n(177)},222:function(t,e,n){var content=n(223);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("005a34e3",content,!0,{sourceMap:!1})},223:function(t,e,n){var r=n(41),o=n(224),l=n(225),c=n(226),f=n(227),d=n(228),h=n(229),v=n(230),x=n(231),w=n(232),m=r((function(i){return i[1]})),y=o(l),_=o(c),k=o(f),C=o(d),B=o(h),L=o(v),P=o(x),M=o(w);m.push([t.i,'/*purgecss start ignore*/\n\n@font-face{\n  font-family:"Readex Pro Bold";\n\n  src:url('+y+') format("woff");\n\n  font-weight:700;\n\n  font-style:normal;\n\n  font-display:swap\n}\n\n@font-face{\n  font-family:"Readex Pro Medium";\n\n  src:url('+_+') format("woff");\n\n  font-weight:500;\n\n  font-style:normal;\n\n  font-display:swap\n}\n\n@font-face{\n  font-family:"Readex Pro SemiBold";\n\n  src:url('+k+') format("woff");\n\n  font-weight:600;\n\n  font-style:normal;\n\n  font-display:swap\n}\n\n@font-face{\n  font-family:"Readex Pro ExtraLight";\n\n  src:url('+C+') format("woff");\n\n  font-weight:200;\n\n  font-style:normal;\n\n  font-display:swap\n}\n\n@font-face{\n  font-family:"Readex Pro Light";\n\n  src:url('+B+') format("woff");\n\n  font-weight:300;\n\n  font-style:normal;\n\n  font-display:swap\n}\n\n@font-face{\n  font-family:"Readex Pro";\n\n  src:url('+L+') format("woff");\n\n  font-weight:400;\n\n  font-style:normal;\n\n  font-display:swap\n}\n\n@font-face{\n  font-family:"Futura PT Book";\n\n  src:url('+P+') format("woff");\n\n  font-weight:400;\n\n  font-style:normal;\n\n  font-display:swap\n}\n\n@font-face{\n  font-family:"Futura PT Light";\n\n  src:url('+M+') format("woff");\n\n  font-weight:300;\n\n  font-style:normal;\n\n  font-display:swap\n}\n\n/*purgecss end ignore*/',""]),m.locals={},t.exports=m},225:function(t,e,n){t.exports=n.p+"fonts/ReadexPro-Bold.a0bc454.woff"},226:function(t,e,n){t.exports=n.p+"fonts/ReadexPro-Medium.15c1d7e.woff"},227:function(t,e,n){t.exports=n.p+"fonts/ReadexPro-SemiBold.21e5144.woff"},228:function(t,e,n){t.exports=n.p+"fonts/ReadexPro-ExtraLight.8aa002b.woff"},229:function(t,e,n){t.exports=n.p+"fonts/ReadexPro-Light.092ad46.woff"},230:function(t,e,n){t.exports=n.p+"fonts/ReadexPro-Regular.30c7f48.woff"},231:function(t,e,n){t.exports=n.p+"fonts/FuturaPT-Book.c6e21f2.woff"},232:function(t,e,n){t.exports=n.p+"fonts/FuturaPT-Light.42ed230.woff"},233:function(t,e,n){"use strict";n(161)},234:function(t,e,n){var r=n(41)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.home-enter-active[data-v-0c18471c],.home-leave-active[data-v-0c18471c]{\n  transition:opacity .2s\n}\n.home-enter[data-v-0c18471c],.home-leave-active[data-v-0c18471c]{\n  opacity:0\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},235:function(t,e,n){"use strict";n(162)},236:function(t,e,n){var r=n(41)((function(i){return i[1]}));r.push([t.i,'/*purgecss start ignore*/\nheader>div>a[data-v-3da213e4]{\n  opacity:.85;\n  font-family:"Readex Pro Light",sans-serif\n}\n.nuxt-link-exact-active[data-v-3da213e4]{\n  opacity:1;\n  --tw-border-opacity:1;\n  border-color:rgba(245, 158, 11, var(--tw-border-opacity));\n  --tw-border-opacity:0.4\n}\n.nuxt-link-exact-active[data-v-3da213e4]:hover{\n  --tw-border-opacity:1\n}\n.nuxt-link-exact-active[data-v-3da213e4]{\n  --tw-text-opacity:1;\n  color:rgba(245, 158, 11, var(--tw-text-opacity));\n  --tw-text-opacity:1\n}\n\n/*purgecss end ignore*/',""]),r.locals={},t.exports=r},237:function(t,e,n){"use strict";n(163)},238:function(t,e,n){var r=n(41)((function(i){return i[1]}));r.push([t.i,'/*purgecss start ignore*/\n.home-enter-active,.home-leave-active{\n  transition:opacity .2s\n}\n.home-enter,.home-leave-active{\n  opacity:0\n}\n::-webkit-scrollbar{\n  width:8px\n}\n::-webkit-scrollbar-track{\n  background-color:#f3f4f6;\n  background-color:var(--scrollbar-bg-color-dark)\n}\n::-webkit-scrollbar-thumb{\n  --tw-bg-opacity:1;\n  background-color:rgba(107, 114, 128, var(--tw-bg-opacity))\n}\n:root{\n  --scrollbar-bg-color-dark:#f3f4f6;\n  --scrollbar-color:grey\n}\n::-webkit-scrollbar-thumb:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(156, 163, 175, var(--tw-bg-opacity))\n}\n*{\n  scrollbar-width:thin;\n  scrollbar-color:grey #f3f4f6;\n  scrollbar-color:var(--scrollbar-color) var(--scrollbar-bg-color-dark);\n  font-family:"Readex Pro Light",sans-serif\n}\nbody{\n  height:100vh;\n  overflow-x:hidden\n}\n#__layout, #__nuxt{\n  height:100vh;\n  overflow-x:hidden\n}\n#__layout{\n  overflow-y:auto\n}\n\n/*purgecss end ignore*/',""]),r.locals={},t.exports=r},35:function(t,e,n){"use strict";var r={layout:"error",props:["error"]},o=n(17),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col justify-center items-center h-screen absolute top-0 left-0 w-full"},[404===t.error.statusCode?n("h1",{staticClass:"text-4xl font-bold mb-8"},[t._v("Page not found")]):n("h1",[t._v("An error occurred")]),t._v(" "),n("NuxtLink",{staticClass:"text-base text-blue-500",attrs:{to:"/"}},[t._v("← Home page")]),t._v(" "),n("Footer",{staticClass:"fixed bottom-0 w-full"})],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Footer:n(96).default})},96:function(t,e,n){"use strict";n.r(e);var r={},o=n(17),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"bg-gray-300 w-screen"},[n("div",{staticClass:"h-16 flex justify-between items-center gap-x-9 w-full max-w-screen-lg px-4 lg:px-0 mx-auto"},[t._m(0),t._v(" "),n("div",{staticClass:"flex items-center gap-x-4 flex-shrink-0 opacity-75"},[n("NuxtLink",{attrs:{to:"/contact"}},[n("svg",{staticClass:"h-6 w-6 opacity-90",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[n("path",{attrs:{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}}),t._v(" "),n("path",{attrs:{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"}})])]),t._v(" "),t._m(1)],1)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-sm text-gray-700 flex-grow"},[t._v("© Sawan Mungroo 2021. "),n("br",{staticClass:"block sm:hidden"}),t._v(" All rights reserved.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"https://github.com/utopianknight"}},[e("img",{staticStyle:{width:"24px",height:"24px"},attrs:{src:"/GitHub-Mark-32px.png",alt:"Github"}})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:n(96).default})},99:function(t,e,n){"use strict";n.r(e);var r={props:{navBarLight:{type:Boolean,default:!0}},data:function(){return{drawer:!1}},watch:{$route:function(){this.drawer=!1}}},o=(n(235),n(17)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"h-16 absolute top-0 w-full sm:w-auto sm:inset-x-10 md:inset-x-28 lg:inset-x-40 flex flex-col sm:flex-row justify-center sm:justify-between items-center max-w-screen-lg sm:px-5 mx-auto z-10",class:(t.navBarLight?"text-white":"text-black")+" "+(t.drawer?"fixed":"static")},[n("NuxtLink",{attrs:{to:"/"}},[n("img",{staticClass:"filter h-8 -mt-2",attrs:{src:"/logo.png",alt:"Logo"}})]),t._v(" "),n("div",{staticClass:"hidden sm:flex gap-x-4 text-sm tracking-wide"},[n("NuxtLink",{staticClass:"border-b px-3 py-1.5 border-opacity-0 hover:border-opacity-100 w-max uppercase",class:t.navBarLight?"border-white":"border-black",attrs:{to:"/"}},[t._v("Home")]),t._v(" "),n("NuxtLink",{staticClass:"border-b px-3 py-1.5 border-opacity-0 hover:border-opacity-100 w-max uppercase",class:t.navBarLight?"border-white":"border-black",attrs:{to:"/blog"}},[t._v("Blog")]),t._v(" "),n("NuxtLink",{staticClass:"border-b px-3 py-1.5 border-opacity-0 hover:border-opacity-100 w-max uppercase",class:t.navBarLight?"border-white":"border-black",attrs:{to:"/contact"}},[t._v("Contact")])],1),t._v(" "),t.drawer?n("div",{staticClass:"fixed top-0 h-screen bg-gray-900 w-full flex flex-col gap-y-4 justify-center items-center text-md font-light tracking-wide"},[n("NuxtLink",{staticClass:"border-b px-3 py-1.5 text-white border-white border-opacity-0 hover:border-opacity-100 w-max uppercase",class:t.navBarLight?"border-black":"border-white",attrs:{to:"/"}},[t._v("Home")]),t._v(" "),n("NuxtLink",{staticClass:"border-b px-3 py-1.5 text-white border-white border-opacity-0 hover:border-opacity-100 w-max uppercase",class:t.navBarLight?"border-black":"border-white",attrs:{to:"/blog"}},[t._v("Blog")]),t._v(" "),n("NuxtLink",{staticClass:"border-b px-3 py-1.5 text-white border-white border-opacity-0 hover:border-opacity-100 w-max uppercase",class:t.navBarLight?"border-black":"border-white",attrs:{to:"/contact"}},[t._v("Contact")])],1):t._e(),t._v(" "),n("div",{staticClass:"absolute right-4 top-3 flex sm:hidden"},[n("button",{staticClass:"flex flex-col gap-y-2 w-10 h-10 p-2 relative",on:{click:function(e){t.drawer=!t.drawer}}},[n("div",{staticClass:"w-full h-px",class:t.drawer?"hidden":t.navBarLight?"bg-white":"bg-black"}),t._v(" "),n("div",{staticClass:"w-full h-px",class:t.drawer?"hidden":t.navBarLight?"bg-white":"bg-black"}),t._v(" "),n("div",{staticClass:"w-full h-px",class:t.drawer?"hidden":t.navBarLight?"bg-white":"bg-black"}),t._v(" "),n("div",{staticClass:"w-8 h-px transform rotate-45 bg-white absolute origin-center top-5 left-1",class:t.drawer?"block":"hidden"}),t._v(" "),n("div",{staticClass:"w-8 h-px transform -rotate-45 bg-white absolute origin-center top-5 left-1",class:t.drawer?"block":"hidden"})])])],1)}),[],!1,null,"3da213e4",null);e.default=component.exports;installComponents(component,{Header:n(99).default})}},[[175,7,1,8]]]);