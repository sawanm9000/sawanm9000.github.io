(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(t,e,r){"use strict";r.r(e);var n={props:{navBarLight:{type:Boolean,default:!0}},data:function(){return{drawer:!1}},watch:{$route:function(){this.drawer=!1}}},o=(r(234),r(17)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"h-16 absolute top-0 w-full sm:w-auto sm:inset-x-10 md:inset-x-28 lg:inset-x-40 flex flex-col sm:flex-row justify-center sm:justify-between items-center max-w-screen-lg sm:px-5 mx-auto z-10",class:(t.navBarLight?"text-white":"text-gray-800")+" "+(t.drawer?"fixed":"static")},[r("NuxtLink",{attrs:{to:"/"}},[r("img",{staticClass:"filter h-8 -mt-2",class:t.navBarLight?"":"invert",attrs:{src:"/logo.png",alt:"Logo"}})]),t._v(" "),r("div",{staticClass:"hidden sm:flex gap-x-4 text-sm tracking-wide"},[r("NuxtLink",{staticClass:"border-b-2 px-3 py-1.5 border-opacity-0 hover:border-opacity-100 w-max uppercase font-semibold",class:t.navBarLight?"border-white":"border-black",attrs:{to:"/"}},[t._v("Home")]),t._v(" "),r("NuxtLink",{staticClass:"border-b-2 px-3 py-1.5 border-opacity-0 hover:border-opacity-100 w-max uppercase font-semibold",class:t.navBarLight?"border-white":"border-black",attrs:{to:"/blog"}},[t._v("Blog")]),t._v(" "),r("NuxtLink",{staticClass:"border-b-2 px-3 py-1.5 border-opacity-0 hover:border-opacity-100 w-max uppercase font-semibold",class:t.navBarLight?"border-white":"border-black",attrs:{to:"/contact"}},[t._v("Contact")])],1),t._v(" "),t.drawer?r("div",{staticClass:"fixed top-0 h-screen bg-gray-900 w-full flex flex-col gap-y-4 justify-center items-center"},[r("NuxtLink",{staticClass:"border-b-2 px-3 py-1.5 text-white border-white border-opacity-0 hover:border-opacity-100 w-max uppercase",class:t.navBarLight?"border-black":"border-white",attrs:{to:"/"}},[t._v("Home")]),t._v(" "),r("NuxtLink",{staticClass:"border-b-2 px-3 py-1.5 text-white border-white border-opacity-0 hover:border-opacity-100 w-max uppercase",class:t.navBarLight?"border-black":"border-white",attrs:{to:"/blog"}},[t._v("Blog")]),t._v(" "),r("NuxtLink",{staticClass:"border-b-2 px-3 py-1.5 text-white border-white border-opacity-0 hover:border-opacity-100 w-max uppercase",class:t.navBarLight?"border-black":"border-white",attrs:{to:"/contact"}},[t._v("Contact")])],1):t._e(),t._v(" "),r("div",{staticClass:"absolute right-4 top-3 flex sm:hidden"},[r("button",{staticClass:"flex flex-col gap-y-2 w-10 h-10 p-2 relative",on:{click:function(e){t.drawer=!t.drawer}}},[r("div",{staticClass:"w-full h-px",class:t.drawer?"hidden":t.navBarLight?"bg-white":"bg-black"}),t._v(" "),r("div",{staticClass:"w-full h-px",class:t.drawer?"hidden":t.navBarLight?"bg-white":"bg-black"}),t._v(" "),r("div",{staticClass:"w-full h-px",class:t.drawer?"hidden":t.navBarLight?"bg-white":"bg-black"}),t._v(" "),r("div",{staticClass:"w-8 h-px transform rotate-45 bg-white absolute origin-center top-5 left-1",class:t.drawer?"block":"hidden"}),t._v(" "),r("div",{staticClass:"w-8 h-px transform -rotate-45 bg-white absolute origin-center top-5 left-1",class:t.drawer?"block":"hidden"})])])],1)}),[],!1,null,"2483806c",null);e.default=component.exports;installComponents(component,{Header:r(100).default})},162:function(t,e,r){var content=r(233);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(42).default)("48c2f6d8",content,!0,{sourceMap:!1})},163:function(t,e,r){var content=r(235);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(42).default)("6cca1b3e",content,!0,{sourceMap:!1})},164:function(t,e,r){var content=r(237);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(42).default)("438e1f7c",content,!0,{sourceMap:!1})},171:function(t,e,r){"use strict";var n={},o=(r(232),r(17)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"relative min-h-screen pt-20 bg-gray-100"},[r("Header",{attrs:{"nav-bar-light":!1}}),t._v(" "),r("Nuxt"),t._v(" "),r("Footer")],1)}),[],!1,null,"0c18471c",null);e.a=component.exports;installComponents(component,{Header:r(100).default,Footer:r(97).default})},172:function(t,e,r){"use strict";r(25);var n={data:function(){return{navBar:!0,navBarColor:"light"}},head:function(){return{title:"Sawan Mungroo - Frontend Developer"}},watch:{$route:function(){this.setNavBarVisibility()}},created:function(){this.setNavBarVisibility()},methods:{setNavBarVisibility:function(){"index"===this.$route.name?(this.navBar=!1,this.navBarColor="light"):(this.navBar=!0,this.navBarColor="dark")}}},o=(r(236),r(17)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"relative min-h-screen pt-20 bg-gray-100"},[t.navBar?r("Header",{attrs:{"nav-bar-light":"light"===t.navBarColor}}):t._e(),t._v(" "),r("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Header:r(100).default})},176:function(t,e,r){r(177),t.exports=r(178)},223:function(t,e,r){var content=r(224);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(42).default)("005a34e3",content,!0,{sourceMap:!1})},224:function(t,e,r){var n=r(41),o=r(225),l=r(226),c=r(227),f=r(228),d=r(229),h=r(230),v=r(231),x=n((function(i){return i[1]}));x.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,300;0,400;0,500;0,600;0,700;0,900;1,300;1,400;1,500;1,600;1,700;1,900&display=swap);"]);var w=o(l),m=o(c),y=o(f),_=o(d),k=o(h),C=o(v);x.push([t.i,'/*purgecss start ignore*/\n\n@font-face{\n  font-family:"Readex Pro Bold";\n\n  src:url('+w+') format("woff");\n\n  font-weight:700;\n\n  font-style:normal;\n\n  font-display:swap\n}\n\n@font-face{\n  font-family:"Readex Pro Medium";\n\n  src:url('+m+') format("woff");\n\n  font-weight:500;\n\n  font-style:normal;\n\n  font-display:swap\n}\n\n@font-face{\n  font-family:"Readex Pro SemiBold";\n\n  src:url('+y+') format("woff");\n\n  font-weight:600;\n\n  font-style:normal;\n\n  font-display:swap\n}\n\n@font-face{\n  font-family:"Readex Pro ExtraLight";\n\n  src:url('+_+') format("woff");\n\n  font-weight:200;\n\n  font-style:normal;\n\n  font-display:swap\n}\n\n@font-face{\n  font-family:"Readex Pro Light";\n\n  src:url('+k+') format("woff");\n\n  font-weight:300;\n\n  font-style:normal;\n\n  font-display:swap\n}\n\n@font-face{\n  font-family:"Readex Pro";\n\n  src:url('+C+') format("woff");\n\n  font-weight:400;\n\n  font-style:normal;\n\n  font-display:swap\n}\n\n/*purgecss end ignore*/',""]),x.locals={},t.exports=x},226:function(t,e,r){t.exports=r.p+"fonts/ReadexPro-Bold.a0bc454.woff"},227:function(t,e,r){t.exports=r.p+"fonts/ReadexPro-Medium.15c1d7e.woff"},228:function(t,e,r){t.exports=r.p+"fonts/ReadexPro-SemiBold.21e5144.woff"},229:function(t,e,r){t.exports=r.p+"fonts/ReadexPro-ExtraLight.8aa002b.woff"},230:function(t,e,r){t.exports=r.p+"fonts/ReadexPro-Light.092ad46.woff"},231:function(t,e,r){t.exports=r.p+"fonts/ReadexPro-Regular.30c7f48.woff"},232:function(t,e,r){"use strict";r(162)},233:function(t,e,r){var n=r(41)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\n.home-enter-active[data-v-0c18471c],.home-leave-active[data-v-0c18471c]{\n  transition:opacity .2s\n}\n.home-enter[data-v-0c18471c],.home-leave-active[data-v-0c18471c]{\n  opacity:0\n}\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},234:function(t,e,r){"use strict";r(163)},235:function(t,e,r){var n=r(41)((function(i){return i[1]}));n.push([t.i,'/*purgecss start ignore*/\nheader>div>a[data-v-2483806c]{\n  opacity:.85;\n  font-family:"Exo 2",sans-serif\n}\n.nuxt-link-exact-active[data-v-2483806c]{\n  opacity:1;\n  --tw-border-opacity:1;\n  border-color:rgba(59, 130, 246, var(--tw-border-opacity));\n  --tw-border-opacity:0.4\n}\n.nuxt-link-exact-active[data-v-2483806c]:hover{\n  --tw-border-opacity:1\n}\n.nuxt-link-exact-active[data-v-2483806c]{\n  --tw-text-opacity:1;\n  color:rgba(59, 130, 246, var(--tw-text-opacity));\n  --tw-text-opacity:1\n}\n\n/*purgecss end ignore*/',""]),n.locals={},t.exports=n},236:function(t,e,r){"use strict";r(164)},237:function(t,e,r){var n=r(41)((function(i){return i[1]}));n.push([t.i,'/*purgecss start ignore*/\n.home-enter-active,.home-leave-active{\n  transition:opacity .2s\n}\n.home-enter,.home-leave-active{\n  opacity:0\n}\n::-webkit-scrollbar{\n  width:8px\n}\n::-webkit-scrollbar-track{\n  background-color:#f3f4f6;\n  background-color:var(--scrollbar-bg-color-dark)\n}\n::-webkit-scrollbar-thumb{\n  --tw-bg-opacity:1;\n  background-color:rgba(107, 114, 128, var(--tw-bg-opacity))\n}\n:root{\n  --scrollbar-bg-color-dark:#f3f4f6;\n  --scrollbar-color:grey\n}\n::-webkit-scrollbar-thumb:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(156, 163, 175, var(--tw-bg-opacity))\n}\n*{\n  scrollbar-width:thin;\n  scrollbar-color:grey #f3f4f6;\n  scrollbar-color:var(--scrollbar-color) var(--scrollbar-bg-color-dark);\n  font-family:"Exo 2","Readex Pro Light",sans-serif\n}\nbody{\n  height:100vh;\n  overflow-x:hidden\n}\n#__layout, #__nuxt{\n  height:100vh;\n  overflow-x:hidden\n}\n#__layout{\n  overflow-y:auto\n}\n\n/*purgecss end ignore*/',""]),n.locals={},t.exports=n},34:function(t,e,r){"use strict";var n={layout:"error",props:["error"]},o=r(17),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-col justify-center items-center h-screen absolute top-0 left-0 w-full"},[404===t.error.statusCode?r("h1",{staticClass:"text-4xl font-bold mb-8"},[t._v("Page not found")]):r("h1",[t._v("An error occurred")]),t._v(" "),r("NuxtLink",{staticClass:"text-base text-blue-500",attrs:{to:"/"}},[t._v("← Home page")]),t._v(" "),r("Footer",{staticClass:"fixed bottom-0 w-full"})],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Footer:r(97).default})},97:function(t,e,r){"use strict";r.r(e);var n={},o=r(17),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"bg-gray-300 w-screen"},[r("div",{staticClass:"h-16 flex justify-between items-center gap-x-9 w-full max-w-screen-lg px-4 lg:px-0 mx-auto"},[t._m(0),t._v(" "),r("div",{staticClass:"flex items-center gap-x-4 flex-shrink-0 opacity-75"},[r("NuxtLink",{attrs:{to:"/contact"}},[r("svg",{staticClass:"h-6 w-6 opacity-90",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[r("path",{attrs:{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}}),t._v(" "),r("path",{attrs:{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"}})])]),t._v(" "),t._m(1)],1)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-sm text-gray-700 flex-grow"},[t._v("© Sawan Mungroo 2021. "),r("br",{staticClass:"block sm:hidden"}),t._v(" All rights reserved.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"https://github.com/utopianknight"}},[e("img",{staticStyle:{width:"24px",height:"24px"},attrs:{src:"/GitHub-Mark-32px.png",alt:"Github"}})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:r(97).default})}},[[176,7,1,8]]]);