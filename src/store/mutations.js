import { TITLE } from './mutation-types'

const mutations = {
    [TITLE.SET_TITLE](state, title) {
        state.title = title
    }
}

export default {
    mutations
}