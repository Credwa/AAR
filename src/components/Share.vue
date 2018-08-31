<template>
  <div style="margin-top: 15vh">
    <b-form class="share">
      <b-form-group id="shareGroup"
                    label="Share With"
                    label-for="share"
                   >
        <b-form-textarea id="share"
                      type="text"
                      :rows="3"
                      :value="shareList"
                      required
                      style="width:40vw"
                      placeholder="Email address inputs separated by;">
        </b-form-textarea>
      </b-form-group>
      <b-form-group>
        <b-form-group
                      label-for="searchInput"
                      id="searchGroupInput"
                      >
          <b-form-input id="searchInput"
                        type="search"
                        v-model="search"
                        placeholder="Search"/>
        </b-form-group>
        <b-form-checkbox-group id="checkboxes" v-model="shareWith" class="main-group">
          <b-list-group>
            <b-list-group-item  class="selected-emails" v-for="user in teamUsers" :key="user.uid" >
            <b-form-checkbox class="checkbox" :value="user.uid">
              {{user.UserEmail}}
            </b-form-checkbox>
            </b-list-group-item>
          </b-list-group>

        </b-form-checkbox-group>
      </b-form-group>
      <div class="flex-center" style="margin-top: 2vh; margin-bottom: 15vh;">
        <b-button style="margin-right:2vw" @click="close">Cancel</b-button>
        <b-button @click="shareAar">Share</b-button>
      </div>


    </b-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import firebase from '@/config/firebaseinit.ts';

export default Vue.extend({
  props: {
    uid: {
      required: true,
      type: String
    },
    form: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      shareWith: [] as string[],
      search: '',
      alreadyShared: []
    };
  },
  computed: {
    teamUsers(): object {
      const availableUsersToShare = this.$store.state.teamUsers.filter(
        (user: any) =>
          !this.form.SharedWith.find((sUser: any) => {
            return user.uid === sUser.uid;
          })
      );
      if (this.search.length > 0) {
        return availableUsersToShare.filter((user: any) => {
          return user.UserEmail.match(this.search);
        });
      }

      return availableUsersToShare;
    },
    shareList(): string {
      let list = '';
      this.shareWith.forEach(val => {
        const user = this.$store.state.teamUsers.find((myUser: any) => {
          return val === myUser.uid;
        });
        list += user.UserEmail + ';';
      });
      return list;
    }
  },
  methods: {
    shareAar() {
      this.form.SharedWith.forEach((user: any) =>
        this.shareWith.push(user.uid)
      );
      if (this.shareWith.length > 0) {
        firebase
          .database()
          .ref('AAR Item/' + this.uid)
          .update({ SharedWith: this.shareWith })
          .then(() => {
            this.close();
          })
          .catch(e => {
            console.log(e);
          });
      } else {
        this.close();
      }
    },
    close() {
      this.$root.$emit('bv::hide::modal', 'aarModal');
    }
  }
});
</script>

<style lang="scss" scoped>
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
  max-height: 30vh;
  overflow-y: scroll;
}
</style>

