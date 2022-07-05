import { createApp } from 'vue'
import App from './App.vue'
import {NOButton} from '@thermo-nano/components';
import '@thermo-nano/components/assets/index.css'
console.log(NOButton);

createApp(App).use(NOButton).mount('#app')
