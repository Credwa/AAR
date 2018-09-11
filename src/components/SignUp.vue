<template>
  <div>
    <b-form class="sign-up" @submit.stop.prevent="onSubmit">
      <h1>Sign Up</h1>
      <div class="buttons-group">
        <router-link to='/' tag="b-button" class="myBtn">Register</router-link>
        <router-link to='/login' tag="b-button" class="myBtn">Sign In</router-link>
      </div>
      <b-form-group id="nameGroup"
                    label="Name"
                    label-for="name"
                    label-text-align="right">
        <b-form-input id="name"
                      type="text"
                      v-model.trim="form.name"
                      required
                      placeholder="Enter name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="emailGroup"
                    label="Email"
                    label-for="email">
        <b-form-input id="email"
                      type="email"
                      v-model.trim="form.email"
                      required
                      :state="form.email.length > 0 ? validateEmail : null"
                      placeholder="Enter email">
        </b-form-input>
      </b-form-group>

      <b-form-group id="passwordGroup"
                    label="Password"
                    label-for="password">
        <b-form-input id="password"
                      type="password"
                      v-model.trim="form.password"
                      required
                      :state="form.password.length > 0 ? validatePassword : null"
                      placeholder="Enter password">
        </b-form-input>
      </b-form-group>
      <span v-if="emailTaken" class="error">Email Already In Use</span>
      <span v-if="weakPassword" class="error">Password must be atleast 6 characters</span>
      <b-button type="submit" class="center-it">Get started now</b-button>
    </b-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

import firebase from '@/config/firebaseinit.ts';

export default Vue.extend({
  name: 'SignUp',
  data() {
    return {
      form: {
        email: '',
        name: '',
        password: ''
      },
      emailTaken: false,
      weakPassword: false
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
    onSubmit(evt: any): void {
      this.emailTaken = false;
      this.weakPassword = false;
      const self = this;
      evt.preventDefault();
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(newUser => {
          // Create user profile and save name to firestore user profile
          let currentUser = {
            UserEmail: this.form.email,
            uid: firebase.auth().currentUser!.uid,
            TeamUID: ''
          };
          if (newUser.user) {
            newUser.user.updateProfile({
              displayName: this.form.name,
              photoURL: null
            });
          }
          firebase
            .database()
            .ref('Users/' + currentUser.uid)
            .set({
              UserEmail: currentUser.UserEmail,
              TeamUID: currentUser.TeamUID
            });
          firebase
            .auth()
            .currentUser!.sendEmailVerification()
            .then(() => {
              // Email Sent
              this.$emit('verify', currentUser);
              this.$store.commit('updateUser', currentUser);
            })
            .catch((error: any) => {
              // error
            });
        })
        .catch(function(error: any) {
          // Handle Errors here.
          let errorCode = error.code;
          console.log(error);
          if (errorCode == 'auth/weak-password') {
            self.weakPassword = true;
          }

          if (errorCode == 'auth/email-already-in-use') {
            self.emailTaken = true;
          }
        });
    }
  }
});
</script>

<style scoped lang="scss">
.sign-up {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: center;
}

.buttons-group {
  margin-bottom: 5vh;
}

.myBtn {
  margin: 1vh;
  width: 10vw;
}

.error {
  color: red;
  font-size: 12px;
}
</style>
