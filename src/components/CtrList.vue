<template>
  <v-col class="text-right">
    <v-btn @click="changeState" icon color="pink">
      <v-icon>mdi-heart</v-icon>
    </v-btn>
    <v-btn icon color="green">
      <v-icon>mdi-bucket</v-icon>
    </v-btn>
  </v-col>
</template>
<script>
import { mapMutations } from "vuex";

export default {
    methods: {
        ...mapMutations(["ctrDone"]),
        changeState(){
            // this.ctrDone()
            console.log('j')

        }
    }
}
</script>