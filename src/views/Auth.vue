<template>
  <div class="auth">
    <sign-up @verify="awaitVerify" v-if="!isSignedUp"></sign-up>
    <confirmation v-if="isSignedUp"></confirmation>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SignUp from '@/components/SignUp.vue';
import Confirmation from '@/components/Confirmation.vue'

export default Vue.extend({
  name: 'Auth',
  components: {
    SignUp,
    Confirmation
  },
  data() {
    return {
      isSignedUp: false,
    };
  },
  methods: {
    awaitVerify(): void {
      this.isSignedUp = true;
    }
  }
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
