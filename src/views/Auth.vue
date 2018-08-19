<template>
  <div class="auth">
    <sign-up></sign-up>
  </div>
</template>

<script lang="ts">
declare var require: any;
import Vue from 'vue';
import SignUp from '@/components/SignUp.vue';
import Confirmation from '@/components/Confirmation.vue'

export default Vue.extend({
  name: 'Auth',
  components: {
    SignUp,
    Confirmation
  },
  props: {
    msg: String,
  },
});
</script>

<style scoped lang="scss">
.auth {
  height: 100vh;
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
}
</style>
