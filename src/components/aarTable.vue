<template>
  <div>
    <b-table class="table" striped hover :items="aars" :fields="fields" :show-empty="true" :empty-text="emptyText"
    @row-clicked="rowClicked"></b-table>
  </div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'aar-table',
  props: {
    trigger: {
      required: true,
      type: Number
    },
    aars: {
      required: true,
      type: Array
    },
    emptyText: {
      required: true,
      type: String
    }
  },
  data() {
    return {
      fields: [
        { key: 'Title', sortable: true },
        { key: 'RelatedTo', sortable: true },
        { key: 'CreatedBy', sortable: true },
        { key: 'DateCreated', sortable: true },
        { key: 'Impact', sortable: true }
      ]
    };
  },
  methods: {
    rowClicked(data) {
      this.$root.$emit('bv::show::modal', 'aarModal');
      if (this.trigger === 0) {
        this.$root.newModalData = { mode: 'edit', ...data };
      } else if (this.trigger === 1) {
        this.$root.newModalData = { mode: 'share', ...data };
      } else {
        this.$root.newModalData = null;
      }
    }
  }
});
</script>