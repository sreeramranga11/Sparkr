import { createStore } from 'vuex';

export default createStore({
  state: {
    userId: null, // This will store the user id
    techStack: [],

  },
  mutations: {
    setUserId(state, id) {
      state.userId = id;
    },

    setTechStack(state, techStack) {
        state.techStack = techStack;
      },
  },
  actions: {},
  getters: {
    getUserId: (state) => state.userId,
  },
});
