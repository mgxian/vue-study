import { COUNTER } from '../mutation-types'

const state = {
    count: 0
}

const getters = {
    doubleCount: (state) => 2 * state.count
}

const actions = {
    increaseOne({ commit }) {
        commit(COUNTER.INCREASE, 1)
    },
    decreaseOne({ commit }) {
        commit(COUNTER.DECREASE, 1)
    }
}

const mutations = {
    [COUNTER.INCREASE](state, number) {
        state.count += number
    },

    [COUNTER.DECREASE](state, number) {
        state.count -= number
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}