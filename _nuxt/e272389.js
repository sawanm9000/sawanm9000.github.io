(window.webpackJsonp=window.webpackJsonp||[]).push([[6,3],{215:function(e,t,l){"use strict";l.r(t);var r={},c=l(38),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("footer",{staticClass:"bg-gray-300 flex justify-center w-full"},[t("div",{staticClass:"h-16 flex items-center gap-x-9"},[t("a",{attrs:{href:"https://github.com/utopianknight"}},[t("img",{staticStyle:{width:"32px",height:"32px"},attrs:{src:"GitHub-Mark-32px.png",alt:"Github"}})])])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{Footer:l(215).default})},234:function(e,t,l){"use strict";l.r(t);var r=l(225),c=l.n(r),n={data:function(){return{cvRequest:!1}},mounted:function(){c.a.init()}},o=l(38),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"pt-32 overflow-x-hidden min-h-screen w-full absolute top-0 flex justify-center"},[l("div",{staticClass:"w-full flex justify-center items-center flex-col bg-gray-100"},[l("form",{ref:"contactForm",staticClass:"grid grid-cols-1 gap-y-4 max-w-md w-full content-start px-3 sm:px-0 flex-grow bg-gray-100 pb-24 kwes-form",attrs:{name:"contact-form",action:"https://kwesforms.com/api/foreign/forms/90oV3Vjk6J261C8jDRU7","has-recaptcha-v2":""}},[e._m(0),e._v(" "),e._m(1),e._v(" "),l("label",{staticClass:"inline-flex items-center"},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.cvRequest,expression:"cvRequest"}],staticClass:"border-gray-600 border text-black focus:border-gray-300 focus:ring-black",attrs:{id:"checked",name:"request_cv",value:"checked",label:"checked",type:"checkbox"},domProps:{checked:Array.isArray(e.cvRequest)?e._i(e.cvRequest,"checked")>-1:e.cvRequest},on:{change:function(t){var l=e.cvRequest,r=t.target,c=!!r.checked;if(Array.isArray(l)){var n="checked",o=e._i(l,n);r.checked?o<0&&(e.cvRequest=l.concat([n])):o>-1&&(e.cvRequest=l.slice(0,o).concat(l.slice(o+1)))}else e.cvRequest=c}}}),e._v(" "),l("span",{staticClass:"ml-2"},[e._v("Request CV/resume")])]),e._v(" "),l("label",{class:e.cvRequest?"block":"hidden"},[e._m(2),e._v(" "),l("input",{staticClass:"mt-1 block w-full",attrs:{id:"company",type:"text",name:"company_name",rules:"max:255"}})]),e._v(" "),l("label",{class:e.cvRequest?"block":"hidden"},[l("span",[e._v("Website")]),e._v(" "),l("input",{staticClass:"mt-1 block w-full",attrs:{id:"website",type:"url",name:"website",rules:"max:255"}})]),e._v(" "),e._m(3),e._v(" "),l("label",{staticClass:"block"},[e._m(4),e._v(" "),l("recaptcha",{staticClass:"g-recaptcha mt-1"})],1),e._v(" "),l("button",{staticClass:"bg-yellow-500 hover:bg-yellow-400 px-5 py-2.5 rounded-sm uppercase text-sm font-bold text-gray-900 hover:text-black border-t border-yellow-300 shadow-md tracking-wide w-max cursor-pointer mt-4",attrs:{type:"submit",value:"Send"}},[e._v("Send")])]),e._v(" "),l("Footer")],1)])}),[function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("label",{staticClass:"block"},[l("span",[e._v("Name"),l("span",{staticClass:"text-red-600"},[e._v("*")])]),e._v(" "),l("input",{staticClass:"mt-1 block w-full border",attrs:{id:"name",type:"text",name:"name",rules:"required|min:5|max:255"}})])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("label",{staticClass:"block"},[l("span",[e._v("Email address"),l("span",{staticClass:"text-red-600"},[e._v("*")])]),e._v(" "),l("input",{staticClass:"mt-1 block w-full",attrs:{id:"email",type:"email",name:"email",rules:"required|email"}})])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("span",[e._v("Company name"),l("span",{staticClass:"text-red-600"},[e._v("*")])])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("label",{staticClass:"block"},[l("span",[e._v("Message"),l("span",{staticClass:"text-red-600"},[e._v("*")])]),e._v(" "),l("textarea",{staticClass:"mt-1 block w-full",attrs:{id:"message",type:"text",name:"message",rules:"required"}})])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("span",[e._v("Are you a robot?"),l("span",{staticClass:"text-red-600"},[e._v("*")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{Footer:l(215).default})}}]);