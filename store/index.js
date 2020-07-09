export const state = () => ({
  token: null
})

export const actions = {
  login({commit}) {
    commit('setToken', 'true')
  },
  logout({commit}) {
    commit('clearToken')
  },

  // только на серверной части. тогда, когда nuxt начинает свою работу
  async nuxtServerInit({dispatch}) {
    await dispatch('users/fetchUsers')
  }
}

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
  clearToken(state) {
    state.token = null
  }
}

export const getters = {
  isAuth: state => !!state.token
}
