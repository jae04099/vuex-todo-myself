<template>
  <div>
    <v-card
      v-for="(list, index) in this.memo"
      :key="index"
      :class="[memo[index].isDone ? 'pink lighten-5' : 'indigo lighten-5']"
      class="mx-auto mb-3"
      max-width="600"
      tile
    >
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title>{{ list.date }}</v-list-item-title>
          <v-list-item-subtitle :class="{ done: memo[index].isDone == true }">
            {{ list.cont }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <CtrList :index="index" />
    </v-card>
  </div>
</template>
<script>
import { mapState } from "vuex";
import CtrList from "../components/CtrList";

export default {
  data() {
    return {
      selectedIndex: "",
    };
  },
  methods: {
  },
  components: {
    CtrList,
  },
  computed: {
    ...mapState(["memo"]),
  },
};
</script>
<style scoped>
.done {
  text-decoration: line-through
}
</style>
