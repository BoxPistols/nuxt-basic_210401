import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state() {
            return {
                message: 'Hello Vuex!',
                num: 12,
            }
        },

        mutations: {
            updateMsg(state, payload) {
                state.message = payload
            },
        },

        // actions: {
        //     setMessageAction(context) {
        //         context.commit('updateMsg', 'Dispatch!!')
        //     },
        // },

        actions: {
            setMessageAction: function (context, payload) {
                context.commit('updateMsg', payload)
            },
        },
    })
}

export default createStore
