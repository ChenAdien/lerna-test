import { defineComponent, ref, openBlock, createElementBlock, createElementVNode, toDisplayString } from 'vue';

const withInstall = (main, extra) => {
    main.install = (app) => {
        for (const comp of [main, ...Object.values(extra ?? {})]) {
            console.log(comp);
            app.component("NO" + comp.__name, comp);
        }
    };
    if (extra) {
        for (const [key, comp] of Object.entries(extra)) {
            main[key] = comp;
        }
    }
    return main;
};

const buttonProps = {
    content: { type: String, default: "Click" },
};

var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
var ButtonVue = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "C:\\work\\github\\lerna-test\\packages\\components\\lib\\Button\\Button.vue"]]);

const NOButton = withInstall(ButtonVue);

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

const NOText = TextVue;

export { NOButton, NOText, buttonProps };
