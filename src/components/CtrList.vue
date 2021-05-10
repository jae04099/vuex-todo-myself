<template>
  <v-col class="text-right">
    <v-btn v-if="memo[index].isDone" @click="changeNow" icon color="gray">
      <v-icon>mdi-refresh</v-icon>
    </v-btn>
    <v-btn v-else @click="changeNow" icon color="blue">
      <v-icon>mdi-check-bold</v-icon>
    </v-btn>
    <v-btn icon color="green" @click="removeTodo">
      <v-icon>mdi-bucket</v-icon>
    </v-btn>
  </v-col>
</template>
<script>
import { mapMutations, mapState } from "vuex";

export default {
  props: ["index"],
  computed: {
    ...mapState(["memo"]),
  },
  methods: {
    ...mapMutations(["changeState", "removeTodo"]),
    changeNow() {
      this.changeState(this.index);
    },
    removeNow(){
      this.removeTodo(this.index)
    }
  },
};
</script>