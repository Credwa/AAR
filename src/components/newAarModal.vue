<template>
<div>
  <b-btn class="aarBtn" v-b-modal.aarModal>New Aar</b-btn>
  <b-modal @shown="modalOpen" @hidden="modalClosed" id="aarModal" centered size="lg" :hide-footer="true" :hide-header="true" ref="aarModal">
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
          <v-select v-model="form.Related" :options="teamAarTitles">
                <span slot="no-options">
                  Whoops! Can't find any Aars!
                </span>
          </v-select>
        </b-form-group>
        <b-form-group label="Date of Aar"
                      label-for="dateInput"
                      id="dateGroupInput"
                      horizontal
                      >
          <b-form-input id="dateInput"
                        type="date"
                        style="width:20vw"
                        v-model="form.Date"
                        />
        </b-form-group>
        <b-form-group label="What should have happened?"
                      label-for="WhatShouldHaveHappenedTextInput"
                      id="WhatShouldHaveHappenedTextGroupInput">
          <b-form-textarea id="WhatShouldHaveHappenedTextInput"
                        type="text"
                        :rows="2"
                        v-model="form.WhatShouldHaveHappenedText"
                        placeholder="Enter what should have happened"/>
        </b-form-group>
        <b-form-group label="What actually happened?"
                      label-for="WhatActuallyHappenedTextInput"
                      id="WhatActuallyHappenedTextGroupInput">
          <b-form-textarea id="WhatActuallyHappenedTextInput"
                        type="text"
                        :rows="2"
                        v-model="form.WhatActuallyHappenedText"
                        placeholder="Enter what actually happened"/>
        </b-form-group>
        <b-form-group label="What was learnt"
                      label-for="WhatWasLearnTextInput"
                      id="WhatWasLearntTextGroupInput">
          <div style="display: flex; ">
          <b-form-input id="WhatWasLearntTextInput"
                        type="text"
                        @keyup.native.enter="newLearntItem"
                        v-model="WhatWasLearntText"
                        placeholder="Enter what was learnt"/>
                        <b-btn @click="newLearntItem" class="add_learnt">+</b-btn>
          </div>
        </b-form-group>
        <b-form-group label="Who needs to know"
                      label-for="WhoNeedsToKnowTextInput"
                      id="WhoNeedsToKnowTextGroupInput">
          <v-select multiple v-model="form.SharedWith" :options="teamUsers">
                <span slot="no-options">
                  Whoops! Cant't find any members!
                </span>
          </v-select>
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
      <share v-if="sharing" :uid="key" :form="form"></share>
    </b-container>
  </b-modal>
</div>

</template>

<script>
import Vue from 'vue';
import VSelect from 'vue-select';
import firebase from '@/config/firebaseinit.ts';
import Share from '@/components/Share.vue';
export default Vue.extend({
  components: {
    Share,
    VSelect
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
        WhatWasLearnt: 'test',
        SharedWith: []
      }
    };
  },
  computed: {
    teamUsers() {
      return this.$store.state.teamUsers.map(user => {
        return user.uid !== this.$store.state.user.uid
          ? { label: user.UserEmail, uid: user.uid }
          : false;
      });
    },
    teamAarTitles() {
      return this.$store.state.teamAars.map(aar => aar.Title);
    }
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
        this.form.WhatWasLearnt = data.WhatWasLearnt;
        if (data.SharedWith) {
          this.form.SharedWith = data.SharedWith.filter(
            uid => uid !== this.$store.state.user.uid
          )
            .map(uid =>
              this.$store.state.teamUsers.find(user => user.uid === uid)
            )
            .map(user => {
              return { label: user.UserEmail, uid: user.uid };
            });
        }
      }
    },
    modalClosed() {
      this.sharing = false;
      this.resetForm();
    },
    newLearntItem() {
      if (this.WhatWasLearntText.length > 0) {
        if (!this.form.WhatWasLearnt) {
          this.form.WhatWasLearnt = [];
        }
        this.form.WhatWasLearnt.push(this.WhatWasLearntText);
        console.log(this.form.WhatWasLearnt);
        this.WhatWasLearntText = '';
      }
    },
    save() {
      const date = new Date();
      console.log(this.form.SharedWith.length);
      let data = {
        Title: this.form.Title,
        Creator: this.$store.state.user.uid,
        RelatedTo: this.form.Related || null,
        DateCreated: `${date.toDateString()} ${date.getUTCHours()}:${date.getUTCMinutes()}`,
        DateOfAAR: this.form.Date || null,
        WhatShouldHaveHappenedText:
          this.form.WhatShouldHaveHappenedText || null,
        WhatActuallyHappenedText: this.form.WhatActuallyHappenedText || null,
        WhatWasLearnt: this.form.WhatWasLearnt || null,
        SharedWith: this.form.SharedWith.map(user => user.uid),
        Impact: 0,
        Team: this.$store.state.user.TeamUID
      };
      // console.log(data.SharedWith)
      if (data.SharedWith.length === 0) {
        data.SharedWith = [0];
      }
      firebase
        .database()
        .ref('AAR Item')
        .push(data)
        .then(() => {
          this.resetForm();
          this.hideModal();
        });
    },
    edit() {
      firebase
        .database()
        .ref('AAR Item/' + this.key)
        .update({
          Title: this.form.Title,
          RelatedTo: this.form.Related || null,
          DateOfAAR: this.form.Date || null,
          WhatShouldHaveHappenedText:
            this.form.WhatShouldHaveHappenedText || null,
          WhatActuallyHappenedText: this.form.WhatActuallyHappenedText || null,
          WhatWasLearnt: this.form.WhatWasLearnt || null,
          SharedWith: this.form.SharedWith.map(user => user.uid)
        })
        .then(() => {
          this.resetForm();
          this.hideModal();
        });
    },
    share() {
      this.sharing = true;
    },
    cancel() {
      this.resetForm();
      this.hideModal();
    },
    resetForm() {
      this.form.Title = '';
      this.form.Related = '';
      this.form.Date = null;
      this.form.WhatShouldHaveHappenedText = '';
      this.form.WhatActuallyHappenedText = '';
      this.form.WhatWasLearnt = [];
      this.form.SharedWith = [];
    },
    hideModal() {
      this.$refs.aarModal.hide();
    },
    showModal() {
      this.$refs.aarModal.show();
    }
  }
});
</script>

<style lang="scss" scoped>
.aarBtn {
  width: 100%;
}

.dropdown-input {
  width: 48vw;
  margin-left: -1vh;
}

.add_learnt {
  border-radius: 50px;
  margin-left: 1vw;
}
</style>


