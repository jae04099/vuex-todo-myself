import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    memo: [
      { date: '2017, 07, 03', cont: 'this is our first memo', isDone: false, time: '' },
    ]
  },
  mutations: {
    addTodo(state, payload) {
      state.memo.push(payload)
    },
    ctrDone(state, payload){
      state.memo.isDone = !state.memo.isDone
    }
  },
  actions: {
    addTodo({context}, payload){
      this.commit('addTodo', payload)
    }
  },
  modules: {
  }
})

// action에서는 mutation으로 commit을 행함으로써 간접적으로 상태를 변경. 
// actions을 호출하기 위한 dispatch 메소드는 promise를 반환

// App.vue 에서 mutations를 이용
// this.$store.commit('addCounter')
// App.vue 에서 actions를 이용
// this.$store.dispatch('addCounter')

//App.vue에서 dispatch -> vuex의 actions -> actions에서 commit해 mutations로 -> 드디어 mutations에서 state 변경.

// methods == actions, mutations // 데이터가 수시로 업데이트 될 때 
// computed == getters // 데이터가 자주 변동되지 않을 때