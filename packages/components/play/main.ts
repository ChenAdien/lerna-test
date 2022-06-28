import { createApp } from 'vue'
import App from './App.vue'
import { NOTest } from '../dist/main'
import '../dist/index.css'
createApp(App).use(NOTest).mount('#app')
