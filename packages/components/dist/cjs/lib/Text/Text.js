'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var pluginVue_exportHelper = require('../../_virtual/plugin-vue_export-helper.js');

const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "Text",
  props: {
    text: { type: String, default: "1" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", null, vue.toDisplayString(__props.text), 1);
    };
  }
});
var TextVue = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "C:\\work\\github\\lerna-test\\packages\\components\\lib\\Text\\Text.vue"]]);

exports["default"] = TextVue;
