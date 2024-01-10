import { createApp } from 'vue'
import App from '@/App.vue'

// 引入element-ui组件库
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-expect-error忽略此类型检测
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// svg配置代码
import 'virtual:svg-icons-register'
// 引入自定义插件，该插件用于注册整个项目全局组件
import globalComponents from '@/components/index.ts'
// 引入样式
import '@/styles/index.scss'

const app = createApp(App)
// 注册ElementPlus, 并设置语言为中文
app.use(ElementPlus, {
  locale: zhCn,
})
app.use(globalComponents)

app.mount('#app')
