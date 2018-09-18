/*
* TODO
* Switch user and team to interfaces
**/
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// maybe fully implement these in a separate file later
// interface User {
//   UserEmail: String;
//   uid: String;
//   TeamUID: String;
// }

// interface Team {
//   TeamName: String;
//   TeamCreatedDate: String;
//   TeamMembers: Array<User>;
// }

export default new Vuex.Store({
  state: {
    user: {
      UserEmail: String,
      uid: String,
      TeamUID: String,
      name: String
    },
    team: {
      TeamName: String,
      TeamCreatedDate: String,
      TeamMembers: Array
    },
    teamAars: new Array<object>(),
    teamUsers: new Array<object>()
  },
  mutations: {
    updateUser: (state, newUser) => {
      state.user = newUser;
    },
    updateTeam: (state, newTeam) => {
      state.team = newTeam;
    },
    newUser: (state, user) => {
      state.teamUsers.push(user);
    },
    newAar: (state, aar) => {
      state.teamAars.push(aar);
    },
    removeAar: (state, key) => {
      state.teamAars = state.teamAars.filter((aar: any) => aar.key !== key);
    },
    updateAar: (state, payload) => {
      state.teamAars = state.teamAars.filter(
        (aar: any) => aar.key !== payload.key
      );
      state.teamAars.push(payload.data);
    }
  },
  actions: {}
});
