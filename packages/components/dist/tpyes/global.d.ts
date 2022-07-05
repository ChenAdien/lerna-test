import { NOButton } from "@thermo-nano/components";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    NOButton: typeof NOButton;
  }
}
