<template>
  <div>
    <b-form class="sign-up" @submit.stop.prevent="onSubmit">
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
                      :state="validateEmail"
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
                      :state="validatePassword"
                      placeholder="Enter password">
        </b-form-input>
      </b-form-group>
      <b-button type="submit" class="center-it">Get started now</b-button>
    </b-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import firebase from '@/config/firebaseinit.ts';

export default Vue.extend({
  name: 'SignUp',
  data() {
    return {
      form: {
        email: '',
        name: '',
        password: ''
      }
    };
  },
  computed: {
    validateEmail(): Boolean {
      const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let result: Boolean = false;
      if (emailReg.test(this.form.email)) {
        result = true;
      }
      if (this.form.email.length === 0) {
        // its undefined to leave form in neutral state when empty
        // tslint:disable-next-line
        result = undefined;
      }
      return result;
    },
    validatePassword(): Boolean {
      const passwordReg = /^(?=.*\d).{6,15}$/;
      let result: Boolean = false;
      if (passwordReg.test(this.form.password)) {
        result = true;
      }
      if (this.form.password.length === 0) {
        // its undefined to leave form in neutral state when empty
        result = undefined;
      }
      return result;
    }
  },
  methods: {
    onSubmit(evt: any): void {
      evt.preventDefault();
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(() => {
          // Create user profile and save name to firestore user profile
          let currentUser = {
            email: this.form.email,
            name: this.form.name,
            uid: firebase.auth().currentUser!.uid
          };
          console.log(firebase.auth().currentUser!.emailVerified);
          // firebase
          //   .firestore()
          //   .collection("users")
          //   .doc(currentUser.uid)
          //   .set({
          //     name: currentUser.name,
          //     email: currentUser.email
          //   });
          firebase
            .auth()
            .currentUser!.sendEmailVerification()
            .then(() => {
              // Email Sent
              this.$emit('verify', currentUser);
            })
            .catch((error: any) => {
              // error
            });
        })
        .catch(function(error: any) {
          // Handle Errors here.
          let errorCode = error.code;
          // ...
          console.log(errorCode);
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
</style>
