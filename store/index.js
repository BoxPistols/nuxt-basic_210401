import Vuex from 'vuex'

const createStore = () => {
	return new Vuex.Store({
		state: function() {
			return {
				message: 'Hello Vuex!',
				num: 12,
			}
		},
        mutations: {
            updateMsg: function (state, payload) {
                state.message = payload
            }
        },
        actions: {
            setMessageAction: function (context) {
                context.commit('updateMsg', 'Dispatch!!')
            }
        }

	})
}

export default createStore
