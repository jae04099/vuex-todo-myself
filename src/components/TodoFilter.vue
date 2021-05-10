<template>
  <v-col class="d-flex" cols="12" sm="3">
    <v-select @change="sortTodos" :items="filterKind" label="정렬" outlined></v-select>
  </v-col>
</template>
<script>
import {mapState, mapMutations} from 'vuex'

export default {
    computed: {
        ...mapState(['filterKind'])
    },
    methods: {
        ...mapMutations(['sortAllItem']),
        sortTodos(prop){
            this.sortAllItem(prop)
        }
    }
}
</script>