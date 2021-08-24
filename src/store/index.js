import { createStore } from 'vuex'

export default createStore({
  // state保存全局共享数据
  state: {
    isFullScreen: false
  },
  // mutations用于保存修改全局共享的数据的方法
  mutations: {
    changeFullScreen (state, flag) {
      state.isFullScreen = flag
    }
  },
  // actions 用于保存触发mutations中保存的方法的方法
  actions: {
    setFullScreen ({ commit }, flag) {
      commit('changeFullScreen', flag)
    }
  },
  getters: {
    isFullScreen (state) {
      return state.isFullScreen
    }
  },
  modules: {
  }
})
