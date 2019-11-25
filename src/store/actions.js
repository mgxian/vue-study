import { TITLE } from './mutation-types'

actions = {
    setTitle({ commit }, title) {
        commit(TITLE.SET, title)
    }
}