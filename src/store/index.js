import { createStore } from 'vuex'

export default createStore({
  state: {
    count1: 10
  },
  getters: {
  },
  mutations: {
    change (state) {
      state.count1++
    }
  },
  actions: {
  },
  modules: {
  }
})
