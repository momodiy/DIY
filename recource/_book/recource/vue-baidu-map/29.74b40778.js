webpackJsonp([29],{"+CW6":function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[[a("h1",[t._v("Ground Overlay")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Instance Properties")]),t._v(" "),t._m(1),t._v(" "),a("h2",[t._v("Events")]),t._v(" "),t._m(2),t._v(" "),a("h2",[t._v("Examples")]),t._v(" "),a("h3",[t._v("Add a ground overlay on the map")]),t._v(" "),a("h4",[t._v("Code")]),t._v(" "),t._m(3),t._v(" "),a("h4",[t._v("Preview")]),t._v(" "),a("doc-preview",[a("baidu-map",{staticClass:"map",attrs:{center:{lng:116.404,lat:39.915},zoom:12}},[a("bm-ground",{attrs:{bounds:t.bounds,imageURL:"//developer.baidu.com/map/jsdemo/img/si-huan.png",opacity:1,displayOnMinLevel:10,displayOnMaxLevel:14}})],1)],1)]],2)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("code",[t._v("BmGround")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",[t._v("type")]),t._v(" "),a("th",[t._v("default")]),t._v(" "),a("th",[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("bounds")]),t._v(" "),a("td",[t._v("Bounds")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Ground cover bounds.")])]),t._v(" "),a("tr",[a("td",[t._v("opacity")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Overlay opacity.")])]),t._v(" "),a("tr",[a("td",[t._v("imageURL")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Overlay image url.")])]),t._v(" "),a("tr",[a("td",[t._v("displayOnMinLevel")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("The minimum zoom level of that the layer displays.")])]),t._v(" "),a("tr",[a("td",[t._v("displayOnMaxLevel")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("The maximum zoom level of that the layer displays.")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",[t._v("parameter")]),t._v(" "),a("th",[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("click")]),t._v(" "),a("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),a("td",[t._v("Triggers when click on the ground overlay.")])]),t._v(" "),a("tr",[a("td",[t._v("dblclick")]),t._v(" "),a("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),a("td",[t._v("Triggers when double click on the ground overlay.")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"map"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":center")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"{lng: 116.404, lat: 39.915}"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":zoom")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"15"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("bm-ground")]),t._v("\n      "),a("span",{staticClass:"hljs-attr"},[t._v(":bounds")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"{ne: {lng: 110, lat: 40}, sw:{lng: 0, lat: 0'),a("span",[t._v("}}")]),t._v('"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("imageURL")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"http://dafrok.github.io/vue-baidu-map/favicon.png"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("bm-ground")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n\n"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),a("span",{staticClass:"javascript"},[t._v("\n"),a("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),a("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n  data () {\n    "),a("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n    }\n  }\n}\n")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n")])])}]}},FenE:function(t,s,a){t.exports=a("vOTR")},vOTR:function(t,s,a){var v=a("VU/8")(a("y2Tt"),a("+CW6"),null,null);t.exports=v.exports},y2Tt:function(t,s,a){var v,n,e;!function(a,_){n=[t,s],v=_,void 0!==(e="function"==typeof v?v.apply(s,n):v)&&(t.exports=e)}(0,function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{bounds:{ne:{lng:116.475451,lat:39.9764},sw:{lng:116.29579,lat:39.837146}}}}},t.exports=s.default})}});