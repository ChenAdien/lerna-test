declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    NOTest: typeof import('@thermo-nano/components')['NOButton']
  }
}
