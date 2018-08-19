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
                      placeholder="Enter password">
        </b-form-input>
      </b-form-group>
      <b-button type="submit" class="center-it">Get started now</b-button>
    </b-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SignUp',
  data() {
    return {
      form: {
        email: '',
        name: '',
        password: '',
      },
    };
  },
  computed: {
    validateEmail() : Boolean {
      const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let result = false;
      if (emailReg.test(this.form.email)) {
        result = true;
      }
      if (this.form.email.length === 0) {
        result = true;
      }
      return result;
    }
  },
  methods: {
    onSubmit(evt : any) : void {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
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
