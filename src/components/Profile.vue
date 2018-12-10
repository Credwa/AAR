<template>
  <div class="profile">
    <b-form  @submit.stop.prevent="onSave">
      <b-form-group id="usernameGroup"
                    horizontal
                    style=""
                    label="User Name"
                    label-for="username"
                    label-text-align="left">
        <b-form-input id="username"
                      v-model.trim="form.username"
                      type="text"
                      placeholder="Enter new username" class="profile-input">
        </b-form-input>
      </b-form-group>

      <b-form-group id="emailGroup"
                    horizontal
                    label="Email"
                    label-for="email"
                    label-text-align="center">
        <b-form-input id="email"
                      class="profile-input"
                      type="email"
                      v-model.trim="form.email"
                      :state="form.email.length > 0 ? validateEmail : null"
                      placeholder="Enter new email">
        </b-form-input>
      </b-form-group>

      <b-form-group id="passwordGroup"
                    horizontal
                    label="Password"
                    label-for="password"
                    label-text-align="center">
        <b-form-input id="password"
                      v-model.trim="form.password"
                      :state="form.password.length > 0 ? validatePassword : null"
                      type="password"
                      placeholder="Enter new password" class="profile-input">
        </b-form-input>
      </b-form-group>
      <b-button  @click="modalShow = true" class="profile-save">Save/Edit</b-button>
      <b-modal v-model="modalShow" centered title="Reauthenticate User" id="myModal">
        <b-form  @submit.stop.prevent="reauth">
          <b-form-group id="relogEmailGroup"
                        horizontal
                        label="Email"
                        label-for="re-email"
                        label-text-align="center">
            <b-form-input id="re-email"
                          class="profile-input"
                          type="email"
                          v-model.trim="relog_form.email"
                          :state="relog_form.email.length > 0 ? validateEmail : null"
                          placeholder="Enter your current email">
            </b-form-input>
          </b-form-group>
          <b-form-group id="relogPasswordGroup"
                    horizontal
                    label="Password"
                    label-for="re-password"
                    label-text-align="center">
            <b-form-input id="re-password"
                          v-model.trim="relog_form.password"
                          :state="relog_form.password.length > 0 ? validatePassword : null"
                          type="password"
                          placeholder="Re-enter your current password" class="profile-input">
            </b-form-input>
          </b-form-group>

        </b-form>
        <div slot="modal-footer" class="w-100">
        <b-btn size="md" class="float-right" variant="primary" style="margin-left: 1vw" @click="reauth()">
          Relog
        </b-btn>
         <b-btn size="md" class="float-right" @click="hideModal" variant="warning">
           Cancel
         </b-btn>

       </div>
      </b-modal>
    </b-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import * as Firebase from 'firebase';
import firebase from '@/config/firebaseinit.ts';
export default Vue.extend({
  data() {
    return {
      modalShow: false,
      relog_form: {
        email: '',
        password: ''
      },
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
    hideModal () {
      this.modalShow = false;
    },
    reauth() {
      const user = firebase.auth().currentUser;
      const credential = Firebase.auth.EmailAuthProvider.credential(
          this.relog_form.email,
          this.relog_form.password
      );
      const self = this;
      user!.reauthenticateAndRetrieveDataWithCredential(credential).then(function(data) {
        self.onSave();
        self.modalShow = false;
      }).catch(function(error) {
        console.log(error);
      });
    },
    onSave() {
      console.log('starting save');
      const self = this;
      const user = firebase.auth().currentUser;
      if (this.form.email && this.form.email !== user!.email) {
        user!
          .updateEmail(this.form.email)
          .then(() => {
            // Update successful
            console.log('email updated');
            firebase
              .database()
              .ref('Users/' + self.$store.state.user.uid).update({
                UserEmail: self.form.email
              });
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

            firebase
              .database()
              .ref('Users/' + self.$store.state.user.uid).update({
                UserName: self.form.username
              });
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
.profile {
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
  right: 40vw;
}
</style>

