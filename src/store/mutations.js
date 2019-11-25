import { TITLE } from './mutation-types'

mutations = {
    [TITLE.SET_TITLE](state, title) {
        state.title = title
    }
}