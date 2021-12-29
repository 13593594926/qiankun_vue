// eslint-disable-next-line no-undef
import Vue from 'vue'
import App from './App.vue'
const _window = window;

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
let instance = null
function render() {
  instance = new Vue({
    render: h => h(App),
  }).$mount('#app')
}
if (_window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = _window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
export async function bootstrap() {

}
export async function mount() {
  render()
}
export async function unmount() {
  instance.$destroy()
  instance = null;
}
// 独立运行微应用
if (!_window.__POWERED_BY_QIANKUN__) {
  render();
}