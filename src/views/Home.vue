<template>
  <div class="home">
    <b-card no-body border-variant="light">
      <b-tabs pills card>
        <b-tab class="tab-h" no-body title="My Aars" active >
          <aar-table :trigger="0" :aars="myAars"
          emptyText="Aar list of aars I have created and saved <br> <br>
          Individual Aar item"/>
        </b-tab>
        <b-tab no-body title="Shared with me">
          <aar-table :trigger="1" :aars="items" emptyText="Aar list of aars others have shared with me and I have not saved my aars <br> <br>
          Aar item shared with me"/>
        </b-tab>
        <b-tab no-body title="Most influential">
          <aar-table :trigger="1" :aars="items" emptyText="Aar list of aars which have been shared the most"/>
        </b-tab>
      </b-tabs>
      <aar-modal/>
    </b-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AarModal from '@/components/newAarModal.vue';
import AarTable from '@/components/aarTable.vue';
import firebase from '@/config/firebaseinit.ts';

export default Vue.extend({
  name: 'home',
  components: {
    AarModal,
    AarTable
  },
  data() {
    return {
      items: []
    };
  },
  computed: {
    myAars(): Array<Object> {
      return this.$store.state.teamAars
        .filter(aar => aar.Creator === this.$store.state.user.uid)
        .map(obj => {
          return {
            isActive: false,
            Title: obj.Title,
            RelatedTo: obj.RelatedTo,
            CreatedBy: 'me',
            DateCreated: obj.DateCreated,
            Impact: obj.Impact,
            DateOfAAR: obj.DateOfAAR,
            WhatShouldHaveHappenedText: obj.WhatShouldHaveHappenedText,
            WhatNeedsToKnow: obj.WhatNeedsToKnow,
            WhatActuallyHappenedText: obj.WhatActuallyHappenedText,
            WhatWasLearnt: obj.WhatWasLearnt
          };
        });
    }
  },
  methods: {
    async getUserByUID(uid: any): Promise<Object> {
      let data = await firebase
        .database()
        .ref('Users/' + uid)
        .once('value');
      return data;
    },
    getTeamUsers(): void {
      firebase
        .database()
        .ref('Teams/' + this.$store.state.user.TeamUID + '/TeamMembers')
        .once('value')
        .then(snapshot => {
          Object.values(snapshot.val()).forEach(val => {
            // check if val not equal to yourself
            if (val !== this.$store.state.user.uid) {
              this.getUserByUID(val).then(snap => {
                this.$store.commit('newUser', snap.val());
              });
            }
          });
          // listen for new team members
          firebase
            .database()
            .ref('Teams/' + this.$store.state.user.TeamUID + '/TeamMembers')
            .on('child_added', snapshot => {
              this.getUserByUID(Object.values(snapshot!.val()[0])).then(
                snap => {
                  this.$store.commit('newUser', snap.val());
                }
              );
            });
        });
    },
    getTeamAars(): void {
      // Get everything exisitng on load
      // listen for new aar items
      firebase
        .database()
        .ref('AAR Item')
        .orderByChild('Team')
        .equalTo(this.$store.state.user.TeamUID)
        .on('child_added', snapshot => {
          this.$store.commit('newAar', {
            key: snapshot!.key,
            ...snapshot!.val()
          });
        });
    },
    init(): void {
      // get all team aars
      this.getTeamUsers();
      this.getTeamAars();
    }
  },
  created() {
    this.init();
  }
});
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: center;
  height: 100vh;
}

.card-header {
  background-color: red !important;
}

.tab-h {
  max-height: 80vh;
  overflow-y: scroll;
}
</style>

