<template>
  <div>
    <v-card
      v-for="(list, index) in this.memo"
      :key="index"
      class="mx-auto mb-3 indigo lighten-5"
      max-width="600"
      tile
    >
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title>{{ list.date }}</v-list-item-title>
          <v-list-item-subtitle>
            {{ list.cont }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
        <CtrList />
    </v-card>
  </div>
</template>
<script>
import { mapState } from "vuex";
import CtrList from "../components/CtrList";

export default {
  components: {
    CtrList
  },
  computed: {
    ...mapState(["memo"]),
  },
};
</script>

