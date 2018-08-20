import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      UserEmail : String,
      uid: String,
      UserTeamName: String
    },
    team: {
      TeamName: String,
      TeamCreatedDate: String,
      TeamMembers: Array
    }
  },
  mutations: {
    updateUser: (state, newUser) => {
      state.user = newUser;
    },
    updateTeam: (state, newTeam) => {
      state.team = newTeam;
    }
  },
  actions: {

  },
});
