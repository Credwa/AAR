<template>
  <div class="billing">
    <b-form  @submit.stop.prevent="onSave">
      <b-form-group id="usernamebGroup"
                    horizontal
                    style=""
                    label="User Name"
                    label-for="usernameb"
                    label-text-align="left">
        <b-form-input id="usernameb"
                      v-model.trim="form.username"
                      type="text"
                      placeholder="Enter new username" class="profile-input">
        </b-form-input>
      </b-form-group>

      <b-form-group id="emailbGroup"
                    horizontal
                    label="Email"
                    label-for="email"
                    label-text-align="center">
        <b-form-input id="emailb"
                      class="profile-input"
                      type="email"
                      v-model.trim="form.email"
                      :state="form.email.length > 0 ? validateEmail : null"
                      placeholder="Enter new email">
        </b-form-input>
      </b-form-group>

      <b-form-group id="passwordbGroup"
                    horizontal
                    label="Password"
                    label-for="passwordb"
                    label-text-align="center">
        <b-form-input id="passwordb"
                      v-model.trim="form.password"
                      :state="form.password.length > 0 ? validatePassword : null"
                      type="password"
                      placeholder="Enter new password" class="profile-input">
        </b-form-input>
      </b-form-group>
      <b-button type="submit" class="profile-save">Save/Edit</b-button>
    </b-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import firebase from '@/config/firebaseinit.ts';
export default Vue.extend({
  data() {
    return {
      form: {
        username: '',
        email: '',
        password: ''
      }
    };
  },
  computed: {
    validateEmail(): boolean {
      const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return emailReg.test(this.form.email);
    },
    validatePassword(): boolean {
      const passwordReg = /^(?=.*\w).{6,15}$/;
      return passwordReg.test(this.form.password);
    }
  },
  methods: {
    onSave() {
      const user = firebase.auth().currentUser;

      console.log(user);
      if (this.form.email && this.form.email !== user!.email) {
        user!
          .updateEmail(this.form.email)
          .then(() => {
            // Update successful
            console.log('email updated');
            user!.sendEmailVerification().then(function() {
              console.log('verify email sent');
            }).catch(function(error) {
              // An error happened.
            });
          })
          .catch(error => {
            console.log(error);
          });
      }

      if (this.form.username && this.form.username !== user!.displayName) {
        user!
          .updateProfile({
            displayName: this.form.username,
            photoURL: '',
          })
          .then(function() {
            // Update successful.
            console.log('username changed');
          })
          .catch(function(error) {
            console.log(error);
          });
      }

      if (this.form.password) {
        user!.updatePassword(this.form.password).then(() => {
          console.log('password updated');
        }).catch((err) => {
          console.log(err);
        })
      }
    }
  },
  created() {
    this.form.username = this.$store.state.user.UserName;
    this.form.email = this.$store.state.user.UserEmail;
    this.form.username = this.$store.state.user.UserName;
  }
});
</script>

<style lang="scss" scoped>
.billing {
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
}
.profile-save {
  position: absolute;
  margin-top: 10vh;
  right: 30vw;
}
</style>

