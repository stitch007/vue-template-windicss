import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router'
import '@/assets/style/main.css'
import 'virtual:windi.css'

const app = createApp(App)
setupRouter(app)
app.mount('#app')
