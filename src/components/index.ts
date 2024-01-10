import SvgIcon from '@/components/SvgIcon/index.vue'
import type { App, Component } from 'vue'
// 防止编译器无法识别components类型
const components: { [key: string]: Component } = { SvgIcon }

// 对外暴露自定义插件对象
export default {
  // 参数为应用程序对象app
  install(app: App) {
    Object.keys(components).forEach((key: string) => {
      app.component(key, components[key])
    })
  },
}
