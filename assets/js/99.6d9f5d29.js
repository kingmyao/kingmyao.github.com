(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{765:function(t,e,a){"use strict";a.r(e);var l=a(1),i=Object(l.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"image-图片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#image-图片"}},[t._v("#")]),t._v(" Image 图片 "),a("Common-SourceCodeLink",{attrs:{comp:"image"}})],1),t._v(" "),a("p",[t._v("图片容器，在保留原生 img 的特性下，支持懒加载，自定义占位、加载失败等")]),t._v(" "),a("h2",{attrs:{id:"基础用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础用法"}},[t._v("#")]),t._v(" 基础用法")]),t._v(" "),a("p",[t._v("基础用法与原生 img 标签一致，可以设置 "),a("code",[t._v("src")]),t._v("、"),a("code",[t._v("width")]),t._v("、"),a("code",[t._v("height")]),t._v("、"),a("code",[t._v("alt")]),t._v(" 等原生属性")]),t._v(" "),a("Common-Democode",[a("image-demo1"),t._v(" "),a("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('<template>\n  <div class="demo-image">\n    <ds-image\n      src="/logo.png"\n      width="140"\n      height="100"\n    />\n  </div>\n</template>\n')])])])])],1),t._v(" "),a("h2",{attrs:{id:"填充模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#填充模式"}},[t._v("#")]),t._v(" 填充模式")]),t._v(" "),a("p",[t._v("通过 fit 属性设置图片的填充模式，同原生 "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit",target:"_blank",rel:"noopener noreferrer"}},[t._v("object-fit"),a("OutboundLink")],1)]),t._v(" "),a("Common-Democode",[a("image-demo2"),t._v(" "),a("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('<template>\n  <div class="demo2-image">\n    <div\n      class="block"\n      v-for="fit in fitList"\n      :key="fit"\n    >\n      <p class="fit-title">'+t._s(t.fit)+"</p>\n      <ds-image\n        :fit=\"fit\"\n        src=\"https://avatars0.githubusercontent.com/u/15870879?s=400&u=6cffb5ad3ecc47c8ea9fac3ecf4c1e2958284f66&v=4\"\n        width=\"100\"\n        height=\"100\"\n      />\n    </div>\n  </div>\n</template>\n<script>\nexport default {\n  data () {\n    return {\n      fitList: [ 'fill', 'contain', 'cover', 'none', 'scale-down', ]\n    }\n  }\n}\n<\/script>\n<style>\n  .demo2-image .block {\n    display: inline-block;\n    text-align: center;\n    width: 20%;\n  }\n</style>\n")])])])])],1),t._v(" "),a("h2",{attrs:{id:"圆形图片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#圆形图片"}},[t._v("#")]),t._v(" 圆形图片")]),t._v(" "),a("p",[t._v("通过 "),a("code",[t._v("round")]),t._v(" 属性可以设置图片变圆")]),t._v(" "),a("Common-Democode",[a("image-demo3"),t._v(" "),a("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('<template>\n  <div class="demo-image">\n    <ds-image\n      round\n      src="https://avatars0.githubusercontent.com/u/15870879?s=400&u=6cffb5ad3ecc47c8ea9fac3ecf4c1e2958284f66&v=4"\n      width="100"\n      height="100"\n    />\n  </div>\n</template>\n')])])])])],1),t._v(" "),a("h2",{attrs:{id:"加载中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加载中"}},[t._v("#")]),t._v(" 加载中")]),t._v(" "),a("p",[t._v("Image 组件提供了默认的加载失败提示，并且支持通过 "),a("code",[t._v("loading")]),t._v(" 插槽自定义内容")]),t._v(" "),a("Common-Democode",[a("image-demo4"),t._v(" "),a("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('<template>\n  <div class="demo-image">\n    <ds-image\n      src="/logo.png"\n      width="100"\n      height="100"\n    />\n  </div>\n</template>\n')])])])])],1),t._v(" "),a("h2",{attrs:{id:"加载失败"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加载失败"}},[t._v("#")]),t._v(" 加载失败")]),t._v(" "),a("p",[t._v("Image 组件提供了默认的加载失败提示，并且支持通过 "),a("code",[t._v("error")]),t._v(" 插槽自定义内容")]),t._v(" "),a("Common-Democode",[a("image-demo5"),t._v(" "),a("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('<template>\n  <div class="demo-image">\n    <ds-image src="https://error.png" />\n    <ds-image src="https://error.png">\n      <template slot="error">\n        自定义加载失败\n      </template>\n    </ds-image>\n  </div>\n</template>\n')])])])])],1),t._v(" "),a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("src")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("图片路径")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("alt")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("原生 alt")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("width")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("原生 width")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("height")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("原生 height")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("fit")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("图片填充模式\b，同原生 "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/",target:"_blank",rel:"noopener noreferrer"}},[t._v("object-fit"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("round")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示为圆形")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("false")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("loading")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("图片加载的占位内容")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("slot")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("error")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("加载失败的内容")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("slot")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])]),t._v(" "),a("h3",{attrs:{id:"图片填充模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图片填充模式"}},[t._v("#")]),t._v(" 图片填充模式\b")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("contain")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("保持宽高缩放图片，使图片的长边能完全显示出来")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("cover")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("保持宽高缩放图片，使图片的短边能完全显示出来，裁剪长边")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("fill")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("拉伸图片，使图片填满元素")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("none")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("保持图片原有尺寸")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("scale-down")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("取 "),a("code",[t._v("none")]),t._v(" 或 "),a("code",[t._v("contain")]),t._v(" 中较小的一个")])])])]),t._v(" "),a("h3",{attrs:{id:"事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件"}},[t._v("#")]),t._v(" 事件")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("回调参数")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("load")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("图片加载成功触发")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("function(e)")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("error")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("图片加载失败触发")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("function(e)")])])])])])],1)}),[],!1,null,null,null);e.default=i.exports}}]);