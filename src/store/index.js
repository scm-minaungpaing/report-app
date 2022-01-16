import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    morningData: null,
    eveningData: null,
  },
  mutations: {
    getMorningData(state, payload) {
      state.morningData = payload
      localStorage.setItem('morningData', JSON.stringify(payload))
    },
    getEveningData(state, payload) {
      state.eveningData = payload
      localStorage.setItem('eveningData', JSON.stringify(payload))
    },
    clearMorningData(state) {
      state.morningData = null
      localStorage.removeItem("morningData")
    },
    clearEveningData(state) {
      state.eveningData = null      
      localStorage.removeItem("eveningData")
    }
  },
  actions: {
  },
  modules: {
  }
})
