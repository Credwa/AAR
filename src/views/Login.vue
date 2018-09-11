<template>
  <div>
    <b-form class="login" @submit.stop.prevent="onSubmit">
      <h1>Sign In</h1>
      <div class="buttons-group">
        <router-link to='/' tag="b-button" class="myBtn">Register</router-link>
        <router-link to='/login' tag="b-button" class="myBtn">Sign In</router-link>
      </div>
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
      <span v-if="emailNotFound" class="error">User email not found</span>
      <span v-if="wrongPassword" class="error">Password does not match</span>
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
      emailNotFound: false,
      wrongPassword: false
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
      this.emailNotFound = false;
      this.wrongPassword = false;
      const self = this;
      evt.preventDefault();
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(() => {
          this.$router.push('/join');
        })
        .catch((error: any) => {
          // Handle Errors here.
          let errorCode = error.code;
          console.log(error);
          if (errorCode == 'auth/wrong-password') {
            self.wrongPassword = true;
          }

          if (errorCode == 'auth/user-not-found') {
            self.emailNotFound = true;
          }
        });
    }
  }
});
</script>

<style scoped lang="scss">
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: center;
  height: 100vh;
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
