import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//1. 导入vuex持久化的插件
import VuexPersist from "vuex-persist";

const VuexLocal = new VuexPersist({
  storage: window.sessionStorage,
  key: 'yx_vuex',
})

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  plugins:[VuexLocal.plugin],
})
