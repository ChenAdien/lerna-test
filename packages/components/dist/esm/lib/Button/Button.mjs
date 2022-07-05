import { defineComponent, ref, openBlock, createElementBlock, createElementVNode, toDisplayString } from 'vue';
import { buttonProps } from './button2.mjs';
import _export_sfc from '../../_virtual/plugin-vue_export-helper.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Button",
  props: buttonProps,
  setup(__props) {
    const num = ref(1);
    function click() {
      num.value += 1;
    }
    console.log(111);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createElementVNode("div", null, toDisplayString(num.value), 1),
        createElementVNode("button", {
          class: "red",
          onClick: click
        }, toDisplayString(_ctx.content), 1)
      ]);
    };
  }
});
var ButtonVue = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "C:\\work\\github\\lerna-test\\packages\\components\\lib\\Button\\Button.vue"]]);

export { ButtonVue as default };
