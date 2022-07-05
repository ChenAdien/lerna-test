'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var button = require('./button2.js');
var pluginVue_exportHelper = require('../../_virtual/plugin-vue_export-helper.js');

const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "Button",
  props: button.buttonProps,
  setup(__props) {
    const num = vue.ref(1);
    function click() {
      num.value += 1;
    }
    console.log(111);
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", null, [
        vue.createElementVNode("div", null, vue.toDisplayString(num.value), 1),
        vue.createElementVNode("button", {
          class: "red",
          onClick: click
        }, vue.toDisplayString(_ctx.content), 1)
      ]);
    };
  }
});
var ButtonVue = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "C:\\work\\github\\lerna-test\\packages\\components\\lib\\Button\\Button.vue"]]);

exports["default"] = ButtonVue;
