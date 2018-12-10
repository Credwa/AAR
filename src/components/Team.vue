<template>
  <div class="team">
    <b-form  @submit.stop.prevent="onSave">
      <b-form-group id="teamName"
                    horizontal
                    style=""
                    label="Member of"
                    label-for="teamName"
                    label-text-align="left">
        <b-form-input id="teamName"
                      v-model.trim="$store.state.team.TeamName"
                      type="text"
                      class="profile-input team-name"
                      disabled>
        </b-form-input>
      </b-form-group>

      <b-form-group horizontal
                    style=""
                    label="Members"
                    label-for="teamName"
                    label-text-align="left">
        <b-form-checkbox-group id="checkboxes" v-model="editUsers" class="main-group">
          <b-list-group>
            <b-list-group-item  class="selected-emails" v-for="user in teamUsers" :key="user.uid" >
              <b-form-checkbox class="checkbox" :value="user.uid">
                <span style="color:red" v-if="isAdmin(user.uid)">{{user.UserEmail}}</span>
                <span v-else>{{user.UserEmail}}</span>
              </b-form-checkbox>
            </b-list-group-item>
          </b-list-group>
        </b-form-checkbox-group>
        <div class="float-right">
          <b-button  variant="danger" @click="removeUser()" :disabled="!isAdmin(currentUser)">Remove</b-button>
          <b-button  variant="warning" style="margin-left:1vw" @click="makeAdmin()" :disabled="!isAdmin(currentUser)">Make Admin</b-button>
        </div>

      </b-form-group>
    </b-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import _ from 'underscore';
import * as Firebase from 'firebase';
import firebase from '@/config/firebaseinit.ts';
export default Vue.extend({
  data() {
    return {
      editUsers: [] as string[],
      currentUser: null,
    };
  },
  computed: {
    teamUsers(): object {
      return this.$store.state.teamUsers;
    },
  },
  methods: {
    isAdmin(uid: String): Boolean {
      const vals = Object.values(this.$store.state.team.TeamAdmins);
      if (vals.find((val) => {
        return uid === val;
      })) {
        return true;
      } else {
        return false;
      }
    },
    makeAdmin() {
      this.editUsers.forEach(val => {
        if (!this.isAdmin(val)) {
          firebase
            .database()
            .ref('Teams/' + this.$store.state.user.TeamUID + '/TeamAdmins')
            .push(val);
        }
      })

    },
    removeUser() {}
  },
  created() {
    this.currentUser = this.$store.state.user.uid;
  }
});
</script>

<style lang="scss" scoped>
.team {
  margin-top: 3vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 80vw;
}
.profile-input {
  height: 6vh;
  font-size: 1.4em;
  &:disabled {
    background: #fafafa;
  }
  .team-name {
    text-align: center;
  }
}
.profile-save {
  position: absolute;
  margin-top: 10vh;
  right: 40vw;
}
.share {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: center;
}

.select-emails {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: center;
}
.checkbox {
  margin-left: 1vw;
}
.main-group {
  background: red;
  max-height: 30vh;
  overflow-y: scroll;
}
</style>

