import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        title: 'I am a counter'
    },
    modules: {
        counter
    },
    strict: process.env.NODE_ENV !== 'production'
})