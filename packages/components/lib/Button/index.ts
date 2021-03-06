import { DefineComponent, Plugin } from "vue";
import { withInstall } from "../../utils/index";
import { buttonProps } from "../button";
import ButtonVue from "./Button.vue";
export const NOButton = withInstall(
  ButtonVue as DefineComponent<typeof buttonProps>
);
export default NOButton;
export * from "./button";
