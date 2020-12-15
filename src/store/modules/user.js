const state = {
  // 用户信息
  userInfo: {
    id: '',
    name: ''
  }
}

const mutations = {
  // 更新用户信息
  updateUserInfo(state, payload) {
    state.userInfo = Object.assign({}, state.userInfo, payload)
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
