import Vue from 'vue';
import Router from 'vue-router';
import firebase from '@/config/firebaseinit.ts';

import store from './store';
import Home from './views/Home.vue';
import Auth from './views/Auth.vue';
import Join from './views/Join.vue';
Vue.use(Router);

const getUserData = async (uid: string): Promise<any> => {
  const data = await firebase
    .database()
    .ref('/Users/' + uid)
    .once('value');
  return data;
};

const getTeamData = async (teamUID: string): Promise<any> => {
  const data = await firebase
    .database()
    .ref('/Teams/' + teamUID)
    .once('value');
  return data;
};

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'auth',
      component: Auth,
      beforeEnter: (to, from, next) => {
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            // User is signed in.
            next('/home');
          } else {
            // No user is signed in.
            next();
          }
        });
      }
    },
    {
      path: '/join',
      name: 'join',
      component: Join,
      beforeEnter: (to, from, next) => {
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            // User is signed in.
            getUserData(user.uid)
              .then(snapshot => {
                store.commit('updateUser', {
                  uid: user.uid,
                  ...snapshot.val()
                });

                if (snapshot.val().TeamUID.length > 0) {
                  getTeamData(snapshot.val().TeamUID)
                    .then(data => {
                      store.commit('updateTeam', data.val());
                      next('/home');
                    })
                    .catch(e => {
                      next('/');
                    });
                } else {
                  next();
                }
              })
              .catch(err => {
                next('/');
              });
          } else {
            // No user is signed in.
            next('/');
          }
        });
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      beforeEnter: (to, from, next) => {
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            // User is signed in.
            getUserData(user.uid)
              .then(snapshot => {
                store.commit('updateUser', {
                  uid: user.uid,
                  ...snapshot.val()
                });
                if (snapshot.val().TeamUID.length > 0) {
                  getTeamData(snapshot.val().TeamUID)
                    .then(data => {
                      store.commit('updateTeam', data.val());
                      next();
                    })
                    .catch(e => {
                      next('/');
                    });
                } else {
                  next('/join');
                }
              })
              .catch(err => {
                next('/');
              });
          } else {
            // No user is signed in.
            console.log('back');
            next('/');
          }
        });
      }
    }
  ]
});
