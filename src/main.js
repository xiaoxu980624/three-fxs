import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'


//引入样式


Vue.config.productionTip = false

//axios依赖的配置
import  axios  from "@/utils/request";
Vue.prototype.$axios = axios;

//配置elmentUI组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


//配置vantUI组件库
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
