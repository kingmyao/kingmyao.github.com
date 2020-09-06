(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{777:function(t,e,a){"use strict";a.r(e);var l=a(1),i=Object(l.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"tabs-标签页"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tabs-标签页"}},[t._v("#")]),t._v(" Tabs 标签页 "),a("Common-SourceCodeLink",{attrs:{comp:"tabs"}})],1),t._v(" "),a("h2",{attrs:{id:"基本使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[t._v("#")]),t._v(" 基本使用")]),t._v(" "),a("Common-Democode",[a("tabs-demo1"),t._v(" "),a("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('<template>\n  <ds-tabs v-model="activeKey" @change="onChange">\n    <ds-tab-item title="tab 1" name="1">\n      content of tab 1\n    </ds-tab-item>\n    <ds-tab-item title="tab 2" name="2">\n      content of tab 2\n    </ds-tab-item>\n  </ds-tabs>\n</template>\n<script>\nexport default {\n  data () {\n    return {\n      activeKey: \'1\'\n    }\n  },\n  methods: {\n    onChange(activeKey) {\n      console.log(\'activeKey\', activeKey);\n    }\n  }\n}\n<\/script>\n')])])])])],1),t._v(" "),a("h2",{attrs:{id:"禁用某一项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#禁用某一项"}},[t._v("#")]),t._v(" 禁用某一项")]),t._v(" "),a("Common-Democode",[a("tabs-demo2"),t._v(" "),a("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('<template>\n  <ds-tabs>\n    <ds-tab-item title="tab 1" name="1">\n      content of tab 1\n    </ds-tab-item>\n    <ds-tab-item title="tab 2" name="2" disabled>\n      content of tab 2\n    </ds-tab-item>\n    <ds-tab-item title="tab 3" name="3" :disabled="false">\n      content of tab 3\n    </ds-tab-item>\n  </ds-tabs>\n</template>\n')])])])])],1),t._v(" "),a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),a("h3",{attrs:{id:"atabs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#atabs"}},[t._v("#")]),t._v(" ATabs")]),t._v(" "),a("h3",{attrs:{id:"属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[t._v("#")]),t._v(" 属性")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("defaultActiveKey")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("初始化选中面板的 key，如果没有设置 activeKey")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("第一个面板")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("v-model")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("当前激活 tab 面板的 name")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])]),t._v(" "),a("h4",{attrs:{id:"事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件"}},[t._v("#")]),t._v(" 事件")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("回调参数")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("change")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("切换面板的回调")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("Function(activeKey) {}")])])])])]),t._v(" "),a("h3",{attrs:{id:"atabitem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#atabitem"}},[t._v("#")]),t._v(" ATabItem")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("title")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("选项卡头显示文字")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("name")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("对应 activeKey")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("disabled")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("禁用此面板")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])])])])],1)}),[],!1,null,null,null);e.default=i.exports}}]);