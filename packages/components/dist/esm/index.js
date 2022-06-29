import { initCustomFormatter, defineComponent, ref, openBlock, createElementBlock, toDisplayString } from '@vue/runtime-dom';

const withInstall = (main, extra) => {
    main.install = (app) => {
        for (const comp of [main, ...Object.values(extra ?? {})]) {
            console.log(comp.__name);
            app.component(comp.__name, comp);
        }
    };
    if (extra) {
        for (const [key, comp] of Object.entries(extra)) {
            main[key] = comp;
        }
    }
    return main;
};

function initDev() {
    {
        initCustomFormatter();
    }
}

// This entry exports the runtime only, and is built as
if ((process.env.NODE_ENV !== 'production')) {
    initDev();
}

var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Button",
  setup(__props) {
    const content = ref(1);
    function click() {
      content.value += 1;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        onClick: click,
        class: "red"
      }, toDisplayString(content.value), 1);
    };
  }
});
var ButtonVue = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "C:\\work\\github\\lerna-test\\packages\\components\\Button\\Button.vue"]]);

const NOButton = withInstall(ButtonVue);

export { NOButton };
