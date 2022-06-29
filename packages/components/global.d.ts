declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    NOButton: typeof import('@thermo-nano/components')['NOButton']
  }
}
