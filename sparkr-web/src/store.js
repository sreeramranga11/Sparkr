import { createStore } from 'vuex';

export default createStore({
    state: {
        userId: null,
        techStack: [],
        resources: [],  // New field for storing resources
    },
    mutations: {
        setUserId(state, id) {
            state.userId = id;
        },
        setTechStack(state, techStack) {
            state.techStack = techStack;
        },
        setResources(state, resources) { // New mutation for setting resources
            state.resources = resources;
        },
    },
    getters: {
        getUserId: (state) => state.userId,
        getTechStack: (state) => state.techStack, // Getter for techStack
        getResources: (state) => state.resources, // Getter for resources
    },
    
});
