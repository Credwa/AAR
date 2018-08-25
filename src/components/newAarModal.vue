<template>
<div>
  <b-btn class="aarBtn" v-b-modal.aarModal>New Aar</b-btn>
  <b-modal @shown="modalOpen" id="aarModal" centered size="lg" :hide-footer="true" :hide-header="true" ref="aarModal">
    <b-container fluid>
      <b-form v-if="!sharing">
        <b-form-group label="Title"
                      label-for="titleInput"
                      id="titleGroupInput">
          <b-form-input id="titleInput"
                        type="text"
                        v-model="form.Title"
                        required
                        placeholder="Enter Title"/>
        </b-form-group>
        <b-form-group label="Related To"
                      label-for="relatedInput"
                      id="relatedGroupInput"
                      horizontal>
          <b-form-input id="relatedInput"
                        type="search"
                        v-model="form.Related"
                        placeholder="Search"/>
        </b-form-group>
        <b-form-group label="Date of Aar"
                      label-for="dateInput"
                      id="dateGroupInput"
                      horizontal>
          <b-form-input id="dateInput"
                        type="date"
                        v-model="form.Date"
                        required
                        />
        </b-form-group>
        <b-form-group label="What should have happened?"
                      label-for="WhatShouldHaveHappenedTextInput"
                      id="WhatShouldHaveHappenedTextGroupInput">
          <b-form-textarea id="WhatShouldHaveHappenedTextInput"
                        type="text"
                        :rows="2"
                        v-model="form.WhatShouldHaveHappenedText"
                        required
                        placeholder="Enter what should have happened"/>
        </b-form-group>
        <b-form-group label="What actually happened?"
                      label-for="WhatActuallyHappenedTextInput"
                      id="WhatActuallyHappenedTextGroupInput">
          <b-form-textarea id="WhatActuallyHappenedTextInput"
                        type="text"
                        :rows="2"
                        v-model="form.WhatActuallyHappenedText"
                        required
                        placeholder="Enter what actually happened"/>
        </b-form-group>
        <b-form-group label="What was learnt"
                      label-for="WhatWasLearnTextInput"
                      id="WhatWasLearntTextGroupInput">
          <b-form-input id="WhatWasLearntTextInput"
                        type="text"
                        @keyup.native.enter="newLearntItem"
                        v-model="WhatWasLearntText"
                        placeholder="Enter what was learnt"/>
        </b-form-group>
        <b-form-group label="What needs to know"
                      label-for="WhatActuallyHappenedTextInput"
                      id="WhatActuallyHappenedTextGroupInput">
          <b-form-input id="WhatNeedsToKnowTextInput"
                        type="text"
                        v-model="form.WhatNeedsToKnowText"
                        placeholder="Enter what needs to know"/>
        </b-form-group>

        <div slot="modal-footer" class="flex-center">
         <b-btn class="" variant="danger" style="margin-right: 5px;" @click="cancel">
           Cancel
         </b-btn>
        <b-btn class="" variant="primary" @click="mode && mode === 'edit' ? edit() : mode && mode === 'share' ? share() : save()">
           {{mode === 'edit' ? 'Edit' : mode === 'share' ? 'Share' : 'Save'}}
         </b-btn>
       </div>
      </b-form>
      <share v-if="sharing" :uid="key"></share>
    </b-container>
  </b-modal>
</div>

</template>

<script>
import Vue from 'vue';
import firebase from '@/config/firebaseinit.ts';
import Share from '@/components/Share.vue';
export default Vue.extend({
  components: {
    Share
  },
  data() {
    return {
      WhatWasLearntText: '',
      mode: null,
      key: null,
      sharing: false,
      form: {
        Title: '',
        Related: '',
        Date: null,
        WhatShouldHaveHappenedText: '',
        WhatActuallyHappenedText: '',
        WhatWasLearnt: new Array(),
        WhatNeedsToKnowText: ''
      }
    };
  },
  methods: {
    modalOpen() {
      if (this.$root.newModalData) {
        let data = this.$root.newModalData;
        this.mode = data.mode;
        this.key = data.key;
        this.$root.newModalData = {};
        this.form.Title = data.Title;
        this.form.Related = data.RelatedTo;
        this.form.Date = data.DateOfAAR;
        this.form.WhatShouldHaveHappenedText = data.WhatShouldHaveHappenedText;
        this.form.WhatActuallyHappenedText = data.WhatActuallyHappenedText;
        this.form.WhatNeedsToKnowText = data.WhatNeedsToKnowText;
        this.form.WhatWasLearnt = data.WhatWasLearnt;
      }
    },
    newLearntItem() {
      this.form.WhatWasLearnt.push(this.WhatWasLearntText);
      this.WhatWasLearntText = '';
    },
    save() {
      const date = new Date();
      let data = {
        Title: this.form.Title,
        Creator: this.$store.state.user.uid,
        RelatedTo: this.form.Related || null,
        DateCreated: `${date.toDateString()} ${date.getUTCHours()}:${date.getUTCMinutes()}`,
        DateOfAAR: this.form.Date || null,
        WhatShouldHaveHappenedText: this.form.WhatShouldHaveHappenedText || null,
        WhatActuallyHappenedText: this.form.WhatShouldHaveHappenedText || null,
        WhatWasLearnt: this.form.WhatWasLearnt || null,
        WhatNeedsToKnow: this.form.WhatNeedsToKnowText || null,
        SharedWith: [0],
        Impact: 0,
        Team: this.$store.state.user.TeamUID
      };
      firebase
        .database()
        .ref('AAR Item')
        .push(data)
        .then(() => {
          this.resetForm();
          this.hideModal();
        });
    },
    edit(){
      firebase
        .database()
        .ref('AAR Item/' + this.key)
        .update({
          Title: this.form.Title,
          RelatedTo: this.form.Related || null,
          DateOfAAR: this.form.Date || null,
          WhatShouldHaveHappenedText: this.form.WhatShouldHaveHappenedText || null,
          WhatActuallyHappenedText: this.form.WhatShouldHaveHappenedText || null,
          WhatWasLearnt: this.form.WhatWasLearnt || null,
          WhatNeedsToKnow: this.form.WhatNeedsToKnowText || null
        }).then(() => {
          this.resetForm();
          this.hideModal();
        })
    },
    share() {
      this.sharing = true;
    },
    cancel(){
      this.resetForm();
      this.hideModal();
    },
    resetForm(){
      this.form.Title = '';
      this.form.Related = '';
      this.form.Date = null;
      this.form.WhatShouldHaveHappenedText = '';
      this.form.WhatActuallyHappenedText = '';
      this.form.WhatWasLearnt = [];
      this.form.WhatNeedsToKnowText = '';
    },
    hideModal() {
      this.$refs.aarModal.hide();
    },
    showModal(){
      this.$refs.aarModal.show();
    }
  }
});
</script>

<style lang="scss" scoped>
.aarBtn {
  width: 80vw;
}
</style>


