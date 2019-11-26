import { TITLE } from './mutation-types'

const actions = {
    setTitle({ commit }, title) {
        commit(TITLE.SET, title)
    }
}

export default {
    actions
}