<template>
  <div class="home">
    <b-btn class="signOut" variant="danger" @click="signOut">Sign Out</b-btn>
    <b-card no-body border-variant="light" style="width:90vw">
      <b-tabs pills card>
        <b-tab class="tab-h" no-body title="My Aars" active >
          <aar-table :trigger="0" :aars="myAars"
          emptyText="Aar list of aars I have created and saved <br> <br>
          Individual Aar item"/>
        </b-tab>
        <b-tab class="tab-h" no-body title="Shared with me">
          <aar-table :trigger="1" :aars="sharedAars" emptyText="Aar list of aars others have shared with me and I have not saved my aars <br> <br>
          Aar item shared with me"/>
        </b-tab>
        <b-tab class="tab-h" no-body title="Most influential">
          <aar-table :trigger="1" :aars="influentialAars" emptyText="Aar list of aars which have been shared the most"/>
        </b-tab>
      </b-tabs>
      <aar-modal/>
    </b-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import _ from 'underscore';

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
      return _.uniq(
        this.$store.state.teamAars
          .filter((aar: any) => aar.Creator === this.$store.state.user.uid)
          .map((obj: any) => {
            return {
              isActive: false,
              Title: obj.Title,
              RelatedTo: obj.RelatedTo,
              CreatedBy: this.getUserByUIDFromStore(obj.Creator),
              DateCreated: obj.DateCreated,
              Impact: obj.Impact,
              DateOfAAR: obj.DateOfAAR,
              WhatShouldHaveHappenedText: obj.WhatShouldHaveHappenedText,
              WhatNeedsToKnow: obj.WhatNeedsToKnow,
              WhatActuallyHappenedText: obj.WhatActuallyHappenedText,
              WhatWasLearnt: obj.WhatWasLearnt,
              key: obj.key,
              SharedWith: obj.SharedWith
            };
          }),
        false,
        (aar: any) => aar.key
      );
    },
    sharedAars(): Array<Object> {
      return _.uniq(
        this.$store.state.teamAars
          .filter((aar: any) => {
            if (aar.Creator === this.$store.state.user.uid) {
              return false;
            } else {
              if (aar.SharedWith) {
                return aar.SharedWith.find((val: any) => {
                  return val === this.$store.state.user.uid;
                });
              }
            }
          })
          .map((obj: any) => {
            return {
              isActive: false,
              Title: obj.Title,
              RelatedTo: obj.RelatedTo,
              DateCreated: obj.DateCreated,
              CreatedBy: this.getUserByUIDFromStore(obj.Creator),
              Impact: obj.Impact,
              DateOfAAR: obj.DateOfAAR,
              WhatShouldHaveHappenedText: obj.WhatShouldHaveHappenedText,
              WhatNeedsToKnow: obj.WhatNeedsToKnow,
              WhatActuallyHappenedText: obj.WhatActuallyHappenedText,
              WhatWasLearnt: obj.WhatWasLearnt,
              key: obj.key,
              SharedWith: obj.SharedWith
            };
          }),
        false,
        (aar: any) => aar.key
      );
    },
    influentialAars(): Array<Object> {
      return _.uniq(
        this.$store.state.teamAars
          .sort((a: any, b: any) => {
            if (a.SharedWith && b.SharedWith) {
              return a.SharedWith.length > b.SharedWith.length
                ? 1
                : b.SharedWith.length > a.SharedWith.length ? -1 : 0;
            }
          })
          .map((obj: any) => {
            return {
              isActive: false,
              Title: obj.Title,
              RelatedTo: obj.RelatedTo,
              DateCreated: obj.DateCreated,
              CreatedBy: this.getUserByUIDFromStore(obj.Creator),
              Impact: obj.Impact,
              DateOfAAR: obj.DateOfAAR,
              WhatShouldHaveHappenedText: obj.WhatShouldHaveHappenedText,
              WhatNeedsToKnow: obj.WhatNeedsToKnow,
              WhatActuallyHappenedText: obj.WhatActuallyHappenedText,
              WhatWasLearnt: obj.WhatWasLearnt,
              key: obj.key,
              SharedWith: obj.SharedWith
            };
          })
          .reverse(),
        false,
        (aar: any) => aar.key
      );
    }
  },
  methods: {
    async getUserByUID(uid: String): Promise<Object> {
      const data = await firebase
        .database()
        .ref('Users/' + uid)
        .once('value');
      return data;
    },
    signOut(): void {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push('/login');
        });
    },
    getUserByUIDFromStore(uid: String): String {
      if (uid === this.$store.state.user.uid) {
        return this.$store.state.user.UserEmail;
      } else {
        const users = this.$store.state.teamUsers;
        let userEmail = '';
        users.forEach((user: any) => {
          if (user.uid === uid) {
            userEmail = user.UserEmail;
          }
        });
        return userEmail;
      }
    },
   getTeamUsers(): void {
      firebase
        .database()
        .ref('Teams/' + this.$store.state.user.TeamUID + '/TeamMembers')
        .on('child_added', (snapshot: any) => {
          // check if val not equal to yourself
          if (snapshot && snapshot.val() !== this.$store.state.user.uid) {
            this.getUserByUID(snapshot.val()).then((snap: any) => {
              this.$store.commit('newUser', {
                uid: snap.key,
                UserEmail: snap.val().UserEmail,
                TeamUID: snap.val().TeamUID
              });
            });
          }
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
        .on('child_added', (snapshot: any) => {
          this.$store.commit('newAar', {
            key: snapshot!.key,
            ...snapshot!.val()
          });
        });
    },
    init(): void {
      firebase
        .database()
        .ref('AAR Item')
        .orderByChild('Team')
        .equalTo(this.$store.state.user.TeamUID)
        .on('child_changed', (snapshot: any) => {
          this.$store.commit('updateAar', {key: snapshot.key, data: snapshot.val()});
        });
      firebase
        .database()
        .ref('AAR Item')
        .orderByChild('Team')
        .equalTo(this.$store.state.user.TeamUID)
        .on('child_removed', (snapshot: any) => {
          this.$store.commit('removeAar', snapshot.key);
        });
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

.signOut {
  position: absolute;
  top: 5vh;
  right: 10vh;
}

.card-header {
  background-color: red !important;
}

.tab-h {
  max-height: 80vh;
  overflow-y: scroll;
}
</style>

