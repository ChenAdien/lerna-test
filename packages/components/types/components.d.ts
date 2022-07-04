import "@vue/runtime-core";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    NOTest: typeof import("../index")["NOButton"];
  }
}
