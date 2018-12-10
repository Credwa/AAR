<template>
  <div>
    <b-form class="confirm" @submit.stop.prevent="onSubmit">
      <b-form-group id="teamNameGroup"
                    label="Welcome To or Enter Team Name"
                    label-for="team"
                    label-text-align="center">
        <b-form-textarea id="team"
                      type="text"
                      :no-resize="true"
                      v-model.trim="form.teamName"
                      required
                      :rows="2"
                      placeholder="Existing team name if invited, or option to enter new team">
        </b-form-textarea>
      </b-form-group>
      <b-button :disabled="form.teamName.length === 0" type="submit" class="center-it">Lets Go!</b-button>
    </b-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import firebase from '@/config/firebaseinit.ts';

export default Vue.extend({
  name: 'Join',
  components: {},
  data() {
    return {
      form: {
        teamName: ''
      }
    };
  },
  methods: {
    async findTeamByName(): Promise<any> {
      const data = await firebase
        .database()
        .ref('Teams')
        .orderByChild('TeamName')
        .equalTo(this.form.teamName)
        .once('value');
      return data;
    },
    async addNewMemberToTeam(teamUID: String): Promise<any> {
      const data = await firebase
        .database()
        .ref('Teams/' + teamUID + '/TeamMembers/')
        .push(this.$store.state.user.uid);
      return data;
    },
    updateUserTeam(teamUID: String): void {
      firebase
        .database()
        .ref('Users/' + this.$store.state.user.uid)
        .update({
          TeamUID: teamUID
        });
    },
    onSubmit(): void {
      firebase
        .database()
        .ref('Teams')
        .orderByChild('TeamName')
        .equalTo(this.form.teamName)
        .once('value')
        .then(snapshot => {
          if (snapshot.val()) {
            // team exists join team
            this.findTeamByName().then(data => {
              let team = data.val();
              let teamUID = Object.keys(team)[0];
              this.updateUserTeam(teamUID);
              this.addNewMemberToTeam(teamUID).then(data => {
                // update store
                this.findTeamByName().then(data => {
                  this.$store.commit(
                    'updateTeam',
                    Object.values(data.val())[0]
                  );
                  this.$router.push('/home');
                });
              });
            });
          } else {
            // team doesn't exist create team
            const date = new Date();
            const newTeam = {
              TeamName: this.form.teamName,
              TeamCreatedDate: `${date.toDateString()} ${date.getUTCHours()}:${date.getUTCMinutes()}`,
              TeamMembers: [this.$store.state.user.uid],
              TeamAdmins: [this.$store.state.user.uid]
            };
            firebase
              .database()
              .ref('Teams/')
              .push(newTeam)
              .then(snapshot => {
                this.updateUserTeam(snapshot.key);
                this.$store.commit('updateTeam', newTeam);
                this.$router.push('/home');
              });
          }
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
});
</script>

<style scoped lang="scss">
.confirm {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: center;
  height: 100vh;
}
</style>
