<template>
  <div>
    <v-textarea
      outlined
      name="input-7-4"
      label="Enter Todo!"
      v-model="cont"
    ></v-textarea>
    <v-col class="text-right">
      <v-btn @click="submitList" color="indigo lighten-5">submit</v-btn>
    </v-col>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import timeStamp from "../mixin/countTime";

export default {
  data() {
    return {
      date: null,
      cont: null,
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    submitList() {
      let todo = {
        date: `${timeStamp().year} / ${timeStamp().month} / ${
          timeStamp().date
        }`,
        cont: this.cont,
        isDone: false,
        time: timeStamp().time,
      };
      this.addTodo(todo);
      this.cont = null;
    },
  },
};
</script>