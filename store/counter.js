export const state = () => ({
    count: 0,
    item: 'My Item',
})

export const mutations = {
    countUp(state, payload) {
        // state.count = state.count + 1
        state.count = state.count + payload
    },
    countDown(state, payload) {
        state.count = state.count - payload
    },
    addUp(state, payload) {
        state.item = payload
    },
    countReset(state, payload) {
        state.count = payload
    },
}

export const actions = {
    countUpAction(context, payload) {
        context.commit('countUp', payload)
    },
    countDownAction(context, payload) {
        context.commit('countDown', payload)
    },
    addUpAction(context, payload) {
        context.commit('addUp', payload)
    },
}
