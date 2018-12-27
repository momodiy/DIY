webpackJsonp([12],{"8y6Q":function(s,t,a){var n,l,i;!function(a,e){l=[s,t],n=e,void 0!==(i="function"==typeof n?n.apply(t,l):n)&&(s.exports=i)}(0,function(s,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{polyline:{editing:!1,paths:[]}}},methods:{toggle:function(s){this[s].editing=!this[s].editing},syncPolyline:function(s){if(this.polyline.editing){var t=this.polyline.paths;if(t.length){var a=t[t.length-1];a.length&&(1===a.length&&a.push(s.point),this.$set(a,a.length-1,s.point))}}},newPolyline:function(s){if(this.polyline.editing){var t=this.polyline.paths;t.length||t.push([]);var a=t[t.length-1];a.pop(),a.length&&t.push([])}},paintPolyline:function(s){if(this.polyline.editing){var t=this.polyline.paths;!t.length&&t.push([]),t[t.length-1].push(s.point)}}}},s.exports=t.default})},PtQG:function(s,t,a){s.exports=a("Wm1H")},Wm1H:function(s,t,a){var n=a("VU/8")(a("8y6Q"),a("mztJ"),null,null);s.exports=n.exports},mztJ:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("图形绘制")]),s._v(" "),a("h2",[s._v("说明")]),s._v(" "),s._m(0),s._v(" "),a("h2",[s._v("示例")]),s._v(" "),a("h3",[s._v("绘制折线")]),s._v(" "),a("h4",[s._v("代码")]),s._v(" "),s._m(1),s._v(" "),a("h4",[s._v("预览")]),s._v(" "),a("p",[a("baidu-map",{staticClass:"map",attrs:{center:{lng:116.404,lat:39.915},zoom:14},on:{mousemove:s.syncPolyline,click:s.paintPolyline,rightclick:s.newPolyline}},[a("bm-control",[a("md-button",{staticClass:"md-raised md-primary",on:{click:function(t){s.toggle("polyline")}}},[s._v(s._s(s.polyline.editing?"停止绘制":"开始绘制"))])],1),s._v(" "),s._l(s.polyline.paths,function(s){return a("bm-polyline",{attrs:{path:s}})})],2)],1)])},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("由于 MVVM 数据驱动视图的特性，地图中的图形绘制不再需要使用 "),a("code",[s._v("BMapLib.DrawingManager")]),s._v(" 等第三方工具库来实现。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("baidu-map")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"map"')]),s._v("\n  "),a("span",{staticClass:"hljs-attr"},[s._v(":center")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"{lng: 116.404, lat: 39.915}"')]),s._v("\n  "),a("span",{staticClass:"hljs-attr"},[s._v(":zoom")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"14"')]),s._v("\n  "),a("span",{staticClass:"hljs-attr"},[s._v("@mousemove")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"syncPolyline"')]),s._v("\n  "),a("span",{staticClass:"hljs-attr"},[s._v("@click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"paintPolyline"')]),s._v("\n  "),a("span",{staticClass:"hljs-attr"},[s._v("@rightclick")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"newPolyline"')]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("bm-control")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v("\"toggle('polyline')\"")]),s._v(">")]),a("span",[s._v("{{")]),s._v(" polyline.editing ? '停止绘制' : '开始绘制' "),a("span",[s._v("}}")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("button")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("bm-control")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("bm-polyline")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":path")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"path"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-for")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"path of polyline.paths"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("bm-polyline")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("baidu-map")]),s._v(">")]),s._v("\n\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),a("span",{staticClass:"actionscript"},[s._v("\nexport "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n  data () {\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n      polyline: {\n        editing: "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(",\n        paths: []\n      }\n    }\n  },\n  methods: {\n    toggle (name) {\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v("[name].editing = !"),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v("[name].editing\n    },\n    syncPolyline (e) {\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (!"),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".polyline.editing) {\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v("\n      }\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" {paths} = "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".polyline\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (!paths.length) {\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v("\n      }\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" path = paths[paths.length - "),a("span",{staticClass:"hljs-number"},[s._v("1")]),s._v("]\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (!path.length) {\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v("\n      }\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (path.length === "),a("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(") {\n        path.push(e.point)\n      }\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$"),a("span",{staticClass:"hljs-keyword"},[s._v("set")]),s._v("(path, path.length - "),a("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(", e.point)\n    },\n    newPolyline (e) {\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (!"),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".polyline.editing) {\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v("\n      }\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" {paths} = "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".polyline\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v("(!paths.length) {\n        paths.push([])\n      }\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" path = paths[paths.length - "),a("span",{staticClass:"hljs-number"},[s._v("1")]),s._v("]\n      path.pop()\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (path.length) {\n        paths.push([])\n      }\n    },\n    paintPolyline (e) {\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (!"),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".polyline.editing) {\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v("\n      }\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" {paths} = "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".polyline\n      !paths.length && paths.push([])\n      paths[paths.length - "),a("span",{staticClass:"hljs-number"},[s._v("1")]),s._v("].push(e.point)\n    }\n  }\n}\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])}]}}});