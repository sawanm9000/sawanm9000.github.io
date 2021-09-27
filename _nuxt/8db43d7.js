(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{239:function(t,e,n){var content=n(242);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("9a3f575e",content,!0,{sourceMap:!1})},240:function(t,e,n){"use strict";n.r(e);var r={},o=(n(241),n(17)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("article",{staticClass:"prose md:prose-lg w-screen mx-auto max-w-prose px-3 sm:px-0 pb-24"},[t._t("default")],2)}),[],!1,null,"0889c76b",null);e.default=component.exports;installComponents(component,{Article:n(240).default})},241:function(t,e,n){"use strict";n(239)},242:function(t,e,n){var r=n(41)((function(i){return i[1]}));r.push([t.i,'/*purgecss start ignore*/\n*[data-v-0889c76b]{\n  font-family:"Readex Pro Light",sans-serif;\n  letter-spacing:0em\n}\n.title[data-v-0889c76b]{\n  display:flex;\n  height:24rem;\n  flex-direction:column;\n  justify-content:center\n}\n.title .tag[data-v-0889c76b]{\n  margin-bottom:0.25rem;\n  width:-webkit-max-content;\n  width:-moz-max-content;\n  width:max-content;\n  border-radius:0.25rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(229, 231, 235, var(--tw-bg-opacity));\n  padding-left:0.375rem;\n  padding-right:0.375rem;\n  font-size:1rem;\n  line-height:1.5rem;\n  font-weight:600;\n  --tw-text-opacity:1;\n  color:rgba(30, 58, 138, var(--tw-text-opacity))\n}\n.title h1[data-v-0889c76b]{\n  margin-bottom:0.625rem;\n  font-weight:700\n}\n.title .summary[data-v-0889c76b]{\n  margin-bottom:1.25rem;\n  font-size:1rem;\n  line-height:1.5rem;\n  font-weight:600;\n  --tw-text-opacity:1;\n  color:rgba(55, 65, 81, var(--tw-text-opacity))\n}\n.title .published-date[data-v-0889c76b]{\n  font-size:0.875rem;\n  line-height:1.25rem;\n  --tw-text-opacity:1;\n  color:rgba(75, 85, 99, var(--tw-text-opacity))\n}\n.update-note[data-v-0889c76b]{\n  border-left-width:2px;\n  --tw-border-opacity:1;\n  border-color:rgba(156, 163, 175, var(--tw-border-opacity));\n  padding-left:0.5rem;\n  font-size:1rem;\n  line-height:1.5rem;\n  font-weight:500;\n  --tw-text-opacity:1;\n  color:rgba(107, 114, 128, var(--tw-text-opacity))\n}\n.first-p[data-v-0889c76b]:first-letter{\n  float:left;\n  padding-right:0.5rem;\n  font-size:4.5rem;\n  line-height:1;\n  line-height:2.5rem\n}\n.img-container[data-v-0889c76b]{\n  margin-left:calc(-50vw + 50%);\n  margin-right:calc(-50vw + 50%)\n}\n.img-container img[data-v-0889c76b]{\n  max-height:100vh\n}\n.img-container.cover[data-v-0889c76b]{\n  display:flex;\n  align-items:center;\n  justify-content:center\n}\n.img-container.cover img[data-v-0889c76b]{\n  margin-top:0!important;\n  margin-bottom:0!important\n}\n\n/*purgecss end ignore*/',""]),r.locals={},t.exports=r},245:function(t,e,n){var content=n(253);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("3d04acb7",content,!0,{sourceMap:!1})},252:function(t,e,n){"use strict";n(245)},253:function(t,e,n){var r=n(41)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.img-container.body-img img[data-v-70ea3211]{\n  box-shadow:0 3px 8px rgba(0,0,0,.5),0 0 0 1px hsla(0,0%,50.2%,.5);\n  max-height:100vh;\n  border-radius:0.25rem\n}\n@media (min-width: 768px){\n.img-container.body-img img[data-v-70ea3211]{\n    border-radius:0.375rem\n}\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},261:function(t,e,n){"use strict";n.r(e);var r={layout:"blogPost",data:function(){return{images:[{src:"1.png",caption:"Single tab opened"},{src:"2.png",caption:"Two tabs opened"},{src:"3.png",caption:"Active address bar"},{src:"4.png",caption:"Expanded address bar"},{src:"5.png",caption:"Dark background"},{src:"6.png",caption:"Mixed background"},{src:"8.png",caption:"Active tab menu"},{src:"11.png",caption:"Extensions menu"},{src:"13.png",caption:"Sidebar"},{src:"14.png",caption:"Profile switcher"},{src:"15.png",caption:"Bookmarks sidebar"},{src:"16.png",caption:"Vertical tabs mode"},{src:"17.png",caption:"Vertical tabs with alternate toolbar"},{src:"18.png",caption:"Collapsed tab sidebar"},{src:"19.png",caption:"Sidebar in vertical tabs mode"},{src:"20.png",caption:"Bookmarks page"},{src:"20_bookmarks_supercharged.png",caption:"Bookmarks in cards view"},{src:"21.png",caption:"Tab manager"},{src:"22_settings.png",caption:"Settings"},{src:"PDF.png",caption:"PDF reader in book view"}],currentImg:0}},methods:{nextImg:function(){this.currentImg>=this.images.length-1?this.currentImg=0:this.currentImg+=1},previousImg:function(){this.currentImg<=0?this.currentImg=this.images.length-1:this.currentImg-=1}}},o=(n(252),n(17)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Article",[n("div",{staticClass:"title"},[n("div",{staticClass:"tag"},[t._v("UI/UX")]),t._v(" "),n("h1",[t._v("Browser concept")]),t._v(" "),n("div",{staticClass:"summary"},[t._v("Reimagining the web browser")]),t._v(" "),n("div",{staticClass:"published-date"},[t._v("16 September 2021")])]),t._v(" "),n("div",{staticClass:"img-container cover",staticStyle:{background:"linear-gradient(160deg, rgb(0, 114, 190) 0, rgb(0, 33, 95) 100%)"}},[n("img",{staticStyle:{width:"1366px","aspect-ratio":"16/9"},attrs:{src:"/blog/browser-concept/cover_img.webp",alt:"Cover"}})]),t._v(" "),n("p",{staticClass:"update-note"},[t._v("Originally published on 12 August 2021")]),t._v(" "),n("p",{staticClass:"first-p"},[t._v("\n    There have been a few key events that occurred in the browser space last\n    June. Firefox\n    "),n("a",{attrs:{href:"https://www.mozilla.org/en-US/firefox/89.0/releasenotes/"}},[t._v("received")]),t._v("\n    the Proton interface, Safari has had a\n    "),n("a",{attrs:{href:"https://9to5mac.com/2021/06/16/safari-in-macos-monterey-whats-new-how-it-works/"}},[t._v("major")]),t._v("\n    visual overhaul, Opera\n    "),n("a",{attrs:{href:"https://blogs.opera.com/desktop/2021/06/opera-r5-desktop/"}},[t._v("received")]),t._v("\n    its Pinboard feature, and Chrome\n    "),n("a",{attrs:{href:"https://www.slashgear.com/chrome-will-no-longer-try-to-hide-the-full-address-of-websites-11677574/"}},[t._v("ended")]),t._v("\n    an experiment on simplifying the URL. What intrigued me the most, however,\n    is the new Safari. Its new interface does not conform to the traditional\n    browser layout. Instead, it combines the tab bar, the address bar, and the\n    toolbar into a single row of buttons while at the same time reducing\n    visual clutter. On top of this, the tab bar now matches the color of the\n    page. The result is an immersive and streamlined look that is very easy on\n    the eyes.\n  ")]),t._v(" "),n("p",[t._v("\n    Firefox has been my browser of choice since the mid-2000s. Naturally, I\n    wondered, what would it look like if it resembled the new Safari?\n  ")]),t._v(" "),n("p",[t._v("\n    Let's attempt to answer this question, and explore new functionalities\n    that could make Firefox a better browser.\n  ")]),t._v(" "),n("div",{staticClass:"img-container body-img grid grid-cols-1 grid-rows-1 relative select-none justify-center"},[t._l(t.images,(function(image,e){return n("figure",{key:e,staticClass:"mx-auto col-start-1 row-start-1 pointer-events-none"},[n("img",{ref:"img",refInFor:!0,staticClass:"pointer-events-auto",class:t.currentImg===e?"visible":"invisible",attrs:{src:"/blog/browser-concept/"+image.src,alt:image.caption,draggable:"false"},on:{click:t.nextImg}}),t._v(" "),n("figcaption",{ref:"imgCaption",refInFor:!0,staticClass:"text-center",class:t.currentImg===e?"visible":"invisible"},[t._v(t._s(image.caption))])])})),t._v(" "),n("div",{staticClass:"col-start-1 row-start-1 w-screen h-full pointer-events-none"},[n("button",{staticClass:"p-4 bg-black bg-opacity-20 rounded-full text-white font-semibold uppercase text-sm tracking-wider hover:bg-opacity-50 absolute bottom-1 md:bottom-1/2 -mt-10 left-2 2xl:left-20 pointer-events-auto z-10",on:{click:t.previousImg}},[n("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"}})])]),t._v(" "),n("button",{staticClass:"p-4 bg-black bg-opacity-20 rounded-full text-white font-semibold uppercase text-sm tracking-wider hover:bg-opacity-50 absolute bottom-1 md:bottom-1/2 -mt-10 right-2 2xl:right-20 pointer-events-auto",on:{click:t.nextImg}},[n("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"}})])])])],2),t._v(" "),n("p",[t._v("\n    While this concept would probably solve some of the problems users have\n    today, it is definitely not the be-all and end-all. Design trends are\n    constantly changing and evolving. After a while, new issues would\n    undoubtedly surface, and that would require new innovative solutions. If\n    this concept were to be implemented, it would need some ironing out and\n    extensive user testing.\n  ")])])}),[],!1,null,"70ea3211",null);e.default=component.exports;installComponents(component,{Article:n(240).default})}}]);