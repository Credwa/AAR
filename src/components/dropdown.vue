<template>
  <ul style="">

  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    items: {
      type: Array,
      required: true
    }
  }
});
</script>


<style lang="scss" scoped>
</style>
