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
                      placeholder="Enter code"
                      :disabled="form.code.length > 3">
        </b-form-input>
      </b-form-group>
    </b-form>
  </div>
</template>

<script lang="ts">
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
  watch: {
    form: {
      handler(val) {
        if (this.form.code.length > 3) {
          this.codeSubmitted(this.form.code);
        }
      },
      deep: true
    }
  },
  methods: {
    codeSubmitted(code : String): void {
      console.log('submitted', code);
      this.$router.push('/join');
    },
    codeInputted(): void {
      if (this.form.code.length > 4) {
        this.form.code = '0';
      }
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
}
</style>
