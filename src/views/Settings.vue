<template>
  <div class="settings">
    <b-btn class="go-back" variant="warning" @click="goBack">back</b-btn>
    <b-card no-body border-variant="light" style="width:90vw">
      <b-tabs pills card>
        <b-tab class="tab-h" no-body title="Profile" active>
          <profile></profile>
        </b-tab>
        <b-tab class="tab-h" no-body title="Team">
          <team></team>
        </b-tab>
        <b-tab  class="tab-h billing" no-body title="Billing">
          <billing></billing>
        </b-tab>
      </b-tabs>
      <aar-modal/>
    </b-card>
  </div>
</template>


<script lang="ts">
import Vue from 'vue';
import firebase from '@/config/firebaseinit.ts';
import Profile from '../components/Profile.vue';
import Team from '../components/Team.vue';
import Billing from '../components/Billing.vue';
export default Vue.extend({
  components: {
    Profile,
    Team,
    Billing
  },
  methods: {
    goBack(): void {
      this.$router.push('/home');
    },
    async getUserByUID(uid: String): Promise<Object> {
      const data = await firebase
        .database()
        .ref('Users/' + uid)
        .once('value');
      return data;
    },
    getTeamUsers(): void {
      firebase
        .database()
        .ref('Teams/' + this.$store.state.user.TeamUID + '/TeamMembers')
        .once('value', (snapshot: any) => {
          // check if val not equal to yourself
          if (snapshot && snapshot.val() !== this.$store.state.user.uid) {
            this.getUserByUID(snapshot.val()).then((snap: any) => {
              this.$store.commit('newUser', {
                uid: snap.key,
                UserEmail: snap.val().UserEmail,
                TeamUID: snap.val().TeamUID
              });
            });
          }
        });
    },
  },
  created() {
    this.getTeamUsers();
  }
})
</script>


<style lang="scss" scoped>
.settings {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  flex-direction: center;
  height: 100vh;
  padding-top: 15vh;
}

.go-back {
  position: absolute;
  top: 5vh;
  left: 5vh;
}

.tab-h {
  max-height: 80vh;
  overflow-y: none;
}

// .billing {
//   .nav-item {
//     a {
//       color: red;
//     }
//   }
// }

.nav-link {
  color: red !important;
}
</style>
