import { DefineComponent } from 'vue'
import { withInstall } from '../../utils/index'
import { buttonProps } from '../button'
import ButtonVue from './Button.vue'
export const NOButton = withInstall(ButtonVue) as unknown as DefineComponent<
  typeof buttonProps
>
export default NOButton
export * from './button'
