import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        title: 'I am a counter'
    },
    mutations,
    actions,
    modules: {
        counter
    },
    strict: process.env.NODE_ENV !== 'production'
})