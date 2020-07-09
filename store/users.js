export const state = () => ({
  users: []
})

export const mutations = {
  setUsers(state, users) {
    state.users = users
  }
}

export const actions = {
  async fetchUsers({commit}) {
    try {
      const users = await this.$axios.$get('https://jsonplaceholder.typicode.com/users')
      commit('setUsers', users)
    } catch (e) {
      throw e
    }

  },
  async fetchUserById({commit}, userId) {
    return await this.$axios.$get(`https://jsonplaceholder.typicode.com/users/${userId}`)
  }
}

export const getters = {
  users: state => state.users
}
