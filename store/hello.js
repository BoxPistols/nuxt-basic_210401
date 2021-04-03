export const state = () => ({
    message: 'Hello Vuex!',
    num: 120,
})

export const mutations = {
    updateMsg(state, payload) {
        state.message = payload
    },
}

export const actions = {
    setMessageAction: function (context, payload) {
        context.commit('updateMsg', payload)
    },
}
