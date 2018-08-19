<template>
  <div>
    <b-form class="confirm" @submit.stop.prevent="onSubmit">
      <b-form-group id="ccodeGroup"
                    label="ENTER CONFIRMATION CODE"
                    maxlength="4"
                    label-for="ccode"
                    label-text-align="center">
        <b-form-input id="ccode"
                      type="text"
                      @input="codeInputted"
                      v-model.trim="form.code"
                      required
                      placeholder="Enter code">
        </b-form-input>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
import Vue from 'vue';
import firebase from '@/config/firebaseinit.ts';

export default Vue.extend({
  name: 'Auth',
  components: {},
  data() {
    return {
      form: {
        code: ''
      }
    };
  },
  methods: {
    codeInputted () {
      if (this.form.code.length >= 5) {
        this.form.code = this.form.code.substring(0,4);
      }
    }
  },
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
}
</style>
