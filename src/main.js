// import { createApp } from 'vue'
// import App from './App.vue'


import { createApp } from 'vue'
import App from './App.vue'
// 将原来导出的 router 改为 routes 并引入
import routes from './router'
// import store from './store'
// 引入配置文件
import './public-path.js'
// 引入 vue-router 的方法
import { createRouter, createWebHistory } from 'vue-router'

let router = null
let instance = null

function render({ container } = {}){
  router = createRouter({
    routes,
    history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/vue3' : '/'),
    // base: window.__POWERED_BY_QIANKUN__ ? '/app' : '/'
  })
    
  instance = createApp(App).use(router).mount(container ? container.querySelector('#app') : '#app')
}

// 如果是单独启动的子文件，保证仍能正常运行
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

// 生命周期的钩子函数
// 导出第一次进入当前子应用的钩子函数
export async function bootstrap() {
  console.log('第一次进入app')
}

// 导出每次创建挂载时的钩子函数
export async function mount(props) {
  console.log("创建挂载组件")
  render(props)
}

// 导出每次销毁时的钩子函数
export async function unmount() {
  console.log("销毁组件")
  console.log(instance)
  // instance.$destroy()
  // instance.$el.innerHTML = ''
  instance = null
  router = null
}


