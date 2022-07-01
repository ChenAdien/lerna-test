import { NOButton } from '../lib/index'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    NOButton: typeof NOButton
  }
}
