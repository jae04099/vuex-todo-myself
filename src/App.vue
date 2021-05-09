<template>
<v-app>
<v-container>
 <Header />
  <v-layout class="row wrap">
  <v-flex xs6 pa-2>
      <TodoList />
    </v-flex>
    <v-flex xs6 pa-2>
     <EnterList />
    </v-flex>
    </v-layout>
</v-container>
</v-app>
</template>

<script>
import Header from "./components/Header";
import EnterList from "./components/EnterList";
import TodoList from "./components/TodoList";

export default {
  name: "App",
  components: {Header, EnterList, TodoList},
  data: () => ({
    //
  }),
};
</script>
<style>

</style>
