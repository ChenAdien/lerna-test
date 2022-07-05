import { defineComponent, openBlock, createElementBlock, toDisplayString } from 'vue';
import _export_sfc from '../../_virtual/plugin-vue_export-helper.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Text",
  props: {
    text: { type: String, default: "1" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, toDisplayString(__props.text), 1);
    };
  }
});
var TextVue = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "C:\\work\\github\\lerna-test\\packages\\components\\lib\\Text\\Text.vue"]]);

export { TextVue as default };
